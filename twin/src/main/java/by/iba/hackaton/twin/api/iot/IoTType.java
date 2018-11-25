package by.iba.hackaton.twin.api.iot;

public enum IoTType {
	
/*	SECURUTY("ST_SECURITY"),
	LOCK("ST_DOORLOCK"),
	WINDOWLOCK("ST_WINDOWLOCK"),
	TEMP("ST_METEO"),
	FIRE("ST_FIREDETECTOR"),
	OPEN("ST_DOOR_OPENNING"),
	LIGHT("ST_LIGHTCONTROL");	*/
	
	
	SECURITY("d054b3ca-de8f-479d-8bc2-33181362102d"),
	LOCK("d898e8e1-0c50-4305-b071-6e9859cd28c9"),
	WINDOWLOCK("6aa284f7-a85a-4a8c-9349-843e6118b6f7"),
	TEMP("67562cbe-65e0-40c8-938c-a763d4d21ef5"),
	FIRE("932a7706-0921-4ee7-a5d7-ced4307b0e28"),
	OPEN("b9405e19-e4ad-4e92-b36f-1b6431bab436"),
	LIGHT("18f343ac-1084-4e4a-ad11-5bfc3fc0f9bf");	

	
	 private final String sensorTypeId;  
	 
	 IoTType(String sensorTypeId) {
	      this.sensorTypeId = sensorTypeId;
	 }
	    
	 public String sensorTypeId() { 
		 return this.sensorTypeId; 
	 }

}
