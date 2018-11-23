	Twin3d.prototype.getOData = function(oData) {
	  var geo = [{
	    "type": "FeatureCollection",
	    "features": []
	  }];

	  oData.forEach(function(el) {
	    if (el.originalJSON) {
	      let feature = JSON.parse(el.originalJSON);
	      let x = 0,
	        y = 0;
	      feature.geometry.coordinates[0].some(function(el) {
	        x += el[0];
	        y += el[1];
	      });
	      x = x / feature.geometry.coordinates[0].length;
	      y = y / feature.geometry.coordinates[0].length;
	      feature.properties.center = [x, y];
	      geo[0].features.push(feature);
	    }
	  });

	  return geo;

	}