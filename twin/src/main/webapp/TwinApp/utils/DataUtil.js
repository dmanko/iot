sap.ui.define([], function() {
	"use strict";

	function _getGeoObjects(sObjectType, fnSuccCallback, fnFailCallback, oListener) {
		var sUri;
		if (sObjectType.indexOf("all") || sObjectType.indexOf("ALL")) {
			sUri = "http://172.16.5.9:8155/twin/api/v1/svc/nodes/all";
		} else {
			sUri = "http://172.16.5.9:8155/twin/api/v1/svc/nodes/like=" + sObjectType;
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

		sUri = "http://172.16.5.9:8155/twin/api/v1/svc/nodes/routing/start=" + from + "&finish=" + to;

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
	return {
		getGeoObjects: _getGeoObjects,
		getPath: _getPath

	};
});