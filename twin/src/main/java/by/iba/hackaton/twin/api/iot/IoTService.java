package by.iba.hackaton.twin.api.iot;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URISyntaxException;
import java.text.MessageFormat;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import com.sap.core.connectivity.api.DestinationException;
import com.sap.core.connectivity.api.http.HttpDestination;



@Path("/iot")
@Produces({ MediaType.APPLICATION_JSON })
public class IoTService 
{
	
	private static final int COPY_CONTENT_BUFFER_SIZE = 1024;
	
	private static HttpClient httpClient = null;
    private static HttpDestination destination = null;
	
	@GET
	@Path("/devices/{id}/measures")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response getMeasuresForDevice(@PathParam(value = "id") String deviceId)
	{
            
       String destinationURL = null;
            
       if (deviceId != null && deviceId.trim().length() > 0) {
    	   destinationURL = MessageFormat.format("{0}/devices/{1}/measures?orderby=timestamp&skip=0&top=100", getBaseURL(), deviceId);

       } 
       
       return doGet(destinationURL);
            
    }


	private String getBaseURL() {
		
		String baseURL = null;
		
		try {
			baseURL = getIoTDestination().getURI().toString();
		} catch (URISyntaxException | NamingException e) {
			System.out.println(e.getLocalizedMessage());
		}
		   
		return baseURL;
	}
	
	
	@GET
	@Path("/devices/{id}")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response getDeviceInfo(@PathParam(value = "id") String deviceId)
	{
		String destinationURL = null;

		if (deviceId != null && deviceId.trim().length() > 0) {
			destinationURL = MessageFormat.format("{0}/devices/{1}", getBaseURL(), deviceId);

		} 
            
		return doGet(destinationURL);     
    }
	
