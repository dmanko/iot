sap.ui.define([], function() {
	"use strict";
	
//	var sUrlBase = "http://172.16.5.9:8155/twin/";
	
	var sUrlBase = "";


	function _setServiceUrl(sURL) { sUrlBase = sURL; }	
		
	function _getGeoObjects(sObjectType, fnSuccCallback, fnFailCallback, oListener) {
		var sUri;
		if (sObjectType.indexOf("all") || sObjectType.indexOf("ALL")) {
			sUri = sUrlBase + "api/v1/svc/nodes/all";
		} else {
			sUri = sUrlBase + "api/v1/svc/nodes/like=" + sObjectType;
		}
		jQuery.ajax({
			url: sUri,
			method: 'GET',
			dataType: 'json',
			username: "DMANKO",
			password: "TEST",
			async: true,
			cache: false,
			timeout: 60 * 1000,
			success: function(oData) {
				fnSuccCallback(oData, oListener);
			},
			error: function(oError) {
				fnFailCallback(oError, oListener);
			}.bind(this)
		});
	}

	function _getPath(from, to, fnSuccCallback, fnFailCallback, oListener) {
		var sUri;

		sUri = sUrlBase + "api/v1/svc/nodes/routing/start=" + from + "&finish=" + to;

		jQuery.ajax({
			url: sUri,
			method: 'GET',
			dataType: 'json',
			username: "DMANKO",
			password: "TEST",
			async: true,
			cache: false,
			timeout: 60 * 1000,
			success: function(oData) {
				fnSuccCallback(oData, oListener);
			},
			error: function(oError) {
				fnFailCallback(oError, oListener);
			}.bind(this)
		});
	}

	function _getDeviceInfo(deviceID, fnSuccCallback, fnFailCallback, oListener) {
		var sUri;

		sUri = "https://97afd33a-5b26-4d6b-ae0b-1e9582ef315f.eu10.cp.iot.sap/iot/core/api/v1/devices?$filter=alternateId eq \"" +
			   deviceID + "\"";

		jQuery.ajax({
			url: encodeURI(sUri),
			method: 'GET',
			dataType: 'json',
			username: "root",
			password: "12nvj9OgqvuusB1",
			async: true,
			cache: false,
			timeout: 60 * 1000,
			success: function(oData) {
				if (fnSuccCallback)
					fnSuccCallback(oData, oListener);
			},
			error: function(oError) {
				if (fnFailCallback) fnFailCallback(oError, oListener);
			}.bind(this)
		});
	}
	
	function _postFeedback(sName, sMessage, fnSuccCallback, fnFailCallback, oListener) {
		var sUri;

		sUri = sUrlBase + "api/v1/svc/feedbacks";

		jQuery.ajax({
			url: sUri,
			method: 'POST',
			contentType : "application/x-www-form-urlencoded",
			dataType : "text",
			data: {
				name: sName,
				message: sMessage
			},
			username: "DMANKO",
			password: "TEST",
			async: true,
			cache: false,
			timeout: 60 * 1000,
			success: function(oData) {
				fnSuccCallback(oData, oListener);
			},
			error: function(oError) {
				fnFailCallback(oError, oListener);
			}.bind(this)
		});
	}

	
	return {
		setServiceUrl: _setServiceUrl,
		getGeoObjects: _getGeoObjects,
		getPath: _getPath,
		getDeviceInfo: _getDeviceInfo,
		postFeedback: _postFeedback
	};
});