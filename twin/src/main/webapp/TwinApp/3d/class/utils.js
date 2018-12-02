	Twin3d.prototype.getSelected = function() {
		return {
			'selectedDoor': this.selectedDoor,
			'selectedRoom': this.selectedRoom,
			'selectedBlock': this.selectedBlock,
			'selectedFloor': this.selectedFloor
		}
	}

	Twin3d.prototype.getCenterPoint = function(mesh) {
		var geometry = mesh.geometry;
		geometry.computeBoundingBox();
		center = geometry.boundingBox.getCenter();
		mesh.localToWorld(center);
		return center;
	}

	Twin3d.prototype.update2d = function() {
		cont = this;
		var newContent1 = '';
		if (this.selectedFloor)
			newContent1 += `<font color="white">Floor:</font> <b>${this.selectedFloor}</b><br>`;
		if (this.selectedRoom)
			newContent1 += `<font color="white">Room: <b>${this.selectedRoom.properties.ID}</b><br>`;
		if (this.selectedDoor)
			newContent1 += `<font color="white">Door: <b>${this.selectedDoor.properties.ID}</b><br>`;
		if (this.selectedBlock)
			newContent1 += `<font color="white">Block: <b>${this.selectedBlock.properties.ID}</b><br>`;
		if (cont.content2d_1 != newContent1) {
			cont.content2d_1 = newContent1;
			$("#topleft").html(newContent1);
		}
		var newContent2 = '';
		var mesh = this.selectedBlock || this.selectedDoor || this.selectedRoom;

		if (mesh && mesh.properties.IoTIDs) {

			var iot = mesh.properties.IoTIDs.split(", ");
			iot.some(function(device) {
				if (device) {
					newContent2 += "<font color='white'>" + device + "</font>";
					var online = " <font color='red'>offline</font><br>";
					cont.iotData.some(function(dt) {
						if (dt.ID == device)
							online = " <b>online</b><br>";
					});
					newContent2 += online;
				}

			});

		};
		if (cont.content2d_2 != newContent2) {
			cont.content2d_2 = newContent2;
			$("#topright").html(newContent2);
		}
	}
	Twin3d.prototype.updatePath2d = function(path) {
		cont = this;
		var html = 'Path: ';
		path.some(function(toSplit) {
			// split "1: id-1, id-2" into array			
			splittedArray = toSplit.split(/[:( ,)]+/);
			number = parseInt(splittedArray[0]);
			idFrom = splittedArray[1];
			idTo = splittedArray[2];
			html += idFrom + " => ";
		});
		html += idTo;
		$("#bottom").html(html);


	}