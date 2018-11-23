Twin3d.prototype.threeLayer = function(oData) {
	console.log("layers");
	var cont = this;


	// the ThreeLayer to draw buildings
	cont.threeLayer = new maptalks.ThreeLayer('t', {
		forceRenderOnMoving: true,
		forceRenderOnRotating: true,
	});

	// features to draw
	var features = [];
//	buildings = cont.getBuilding();
	buildings = cont.getOData(oData);	
	//get buildings, concat collections if exist
	buildings.forEach(function(b) {
		features = features.concat(b.features);
	});

	// initialization
	cont.threeLayer.prepareToDraw = function(gl, scene, camera) {
		cont.scene = scene;
		cont.camera = camera;
		// save context
		var me = this;
		//lights
		var light = new THREE.PointLight(0xffffff);
		camera.add(light);
		var light = new THREE.AmbientLight(0xffffff);
		scene.add(light);
		//process all features from geojson



		features.forEach(function(g) {
			// if this is not defined as land and tags have levels -

			// material, could be texture
			let opacity = 0.4;
			let color = "#00ffff";
			let size = 5;
			let transparent = true;
			if (g.properties.levelID == "0") {
				opacity = 1;
				color = "#999999";
				size = 5.1;
			}
			if ((g.properties.levelID == "2")) {
				opacity = 1;
				color = "#ff9944";
				size = 3;
				transparent = false;
			}


			var m = new THREE.MeshStandardMaterial({
				color: color,
				transparent: transparent,
				opacity: opacity
				//				depthWrite: false
			});
			//m.side = THREE.DoubleSide;

			// create 3d object from geojson
			var geometry = maptalks.GeoJSON.toGeometry(g);

			var mesh = me.toExtrudeMesh(geometry, size, m, true);

			mesh.save = {};
			mesh.save.material = m;
			mesh.save.color = m.color.clone();
			mesh.save.opacity = opacity;



			if (g.properties)
				mesh.properties = g.properties;
			//mesh.geometry.center(group.position);

			mesh.floor = g.properties.floor;
			mesh.position.z -= (mesh.floor - 1) * 70;

			scene.add(mesh);

			//		if (g.properties.outer == "0") mesh.visible = false;


		});


	};
	//add to map

	cont.threeLayer.addTo(cont.map);



}
Twin3d.prototype.mapLayer = function() {
	console.log("layers");
	cont = this;
	var layerVColor = "#666666"; //color for buildings and small regions


	// features to draw
	var features = [];
	buildings = cont.getMap();
	//get buildings, concat collections if exist
	buildings.forEach(function(b) {
		features = features.concat(b.features);
	});

	//add layer with building
	var layerV = new maptalks.VectorLayer('layerV').addTo(cont.map);
	var i = 1;
	//add features to layer
	features.forEach(function(b) {

		//add object to layer
		var obj = maptalks.GeoJSON.toGeometry(b).addTo(cont.map.getLayer('layerV'));


		b.properties.stroke = "#" + (Math.floor(0x447755 * Math.random())).toString(16);;
		//    b.properties.fill = "#"+(Math.floor(0x114422*Math.random())).toString(16);
		b.properties.fill = "#" + (Math.floor(0xFF4422 * Math.random())).toString(16);
		obj.originalColor = b.properties.fill;
		obj.originalColorLine = b.properties.stroke;
		obj.originalColorFill = b.properties.fill;
		obj.updateSymbol({
			'lineColor': b.properties.stroke,
			'polygonFill': b.properties.fill,
			'polygonOpacity': 0.1
		});



	});


}