function mxtograd(a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  betapx = a / 6367558.4968;
  sin2B = Math.sin(betapx) * Math.sin(betapx);
  sin4B = sin2B * sin2B;
  B0x = betapx + Math.sin(2 * betapx) * (.00252588685 - 1.49186E-5 * sin2B + 1.1904E-7 * sin4B);
  z0x = (b - 1E5 * (10 * Math.floor(1E-6 * b) + 5)) / (6378245 * Math.cos(B0x));
  sin2B0 = Math.sin(B0x) * Math.sin(B0x);
  sin4B0 = sin2B0 * sin2B0;
  sin6B0 = sin4B0 * sin2B0;
  dBx = -z0x * z0x * Math.sin(2 * B0x) * (.251684631 - .003369263 * sin2B0 + 1.1276E-5 * sin4B0 - z0x * z0x * (.10500614 - .04559916 * sin2B0 + .00228901 * sin4B0 - 2.987E-5 * sin6B0 - z0x *
    z0x * (.042858 - .025318 * sin2B0 + .01434 * sin4B0 - .001264 * sin6B0 - z0x * z0x * (.01672 - .0063 * sin2B0 + .01188 * sin4B0 - .00328 * sin6B0))));
  return 180 * (B0x + dBx) / 3.14159265358979
}

function mytograd(a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  betapy = a / 6367558.4968;
  sin2B = Math.sin(betapy) * Math.sin(betapy);
  sin4B = sin2B * sin2B;
  B0y = betapy + Math.sin(2 * betapy) * (.00252588685 - 1.49186E-5 * sin2B + 1.1904E-7 * sin4B);
  z0y = (b - 1E5 * (10 * Math.floor(1E-6 * b) + 5)) / (6378245 * Math.cos(B0y));
  sin2B0 = Math.sin(B0y) * Math.sin(B0y);
  sin4B0 = sin2B0 * sin2B0;
  sin6B0 = sin4B0 * sin2B0;
  ly = z0y * (1 - .0033467108 * sin2B0 - 5.6002E-6 * sin4B0 - 1.87E-8 * sin6B0 - z0y * z0y * (.16778975 + .16273586 * sin2B0 - 5.249E-4 * sin4B0 - 8.46E-6 * sin6B0 - z0y * z0y * (.0420025 + .1487407 *
    sin2B0 + .005942 * sin4B0 - 1.5E-5 * sin6B0 - z0y * z0y * (.01225 + .09477 * sin2B0 + .03282 * sin4B0 - 3.4E-4 * sin6B0 - z0y * z0y * (.0038 + .0524 * sin2B0 + .0482 * sin4B0 + .0032 * sin6B0)))));
  return 180 * (6 * (Math.floor(1E-6 * b) - .5) / 57.29577951 + ly) / 3.14159265358979
}

var bs = Array();

