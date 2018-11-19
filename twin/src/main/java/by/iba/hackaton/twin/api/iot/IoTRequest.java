package by.iba.hackaton.twin.api.iot;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

// REST API for IoT Service (Cloud Foundary)
// https://97afd33a-5b26-4d6b-ae0b-1e9582ef315f.eu10.cp.iot.sap/iot/core/api/v1/doc/#/Sensors/createSensor

public class IoTRequest {
	
	
	public static final String REST_GATEWAY_ID = "2";
	public static final String MQTT_GATEWAY_ID = "4";
	
	
/*		{
		  "customProperties": [
		    {
		      "key": "string",
		      "value": "string"
		    }
		  ],
		  "gatewayId": "string",
		  "name": "string"
		}
*/
	

	@SuppressWarnings("unchecked")
	private String getJSONForDeviceCreation(String deviceName) {
		
		JSONObject rootJson = new JSONObject();
		rootJson.put("gatewayId", REST_GATEWAY_ID); 
		rootJson.put("name", deviceName);
		rootJson.put("alternateId", deviceName);
		
		JSONArray properties = new JSONArray();
		JSONObject property = new JSONObject();
		property.put("key", "propertyKey");
		property.put("value", "propertyValue");
		
		properties.add(property);
		
		rootJson.put("customProperties", properties);

		return rootJson.toJSONString();
		
	}
	
	
/*	
	{
		  "alternateId": "string",
		  "deviceId": "string",
		  "name": "string",
		  "sensorTypeId": "string"
	}
	
*/	
	
	@SuppressWarnings("unchecked")
	private String getJSONForSensorCreation(String deviceName, String deviceID) {
		
		JSONObject rootJson = new JSONObject();
		String sensorTypeId = "";
		
		
		for (IoTType iottype : IoTType.values()) {
			if (deviceName.contains(iottype.toString()) ) {
				sensorTypeId = iottype.sensorTypeId();
			}
			
		}
		
		rootJson.put("alternateId", deviceName);
		rootJson.put("deviceId", deviceID);
		rootJson.put("name", "S_" + deviceID);
		rootJson.put("sensorTypeId", sensorTypeId);
		
		return rootJson.toJSONString();
		
	}
	
	
	public static void main(String[] args) {
		
		IoTRequest request = new IoTRequest();
		System.out.println(request.getJSONForDeviceCreation("IOT-SECURUTY-FLOOR-1C"));
		
		System.out.println(request.getJSONForSensorCreation("IOT-SECURUTY-FLOOR-1C", "14"));
	}
	

}
