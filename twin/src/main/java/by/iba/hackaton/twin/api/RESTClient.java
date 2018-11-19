package by.iba.hackaton.twin.api;

import javax.naming.Context;
import javax.naming.InitialContext;

import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;

import com.sap.core.connectivity.api.http.HttpDestination;

public class RESTClient {

	HttpClient httpClient = null;
	HttpGet httpGet = null;

	String msgBody = null;

	// Get HTTP destination
	Context ctx = new InitialContext();
	HttpDestination destination = (HttpDestination) ctx.lookup("java:comp/env/" +  "IOT_GATEWAY_REST_CLIENT");
	// Create HTTP client
	httpClient=destination.createHttpClient();

	final String baseURL = destination.getURI().toString();
	String destinationURL = null;
	
	
}