Twin3d.prototype.getBuilding = function() {

  var building =

    {
      "type": "FeatureCollection",
      "features": [{
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                0,
                0
              ],
              [
                72,
                0
              ],
              [
                72,
                25
              ],
              [
                0,
                25
              ],
              [
                0,
                0
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#00ff00",
          "fill-opacity": 0.5,
          "ID": "FLOOR-C1",
          "levelID": 0,
          "parentID": "MAIN"
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                31,
                25
              ],
              [
                41,
                25
              ],
              [
                41,
                51
              ],
              [
                31,
                51
              ],
              [
                31,
                25
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#80ff00",
          "fill-opacity": 0.5,
          "ID": "FLOOR-B1",
          "levelID": 0,
          "pathID": "MAIN"
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                0,
                51.00000000000001
              ],
              [
                0,
                76
              ],
              [
                72,
                76
              ],
              [
                72,
                51.00000000000001
              ],
              [
                0,
                51.00000000000001
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#c0c0c0",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#80ff80",
          "fill-opacity": 0.5,
          "ID": "FLOOR-A1",
          "levelID": 0,
          "parentID": "MAIN"
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                31,
                37
              ],
              [
                31,
                39
              ],
              [
                31.100000000000023,
                39
              ],
              [
                31.100000000000023,
                37
              ],
              [
                31,
                37
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#ff0000",
          "fill-opacity": 0.5,
          "ID": "DOOR-B1-1-1",
          "levelID": 1,
          "parentID": "HALL-B1-1",
          "pathID": "MAIN, HALL-B1-1",
          "IoTID": "",
          "height": "",
          "bottom": "",
          "comment": ""
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                35,
                25
              ],
              [
                37,
                25
              ],
              [
                37,
                25.1
              ],
              [
                35,
                25.1
              ],
              [
                35,
                25
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#ff0000",
          "fill-opacity": 0.5,
          "ID": "DOOR-B1-1-3",
          "parentID": "HALL-B1-1",
          "pathID": "HALL-B1-1, HALL-C1-1",
          "levelID": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                35,
                51
              ],
              [
                37,
                51
              ],
              [
                37,
                50.9
              ],
              [
                35,
                50.9
              ],
              [
                35,
                51
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#ff0000",
          "fill-opacity": 0.5,
          "ID": "DOOR-B1-1-2",
          "parentID": "HALL-B1-1",
          "pathID": "HALL-A1-1",
          "levelID": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                31.100000000000023,
                25.1
              ],
              [
                40.89999999999998,
                25.1
              ],
              [
                40.89999999999998,
                50.9
              ],
              [
                31.100000000000023,
                50.9
              ],
              [
                31.100000000000023,
                25.1
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#0080ff",
          "fill-opacity": 0.5,
          "ID": "HALL-B1-1",
          "parentID": "FLOOR-B1",
          "levelID": 1,
          "pathID": "DOOR-B1-1-1, DOOR-B1-1-2, DOOR-B1-1-3"
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                31,
                25
              ],
              [
                31,
                14
              ],
              [
                0.10000000000002274,
                14
              ],
              [
                0.10000000000002274,
                11
              ],
              [
                31,
                11
              ],
              [
                31,
                0.1
              ],
              [
                41,
                0.1
              ],
              [
                41,
                11
              ],
              [
                71.89999999999998,
                11
              ],
              [
                71.89999999999998,
                14
              ],
              [
                41,
                14
              ],
              [
                41,
                25
              ],
              [
                31,
                25
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#0080ff",
          "fill-opacity": 0.5,
          "ID": "HALL-C1-1",
          "parentID": "FLOOR-C1",
          "pathID": "DOOR-B1-1-3",
          "levelID": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                0.10000000000002274,
                24.9
              ],
              [
                10.899999999999977,
                24.9
              ],
              [
                10.899999999999977,
                14.1
              ],
              [
                0.10000000000002274,
                14.1
              ],
              [
                0.10000000000002274,
                24.9
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#0000ff",
          "fill-opacity": 0.5,
          "ID": "ROOM-C1-112",
          "parentID": "FLOOR-C1",
          "pathID": "DOOR-C1-112-1",
          "levelID": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                8,
                14
              ],
              [
                9.5,
                14
              ],
              [
                9.5,
                14.1
              ],
              [
                8,
                14.1
              ],
              [
                8,
                14
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#ff0000",
          "fill-opacity": 0.5,
          "ID": "DOOR-C1-112-1",
          "parentID": "ROOM-C1-112",
          "pathID": "ROOM-C1-112, HALL-C1-1",
          "levelID": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                11,
                24.9
              ],
              [
                21,
                24.9
              ],
              [
                21,
                14.1
              ],
              [
                11,
                14.1
              ],
              [
                11,
                24.9
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#0000ff",
          "fill-opacity": 0.5,
          "ID": "ROOM-C1-114",
          "parentID": "FLOOR-C1",
          "pathID": "DOOR-C1-114-1",
          "levelID": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                18.5,
                14.1
              ],
              [
                20,
                14.1
              ],
              [
                20,
                14
              ],
              [
                18.5,
                14
              ],
              [
                18.5,
                14.1
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#ff0000",
          "fill-opacity": 0.5,
          "ID": "DOOR-C1-114-1",
          "parentID": "ROOM-C1-114",
          "pathID": "ROOM-C1-114, HALL-C1-1",
          "levelID": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                21.100000000000023,
                24.9
              ],
              [
                30.899999999999977,
                24.9
              ],
              [
                30.899999999999977,
                14.1
              ],
              [
                21.100000000000023,
                14.1
              ],
              [
                21.100000000000023,
                24.9
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#0000ff",
          "fill-opacity": 0.5,
          "ID": "ROOM-C1-116",
          "parentID": "FLOOR-C1",
          "pathID": "DOOR-C1-116-1",
          "levelID": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                28.5,
                14.1
              ],
              [
                30,
                14.1
              ],
              [
                30,
                14
              ],
              [
                28.5,
                14
              ],
              [
                28.5,
                14.1
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#ff0000",
          "fill-opacity": 0.5,
          "ID": "DOOR-C1-116-1",
          "parentID": "ROOM-C1-116",
          "pathID": "ROOM-C1-116, HALL-C1-1",
          "levelID": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                0.10000000000002274,
                10.9
              ],
              [
                10.899999999999977,
                10.9
              ],
              [
                10.899999999999977,
                0.1
              ],
              [
                0.10000000000002274,
                0.1
              ],
              [
                0.10000000000002274,
                10.9
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#0000ff",
          "fill-opacity": 0.5,
          "ID": "ROOM-C1-111",
          "parentID": "FLOOR-C1",
          "pathID": "DOOR-C1-111-1",
          "levelID": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.5,
                11
              ],
              [
                9.5,
                10.9
              ],
              [
                8,
                10.9
              ],
              [
                8,
                11
              ],
              [
                9.5,
                11
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#ff0000",
          "fill-opacity": 0.5,
          "ID": "DOOR-C1-111-1",
          "parentID": "ROOM-C1-111",
          "pathID": "ROOM-C1-111, HALL-C1-1",
          "levelID": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                11,
                10.9
              ],
              [
                21,
                10.9
              ],
              [
                21,
                0.1
              ],
              [
                11,
                0.1
              ],
              [
                11,
                10.9
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#0000ff",
          "fill-opacity": 0.5,
          "ID": "ROOM-C1-113",
          "parentID": "FLOOR-C1",
          "pathID": "DOOR-C1-113-1",
          "levelID": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                20,
                10.9
              ],
              [
                20,
                11
              ],
              [
                18.5,
                11
              ],
              [
                18.5,
                10.9
              ],
              [
                20,
                10.9
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#ff0000",
          "fill-opacity": 0.5,
          "ID": "DOOR-C1-113-1",
          "parentID": "ROOM-C1-113",
          "pathID": "ROOM-C1-113, HALL-C1-1",
          "levelID": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                21.100000000000023,
                10.9
              ],
              [
                30.899999999999977,
                10.9
              ],
              [
                30.899999999999977,
                0.1
              ],
              [
                21.100000000000023,
                0.1
              ],
              [
                21.100000000000023,
                10.9
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#0000ff",
          "fill-opacity": 0.5,
          "ID": "ROOM-C1-115",
          "parentID": "FLOOR-C1",
          "pathID": "DOOR-C1-115-1",
          "levelID": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                28.5,
                10.9
              ],
              [
                28.5,
                11
              ],
              [
                30,
                11
              ],
              [
                30,
                10.9
              ],
              [
                28.5,
                10.9
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#ff0000",
          "fill-opacity": 0.5,
          "ID": "DOOR-C1-115-1",
          "parentID": "ROOM-C1-115",
          "pathID": "ROOM-C1-115, FLOOR-C1-1",
          "levelID": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                41.10000000000002,
                14.1
              ],
              [
                41.10000000000002,
                24.9
              ],
              [
                71.89999999999998,
                24.9
              ],
              [
                71.89999999999998,
                14.1
              ],
              [
                41.10000000000002,
                14.1
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#0000ff",
          "fill-opacity": 0.5,
          "ID": "ROOM-C1-118",
          "parentID": "FLOOR-C1",
          "pathID": "DOOR-C1-118-1",
          "levelID": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                41,
                15.5
              ],
              [
                41,
                17
              ],
              [
                41.10000000000002,
                17
              ],
              [
                41.10000000000002,
                15.5
              ],
              [
                41,
                15.5
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#ff0000",
          "fill-opacity": 0.5,
          "ID": "DOOR-C1-118-1",
          "parentID": "ROOM-C1-118",
          "pathID": "ROOM-C1-118, HALL-C1-1",
          "levelID": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                41.10000000000002,
                0.1
              ],
              [
                41.10000000000002,
                10.9
              ],
              [
                57,
                10.9
              ],
              [
                57,
                0.1
              ],
              [
                41.10000000000002,
                0.1
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#0000ff",
          "fill-opacity": 0.5,
          "ID": "ROOM-C1-117",
          "parentID": "FLOOR-C1",
          "pathID": "DOOR-C1-117-1",
          "levelID": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                41,
                9.5
              ],
              [
                41.10000000000002,
                9.5
              ],
              [
                41.10000000000002,
                8
              ],
              [
                41,
                8
              ],
              [
                41,
                9.5
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#ff0000",
          "fill-opacity": 0.5,
          "ID": "DOOR-C1-117-1",
          "parentID": "ROOM-C1-117",
          "pathID": "ROOM-C1-117, HALL-C1-1",
          "levelID": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                57.10000000000002,
                10.9
              ],
              [
                71.89999999999998,
                10.9
              ],
              [
                71.89999999999998,
                0.1
              ],
              [
                57.10000000000002,
                0.1
              ],
              [
                57.10000000000002,
                10.9
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#0000ff",
          "fill-opacity": 0.5,
          "ID": "ROOM-C1-119",
          "parentID": "FLOOR-C1",
          "pathID": "DOOR-C1-119-1",
          "levelID": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                59,
                10.9
              ],
              [
                59,
                11
              ],
              [
                60.5,
                11
              ],
              [
                60.5,
                10.9
              ],
              [
                59,
                10.9
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#ff0000",
          "fill-opacity": 0.5,
          "ID": "DOOR-C1-119-1",
          "parentID": "ROOM-C1-119",
          "pathID": "ROOM-C1-119, HALL-C1-1",
          "levelID": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                31,
                51
              ],
              [
                31,
                61
              ],
              [
                0.10000000000002274,
                61
              ],
              [
                0.10000000000002274,
                64
              ],
              [
                71.89999999999998,
                64
              ],
              [
                71.89999999999998,
                61
              ],
              [
                41,
                61
              ],
              [
                41,
                51
              ],
              [
                31,
                51
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#0080ff",
          "fill-opacity": 0.5,
          "ID": "HALL-A1-1",
          "parentID": "FLOOR-A1",
          "pathID": "DOOR-B1-1-2, DOOR-A1-101-1, DOOR-A1-102-1, DOOR-A1-103-1, DOOR-A1-104-1, DOOR-A1-105-1, DOOR-A1-106-1, DOOR-A1-107-1",
          "levelID": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                0.10000000000002274,
                51.1
              ],
              [
                0.10000000000002274,
                60.9
              ],
              [
                16,
                60.9
              ],
              [
                16,
                51.1
              ],
              [
                0.10000000000002274,
                51.1
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#0000a0",
          "fill-opacity": 0.5,
          "ID": "ROOM-A1-101",
          "parentID": "FLOOR-A1",
          "pathID": "DOOR-A1-101-1",
          "levelID": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                12.5,
                60.9
              ],
              [
                12.5,
                61
              ],
              [
                14,
                61
              ],
              [
                14,
                60.9
              ],
              [
                12.5,
                60.9
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#ff0000",
          "fill-opacity": 0.5,
          "ID": "DOOR-A1-101-1",
          "parentID": "ROOM-A1-101",
          "pathID": "ROOM-A1-101, HALL-A1-1",
          "levelID": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                16.100000000000023,
                51.1
              ],
              [
                16.100000000000023,
                60.9
              ],
              [
                30.899999999999977,
                60.9
              ],
              [
                30.899999999999977,
                51.1
              ],
              [
                16.100000000000023,
                51.1
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#0000a0",
          "fill-opacity": 0.5,
          "ID": "ROOM-A1-103",
          "parentID": "FLOOR-A1",
          "pathID": "DOOR-A1-103-1",
          "levelID": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                28,
                61
              ],
              [
                28,
                60.9
              ],
              [
                26.5,
                60.9
              ],
              [
                26.5,
                61
              ],
              [
                28,
                61
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#ff0000",
          "fill-opacity": 0.5,
          "ID": "DOOR-A1-103-1",
          "parentID": "ROOM-A1-103",
          "pathID": "ROOM-A1-103, HALL-A1-1",
          "levelID": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                41.10000000000002,
                51.1
              ],
              [
                41.10000000000002,
                60.9
              ],
              [
                56,
                60.9
              ],
              [
                56,
                51.1
              ],
              [
                41.10000000000002,
                51.1
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#0000a0",
          "fill-opacity": 0.5,
          "ID": "ROOM-A1-105",
          "parentID": "FLOOR-A1",
          "pathID": "DOOR-A1-105-1",
          "levelID": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                43,
                60.9
              ],
              [
                43,
                61
              ],
              [
                44.5,
                61
              ],
              [
                44.5,
                60.9
              ],
              [
                43,
                60.9
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#ff0000",
          "fill-opacity": 0.5,
          "ID": "DOOR-A1-105-1",
          "parentID": "ROOM-A1-105",
          "pathID": "ROOM-A1-105, HALL-A1-1",
          "levelID": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                56.10000000000002,
                51.1
              ],
              [
                56.10000000000002,
                60.9
              ],
              [
                71.89999999999998,
                60.9
              ],
              [
                71.89999999999998,
                51.1
              ],
              [
                56.10000000000002,
                51.1
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#0000a0",
          "fill-opacity": 0.5,
          "ID": "ROOM-A1-107",
          "parentID": "FLOOR-A1",
          "pathID": "DOOR-A1-107-1",
          "levelID": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                58,
                60.9
              ],
              [
                61.5,
                60.9
              ],
              [
                61.5,
                61
              ],
              [
                58,
                61
              ],
              [
                58,
                60.9
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#ff0000",
          "fill-opacity": 0.5,
          "ID": "DOOR-A1-107-1",
          "parentID": "ROOM-A1-107",
          "pathID": "ROOM-A1-107, HALL-A1-1",
          "levelID": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                0.10000000000002274,
                64.1
              ],
              [
                0.10000000000002274,
                75.9
              ],
              [
                24,
                75.9
              ],
              [
                24,
                64.1
              ],
              [
                0.10000000000002274,
                64.1
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#0000a0",
          "fill-opacity": 0.5,
          "ID": "ROOM-A1-102",
          "parentID": "FLOOR-A1",
          "pathID": "DOOR-A1-102-1",
          "levelID": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                17,
                64
              ],
              [
                17,
                64.1
              ],
              [
                18.5,
                64.1
              ],
              [
                18.5,
                64
              ],
              [
                17,
                64
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#ff0000",
          "fill-opacity": 0.5,
          "ID": "DOOR-A1-102-1",
          "parentID": "ROOM-A1-102",
          "pathID": "ROOM-A1-102, HALL-A1-1",
          "levelID": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                24.100000000000023,
                64.1
              ],
              [
                24.100000000000023,
                75.9
              ],
              [
                50,
                75.9
              ],
              [
                50,
                64.1
              ],
              [
                24.100000000000023,
                64.1
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#0000a0",
          "fill-opacity": 0.5,
          "ID": "ROOM-A1-104",
          "parentID": "FLOOR-A1",
          "pathID": "DOOR-A1-104-1",
          "levelID": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                33.5,
                64
              ],
              [
                33.5,
                64.1
              ],
              [
                35,
                64.1
              ],
              [
                35,
                64
              ],
              [
                33.5,
                64
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#ff0000",
          "fill-opacity": 0.5,
          "ID": "DOOR-A1-104-1",
          "parentID": "ROOM-A1-104",
          "pathID": "ROOM-A1-104, HALL-A1-1",
          "levelID": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                50.10000000000002,
                64.1
              ],
              [
                50.10000000000002,
                75.9
              ],
              [
                71.89999999999998,
                75.9
              ],
              [
                71.89999999999998,
                64.1
              ],
              [
                50.10000000000002,
                64.1
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#0000a0",
          "fill-opacity": 0.5,
          "ID": "ROOM-A1-106",
          "parentID": "FLOOR-A1",
          "pathID": "DOOR-A1-106-1",
          "levelID": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                53,
                64
              ],
              [
                53,
                64.1
              ],
              [
                54.5,
                64.1
              ],
              [
                54.5,
                64
              ],
              [
                53,
                64
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#ff0000",
          "fill-opacity": 0.5,
          "ID": "DOOR-A1-106-1",
          "parentID": "ROOM-A1-106",
          "pathID": "ROOM-A1-106, HALL-A1-1",
          "levelID": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                0.10000000000002274,
                0.1
              ],
              [
                2.1000000000000227,
                0.1
              ],
              [
                2.1000000000000227,
                1.5
              ],
              [
                0.10000000000002274,
                1.5
              ],
              [
                0.10000000000002274,
                0.1
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#ff0080",
          "fill-opacity": 0.5,
          "ID": "BRD-C1-111-1",
          "parentID": "ROOM-C1-111",
          "pathID": "ROOM-C1-111",
          "levelID": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                18,
                0.1
              ],
              [
                21,
                0.1
              ],
              [
                21,
                1.5
              ],
              [
                18,
                1.5
              ],
              [
                18,
                0.1
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#ff0080",
          "fill-opacity": 0.5,
          "ID": "BRD-C1-113-1",
          "parentID": "ROOM-C1-113",
          "pathID": "ROOM-C1-113",
          "levelID": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                30.899999999999977,
                0.1
              ],
              [
                30.899999999999977,
                2
              ],
              [
                30,
                2
              ],
              [
                30,
                0.1
              ],
              [
                30.899999999999977,
                0.1
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#ff0080",
          "fill-opacity": 0.5,
          "ID": "BRD-C1-115-1",
          "parentID": "ROOM-C1-115",
          "pathID": "ROOM-C1-115",
          "levelID": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                57,
                0.1
              ],
              [
                57,
                3
              ],
              [
                56,
                3
              ],
              [
                56,
                0.1
              ],
              [
                57,
                0.1
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#ff0080",
          "fill-opacity": 0.5,
          "ID": "BRD-C1-117-1",
          "parentID": "ROOM-C1-117",
          "pathID": "ROOM-C1-117",
          "levelID": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                57.10000000000002,
                0.1
              ],
              [
                59,
                0.1
              ],
              [
                59,
                1
              ],
              [
                57.10000000000002,
                1
              ],
              [
                57.10000000000002,
                0.1
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#ff0080",
          "fill-opacity": 0.5,
          "ID": "BRD-C1-119-1",
          "parentID": "ROOM-C1-119",
          "pathID": "ROOM-C1-119",
          "levelID": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                71.89999999999998,
                24.9
              ],
              [
                68,
                24.9
              ],
              [
                68,
                24
              ],
              [
                71.89999999999998,
                24
              ],
              [
                71.89999999999998,
                24.9
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#ff0080",
          "fill-opacity": 0.5,
          "ID": "BRD-C1-118-2",
          "parentID": "ROOM-C1-118",
          "pathID": "ROOM-C1-118",
          "levelID": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                71.89999999999998,
                14.1
              ],
              [
                71.89999999999998,
                16
              ],
              [
                70,
                16
              ],
              [
                70,
                14.1
              ],
              [
                71.89999999999998,
                14.1
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#ff0080",
          "fill-opacity": 0.5,
          "ID": "BRD-C1-118-1",
          "parentID": "ROOM-C1-118",
          "pathID": "ROOM-C1-118",
          "levelID": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                40.89999999999998,
                44
              ],
              [
                40.89999999999998,
                46
              ],
              [
                40,
                46
              ],
              [
                40,
                44
              ],
              [
                40.89999999999998,
                44
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#ff0080",
          "fill-opacity": 0.5,
          "ID": "BRD-B1-1-1",
          "parentID": "HALL-B1-1",
          "pathID": "HALL-B1-1",
          "levelID": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                0.10000000000002274,
                51.1
              ],
              [
                0.10000000000002274,
                52
              ],
              [
                1,
                52
              ],
              [
                1,
                51.1
              ],
              [
                0.10000000000002274,
                51.1
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#ff0080",
          "fill-opacity": 0.5,
          "ID": "BRD-A1-101-1",
          "parentID": "ROOM-A1-101",
          "pathID": "ROOM-A1-101",
          "levelID": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                16.100000000000023,
                51.1
              ],
              [
                18,
                51.1
              ],
              [
                18,
                52
              ],
              [
                16.100000000000023,
                52
              ],
              [
                16.100000000000023,
                51.1
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#ff0080",
          "fill-opacity": 0.5,
          "ID": "BRD-A1-103",
          "parentID": "ROOM-A1-103",
          "pathID": "ROOM-A1-103",
          "levelID": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                56,
                51.1
              ],
              [
                56,
                52
              ],
              [
                55,
                52
              ],
              [
                55,
                51.1
              ],
              [
                56,
                51.1
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#ff0080",
          "fill-opacity": 0.5,
          "ID": "BRD-A1-105-1",
          "parentID": "ROOM-A1-105",
          "pathID": "ROOM-A1-105",
          "levelID": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                56.10000000000002,
                51.1
              ],
              [
                58,
                51.1
              ],
              [
                58,
                52
              ],
              [
                56.10000000000002,
                52
              ],
              [
                56.10000000000002,
                51.1
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#ff0080",
          "fill-opacity": 0.5,
          "ID": "BRD-A1-107-1",
          "parentID": "ROOM-A1-107",
          "pathID": "ROOM-A1-107",
          "levelID": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                0.10000000000002274,
                75.9
              ],
              [
                1,
                75.9
              ],
              [
                1,
                75
              ],
              [
                0.10000000000002274,
                75
              ],
              [
                0.10000000000002274,
                75.9
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#ff0080",
          "fill-opacity": 0.5,
          "ID": "BRD-A1-102-1",
          "parentID": "ROOM-A1-102",
          "pathID": "ROOM-A1-102",
          "levelID": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                0.10000000000002274,
                74.5
              ],
              [
                1,
                74.5
              ],
              [
                1,
                73
              ],
              [
                0.10000000000002274,
                73
              ],
              [
                0.10000000000002274,
                74.5
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#ff0080",
          "fill-opacity": 0.5,
          "ID": "BRD-A1-102-2",
          "parentID": "ROOM-A1-102",
          "pathID": "ROOM-A1-102",
          "levelID": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                24.100000000000023,
                75.9
              ],
              [
                28,
                75.9
              ],
              [
                28,
                75
              ],
              [
                24.100000000000023,
                75
              ],
              [
                24.100000000000023,
                75.9
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#ff0080",
          "fill-opacity": 0.5,
          "ID": "BRD-A1-104-1",
          "parentID": "ROOM-A1-104",
          "pathID": "ROOM-A1-104",
          "levelID": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                30,
                75.9
              ],
              [
                30,
                75
              ],
              [
                32,
                75
              ],
              [
                32,
                75.9
              ],
              [
                30,
                75.9
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#ff0080",
          "fill-opacity": 0.5,
          "ID": "BRD-A1-104-2",
          "parentID": "ROOM-A1-104",
          "pathID": "ROOM-A1-104",
          "levelID": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                71.89999999999998,
                75.9
              ],
              [
                71.89999999999998,
                74
              ],
              [
                71,
                74
              ],
              [
                71,
                75.9
              ],
              [
                71.89999999999998,
                75.9
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#ff0080",
          "fill-opacity": 0.5,
          "ID": "BRD-A1-106-2",
          "parentID": "ROOM-A1-106",
          "pathID": "ROOM-A1-106",
          "levelID": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                69,
                75.9
              ],
              [
                69,
                75
              ],
              [
                70.5,
                75
              ],
              [
                70.5,
                75.9
              ],
              [
                69,
                75.9
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#ff0080",
          "fill-opacity": 0.5,
          "ID": "BRD-A1-106-1",
          "parentID": "ROOM-A1-106",
          "pathID": "ROOM-A1-106",
          "levelID": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                71.89999999999998,
                63.5
              ],
              [
                70,
                63.5
              ],
              [
                70,
                61.5
              ],
              [
                71.89999999999998,
                61.5
              ],
              [
                71.89999999999998,
                63.5
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#ff0080",
          "fill-opacity": 0.5,
          "ID": "BRD-A1-1-1",
          "parentID": "HALL-A1-1",
          "pathID": "HALL-A1-1",
          "levelID": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                32,
                0.1
              ],
              [
                32,
                1
              ],
              [
                37,
                1
              ],
              [
                37,
                0.1
              ],
              [
                32,
                0.1
              ]
            ]
          ]
        },
        "properties": {
          "stroke": "#555555",
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "#ff0080",
          "fill-opacity": 0.5,
          "ID": "BRD-C1-1-1",
          "parentID": "HALL-C1-1",
          "pathID": "HALL-C1-1",
          "levelID": 2
        }
      }]
    }



  ;


  building.features.forEach(function(el) {
    el.geometry.coordinates[0].forEach(function(co) {
      let multX = 0.92;
      let multY = 0.65;
      let mTX = co[1] * multX;
      let mTY = co[0] * multY || 0.000000000000001;
      let l = Math.sqrt(mTX * mTX + mTY * mTY);
      let alph = Math.atan(mTY / mTX);
      let mX = l * Math.cos(-0.16 + alph);
      let mY = l * Math.sin(-0.16 + alph);

      let x0 = 5978089;
      let y0 = 5545628;

      let x = mytograd(x0 + mX, y0 + mY);
      let y = mxtograd(x0 + mX, y0 + mY);

      co[0] = x;
      co[1] = y;
    })
  });



  building.features.forEach(function(el) {
    delete el.properties.stroke;
    delete el.properties["stroke-width"];
    delete el.properties["stroke-opacity"];
    delete el.properties.fill;
    delete el.properties["fill-opacity"];
    if (!el.properties.parentID) el.properties.parentID = "";
    if (!el.properties.pathID) el.properties.pathID = "";
    if (!el.properties.IoTIDs) el.properties.IoTIDs = "";

    if (el.properties.ID.substring(0, 5) == "FLOOR") {


      el.properties.IoTIDs += "IOT-SECURUTY-" + el.properties.ID + ', ';
      el.properties.IoTIDs += "IOT-FIRE-" + el.properties.ID + ', ';
    }
    if ((el.properties.ID.substring(0, 4) == "HALL") ||
      (el.properties.ID.substring(0, 4) == "ROOM")) {
      el.properties.IoTIDs += "IOT-SECURUTY-" + el.properties.ID + ', ';
      el.properties.IoTIDs += "IOT-TEMP-" + el.properties.ID + ', ';
      el.properties.IoTIDs += "IOT-LIGHT-" + el.properties.ID + ', ';
      el.properties.IoTIDs += "IOT-FIRE-" + el.properties.ID + ', ';
      el.properties.IoTIDs += "IOT-WINDOWLOCK-" + el.properties.ID + ', ';
    }
    if (el.properties.ID.substring(0, 4) == "DOOR") {
      el.properties.IoTIDs += "IOT-LOCK-" + el.properties.ID + ', ';
      el.properties.IoTIDs += "IOT-OPEN-" + el.properties.ID + ', ';
    }
    if (el.properties.ID.substring(0, 3) == "BRD") {
      if (Math.random() > 0.5) el.properties.IoTIDs += "IOT-TEMP-" + el.properties.ID + ', ';
      el.properties.IoTIDs += "IOT-FIRE-" + el.properties.ID + ', ';
      if (Math.random() > 0.5) el.properties.IoTIDs += "IOT-ELECTRO-" + el.properties.ID + ', ';
      el.properties.IoTIDs += "IOT-ALERT-" + el.properties.ID + ', ';
      if (Math.random() > 0.5) el.properties.IoTIDs += "IOT-PRESSURE-" + el.properties.ID + ', ';
      if (Math.random() > 0.5) el.properties.IoTIDs += "IOT-SPEED-" + el.properties.ID + ', ';
    }

  });
  bs[0] = JSON.parse(JSON.stringify(building));
  bs[0].features = Array();
  for (var i = 1; i <= 5; i++) {
    building.features.forEach(function(el) {
      el.properties.floor = i;

      bj = JSON.stringify(el);
      bj = bj.replace(new RegExp('A1', 'g'), i + 'A');
      bj = bj.replace(new RegExp('B1', 'g'), i + 'B');
      bj = bj.replace(new RegExp('C1', 'g'), i + 'C');

      bs[0].features.push(JSON.parse(bj));

    });

  }


  //console.log(JSON.stringify(buildings,undefined,2));
  var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(bs));
  var downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", "full.json");
  downloadAnchorNode.click();
  downloadAnchorNode.remove();

  return bs;



}