'use strict';
var twin3d = {};
class Twin3d {
    constructor(oData, el, width, height, center) {
        this.selectedFloor = 0;
        this.selectedRoom = 0;
        this.selectedBlock = 0;        
        
        this.width = width;
        this.height = height;
        console.log('constr');
        //original map
        this.map = new maptalks.Map(el, {
            center: center,
            zoom: 10,
            pitch: -50,
            bearing: 70,

            centerCross: false,
            doubleClickZoom: false,
            attribution: {},
            baseLayer: new maptalks.TileLayer('tile', {
                //        'urlTemplate' : 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                'urlTemplate': 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
                'subdomains': ['a', 'b', 'c', 'd']
            })



        });
        this.center = center;
        this.obj = $("#"+el);
        this.buildingColor = "#3355ff";

        this.map.animateTo({
            center: center,
            zoom: 19,
            pitch: 60,
            bearing: 60
        }, {
            duration: 300
        });





        this.mapLayer();
        this.threeLayer(oData);

                // need to have it for mouse click on 3d objects
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();
       // this.scene = cont.threeLayer.getScene();
        //this.camera = cont.threeLayer.getCamera();



        this.setEvents();
    }


}