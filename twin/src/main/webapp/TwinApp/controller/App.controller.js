sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("TwinApp.controller.App", {
		
		onInit : function() {
			var oModel = this._createGlobalModel ();
			this.getOwnerComponent().setModel(oModel, "global")
	    },
	    
	    //
	    // Control handlers
	    //
	    
	    //
	    // private methods
	    //
	    _createGlobalModel : function () {
	    	return new JSONModel({
	    		usr: {
	    			fio: "Иванов Иван Иванович"
	    		}
	    	});
	    }
	});

});