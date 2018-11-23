sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"TwinApp/utils/View3d",
	"TwinApp/utils/DataUtil"
], function (Controller, JSONModel, Filter, View3d, DataUtil) {
	"use strict";

	return Controller.extend("TwinApp.controller.Main", {
		
		View3d: View3d,
		DataUtil: DataUtil,
				
		onInit : function() {
			var oLocalModel = this._createLocalModel ();
			this.getView().setModel(oLocalModel, "local");
			
			this.getOwnerComponent().getRouter().getRoute("routeMain").attachPatternMatched(this.onRouteMainMatched, this);
	    },
	    
	    onRouteMainMatched: function() {
	    	this.getView().getModel("local").setProperty("/app/busy", true);
	    	
	    	DataUtil.getGeoObjects("all", this._onGeoObjectsLoaded, this._onLoadFail, this);
	    },
	    
	    //
	    // Control handlers
	    //
	    onAfterRendering : function() {
	    	
	    	if (this._canvas === undefined) {
	    		
	    		var vpDims = this._calcViewportSize(70);
	    		
		        this._canvas = document.getElementById("__viewPort");
		        this._canvas.setAttribute("width", vpDims.width.toString() + "px");
		        this._canvas.setAttribute("height", vpDims.height.toString() + "px");
		        
		        View3d.init(this._canvas, vpDims.width, vpDims.height);
	    	}
	        
	    	requestAnimationFrame (this._drawScene.bind(this));
	    	
	    	// allign tree's scroll container
	    	this.getView().byId("scrollCont").setHeight(Math.floor(vpDims.height * 0.90) + "px");
	    }, 
	    
	    onTabBarSelect: function (oEvent) {
	    	var oTabBar = this.getView().byId("appTabBar");
	    	
	    	console.log(oTabBar.getSelectedKey());
	    },
	    
	    onTreeItemPress: function (oEvent) {
	    	var a = oEvent.getSource().getAggregation("content")[0];
	    	var b = a.getAggregation("items")[0];
	    	
	    	var nodeID = b.getProperty("text");
	    	
	    	/// do you 3D visualisation
	    },
	    
	    onSearchSens: function(oEvent) {
	    	const query = oEvent.getParameter("newValue").trim();
	    	this.byId("sensTree").getBinding("items").filter(query ? new Filter({
	    		path: "objectName",
	    		operator: "Contains",
	    		value1: query,
	    	}) : null);
	    },
	        
	    onTreeChange: function(oEvent) {
	    	if (oEvent.getParameter("reason") == "filter") {
	        	const model = this.getView().getModel("local");
	            const query = model.getProperty("/app/query");
	            this.byId("sensTree").expandToLevel(query ? 99 : 0);
	         }
	     },
	    
	    onRoomSelected: function (oEvent) {
	    	var oControl = oEvent.getSource();
	    	var isSelected = oEvent.getParameter("selected");
	    	var sObjectID = oControl.getProperty("text")
	    	
	    	var oModel = this.getView().getModel("local");
	    	var selectedObj = oModel.getProperty("/app/selectedObj");
	    	
	    	var maxFind = 0;
	    	function updateSelections(oObjects) {
	    		 
	    		for (var a = 0; a < oObjects.length; a++) {
	    			
	    			if (oObjects[a].objectSel === true) {
	    				if (oObjects[a].objectName === selectedObj[0]) continue;
	    				if (oObjects[a].objectName === selectedObj[1]) continue;
	    				
	    				oObjects[a].objectSel = false;
	    				maxFind++;
	    			} 
	    			
	    			
	    			if (maxFind > 1) return;
	    			
	    			if (oObjects[a].node) updateSelections (oObjects[a].node);
	    		}
	    		
	    	}
	    	
	    	
	    	if (isSelected) {
	    		if (selectedObj[0] === null && selectedObj[1] === null) selectedObj[0] = sObjectID; else 
	    		if (selectedObj[0] !== null && selectedObj[1] === null) selectedObj[1] = sObjectID; else {
	    			selectedObj[0] = sObjectID; selectedObj[1] = null;
	    		}
	    			
	    	} else {
	    		if (selectedObj[0] === sObjectID) {
	    			selectedObj[0] = selectedObj[1]
	    			selectedObj[1] = null;
	    		} else
	    			if (selectedObj[1] === sObjectID) {
	    				selectedObj[1] = null;
	    			}
	    	}
	    	
	    	updateSelections(oModel.getProperty("/objects"));
	    	
	    	if (selectedObj[0] && selectedObj[1]) {
	    		oModel.setProperty("/app/isRouteFindPossible", true);
	    	} else {
	    		oModel.setProperty("/app/isRouteFindPossible", false);
	    	}
	    	
	    },
	     
	    
	    onFindRoute: function(oEvent) {
	    	var oModel = this.getView().getModel("local");
	    	var selectedObj = oModel.getProperty("/app/selectedObj");
	    	
	    	// массив из 2х objectID
	    	
	    	
	    },
	     
	    //
	    // private methods
	    //
	    _createLocalModel : function () {
	    	return new JSONModel({
	    		app: {
	    			busy: false,
	    			query: "",
	    			selectedObj: [null, null],
	    			isRouteFindPossible: false
	    		},
	    		hdr: {
	    			fio: "Иванов Иван Иванович",
	    			position: "ведущий инженер",
	    			phone: "+375 55 265256",
	    			email: "stuff@sap.com"
	    		},
	    		objects: [],
	    		senCurr: {
	    			image: "https://www.alphaomega-electronics.com/1304-large_default/wet-2-sensor-para-contenido-de-agua-ec-y-temperatura.jpg",
	    			name: "Сенсор температуры",
	    			devId: "aa1123",
	    			devStatus: "включено, интернет соединение",
	    			devMsg: "1)first\n2)secondt\n3)Third\n",
	    			temperature: [22, 25, 29, 28, 21, 19, 21],
		    		humidity: [40, 55, 45, 50, 58, 50, 52]
	    		}
	    	});
	    },
	    
	    _onLoadFail: function (oError, oListener) {
	    	
	    	oListener.getView().getModel("local").setProperty("/app/busy", false);
	    },
	    
	    
	    _onGeoObjectsLoaded: function (oData, oListener) {
	    	
	    	// Post LOADED geoJSON to 3d renderer HERE !!!!
	    	
	    	oListener._parseFloors(oData, oListener);
	    },
	    
	    _parseFloors: function (oGeoData, oListener) {
	    	
	    	var oObjects = oListener.getView().getModel("local").getProperty("/objects");
	    	
	    	for (var idx = 0; idx < oGeoData.length; idx++) {
	    		if (oGeoData[idx].nodeID.startsWith("FLOOR")) {
		    		oObjects.push({
		    			objectName: oGeoData[idx].nodeID,
		    			objectSel: false,
		    			isVisible: false,
		    			floor: oGeoData[idx].floor,
		    			levelID: oGeoData[idx].levelID
		    		});
	    		}
	    	}
	    	
	    	oObjects = oObjects.sort(function(a,b) {
	    		if (a.objectName[6] > b.objectName[6]) return +1;
	    		else 
	    		if (a.objectName[6] < b.objectName[6]) return -1;
	    		else
	    		if (a.objectName[6] == b.objectName[6]) {
	    			if (a.objectName[7] > b.objectName[7]) return +1;
	    			else return -1;
	    		}
	    		return 0;
	    			
	    	});
	    	
	    	var sensTree = oListener.getView().byId("sensTree");
	    	sensTree.getBinding("items").refresh();
	    	
	    	oListener._parseRooms(oGeoData, oListener);    	
	    },
	    
		_parseRooms: function (oGeoData, oListener) {
			var oFloors = oListener.getView().getModel("local").getProperty("/objects");
	    	
	    	for (var idx = 0; idx < oFloors.length; idx++) {
	    		var sArea = oFloors[idx].objectName.slice(6);
	    		
	    		for (var idx2 = 0; idx2 < oGeoData.length; idx2++) {
	    			if ((oGeoData[idx2].nodeID.indexOf(sArea) != -1) && 
	    				((oGeoData[idx2].nodeID.startsWith("ROOM")) || (oGeoData[idx2].nodeID.startsWith("HALL")))) {
	    				if (!oFloors[idx].node) oFloors[idx].node = [];
	    				oFloors[idx].node.push({
	    		    			objectName: oGeoData[idx2].nodeID,
	    		    			objectSel: false,
	    		    			isVisible: true,
	    		    			floor: oGeoData[idx2].floor,
	    		    			levelID: oGeoData[idx2].levelID
	    				});
	    			}
	    		}
	    	}
	    		    	
	    	var sensTree = oListener.getView().byId("sensTree");
	    	sensTree.getBinding("items").refresh();
				    	
	    	this._parseRoomObjects(oGeoData, oListener);
		},
		
		_parseRoomObjects: function (oGeoData, oListener) {
			var oFloors = oListener.getView().getModel("local").getProperty("/objects");
	    	
	    	for (var idx = 0; idx < oFloors.length; idx++) {
	    		
	    		if (!oFloors[idx].node) continue;
	    		
	    		var oRooms = oFloors[idx].node;
	    		var sFloorId = oFloors[idx].objectName.slice(6);
	    		
	    		for (var idx2 = 0; idx2 < oRooms.length; idx2++) {
	    			var iRoomIdStart = oRooms[idx2].objectName.indexOf(sFloorId);
	    				
	    			if (iRoomIdStart == -1) continue;
	    			
	    			var sRoomId = oRooms[idx2].objectName.slice(iRoomIdStart-1);
	    			
	    			for (var idx3 = 0; idx3 < oGeoData.length; idx3++) {
		    			if ((oGeoData[idx3].nodeID.indexOf(sRoomId) !== -1) && 
		    				((oGeoData[idx3].nodeID.indexOf("ROOM") === -1) && (oGeoData[idx3].nodeID.indexOf("HALL") === -1))) {
		    				if (!oRooms[idx2].node) oRooms[idx2].node = [];
		    				oRooms[idx2].node.push({
		    		    			objectName: oGeoData[idx3].nodeID,
		    		    			objectSel: false,
		    		    			isVisible: false,
		    		    			room: sRoomId,
		    		    			levelID: oGeoData[idx3].levelID
		    				});
		    			}
		    		}
	    					    		
	    		}
	    		
	    	}
	    		    	
	    	var sensTree = oListener.getView().byId("sensTree");
	    	sensTree.getBinding("items").refresh();
			
	    	oListener.getView().getModel("local").setProperty("/app/busy", false);    	    
		},
	   
	    
		_findTreeItemByNodeId: function (sNodeId, bSelect) {
			var oTree = this.getView().byId("sensTree");
			oTree.expandToLevel(10);
			var oItems = oTree.getItems()
			
			for (var idx = 0; idx < oItems.length; idx++) {
				var oItem = oItems[idx];
				var a = oItem.getAggregation("content")[0];
		    	var b = a.getAggregation("items")[0];
		    	
		    	var nodeId = b.getProperty("text");
		    	if (nodeId === sNodeId) {
		    		if (bSelect) {
		    			oTree.setSelectedItem (oItem, true);
		    		}
		    		return oItem;
		    	}
			}
			
			return null;
		},
		
		
	    //
	    // 3D related
	    //
	    _calcViewportSize: function (percent) {
	    	var pxRatio = window.devicePixelRatio || 1, 
	    		vpWidth = Math.floor((window.innerWidth * percent / 100) / pxRatio), 
	    		vpHeight = Math.floor((window.innerHeight * percent / 100)  / pxRatio); 
	    	
	    	console.log (pxRatio + " - w: " + window.innerWidth + "h: " + window.innerHeight);
	    		    	
	    	return {width: vpWidth, height: vpHeight};
	    },
	    
	    _drawScene: function () {
	    	requestAnimationFrame (this._drawScene.bind(this));
	    	
	    	View3d.frame ();
	    }
	
	});
});