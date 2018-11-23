package by.iba.hackaton.twin.api.iot;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
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
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;

import com.sap.core.connectivity.api.DestinationException;
import com.sap.core.connectivity.api.http.HttpDestination;



@Path("/iot")
@Produces({ MediaType.APPLICATION_JSON })
public class IoTService 
{
	
	private static final int COPY_CONTENT_BUFFER_SIZE = 1024;
	
	HttpClient httpClient = null;
    HttpDestination destination = null;
	
	@GET
	@Path("/device/{id}")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response getMeasuresForDevice(@PathParam(value = "id") String deviceId)
	{
	    HttpGet httpGet = null;
	    String msgBody = null;
	    
        try {
            
            final String baseURL = getDestination().getURI().toString();
            String destinationURL = null;
            
            if (deviceId != null && deviceId.trim().length() > 0) 
            {
            	destinationURL = MessageFormat.format("{0}/{1}/measures?orderby=timestamp&skip=0&top=100", baseURL, deviceId);
            	
            } 
            
            System.out.println("REST Client target URL: " + destinationURL);
            // Execute HTTP request
            httpGet = new HttpGet(destinationURL);
 
            HttpResponse httpResponse = getHttpClient().execute(httpGet);
            // Check response status code
            int statusCode = httpResponse.getStatusLine().getStatusCode();
            
            // copy content from the incoming response to the outgoing response
            HttpEntity responseEntity = null;
            
            if (httpResponse != null)
            {
            	responseEntity = httpResponse.getEntity();
            }
            
            msgBody = getResponseBodyasString(responseEntity);
            
            if (statusCode == HttpServletResponse.SC_OK) 
            {
                return Response.ok(msgBody).build();
            }
            else
            {
            	return Response.status(statusCode).entity(msgBody).build();
            }

        } 
        catch (RuntimeException e) 
        {
            // In case of an unexpected exception we abort the HTTP request 
        	// in order to shut down the underlying connection immediately.
            if (httpGet != null)
            {
            	httpGet.abort();
            }
        	
            // unexpected runtime error
            String errorMessage = "'Houston, we have a problem!' : "
                    + e.getMessage()
                    + ". See logs for details.";
            
            msgBody = errorMessage;
        } 
        catch (NamingException e) 
        {
            // Lookup of destination failed
            String errorMessage = "Lookup of destination failed with reason: "
                    + e.getMessage()
                    + ". See "
                    + "logs for details. Hint: Make sure to have the destination "
                    + "[openweathermap-destination]" + " configured.";
            
            msgBody = errorMessage;
        } 
        catch (Exception e) 
        {
            // Connectivity operation failed
            String errorMessage = "Connectivity operation failed with reason: "
                    + e.getMessage()
                    + ". See "
                    + "logs for details. Hint: Make sure to have an HTTP proxy configured in your "
                    + "local Eclipse environment in case your environment uses "
                    + "an HTTP proxy for the outbound Internet "
                    + "communication.";
            
            msgBody = errorMessage;
        } 
        finally 
        {
            // When HttpClient instance is no longer needed, shut down the connection manager to ensure immediate
            // deallocation of all system resources
            if (httpClient != null) 
            {
                httpClient.getConnectionManager().shutdown();
            }
        }
        
        // if we end up here something went really bad
        return Response.serverError().build();
    }
	
	
	@POST
	@Path("/device/create")
	@Produces({ MediaType.APPLICATION_JSON })
	public String createDevice(@FormParam(value = "deviceName") String deviceNodeId){
		
		
		
		return "";
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
		
		if (entity != null) 
        {
            InputStream instream = entity.getContent();
            ByteArrayOutputStream outstream = new ByteArrayOutputStream();
            
            try 
            {
                byte[] buffer = new byte[COPY_CONTENT_BUFFER_SIZE];
                int len;
                while ((len = instream.read(buffer)) != -1) 
                {
                	outstream.write(buffer, 0, len);
                }
            } 
            catch (IOException e) 
            {
                // In case of an IOException the connection will be released
                // back to the connection manager automatically
                throw e;
            } 
            finally 
            {
                // Closing the input stream will trigger connection release
                try 
                {
                    instream.close();
                } 
                catch (Exception e) 
                {
                // Ignore
                }
            }
            
            retVal = outstream.toString("UTF-8");
        }
		
		return retVal;
	}
	
	
	
	private HttpClient getHttpClient () throws DestinationException, NamingException {
		
		if (this.httpClient == null) {
			// Get HTTP destination
	        this.httpClient = getDestination().createHttpClient();
		}
		
		return this.httpClient;
		
	}
	
	private HttpDestination getDestination() throws NamingException {
		if (this.destination == null) {
			Context ctx = new InitialContext();
			this.destination = (HttpDestination) ctx.lookup("java:comp/env/" +  "IOT_GATEWAY_REST_CLIENT");
		}
		
		return this.destination;
		
	}
	
}
	

