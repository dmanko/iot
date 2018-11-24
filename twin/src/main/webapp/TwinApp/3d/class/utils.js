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