	Twin3d.prototype.periodicTasks = function() {
		cont = this;

		this.getObjects();

	}



	Twin3d.prototype.getObjects = function() {



		cont = this;
		if (!cont.iotData.length)
			jQuery.ajax({
				url: "twin/api/v1/iot/devices",
				method: 'GET',
				dataType: 'json',
				//				username: "root",
				//				password: "12nvj9OgqvuusB1",
				headers: {
					"authorization": "Basic cm9vdDoxMm52ajlPZ3F2dXVzQjE="
				},
				crossDomain: true,
				async: true,
				cache: false,
				timeout: 60 * 1000,
				success: function(oData) {
					//					var json = JSON.parse(data);
					var json = oData;
					json.some(function(el) {
						var prepDevice = {
							"ID": el.alternateId,
							"devceID": el.id,
							"online": el.online,
							"measures": {}
						};

						var found = false;
						cont.iotData.some(function(device) {
							if (device.ID == prepDevice.ID) {
								found = true;
							}
						});
						if (!found) cont.iotData.push(prepDevice);
					});
				},
				error: function(oError) {
					//
				}
			});
		cont.iotData.some(function(el) {

			jQuery.ajax({
				url: encodeURI("twin/api/v1/iot/devices/" + el.devceID + "/measures"),
				method: 'GET',
				dataType: 'json',
				//				username: "root",
				//				password: "12nvj9OgqvuusB1",
				headers: {
					"authorization": "Basic cm9vdDoxMm52ajlPZ3F2dXVzQjE="
				},
				crossDomain: true,
				async: true,
				cache: false,
				timeout: 60 * 1000,
				success: function(oData) {
					//					var json2 = JSON.parse(data);
					var json2 = oData;

					json2.some(function(el2) {
						for (var property in el2.measure) {
							if (el2.measure.hasOwnProperty(property)) {
								if (!el.measures[property])
									el.measures[property] = [];
								let found = false;
								el.measures[property].some(function(prop) {
									if (prop.timestamp == el2.timestamp)
										found = true;
								});
								if (!found)
									el.measures[property].push({
										"timestamp": el2.timestamp,
										"value": el2.measure[property]
									});
							}
						}

					});
				},
				error: function(oError) {
					//
				}
			});
		});

	}