	@GET
	@Path("/devices")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response getDevices()
	{
		String destinationURL = getBaseURL() + "/devices";

		return doGet(destinationURL);     
    }
	
	
	@POST
	@Path("/devices")
	@Produces({ MediaType.APPLICATION_JSON })
	public String createDeviceAndSensor(@FormParam(value = "deviceName") String deviceNodeId){
		
	    String responseBody = null;
	    String requestJsonBody = null;
	    
        try {
            
            final String baseURL = getIoTDestination().getURI().toString();
            String destinationURL = baseURL + "/devices";
            
            if (deviceNodeId != null && deviceNodeId.trim().length() > 0) {
            	
            	requestJsonBody = IoTRequest.getJSONForDeviceCreation(deviceNodeId);
            } 

            HttpResponse httpResponse = doPost(destinationURL, requestJsonBody);
            
            // Check response status code
            int statusCode = httpResponse.getStatusLine().getStatusCode();
            // copy content from the incoming response to the outgoing response
            HttpEntity responseEntity = null;
            
            if (httpResponse != null) {
            	responseEntity = httpResponse.getEntity();
            }
            
            responseBody = getResponseBodyasString(responseEntity);
            
            if (statusCode == HttpServletResponse.SC_OK) {
                System.out.println(Response.ok(responseBody).build().toString());
                
                JSONParser parser = new JSONParser();
                JSONObject json = (JSONObject)parser.parse(responseBody);
                
                String deviceId = (String) json.get("id");
                
                destinationURL = baseURL + "/sensors";
                requestJsonBody = IoTRequest.getJSONForSensorCreation(deviceNodeId, deviceId);
                httpResponse = doPost(destinationURL, requestJsonBody);
                statusCode = httpResponse.getStatusLine().getStatusCode();
                if (httpResponse != null) {
                	responseEntity = httpResponse.getEntity();
                }
                responseBody = getResponseBodyasString(responseEntity);
                
                return responseBody;
            }
            else {
            	System.out.println(Response.status(statusCode).entity(responseBody).build().toString());
            }


        } 
        catch (NamingException e) {
            // Lookup of destination failed
            String errorMessage = "Lookup of destination failed with reason: " + e.getLocalizedMessage();
            responseBody = errorMessage;
        } 
        catch (Exception e) {
            // Connectivity operation failed
            String errorMessage = "Connectivity operation failed with reason: " + e.getLocalizedMessage();
            
            responseBody = errorMessage;
        } 

        finally 
        {
            // When HttpClient instance is no longer needed, shut down the connection manager to ensure immediate
            // deallocation of all system resources
            if (httpClient != null) {
                httpClient.getConnectionManager().closeExpiredConnections();
            }
        }
        
        // if we end up here something went really bad
        System.out.println(Response.serverError().build().toString());
        
        return responseBody;
		
	}
	
	
	private HttpResponse doPost(String destinationURL, String requestJsonBody) throws ClientProtocolException, IOException, DestinationException, NamingException {
		
        System.out.println("REST Client target URL: " + destinationURL);
        // Execute HTTP request
        HttpPost httpPost = new HttpPost(destinationURL);

        StringEntity payload = new StringEntity(requestJsonBody, "UTF-8");
        httpPost.setEntity(payload);
        
        httpPost.setHeader("Content-type", "application/json");
        httpPost.setHeader("Accept", "application/json");
        
       return getHttpClient().execute(httpPost);
		
	}
	
	
	private Response doGet(String destinationURL) {
		
		HttpGet httpGet = null;
	    String msgBody = null;
		
		try {
            
            System.out.println("REST Client target URL: " + destinationURL);
            // Execute HTTP request
            httpGet = new HttpGet(destinationURL);
 
            HttpResponse httpResponse = getHttpClient().execute(httpGet);
            // Check response status code
            int statusCode = httpResponse.getStatusLine().getStatusCode();
            
            // copy content from the incoming response to the outgoing response
            HttpEntity responseEntity = null;
            
            if (httpResponse != null) {
            	responseEntity = httpResponse.getEntity();
            }
            
            msgBody = getResponseBodyasString(responseEntity);
            
            if (statusCode == HttpServletResponse.SC_OK) {
                return Response.ok(msgBody).build();
            }
            else {
            	return Response.status(statusCode).entity(msgBody).build();
            }

        } 
        catch (RuntimeException e) {
            // In case of an unexpected exception we abort the HTTP request 
        	// in order to shut down the underlying connection immediately.
            if (httpGet != null) {
            	httpGet.abort();
            }
        	
            // unexpected runtime error
            String errorMessage = "'Houston, we have a problem!' : "
                    + e.getMessage()
                    + ". See logs for details.";
            
            msgBody = errorMessage;
        } 
        catch (NamingException e) {
            // Lookup of destination failed
            String errorMessage = "Lookup of destination failed with reason: "
                    + e.getMessage()
                    + ". See "
                    + "logs for details. Hint: Make sure to have the destination "
                    + "[IOT_GATEWAY_REST_CLIENT]" + " configured.";
            
            msgBody = errorMessage;
        } 
        catch (Exception e) {
            // Connectivity operation failed
            String errorMessage = "Connectivity operation failed with reason: "
                    + e.getMessage();
            
            msgBody = errorMessage;
        } 
        finally 
        {
            // When HttpClient instance is no longer needed, shut down the connection manager to ensure immediate
            // deallocation of all system resources
            if (httpClient != null) {
                httpClient.getConnectionManager().closeExpiredConnections();
            }
        }
        
        // if we end up here something went really bad
        return Response.serverError().build();
    
		
	}
	
	/**
	 * Extracts the response body from the specified {@link HttpEntity} and returns it as a UTF-8 encoded String.
	 * 
	 * @param entity The {@link HttpEntity} to extract the message body from
	 * @return The UTF-8 encoded String representation of the message body 
	 * @throws 
	 */
	static String getResponseBodyasString(HttpEntity entity) throws Exception
	{
		String retVal = null;
		
		if (entity != null) {
            InputStream instream = entity.getContent();
            ByteArrayOutputStream outstream = new ByteArrayOutputStream();
            
            try {
                byte[] buffer = new byte[COPY_CONTENT_BUFFER_SIZE];
                int len;
                while ((len = instream.read(buffer)) != -1) 
                {
                	outstream.write(buffer, 0, len);
                }
            } 
            catch (IOException e)  {
                // In case of an IOException the connection will be released
                // back to the connection manager automatically
                throw e;
            } 
            finally  {
                // Closing the input stream will trigger connection release
                try {
                    instream.close();
                } 
                catch (Exception e)  {
                // Ignore
                }
            }
            
            retVal = outstream.toString("UTF-8");
        }
		
		return retVal;
	}
	
	
	
	public static HttpClient getHttpClient () throws DestinationException, NamingException {
		
		if (httpClient == null) {
			// Get HTTP destination
	        httpClient = getIoTDestination().createHttpClient();
		}
		
		return httpClient;
		
	}
	
	public static HttpDestination getIoTDestination() throws NamingException {
		if (destination == null) {
			Context ctx = new InitialContext();
			destination = (HttpDestination) ctx.lookup("java:comp/env/" +  "IOT_GATEWAY_REST_CLIENT");
		}
		
		return destination;
		
	}
	
}
	

