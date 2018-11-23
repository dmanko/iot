	Twin3d.prototype.setEvents = function() {
		// selected items
		var mySelectedID = 0;
		var oldSelectedID = 0;
		var cont = this;
		// change layers on zoom
		cont.map.on('zooming', function(e) {
			cont.scene.children.forEach(function(el) {
				if (el.maxZoom)
					el.visible = !(e.to > el.maxZoom);

			});

		});


		cont.obj.click(function(e) {

			cont.mouse.x = ((e.clientX - cont.obj.offset().left) / cont.obj.width()) * 2 - 1;
			cont.mouse.y = -((e.clientY - cont.obj.offset().top) / cont.obj.height()) * 2 + 1;

			cont.raycaster.setFromCamera(cont.mouse, cont.camera);

			// calculate objects intersecting the picking ray, get 1st
			var intersects = cont.raycaster.intersectObjects(cont.scene.children);


			cont.selectedRoom = 0;
			cont.selectedBlock = 0;
			cont.selectedDoor = 0;
			if (intersects[0]) {
				// floor already selected                
				if (cont.selectedFloor) {


					// find intersection with 1st block
					for (var i = 0; i <= intersects.length - 1; i++)
						if (intersects[i].object.floor == cont.selectedFloor)
							if (intersects[i].object.properties.levelID == "2") {
								cont.selectBlock(intersects[i].object.properties.ID);
								break
							}


					//find intersection with 1st room                    
					for (var i = 0; i <= intersects.length - 1; i++)
						if (intersects[i].object.floor == cont.selectedFloor)
							if (intersects[i].object.properties.levelID == "1") {
								//if block selected - get only parent room
								if ((cont.selectedBlock)) {
									if ((intersects[i].object.properties.ID == cont.selectedBlock.properties.parentID)) {
										cont.selectRoom(intersects[i].object.properties.ID);
										break;

									}
								} else {

									cont.selectRoom(intersects[i].object.properties.ID);
									if (intersects[i].object.properties.ID.includes('DOOR'))
										cont.selectDoor(intersects[i].object.properties.ID);
									//break

								}
							}

				} else {
					//select floor
					var selectedFloorMesh = intersects[0].object;
					cont.selectFloor(selectedFloorMesh.properties.floor);
				}

			} else {
				cont.deselectFloor();

			}
e

			if (cont.selectedBlock || cont.selectedRoom || cont.selectedDoor) {
				cont.lowLightRooms(cont.selectedRoom);
				cont.lowLightBlocks(cont.selectedBlock);
				cont.highLightRoom(cont.selectedRoom);
				cont.highLightBlock(cont.selectedBlock);
				cont.highLightDoor(cont.selectedDoor)
			} else {
				cont.resetRooms(cont.selectedRoom);
				cont.resetBlocks(cont.selectedBlock);
				cont.resetDoors(cont.selectedDoor);
			}



			if (cont.selectedFloor.properties) console.log(cont.selectedFloor.properties.ID);
			if (cont.selectedRoom.properties) console.log(cont.selectedRoom.properties.ID);
			if (cont.selectedBlock.properties) console.log(cont.selectedBlock.properties.ID);
			//cont.threeLayer.hide();
			//cont.threeLayer.show();
			cont.threeLayer.redraw();


		});



	};

	Twin3d.prototype.selectFloor = function(floor) {


		this.selectedFloor = floor;
		cont.scene.children.forEach(function(el) {
			if ((el.type == 'Mesh') && (floor != el.floor))
				el.visible = false;
			if ((el.properties) && (el.properties.levelID == "0")) el.visible = false;
		});

	}
	Twin3d.prototype.deselectFloor = function() {
		cont.selectedFloor = 0;
		cont.scene.children.forEach(function(el) {
			el.visible = true;
		});
	}

	Twin3d.prototype.getMeshById = function(id) {
		let mesh = {};
		cont.scene.children.some(function(el) {
			if ((el.type == 'Mesh') && (el.properties) && (el.properties.ID) && (el.properties.ID == id)) {
				mesh = el;
				return
			}
		});
		return mesh;
	}


	Twin3d.prototype.selectRoom = function(id) {
		let selectedRoom = this.getMeshById(id)
		if (selectedRoom.properties.levelID == 1) {
			this.selectedRoom = selectedRoom;

		}
	}
	Twin3d.prototype.selectBlock = function(id) {
		let selectedBlock = this.getMeshById(id)
		if (selectedBlock.properties.levelID == 2) {
			this.selectedBlock = selectedBlock;

		}
	}
	Twin3d.prototype.selectDoor = function(id) {
		let selectedDoor = this.getMeshById(id)
		if (selectedDoor.properties.levelID == 1) {
			this.selectedDoor = selectedDoor;

		}
	}


	Twin3d.prototype.highLightRoom = function(mesh) {
		var m = new THREE.MeshStandardMaterial({
			color: "#00ffff",
			transparent: true,
			opacity: 0.3
			//				depthWrite: false
		});
		mesh.material = m;
	}
	Twin3d.prototype.highLightBlock = function(mesh) {
		var m = new THREE.MeshStandardMaterial({
			color: "#ffffff",
			transparent: false,
			opacity: 1
			//				depthWrite: false
		});
		mesh.material = m;
	}
	Twin3d.prototype.highLightDoor = function(mesh) {
		var m = new THREE.MeshStandardMaterial({
			color: "#00ff00",
			transparent: false,
			opacity: 1
			//				depthWrite: false
		});
		mesh.material = m;
	}


	Twin3d.prototype.resetRooms = function(exceptMesh) {
		cont.scene.children.some(function(el) {
			if ((el.type == 'Mesh') && (el.properties) && (el.properties.levelID) && (el.properties.levelID == 1)) {
				if (el != exceptMesh)
					el.material = el.save.material;
			}
		});

	}

	Twin3d.prototype.resetBlocks = function(exceptMesh) {
		cont.scene.children.some(function(el) {
			if ((el.type == 'Mesh') && (el.properties) && (el.properties.levelID) && (el.properties.levelID == 2)) {
				if (el != exceptMesh)
					el.material = el.save.material;
			}
		});

	}
	Twin3d.prototype.resetDoors = function(exceptMesh) {
		cont.scene.children.some(function(el) {
			if ((el.type == 'Mesh') && (el.properties) && (el.properties.levelID) && (el.properties.levelID == 1)) {
				if (el.properties.ID.includes('DOOR') && (el != exceptMesh))
					el.material = el.save.material;
			}
		});

	}

	Twin3d.prototype.lowLightRooms = function(exceptMesh) {
		cont.scene.children.some(function(el) {
			if ((el.type == 'Mesh') && (el.properties) && (el.properties.levelID) && (el.properties.levelID == 1)) {
				if (el != exceptMesh) {
					var m = new THREE.MeshStandardMaterial({
						color: "#00ffff",
						transparent: true,
						opacity: 0.05
						//				depthWrite: false
					});
					el.material = m;
				}
			}
		});

	}

	Twin3d.prototype.lowLightBlocks = function(exceptMesh) {
		cont.scene.children.some(function(el) {
			if ((el.type == 'Mesh') && (el.properties) && (el.properties.levelID) && (el.properties.levelID == 2)) {
				if (el != exceptMesh) {
					var m = new THREE.MeshStandardMaterial({
						color: "#ff9944",
						transparent: true,
						opacity: 0.3
						//				depthWrite: false
					});
					el.material = m;
				}
			}
		});

	}

	Twin3d.prototype.selectFromUI = function(id) {
		cont = this;
		var mesh = cont.getMeshById(id);
		cont.flyToObject(mesh);
		if (mesh) {
			if ((!cont.selectedFloor) || ((cont.selectedFloor) && (cont.selectedFloor != mesh.properties.floor))) {
				cont.deselectFloor();
				cont.selectFloor(mesh.properties.floor);
			}


			if (mesh.properties.levelID == 2) {
				cont.selectBlock(id);
				cont.highLightBlock(cont.selectedBlock);
				cont.selectRoom(cont.selectBlock.parent.properties.ID)
				cont.highLightBlock(cont.selectedRoom);

				cont.lowLightRooms(cont.selectedRoom);
				cont.lowLightBlocks(cont.selectedBlock);

			} else if (mesh.properties.levelID == 1) {
				cont.selectRoom(id);
				cont.highLightRoom(cont.selectedRoom);

				cont.lowLightRooms(cont.selectedRoom);
				cont.lowLightBlocks(cont.selectedBlock);
			}

		}
		cont.threeLayer.redraw();

	}


	Twin3d.prototype.flyToObject = function(mesh) {

		cont.map.animateTo({
			center: mesh.properties.center,
			zoom: 19,
			pitch: 30 + Math.random() * 10,
			bearing: 20 + Math.random() * 90
		}, {
			duration: 2000
		});
	}