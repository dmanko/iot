sap.ui.define([
	], function () {
		"use strict";

		return {
			init : function (canvas) {
				// Init the renderer
				var vpWidth = parseInt(canvas.getAttribute("width").replace("px", "")),
				    vpHeight = parseInt(canvas.getAttribute("height").replace("px", ""));
				
				this._renderer = new THREE.WebGLRenderer({canvas: canvas});    
		        this._renderer.setSize(vpWidth, vpHeight);
		        this._renderer.setClearColor(0x000000, 1);
		        
		        // Create an empty scene
		        this._scene = new THREE.Scene();

		        // Create a basic perspective camera
		        this._camera = new THREE.PerspectiveCamera(75, vpWidth/vpHeight, 0.1, 1000 );
		        this._camera.position.z = 50;
		        this._scene.add(this._camera);
		        
		        var geometry = new THREE.BoxGeometry(10, 10, 10);
		        var material = new THREE.MeshBasicMaterial( { color: "#433F81" } );
		        this._cube = new THREE.Mesh(geometry, material);
		        this._scene.add(this._cube);
			},
			
			frame : function () {
				this._cube.rotation.x += 0.01;
		    	this._cube.rotation.y += 0.01;

		    	// Render the scene
		    	this._renderer.render(this._scene, this._camera);
			}
		};
	}
);