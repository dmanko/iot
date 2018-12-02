sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/odata/v2/ODataModel",
	"TwinApp/utils/DataUtil"
], function (UIComponent, JSONModel, ODataModel, DataUtil) {
	"use strict";

	return UIComponent.extend("TwinApp.Component", {

		metadata : {
			manifest: "json"
		},

		init : function () {
			var oServiceConfig = this.getMetadata().getConfig()["serviceConfig"];
			var sServiceUrl = oServiceConfig.serviceUrl;
			DataUtil.setServiceUrl(sServiceUrl);

			
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);
			
			// create the views based on the url/hash
			this.getRouter().initialize();
		}
	});

});
