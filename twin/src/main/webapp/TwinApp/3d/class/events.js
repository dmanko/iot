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
				cont.lowLightRooms([cont.selectedRoom]);
				cont.lowLightBlocks([cont.selectedBlock]);
				cont.highLightRoom(cont.selectedRoom);
				cont.highLightBlock(cont.selectedBlock);
				cont.highLightDoor(cont.selectedDoor)
			} else {
				cont.resetRooms([cont.selectedRoom]);
				cont.resetBlocks([cont.selectedBlock]);
				cont.resetDoors([cont.selectedDoor]);
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
		if (!Array.isArray(floor)) floor = [floor];
		cont.resetRooms();
		cont.resetBlocks();
		cont.resetDoors();

		this.selectedFloor = floor[0];
		cont.scene.children.forEach(function(el) {
			if ((el.type == 'Mesh') && (!floor.includes(el.floor)))
				el.visible = false
			else
				el.visible = true;
			if ((el.properties) && (el.properties.levelID == "0")) el.visible = false;
		});

	}
	Twin3d.prototype.hideOuterWalls = function(floor) {
		cont.scene.children.forEach(function(el) {
			if ((el.properties) && (el.properties.levelID == "0")) el.visible = false;
		});
	}
	Twin3d.prototype.deselectFloor = function(exceptFloors) {
		if (!exceptFloors) exceptFloors = [];
		if (!Array.isArray(exceptFloors)) exceptFloor = [exceptFloor];

		cont.scene.remove(cont.pathLine);
		cont.selectedFloor = 0;
		cont.scene.children.forEach(function(el) {
			if (!exceptFloors.includes(el.floor))
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


	Twin3d.prototype.highLightRoom = function(mesh, highLightNumber) {
		colors = [];
		colors[0] = "#00ffff";
		colors[1] = "#00ffaa";

		var m = new THREE.MeshStandardMaterial({
			color: colors[highLightNumber],
			transparent: true,
			opacity: 0.3
			//				depthWrite: false
		});
		mesh.material = m;
	}
	Twin3d.prototype.highLightBlock = function(mesh, highLightNumber) {
		colors = [];
		colors[0] = "#ffffff";
		colors[1] = "#aaaaaa";
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
	Twin3d.prototype.highLightPath = function(mesh, intensivity) {
		// create value bases on intensivity
		hexString = Math.floor(120 + intensivity * 130).toString(16);
		var m = new THREE.MeshStandardMaterial({
			color: "#00" + hexString + "00",
			transparent: true,
			opacity: 0.4
			//				depthWrite: false
		});
		mesh.material = m;
	}

	Twin3d.prototype.resetRooms = function(exceptMesh) {
		if (!Array.isArray(exceptMesh)) exceptMesh = [exceptMesh];
		cont.scene.children.some(function(el) {
			if ((el.type == 'Mesh') && (el.properties) && (el.properties.levelID) && (el.properties.levelID == 1)) {
				if (!exceptMesh.includes(el))
					el.material = el.save.material;
			}
		});

	}

	Twin3d.prototype.resetBlocks = function(exceptMesh) {
		if (!Array.isArray(exceptMesh)) exceptMesh = [exceptMesh];
		cont.scene.children.some(function(el) {
			if ((el.type == 'Mesh') && (el.properties) && (el.properties.levelID) && (el.properties.levelID == 2)) {
				if (!exceptMesh.includes(el))
					el.material = el.save.material;
			}
		});

	}
	Twin3d.prototype.resetDoors = function(exceptMesh) {
		if (!Array.isArray(exceptMesh)) exceptMesh = [exceptMesh];
		cont.scene.children.some(function(el) {
			if ((el.type == 'Mesh') && (el.properties) && (el.properties.levelID) && (el.properties.levelID == 1)) {
				if (el.properties.ID.includes('DOOR') && (!exceptMesh.includes(el)))
					el.material = el.save.material;
			}
		});

	}

	Twin3d.prototype.lowLightRooms = function(exceptMesh) {
		if (!Array.isArray(exceptMesh)) exceptMesh = [exceptMesh];
		cont.scene.children.some(function(el) {
			if ((el.type == 'Mesh') && (el.properties) && (el.properties.levelID) && (el.properties.levelID == 1)) {
				if (!exceptMesh.includes(el)) {
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
		if (!Array.isArray(exceptMesh)) exceptMesh = [exceptMesh];
		cont.scene.children.some(function(el) {
			if ((el.type == 'Mesh') && (el.properties) && (el.properties.levelID) && (el.properties.levelID == 2)) {
				if (!exceptMesh.includes(el)) {
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

	Twin3d.prototype.selectFromUI = function(ids, clickedID) {
		if (!ids.includes(clickedID)) ids.push(clickedID);
		if (clickedID.includes('FLOOR')) {
			let floor = parseInt(clickedID.substr(6, 1));
			//	if ((!cont.selectedFloor) || ((cont.selectedFloor) && (cont.selectedFloor != floor))) {
			cont.deselectFloor();
			cont.selectFloor(floor);
			cont.threeLayer.redraw();
			//	}
			return;
		}
		var selectedMeshes = [];
		var exceptFloors = [];
		ids.some(function(id) {
			if (!id || (id == "undefined") ||
				!(id.includes('HALL') || id.includes('ROOM') || id.includes('BRD'))) {

			}
		});

		var ids = ids.filter(function(id, index, arr) {

			if (!id || (id == "undefined") ||
				!(id.includes('HALL') || id.includes('ROOM') || id.includes('BRD')))
				return false;
			return true;

		});



		ids.some(function(id) {

			selectedMeshes.push(cont.getMeshById(id));
			exceptFloors.push(cont.getMeshById(id).floor);

		});
		ids.some(function(id) {

			let highLightNumber = 0;
			if (clickedID == id) highLightNumber = 1;
			var mesh = cont.getMeshById(id);
			cont.flyToObject(mesh);
			if (mesh) {

				cont.deselectFloor(exceptFloors);
				cont.selectFloor(exceptFloors);



				if (mesh.properties.levelID == 2) {
					cont.selectBlock(id);
					cont.highLightBlock(cont.selectedBlock, highLightNumber);
					cont.selectRoom(cont.selectBlock.parent.properties.ID)
					cont.highLightBlock(cont.selectedRoom, highLightNumber);

					cont.lowLightRooms(selectedMeshes); //disble all except selected
					cont.lowLightBlocks(selectedMeshes);


				} else if (mesh.properties.levelID == 1) {
					cont.selectRoom(id);
					cont.highLightRoom(cont.selectedRoom, highLightNumber);

					cont.lowLightRooms(selectedMeshes);
					cont.lowLightBlocks(selectedMeshes);

				}

			}

		});
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


	Twin3d.prototype.showPath = function(path) {
		if (!path) return;
		//reset all
		cont.scene.remove(cont.pathLine);
		cont.deselectFloor();
		cont.hideOuterWalls();
		cont.lowLightRooms(cont.selectedRoom);
		cont.lowLightBlocks(cont.selectedBlock);
		let splittedArray = [];
		let idFrom = '';
		let idTo = '';
		let meshFrom = {};
		let meshTo = {};
		let topFloor = 0;
		var material = new THREE.LineBasicMaterial({
			color: 0xffffff,
			linewidth: 5,
			linecap: 'round', //ignored by WebGLRenderer
			linejoin: 'round' //ignored by WebGLRenderer
		});
		//pathLine 		
		var geometry = new THREE.Geometry();

		path.some(function(toSplit) {
			// split "1: id-1, id-2" into array			
			splittedArray = toSplit.split(/[:( ,)]+/);
			number = parseInt(splittedArray[0]);
			idFrom = splittedArray[1];
			idTo = splittedArray[2];

			//get path objects
			meshFrom = cont.getMeshById(idFrom);
			meshTo = cont.getMeshById(idTo);
			//calculate topFloor to hide not needed			
			if (topFloor < meshFrom.properties.floor)
				topFloor = meshFrom.properties.floor
			if (topFloor < meshTo.properties.floor)
				topFloor = meshTo.properties.floor
			// color path object, pass intensivity			
			cont.highLightPath(meshFrom, number / (path.length + 1));
			//add path line point			
			if (meshFrom != 'MAIN')
				geometry.vertices.push(cont.getCenterPoint(meshFrom));

		})
		//finish path line		
		if (meshTo != 'MAIN')
			geometry.vertices.push(cont.getCenterPoint(meshTo));
		cont.pathLine = new THREE.Line(geometry, material);
		cont.scene.add(cont.pathLine);
		//color last object
		let intensivity = (number + 1) / (path.length + 1);
		cont.highLightPath(cont.getMeshById(idTo), intensivity);


		// hide floors from very top
		cont.scene.children.forEach(function(el) {
			if ((el.type == 'Mesh') && (el.properties) && (el.properties.floor > topFloor)) el.visible = false;
		});



		cont.threeLayer.redraw();
	}