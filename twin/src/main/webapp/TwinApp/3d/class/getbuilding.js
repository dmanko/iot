var bs = Array();

Twin3d.prototype.getBuilding = function() {

  var bs =
    [{
      "type": "FeatureCollection",
      "features": [{
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69458023860813, 53.92672856295858],
              [27.695284616414, 53.926791476443164],
              [27.695232230003917, 53.9269957833953],
              [27.694527848831473, 53.92693286961594],
              [27.69458023860813, 53.92672856295858]
            ]
          ]
        },
        "properties": {
          "ID": "FLOOR-1C",
          "levelID": 0,
          "parentID": "MAIN",
          "pathID": "",
          "IoTIDs": "IOT-SECURUTY-FLOOR-1C, IOT-FIRE-FLOOR-1C, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694831123803162, 53.92695995800047],
              [27.694928954521565, 53.92696869602537],
              [27.694874470613932, 53.92718117509366],
              [27.69477663940924, 53.92717243702618],
              [27.694831123803162, 53.92695995800047]
            ]
          ]
        },
        "properties": {
          "ID": "FLOOR-1B",
          "levelID": 0,
          "pathID": "MAIN",
          "parentID": "",
          "IoTIDs": "IOT-SECURUTY-FLOOR-1B, IOT-FIRE-FLOOR-1B, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694473362930083, 53.92714534850966],
              [27.694420972127094, 53.927349655109445],
              [27.695125360167474, 53.92741256949013],
              [27.695177747603804, 53.92720826259557],
              [27.694473362930083, 53.92714534850966]
            ]
          ]
        },
        "properties": {
          "ID": "FLOOR-1A",
          "levelID": 0,
          "parentID": "MAIN",
          "pathID": "",
          "IoTIDs": "IOT-SECURUTY-FLOOR-1A, IOT-FIRE-FLOOR-1A, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694805977227436, 53.92705802524689],
              [27.694801786120216, 53.92707436978733],
              [27.694802764429806, 53.9270744571682],
              [27.69480695553666, 53.92705811262773],
              [27.694805977227436, 53.92705802524689]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-1B-1-1",
          "levelID": 1,
          "parentID": "HALL-1B-1",
          "pathID": "MAIN, HALL-1B-1",
          "IoTID": "",
          "height": "",
          "bottom": "",
          "comment": "",
          "IoTIDs": "IOT-LOCK-DOOR-1B-1-1, IOT-OPEN-DOOR-1B-1-1, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694870256085697, 53.926963453220004],
              [27.69488982222937, 53.92696520082499],
              [27.694889612676178, 53.92696601805217],
              [27.694870046532127, 53.92696427044715],
              [27.694870256085697, 53.926963453220004]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-1B-1-3",
          "parentID": "HALL-1B-1",
          "pathID": "HALL-1B-1, HALL-1C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-1B-1-3, IOT-OPEN-DOOR-1B-1-3, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694815771886304, 53.927175932262756],
              [27.694835338127245, 53.927177679876245],
              [27.69483554768252, 53.92717686264919],
              [27.69481598144196, 53.92717511503572],
              [27.694815771886304, 53.927175932262756]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-1B-1-2",
          "parentID": "HALL-1B-1",
          "pathID": "HALL-1A-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-1B-1-2, IOT-OPEN-DOOR-1B-1-2, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69483189255584, 53.92696086260819],
              [27.694927766661706, 53.926969425872755],
              [27.694873701856245, 53.92718027048626],
              [27.694777827277477, 53.92717170718028],
              [27.69483189255584, 53.92696086260819]
            ]
          ]
        },
        "properties": {
          "ID": "HALL-1B-1",
          "parentID": "FLOOR-1B",
          "levelID": 1,
          "pathID": "DOOR-1B-1-1, DOOR-1B-1-2, DOOR-1B-1-3, HALL-2B-1, ",
          "IoTIDs": "IOT-SECURUTY-HALL-1B-1, IOT-TEMP-HALL-1B-1, IOT-LIGHT-HALL-1B-1, IOT-FIRE-HALL-1B-1, IOT-WINDOWLOCK-HALL-1B-1, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694831123803162, 53.92695995800047],
              [27.694854174729088, 53.92687006301885],
              [27.694551878698864, 53.926843062073125],
              [27.694558165471502, 53.92681854527419],
              [27.694860461328343, 53.92684554620475],
              [27.694883302578003, 53.92675646844338],
              [27.694981132830694, 53.92676520642751],
              [27.694958291784896, 53.92685428420672],
              [27.695260588149534, 53.926881284128434],
              [27.69525430177976, 53.92690580096263],
              [27.69495200524175, 53.92687880102576],
              [27.694928954521565, 53.92696869602537],
              [27.694831123803162, 53.92695995800047]
            ]
          ]
        },
        "properties": {
          "ID": "HALL-1C-1",
          "parentID": "FLOOR-1C",
          "pathID": "DOOR-1B-1-3",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-HALL-1C-1, IOT-TEMP-HALL-1C-1, IOT-LIGHT-HALL-1C-1, IOT-FIRE-HALL-1C-1, IOT-WINDOWLOCK-HALL-1C-1, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69452903669731, 53.9269321397725],
              [27.694634693738802, 53.92694157710217],
              [27.694657325962993, 53.92685331661031],
              [27.694551669139653, 53.926843879299746],
              [27.69452903669731, 53.9269321397725]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-1C-112",
          "parentID": "FLOOR-1C",
          "pathID": "DOOR-1C-112-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-1C-112, IOT-TEMP-ROOM-1C-112, IOT-LIGHT-ROOM-1C-112, IOT-FIRE-ROOM-1C-112, IOT-WINDOWLOCK-ROOM-1C-112, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694629164702448, 53.92684996530005],
              [27.694643839262934, 53.92685127603372],
              [27.694643629705467, 53.92685209326049],
              [27.694628955144715, 53.9268507825268],
              [27.694629164702448, 53.92684996530005]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-1C-112-1",
          "parentID": "ROOM-1C-112",
          "pathID": "ROOM-1C-112, HALL-1C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-1C-112-1, IOT-OPEN-DOOR-1C-112-1, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694635672044964, 53.92694166448441],
              [27.69473350268113, 53.9269504026688],
              [27.694756134701297, 53.926862142159095],
              [27.69465830426714, 53.92685340399239],
              [27.694635672044964, 53.92694166448441]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-1C-114",
          "parentID": "FLOOR-1C",
          "pathID": "DOOR-1C-114-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-1C-114, IOT-TEMP-ROOM-1C-114, IOT-LIGHT-ROOM-1C-114, IOT-FIRE-ROOM-1C-114, IOT-WINDOWLOCK-ROOM-1C-114, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69473167708899, 53.926859957624906],
              [27.694746351656086, 53.926861268346016],
              [27.694746561211566, 53.92686045111908],
              [27.69473188664477, 53.92685914039799],
              [27.69473167708899, 53.926859957624906]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-1C-114-1",
          "parentID": "ROOM-1C-114",
          "pathID": "ROOM-1C-114, HALL-1C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-1C-114-1, IOT-OPEN-DOOR-1C-114-1, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69473448098769, 53.926950490050245],
              [27.694830355050517, 53.926959053392736],
              [27.694852986870718, 53.926870792865515],
              [27.694757113005846, 53.92686222954037],
              [27.69473448098769, 53.926950490050245]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-1C-116",
          "parentID": "FLOOR-1C",
          "pathID": "DOOR-1C-116-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-1C-116, IOT-TEMP-ROOM-1C-116, IOT-LIGHT-ROOM-1C-116, IOT-FIRE-ROOM-1C-116, IOT-WINDOWLOCK-ROOM-1C-116, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.6948295075533, 53.92686869573175],
              [27.69484418212642, 53.9268700064409],
              [27.694844391680036, 53.926869189213775],
              [27.694829717107197, 53.926867878504666],
              [27.6948295075533, 53.92686869573175]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-1C-116-1",
          "parentID": "ROOM-1C-116",
          "pathID": "ROOM-1C-116, HALL-1C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-1C-116-1, IOT-OPEN-DOOR-1C-116-1, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694558375030457, 53.92681772804754],
              [27.694664031789173, 53.926827165352464],
              [27.694686663891662, 53.92673890485379],
              [27.694581007351104, 53.926729467567974],
              [27.694558375030457, 53.92681772804754]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-1C-111",
          "parentID": "FLOOR-1C",
          "pathID": "DOOR-1C-111-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-1C-111, IOT-TEMP-ROOM-1C-111, IOT-LIGHT-ROOM-1C-111, IOT-FIRE-ROOM-1C-111, IOT-WINDOWLOCK-ROOM-1C-111, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69465012598283, 53.92682675923016],
              [27.69465033554003, 53.926825942003376],
              [27.694635660988244, 53.92682463127047],
              [27.69463545143076, 53.92682544849723],
              [27.69465012598283, 53.92682675923016]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-1C-111-1",
          "parentID": "ROOM-1C-111",
          "pathID": "ROOM-1C-111, HALL-1C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-1C-111-1, IOT-OPEN-DOOR-1C-111-1, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694665010092706, 53.926827252734476],
              [27.694762840467032, 53.92683599089595],
              [27.694785472365506, 53.92674773037942],
              [27.694687642193177, 53.92673899223562],
              [27.694665010092706, 53.926827252734476]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-1C-113",
          "parentID": "FLOOR-1C",
          "pathID": "DOOR-1C-113-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-1C-113, IOT-TEMP-ROOM-1C-113, IOT-LIGHT-ROOM-1C-113, IOT-FIRE-ROOM-1C-113, IOT-WINDOWLOCK-ROOM-1C-113, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694753057427786, 53.9268351170834],
              [27.69475284787255, 53.926835934310354],
              [27.694738173314168, 53.926834623590004],
              [27.694738382869684, 53.92683380636308],
              [27.694753057427786, 53.9268351170834]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-1C-113-1",
          "parentID": "ROOM-1C-113",
          "pathID": "ROOM-1C-113, HALL-1C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-1C-113-1, IOT-OPEN-DOOR-1C-113-1, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694763818770973, 53.92683607827716],
              [27.694859692577186, 53.926844641597185],
              [27.69488232427569, 53.92675638106313],
              [27.69478645066743, 53.92674781776045],
              [27.694763818770973, 53.92683607827716]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-1C-115",
          "parentID": "FLOOR-1C",
          "pathID": "DOOR-1C-115-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-1C-115, IOT-TEMP-ROOM-1C-115, IOT-LIGHT-ROOM-1C-115, IOT-FIRE-ROOM-1C-115, IOT-WINDOWLOCK-ROOM-1C-115, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694836213274144, 53.926842544464684],
              [27.694836003720486, 53.92684336169178],
              [27.694850678284908, 53.92684467240016],
              [27.694850887838275, 53.926843855173026],
              [27.694836213274144, 53.926842544464684]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-1C-115-1",
          "parentID": "ROOM-1C-115",
          "pathID": "ROOM-1C-115, FLOOR-1C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-1C-115-1, IOT-OPEN-DOOR-1C-115-1, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694952773995528, 53.926879705632714],
              [27.69493014238137, 53.926967966177976],
              [27.695231461241956, 53.92699487879017],
              [27.69525409223398, 53.92690661819043],
              [27.694952773995528, 53.926879705632714]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-1C-118",
          "parentID": "FLOOR-1C",
          "pathID": "DOOR-1C-118-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-1C-118, IOT-TEMP-ROOM-1C-118, IOT-LIGHT-ROOM-1C-118, IOT-FIRE-ROOM-1C-118, IOT-WINDOWLOCK-ROOM-1C-118, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694948861967458, 53.926891059435114],
              [27.694945718691354, 53.92690331784438],
              [27.694946696997253, 53.926903405224095],
              [27.694949840273075, 53.926891146814796],
              [27.694948861967458, 53.926891059435114]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-1C-118-1",
          "parentID": "ROOM-1C-118",
          "pathID": "ROOM-1C-118, HALL-1C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-1C-118-1, IOT-OPEN-DOOR-1C-118-1, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694982111133434, 53.92676529380695],
              [27.694959479640964, 53.92685355435903],
              [27.69511503014727, 53.92686744761629],
              [27.69513766131856, 53.92677918703609],
              [27.694982111133434, 53.92676529380695]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-1C-117",
          "parentID": "FLOOR-1C",
          "pathID": "DOOR-1C-117-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-1C-117, IOT-TEMP-ROOM-1C-117, IOT-LIGHT-ROOM-1C-117, IOT-FIRE-ROOM-1C-117, IOT-WINDOWLOCK-ROOM-1C-117, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694961435053756, 53.926842025797065],
              [27.69496241335825, 53.926842113176654],
              [27.694965556625018, 53.92682985476686],
              [27.694964578320803, 53.92682976738729],
              [27.694961435053756, 53.926842025797065]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-1C-117-1",
          "parentID": "ROOM-1C-117",
          "pathID": "ROOM-1C-117, HALL-1C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-1C-117-1, IOT-OPEN-DOOR-1C-117-1, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69511600845267, 53.92686753499463],
              [27.69526079769506, 53.92688046690061],
              [27.695283428565386, 53.92679220629405],
              [27.69513863962194, 53.926779274414244],
              [27.69511600845267, 53.92686753499463]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-1C-119",
          "parentID": "FLOOR-1C",
          "pathID": "DOOR-1C-119-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-1C-119, IOT-TEMP-ROOM-1C-119, IOT-LIGHT-ROOM-1C-119, IOT-FIRE-ROOM-1C-119, IOT-WINDOWLOCK-ROOM-1C-119, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.695134596255894, 53.92686919518154],
              [27.695134386707938, 53.92687001240913],
              [27.695149061290742, 53.92687132308099],
              [27.69514927083841, 53.92687050585337],
              [27.695134596255894, 53.92686919518154]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-1C-119-1",
          "parentID": "ROOM-1C-119",
          "pathID": "ROOM-1C-119, HALL-1C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-1C-119-1, IOT-OPEN-DOOR-1C-119-1, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69477663940924, 53.92717243702618],
              [27.694755683728236, 53.927254159720256],
              [27.694453384981728, 53.92722715853666],
              [27.69444709808835, 53.927251675328826],
              [27.69514952788377, 53.92731441480625],
              [27.695155814374278, 53.92728989797882],
              [27.69485351511996, 53.92726289780411],
              [27.694874470613932, 53.92718117509366],
              [27.69477663940924, 53.92717243702618]
            ]
          ]
        },
        "properties": {
          "ID": "HALL-1A-1",
          "parentID": "FLOOR-1A",
          "pathID": "DOOR-1B-1-2, DOOR-1A-101-1, DOOR-1A-102-1, DOOR-1A-103-1, DOOR-1A-104-1, DOOR-1A-105-1, DOOR-1A-106-1, DOOR-1A-107-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-HALL-1A-1, IOT-TEMP-HALL-1A-1, IOT-LIGHT-HALL-1A-1, IOT-FIRE-HALL-1A-1, IOT-WINDOWLOCK-HALL-1A-1, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694474131678486, 53.927146253119666],
              [27.69445359454472, 53.927226341310245],
              [27.694609146276015, 53.92724023521809],
              [27.694629683118347, 53.927160147001985],
              [27.694474131678486, 53.927146253119666]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-1A-101",
          "parentID": "FLOOR-1A",
          "pathID": "DOOR-1A-101-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-1A-101, IOT-TEMP-ROOM-1A-101, IOT-LIGHT-ROOM-1A-101, IOT-FIRE-ROOM-1A-101, IOT-WINDOWLOCK-ROOM-1A-101, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694574905320145, 53.927237176828044],
              [27.69457469575948, 53.92723799405465],
              [27.694589370454526, 53.92723930479447],
              [27.694589580014924, 53.92723848756783],
              [27.694574905320145, 53.927237176828044]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-1A-101-1",
          "parentID": "ROOM-1A-101",
          "pathID": "ROOM-1A-101, HALL-1A-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-1A-101-1, IOT-OPEN-DOOR-1A-101-1, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694630661429603, 53.92716023438425],
              [27.694610124589108, 53.92724032260052],
              [27.694754914971757, 53.927253255112085],
              [27.69477545154098, 53.927173166872066],
              [27.694630661429603, 53.92716023438425]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-1A-103",
          "parentID": "FLOOR-1A",
          "pathID": "DOOR-1A-103-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-1A-103, IOT-TEMP-ROOM-1A-103, IOT-LIGHT-ROOM-1A-103, IOT-FIRE-ROOM-1A-103, IOT-WINDOWLOCK-ROOM-1A-103, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694726334318553, 53.92725153827951],
              [27.694726543876335, 53.92725072105265],
              [27.694711869173123, 53.92724941032962],
              [27.694711659615074, 53.92725022755647],
              [27.694726334318553, 53.92725153827951]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-1A-103-1",
          "parentID": "ROOM-1A-103",
          "pathID": "ROOM-1A-103, HALL-1A-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-1A-103-1, IOT-OPEN-DOOR-1A-103-1, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694875239371655, 53.92718207970107],
              [27.694854702989407, 53.92726216795746],
              [27.695000471835414, 53.9272751875529],
              [27.69502100794456, 53.92719509927259],
              [27.694875239371655, 53.92718207970107]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-1A-105",
          "parentID": "FLOOR-1A",
          "pathID": "DOOR-1A-105-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-1A-105, IOT-TEMP-ROOM-1A-105, IOT-LIGHT-ROOM-1A-105, IOT-FIRE-ROOM-1A-105, IOT-WINDOWLOCK-ROOM-1A-105, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694873290958085, 53.92726382818419],
              [27.694873081403127, 53.9272646454113],
              [27.694887756116547, 53.92726595611461],
              [27.694887965671242, 53.92726513888746],
              [27.694873290958085, 53.92726382818419]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-1A-105-1",
          "parentID": "ROOM-1A-105",
          "pathID": "ROOM-1A-105, HALL-1A-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-1A-105-1, IOT-OPEN-DOOR-1A-105-1, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.695021986257437, 53.927195186651666],
              [27.695001450150116, 53.92727527493213],
              [27.695156023923833, 53.92728908075123],
              [27.69517655974155, 53.92720899244541],
              [27.695021986257437, 53.927195186651666]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-1A-107",
          "parentID": "FLOOR-1A",
          "pathID": "DOOR-1A-107-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-1A-107, IOT-TEMP-ROOM-1A-107, IOT-LIGHT-ROOM-1A-107, IOT-FIRE-ROOM-1A-107, IOT-WINDOWLOCK-ROOM-1A-107, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69502003813026, 53.92727693513611],
              [27.695054279150103, 53.927279993399054],
              [27.6950540695986, 53.92728081062646],
              [27.695019828578108, 53.92727775236348],
              [27.69502003813026, 53.92727693513611]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-1A-107-1",
          "parentID": "ROOM-1A-107",
          "pathID": "ROOM-1A-107, HALL-1A-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-1A-107-1, IOT-OPEN-DOOR-1A-107-1, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694446888525118, 53.927252492555226],
              [27.69442216000657, 53.92734892526706],
              [27.694655977468834, 53.927369809802755],
              [27.6946807054599, 53.92727337704475],
              [27.694446888525118, 53.927252492555226]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-1A-102",
          "parentID": "FLOOR-1A",
          "pathID": "DOOR-1A-102-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-1A-102, IOT-TEMP-ROOM-1A-102, IOT-LIGHT-ROOM-1A-102, IOT-FIRE-ROOM-1A-102, IOT-WINDOWLOCK-ROOM-1A-102, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694612433048775, 53.92726644306918],
              [27.694612223488704, 53.92726726029588],
              [27.694626898195157, 53.927268571031064],
              [27.69462710775495, 53.92726775380436],
              [27.694612433048775, 53.92726644306918]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-1A-102-1",
          "parentID": "ROOM-1A-102",
          "pathID": "ROOM-1A-102, HALL-1A-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-1A-102-1, IOT-OPEN-DOOR-1A-102-1, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69468168377391, 53.927273464426584],
              [27.694656955785067, 53.92736989718479],
              [27.69491033982234, 53.927392528863486],
              [27.694935067239573, 53.927296096055215],
              [27.69468168377391, 53.927273464426584]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-1A-104",
          "parentID": "FLOOR-1A",
          "pathID": "DOOR-1A-104-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-1A-104, IOT-TEMP-ROOM-1A-104, IOT-LIGHT-ROOM-1A-104, IOT-FIRE-ROOM-1A-104, IOT-WINDOWLOCK-ROOM-1A-104, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69477385486643, 53.92728086105726],
              [27.694773645309443, 53.92728167828421],
              [27.694788320025836, 53.92728298899965],
              [27.694788529582546, 53.92728217177268],
              [27.69477385486643, 53.92728086105726]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-1A-104-1",
          "parentID": "ROOM-1A-104",
          "pathID": "ROOM-1A-104, HALL-1A-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-1A-104-1, IOT-OPEN-DOOR-1A-104-1, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694936045554627, 53.927296183435],
              [27.6949113181396, 53.927392616243445],
              [27.695124591400074, 53.9274116648844],
              [27.695149318333968, 53.92731523203382],
              [27.694936045554627, 53.927296183435]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-1A-106",
          "parentID": "FLOOR-1A",
          "pathID": "DOOR-1A-106-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-1A-106, IOT-TEMP-ROOM-1A-106, IOT-LIGHT-ROOM-1A-106, IOT-FIRE-ROOM-1A-106, IOT-WINDOWLOCK-ROOM-1A-106, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694964626246517, 53.92729790021752],
              [27.694964416693157, 53.927298717444785],
              [27.69497909142132, 53.92730002813688],
              [27.694979300974385, 53.927299210909595],
              [27.694964626246517, 53.92729790021752]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-1A-106-1",
          "parentID": "ROOM-1A-106",
          "pathID": "ROOM-1A-106, HALL-1A-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-1A-106-1, IOT-OPEN-DOOR-1A-106-1, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694581007351104, 53.926729467567974],
              [27.69460057337359, 53.92673121522052],
              [27.694597639564794, 53.92674265639455],
              [27.694578073537066, 53.92674090874154],
              [27.694581007351104, 53.926729467567974]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-1C-111-1",
          "parentID": "ROOM-1C-111",
          "pathID": "ROOM-1C-111",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-1C-111-1, IOT-ALERT-BRD-1C-111-1, IOT-PRESSURE-BRD-1C-111-1, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694756123309585, 53.92674510894466],
              [27.694785472365506, 53.92674773037942],
              [27.694782538606187, 53.92675917155778],
              [27.694753189542407, 53.92675655012234],
              [27.694756123309585, 53.92674510894466]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-1C-113-1",
          "parentID": "ROOM-1C-113",
          "pathID": "ROOM-1C-113",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-1C-113-1, IOT-FIRE-BRD-1C-113-1, IOT-ALERT-BRD-1C-113-1, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69488232427569, 53.92675638106313],
              [27.69487834277998, 53.926771908379685],
              [27.694869538056047, 53.92677112195685],
              [27.69487351955495, 53.92675559464057],
              [27.69488232427569, 53.92675638106313]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-1C-115-1",
          "parentID": "ROOM-1C-115",
          "pathID": "ROOM-1C-115",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-1C-115-1, IOT-ELECTRO-BRD-1C-115-1, IOT-ALERT-BRD-1C-115-1, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69513766131856, 53.92677918703609],
              [27.695131584439196, 53.92680288663686],
              [27.695121801400273, 53.92680201285432],
              [27.695127878285067, 53.92677831325403],
              [27.69513766131856, 53.92677918703609]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-1C-117-1",
          "parentID": "ROOM-1C-117",
          "pathID": "ROOM-1C-117",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-1C-117-1, IOT-ELECTRO-BRD-1C-117-1, IOT-ALERT-BRD-1C-117-1, IOT-SPEED-BRD-1C-117-1, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69513863962194, 53.926779274414244],
              [27.69515722738678, 53.92678093459779],
              [27.6951553414628, 53.926788289646645],
              [27.695136753694758, 53.92678662946282],
              [27.69513863962194, 53.926779274414244]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-1C-119-1",
          "parentID": "ROOM-1C-119",
          "pathID": "ROOM-1C-119",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-1C-119-1, IOT-FIRE-BRD-1C-119-1, IOT-ALERT-BRD-1C-119-1, IOT-SPEED-BRD-1C-119-1, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.695231461241956, 53.92699487879017],
              [27.69519330720931, 53.9269914710662],
              [27.695195193135465, 53.92698411601701],
              [27.695233347161547, 53.92698752374038],
              [27.695231461241956, 53.92699487879017]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-1C-118-2",
          "parentID": "ROOM-1C-118",
          "pathID": "ROOM-1C-118",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-1C-118-2, IOT-ALERT-BRD-1C-118-2, IOT-SPEED-BRD-1C-118-2, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69525409223398, 53.92690661819043],
              [27.69525011086256, 53.926922145518546],
              [27.69523152303137, 53.92692048534962],
              [27.69523550440953, 53.9269049580221],
              [27.69525409223398, 53.92690661819043]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-1C-118-1",
          "parentID": "ROOM-1C-118",
          "pathID": "ROOM-1C-118",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-1C-118-1, IOT-FIRE-BRD-1C-118-1, IOT-ALERT-BRD-1C-118-1, IOT-PRESSURE-BRD-1C-118-1, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694888161100888, 53.9271238818135],
              [27.69488397001943, 53.92714022635655],
              [27.694875165217816, 53.927139439934415],
              [27.694879356302643, 53.92712309539166],
              [27.694888161100888, 53.9271238818135]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-1B-1-1",
          "parentID": "HALL-1B-1",
          "pathID": "HALL-1B-1",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-1B-1-1, IOT-FIRE-BRD-1B-1-1, IOT-ALERT-BRD-1B-1-1, IOT-SPEED-BRD-1B-1-1, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694474131678486, 53.927146253119666],
              [27.694472245618407, 53.927153608157745],
              [27.69448105041569, 53.92715439460944],
              [27.694482936474255, 53.92714703957123],
              [27.694474131678486, 53.927146253119666]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-1A-101-1",
          "parentID": "ROOM-1A-101",
          "pathID": "ROOM-1A-101",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-1A-101-1, IOT-FIRE-BRD-1A-101-1, IOT-ALERT-BRD-1A-101-1, IOT-SPEED-BRD-1A-101-1, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694630661429603, 53.92716023438425],
              [27.69464924934439, 53.92716189464585],
              [27.694647363314438, 53.927169249686585],
              [27.694628775396453, 53.927167589424705],
              [27.694630661429603, 53.92716023438425]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-1A-103",
          "parentID": "ROOM-1A-103",
          "pathID": "ROOM-1A-103",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-1A-103, IOT-ELECTRO-BRD-1A-103, IOT-ALERT-BRD-1A-103, IOT-PRESSURE-BRD-1A-103, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69502100794456, 53.92719509927259],
              [27.695019121978582, 53.927202454318916],
              [27.695009338848408, 53.92720158052757],
              [27.695011224816074, 53.927194225481394],
              [27.69502100794456, 53.92719509927259]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-1A-105-1",
          "parentID": "ROOM-1A-105",
          "pathID": "ROOM-1A-105",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-1A-105-1, IOT-FIRE-BRD-1A-105-1, IOT-ALERT-BRD-1A-105-1, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.695021986257437, 53.927195186651666],
              [27.695040574202757, 53.92719684685259],
              [27.695038688240135, 53.92720420189922],
              [27.695020100291615, 53.927202541698016],
              [27.695021986257437, 53.927195186651666]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-1A-107-1",
          "parentID": "ROOM-1A-107",
          "pathID": "ROOM-1A-107",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-1A-107-1, IOT-FIRE-BRD-1A-107-1, IOT-ALERT-BRD-1A-107-1, IOT-SPEED-BRD-1A-107-1, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69442216000657, 53.92734892526706],
              [27.69443096484409, 53.92734971172227],
              [27.694432850919974, 53.92734235668502],
              [27.694424046083967, 53.927341570229935],
              [27.69442216000657, 53.92734892526706]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-1A-102-1",
          "parentID": "ROOM-1A-102",
          "pathID": "ROOM-1A-102",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-1A-102-1, IOT-ALERT-BRD-1A-102-1, IOT-SPEED-BRD-1A-102-1, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694425093904467, 53.92733748409819],
              [27.69443389873962, 53.9273382705532],
              [27.694437042197375, 53.92732601215765],
              [27.694428237364736, 53.92732522570286],
              [27.694425093904467, 53.92733748409819]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-1A-102-2",
          "parentID": "ROOM-1A-102",
          "pathID": "ROOM-1A-102",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-1A-102-2, IOT-ELECTRO-BRD-1A-102-2, IOT-ALERT-BRD-1A-102-2, IOT-SPEED-BRD-1A-102-2, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694656955785067, 53.92736989718479],
              [27.69469511012092, 53.927373305077985],
              [27.694696996151357, 53.92736595003676],
              [27.69465884182205, 53.92736254214413],
              [27.694656955785067, 53.92736989718479]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-1A-104-1",
          "parentID": "ROOM-1A-104",
          "pathID": "ROOM-1A-104",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-1A-104-1, IOT-FIRE-BRD-1A-104-1, IOT-ALERT-BRD-1A-104-1, IOT-PRESSURE-BRD-1A-104-1, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694714676449376, 53.92737505271082],
              [27.69471656247644, 53.92736769766929],
              [27.694736128803136, 53.92736944529864],
              [27.69473424277945, 53.927376800340454],
              [27.694714676449376, 53.92737505271082]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-1A-104-2",
          "parentID": "ROOM-1A-104",
          "pathID": "ROOM-1A-104",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-1A-104-2, IOT-ALERT-BRD-1A-104-2, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.695124591400074, 53.9274116648844],
              [27.69512857286311, 53.92739613756142],
              [27.695119768003146, 53.92739535115743],
              [27.69511578653692, 53.92741087848013],
              [27.695124591400074, 53.9274116648844]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-1A-106-2",
          "parentID": "ROOM-1A-106",
          "pathID": "ROOM-1A-106",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-1A-106-2, IOT-ELECTRO-BRD-1A-106-2, IOT-ALERT-BRD-1A-106-2, IOT-PRESSURE-BRD-1A-106-2, IOT-SPEED-BRD-1A-106-2, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.695096220175518, 53.92740913091276],
              [27.69509810613692, 53.92740177586548],
              [27.695112780905305, 53.927403086541084],
              [27.695110894946417, 53.92741044158859],
              [27.695096220175518, 53.92740913091276]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-1A-106-1",
          "parentID": "ROOM-1A-106",
          "pathID": "ROOM-1A-106",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-1A-106-1, IOT-FIRE-BRD-1A-106-1, IOT-ELECTRO-BRD-1A-106-1, IOT-ALERT-BRD-1A-106-1, IOT-PRESSURE-BRD-1A-106-1, IOT-SPEED-BRD-1A-106-1, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.695150575632695, 53.92731032866837],
              [27.695131987632696, 53.92730866848467],
              [27.695136178633472, 53.92729232393366],
              [27.695154766626363, 53.92729398411675],
              [27.695150575632695, 53.92731032866837]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-1A-1-1",
          "parentID": "HALL-1A-1",
          "pathID": "HALL-1A-1",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-1A-1-1, IOT-ELECTRO-BRD-1A-1-1, IOT-ALERT-BRD-1A-1-1, IOT-PRESSURE-BRD-1A-1-1, IOT-SPEED-BRD-1A-1-1, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69489308560147, 53.92675734224538],
              [27.694891199632032, 53.92676469729025],
              [27.69494011476378, 53.92676906628905],
              [27.694942000724804, 53.92676171124344],
              [27.69489308560147, 53.92675734224538]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-1C-1-1",
          "parentID": "HALL-1C-1",
          "pathID": "HALL-1C-1",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-1C-1-1, IOT-FIRE-BRD-1C-1-1, IOT-ALERT-BRD-1C-1-1, IOT-PRESSURE-BRD-1C-1-1, IOT-SPEED-BRD-1C-1-1, ",
          "floor": 1
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69458023860813, 53.92672856295858],
              [27.695284616414, 53.926791476443164],
              [27.695232230003917, 53.9269957833953],
              [27.694527848831473, 53.92693286961594],
              [27.69458023860813, 53.92672856295858]
            ]
          ]
        },
        "properties": {
          "ID": "FLOOR-2C",
          "levelID": 0,
          "parentID": "MAIN",
          "pathID": "",
          "IoTIDs": "IOT-SECURUTY-FLOOR-2C, IOT-FIRE-FLOOR-2C, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694831123803162, 53.92695995800047],
              [27.694928954521565, 53.92696869602537],
              [27.694874470613932, 53.92718117509366],
              [27.69477663940924, 53.92717243702618],
              [27.694831123803162, 53.92695995800047]
            ]
          ]
        },
        "properties": {
          "ID": "FLOOR-2B",
          "levelID": 0,
          "pathID": "MAIN",
          "parentID": "",
          "IoTIDs": "IOT-SECURUTY-FLOOR-2B, IOT-FIRE-FLOOR-2B, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694473362930083, 53.92714534850966],
              [27.694420972127094, 53.927349655109445],
              [27.695125360167474, 53.92741256949013],
              [27.695177747603804, 53.92720826259557],
              [27.694473362930083, 53.92714534850966]
            ]
          ]
        },
        "properties": {
          "ID": "FLOOR-2A",
          "levelID": 0,
          "parentID": "MAIN",
          "pathID": "",
          "IoTIDs": "IOT-SECURUTY-FLOOR-2A, IOT-FIRE-FLOOR-2A, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694805977227436, 53.92705802524689],
              [27.694801786120216, 53.92707436978733],
              [27.694802764429806, 53.9270744571682],
              [27.69480695553666, 53.92705811262773],
              [27.694805977227436, 53.92705802524689]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-2B-1-1",
          "levelID": 1,
          "parentID": "HALL-2B-1",
          "pathID": "MAIN, HALL-2B-1",
          "IoTID": "",
          "height": "",
          "bottom": "",
          "comment": "",
          "IoTIDs": "IOT-LOCK-DOOR-2B-1-1, IOT-OPEN-DOOR-2B-1-1, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694870256085697, 53.926963453220004],
              [27.69488982222937, 53.92696520082499],
              [27.694889612676178, 53.92696601805217],
              [27.694870046532127, 53.92696427044715],
              [27.694870256085697, 53.926963453220004]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-2B-1-3",
          "parentID": "HALL-2B-1",
          "pathID": "HALL-2B-1, HALL-2C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-2B-1-3, IOT-OPEN-DOOR-2B-1-3, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694815771886304, 53.927175932262756],
              [27.694835338127245, 53.927177679876245],
              [27.69483554768252, 53.92717686264919],
              [27.69481598144196, 53.92717511503572],
              [27.694815771886304, 53.927175932262756]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-2B-1-2",
          "parentID": "HALL-2B-1",
          "pathID": "HALL-2A-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-2B-1-2, IOT-OPEN-DOOR-2B-1-2, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69483189255584, 53.92696086260819],
              [27.694927766661706, 53.926969425872755],
              [27.694873701856245, 53.92718027048626],
              [27.694777827277477, 53.92717170718028],
              [27.69483189255584, 53.92696086260819]
            ]
          ]
        },
        "properties": {
          "ID": "HALL-2B-1",
          "parentID": "FLOOR-2B",
          "levelID": 1,
          "pathID": "DOOR-2B-1-1, DOOR-2B-1-2, DOOR-2B-1-3, HALL-1B-1, HALL-3B-1, ",
          "IoTIDs": "IOT-SECURUTY-HALL-2B-1, IOT-TEMP-HALL-2B-1, IOT-LIGHT-HALL-2B-1, IOT-FIRE-HALL-2B-1, IOT-WINDOWLOCK-HALL-2B-1, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694831123803162, 53.92695995800047],
              [27.694854174729088, 53.92687006301885],
              [27.694551878698864, 53.926843062073125],
              [27.694558165471502, 53.92681854527419],
              [27.694860461328343, 53.92684554620475],
              [27.694883302578003, 53.92675646844338],
              [27.694981132830694, 53.92676520642751],
              [27.694958291784896, 53.92685428420672],
              [27.695260588149534, 53.926881284128434],
              [27.69525430177976, 53.92690580096263],
              [27.69495200524175, 53.92687880102576],
              [27.694928954521565, 53.92696869602537],
              [27.694831123803162, 53.92695995800047]
            ]
          ]
        },
        "properties": {
          "ID": "HALL-2C-1",
          "parentID": "FLOOR-2C",
          "pathID": "DOOR-2B-1-3",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-HALL-2C-1, IOT-TEMP-HALL-2C-1, IOT-LIGHT-HALL-2C-1, IOT-FIRE-HALL-2C-1, IOT-WINDOWLOCK-HALL-2C-1, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69452903669731, 53.9269321397725],
              [27.694634693738802, 53.92694157710217],
              [27.694657325962993, 53.92685331661031],
              [27.694551669139653, 53.926843879299746],
              [27.69452903669731, 53.9269321397725]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-2C-112",
          "parentID": "FLOOR-2C",
          "pathID": "DOOR-2C-112-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-2C-112, IOT-TEMP-ROOM-2C-112, IOT-LIGHT-ROOM-2C-112, IOT-FIRE-ROOM-2C-112, IOT-WINDOWLOCK-ROOM-2C-112, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694629164702448, 53.92684996530005],
              [27.694643839262934, 53.92685127603372],
              [27.694643629705467, 53.92685209326049],
              [27.694628955144715, 53.9268507825268],
              [27.694629164702448, 53.92684996530005]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-2C-112-1",
          "parentID": "ROOM-2C-112",
          "pathID": "ROOM-2C-112, HALL-2C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-2C-112-1, IOT-OPEN-DOOR-2C-112-1, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694635672044964, 53.92694166448441],
              [27.69473350268113, 53.9269504026688],
              [27.694756134701297, 53.926862142159095],
              [27.69465830426714, 53.92685340399239],
              [27.694635672044964, 53.92694166448441]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-2C-114",
          "parentID": "FLOOR-2C",
          "pathID": "DOOR-2C-114-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-2C-114, IOT-TEMP-ROOM-2C-114, IOT-LIGHT-ROOM-2C-114, IOT-FIRE-ROOM-2C-114, IOT-WINDOWLOCK-ROOM-2C-114, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69473167708899, 53.926859957624906],
              [27.694746351656086, 53.926861268346016],
              [27.694746561211566, 53.92686045111908],
              [27.69473188664477, 53.92685914039799],
              [27.69473167708899, 53.926859957624906]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-2C-114-1",
          "parentID": "ROOM-2C-114",
          "pathID": "ROOM-2C-114, HALL-2C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-2C-114-1, IOT-OPEN-DOOR-2C-114-1, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69473448098769, 53.926950490050245],
              [27.694830355050517, 53.926959053392736],
              [27.694852986870718, 53.926870792865515],
              [27.694757113005846, 53.92686222954037],
              [27.69473448098769, 53.926950490050245]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-2C-116",
          "parentID": "FLOOR-2C",
          "pathID": "DOOR-2C-116-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-2C-116, IOT-TEMP-ROOM-2C-116, IOT-LIGHT-ROOM-2C-116, IOT-FIRE-ROOM-2C-116, IOT-WINDOWLOCK-ROOM-2C-116, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.6948295075533, 53.92686869573175],
              [27.69484418212642, 53.9268700064409],
              [27.694844391680036, 53.926869189213775],
              [27.694829717107197, 53.926867878504666],
              [27.6948295075533, 53.92686869573175]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-2C-116-1",
          "parentID": "ROOM-2C-116",
          "pathID": "ROOM-2C-116, HALL-2C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-2C-116-1, IOT-OPEN-DOOR-2C-116-1, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694558375030457, 53.92681772804754],
              [27.694664031789173, 53.926827165352464],
              [27.694686663891662, 53.92673890485379],
              [27.694581007351104, 53.926729467567974],
              [27.694558375030457, 53.92681772804754]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-2C-111",
          "parentID": "FLOOR-2C",
          "pathID": "DOOR-2C-111-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-2C-111, IOT-TEMP-ROOM-2C-111, IOT-LIGHT-ROOM-2C-111, IOT-FIRE-ROOM-2C-111, IOT-WINDOWLOCK-ROOM-2C-111, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69465012598283, 53.92682675923016],
              [27.69465033554003, 53.926825942003376],
              [27.694635660988244, 53.92682463127047],
              [27.69463545143076, 53.92682544849723],
              [27.69465012598283, 53.92682675923016]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-2C-111-1",
          "parentID": "ROOM-2C-111",
          "pathID": "ROOM-2C-111, HALL-2C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-2C-111-1, IOT-OPEN-DOOR-2C-111-1, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694665010092706, 53.926827252734476],
              [27.694762840467032, 53.92683599089595],
              [27.694785472365506, 53.92674773037942],
              [27.694687642193177, 53.92673899223562],
              [27.694665010092706, 53.926827252734476]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-2C-113",
          "parentID": "FLOOR-2C",
          "pathID": "DOOR-2C-113-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-2C-113, IOT-TEMP-ROOM-2C-113, IOT-LIGHT-ROOM-2C-113, IOT-FIRE-ROOM-2C-113, IOT-WINDOWLOCK-ROOM-2C-113, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694753057427786, 53.9268351170834],
              [27.69475284787255, 53.926835934310354],
              [27.694738173314168, 53.926834623590004],
              [27.694738382869684, 53.92683380636308],
              [27.694753057427786, 53.9268351170834]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-2C-113-1",
          "parentID": "ROOM-2C-113",
          "pathID": "ROOM-2C-113, HALL-2C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-2C-113-1, IOT-OPEN-DOOR-2C-113-1, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694763818770973, 53.92683607827716],
              [27.694859692577186, 53.926844641597185],
              [27.69488232427569, 53.92675638106313],
              [27.69478645066743, 53.92674781776045],
              [27.694763818770973, 53.92683607827716]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-2C-115",
          "parentID": "FLOOR-2C",
          "pathID": "DOOR-2C-115-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-2C-115, IOT-TEMP-ROOM-2C-115, IOT-LIGHT-ROOM-2C-115, IOT-FIRE-ROOM-2C-115, IOT-WINDOWLOCK-ROOM-2C-115, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694836213274144, 53.926842544464684],
              [27.694836003720486, 53.92684336169178],
              [27.694850678284908, 53.92684467240016],
              [27.694850887838275, 53.926843855173026],
              [27.694836213274144, 53.926842544464684]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-2C-115-1",
          "parentID": "ROOM-2C-115",
          "pathID": "ROOM-2C-115, FLOOR-2C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-2C-115-1, IOT-OPEN-DOOR-2C-115-1, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694952773995528, 53.926879705632714],
              [27.69493014238137, 53.926967966177976],
              [27.695231461241956, 53.92699487879017],
              [27.69525409223398, 53.92690661819043],
              [27.694952773995528, 53.926879705632714]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-2C-118",
          "parentID": "FLOOR-2C",
          "pathID": "DOOR-2C-118-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-2C-118, IOT-TEMP-ROOM-2C-118, IOT-LIGHT-ROOM-2C-118, IOT-FIRE-ROOM-2C-118, IOT-WINDOWLOCK-ROOM-2C-118, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694948861967458, 53.926891059435114],
              [27.694945718691354, 53.92690331784438],
              [27.694946696997253, 53.926903405224095],
              [27.694949840273075, 53.926891146814796],
              [27.694948861967458, 53.926891059435114]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-2C-118-1",
          "parentID": "ROOM-2C-118",
          "pathID": "ROOM-2C-118, HALL-2C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-2C-118-1, IOT-OPEN-DOOR-2C-118-1, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694982111133434, 53.92676529380695],
              [27.694959479640964, 53.92685355435903],
              [27.69511503014727, 53.92686744761629],
              [27.69513766131856, 53.92677918703609],
              [27.694982111133434, 53.92676529380695]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-2C-117",
          "parentID": "FLOOR-2C",
          "pathID": "DOOR-2C-117-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-2C-117, IOT-TEMP-ROOM-2C-117, IOT-LIGHT-ROOM-2C-117, IOT-FIRE-ROOM-2C-117, IOT-WINDOWLOCK-ROOM-2C-117, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694961435053756, 53.926842025797065],
              [27.69496241335825, 53.926842113176654],
              [27.694965556625018, 53.92682985476686],
              [27.694964578320803, 53.92682976738729],
              [27.694961435053756, 53.926842025797065]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-2C-117-1",
          "parentID": "ROOM-2C-117",
          "pathID": "ROOM-2C-117, HALL-2C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-2C-117-1, IOT-OPEN-DOOR-2C-117-1, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69511600845267, 53.92686753499463],
              [27.69526079769506, 53.92688046690061],
              [27.695283428565386, 53.92679220629405],
              [27.69513863962194, 53.926779274414244],
              [27.69511600845267, 53.92686753499463]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-2C-119",
          "parentID": "FLOOR-2C",
          "pathID": "DOOR-2C-119-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-2C-119, IOT-TEMP-ROOM-2C-119, IOT-LIGHT-ROOM-2C-119, IOT-FIRE-ROOM-2C-119, IOT-WINDOWLOCK-ROOM-2C-119, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.695134596255894, 53.92686919518154],
              [27.695134386707938, 53.92687001240913],
              [27.695149061290742, 53.92687132308099],
              [27.69514927083841, 53.92687050585337],
              [27.695134596255894, 53.92686919518154]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-2C-119-1",
          "parentID": "ROOM-2C-119",
          "pathID": "ROOM-2C-119, HALL-2C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-2C-119-1, IOT-OPEN-DOOR-2C-119-1, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69477663940924, 53.92717243702618],
              [27.694755683728236, 53.927254159720256],
              [27.694453384981728, 53.92722715853666],
              [27.69444709808835, 53.927251675328826],
              [27.69514952788377, 53.92731441480625],
              [27.695155814374278, 53.92728989797882],
              [27.69485351511996, 53.92726289780411],
              [27.694874470613932, 53.92718117509366],
              [27.69477663940924, 53.92717243702618]
            ]
          ]
        },
        "properties": {
          "ID": "HALL-2A-1",
          "parentID": "FLOOR-2A",
          "pathID": "DOOR-2B-1-2, DOOR-2A-101-1, DOOR-2A-102-1, DOOR-2A-103-1, DOOR-2A-104-1, DOOR-2A-105-1, DOOR-2A-106-1, DOOR-2A-107-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-HALL-2A-1, IOT-TEMP-HALL-2A-1, IOT-LIGHT-HALL-2A-1, IOT-FIRE-HALL-2A-1, IOT-WINDOWLOCK-HALL-2A-1, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694474131678486, 53.927146253119666],
              [27.69445359454472, 53.927226341310245],
              [27.694609146276015, 53.92724023521809],
              [27.694629683118347, 53.927160147001985],
              [27.694474131678486, 53.927146253119666]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-2A-101",
          "parentID": "FLOOR-2A",
          "pathID": "DOOR-2A-101-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-2A-101, IOT-TEMP-ROOM-2A-101, IOT-LIGHT-ROOM-2A-101, IOT-FIRE-ROOM-2A-101, IOT-WINDOWLOCK-ROOM-2A-101, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694574905320145, 53.927237176828044],
              [27.69457469575948, 53.92723799405465],
              [27.694589370454526, 53.92723930479447],
              [27.694589580014924, 53.92723848756783],
              [27.694574905320145, 53.927237176828044]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-2A-101-1",
          "parentID": "ROOM-2A-101",
          "pathID": "ROOM-2A-101, HALL-2A-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-2A-101-1, IOT-OPEN-DOOR-2A-101-1, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694630661429603, 53.92716023438425],
              [27.694610124589108, 53.92724032260052],
              [27.694754914971757, 53.927253255112085],
              [27.69477545154098, 53.927173166872066],
              [27.694630661429603, 53.92716023438425]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-2A-103",
          "parentID": "FLOOR-2A",
          "pathID": "DOOR-2A-103-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-2A-103, IOT-TEMP-ROOM-2A-103, IOT-LIGHT-ROOM-2A-103, IOT-FIRE-ROOM-2A-103, IOT-WINDOWLOCK-ROOM-2A-103, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694726334318553, 53.92725153827951],
              [27.694726543876335, 53.92725072105265],
              [27.694711869173123, 53.92724941032962],
              [27.694711659615074, 53.92725022755647],
              [27.694726334318553, 53.92725153827951]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-2A-103-1",
          "parentID": "ROOM-2A-103",
          "pathID": "ROOM-2A-103, HALL-2A-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-2A-103-1, IOT-OPEN-DOOR-2A-103-1, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694875239371655, 53.92718207970107],
              [27.694854702989407, 53.92726216795746],
              [27.695000471835414, 53.9272751875529],
              [27.69502100794456, 53.92719509927259],
              [27.694875239371655, 53.92718207970107]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-2A-105",
          "parentID": "FLOOR-2A",
          "pathID": "DOOR-2A-105-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-2A-105, IOT-TEMP-ROOM-2A-105, IOT-LIGHT-ROOM-2A-105, IOT-FIRE-ROOM-2A-105, IOT-WINDOWLOCK-ROOM-2A-105, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694873290958085, 53.92726382818419],
              [27.694873081403127, 53.9272646454113],
              [27.694887756116547, 53.92726595611461],
              [27.694887965671242, 53.92726513888746],
              [27.694873290958085, 53.92726382818419]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-2A-105-1",
          "parentID": "ROOM-2A-105",
          "pathID": "ROOM-2A-105, HALL-2A-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-2A-105-1, IOT-OPEN-DOOR-2A-105-1, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.695021986257437, 53.927195186651666],
              [27.695001450150116, 53.92727527493213],
              [27.695156023923833, 53.92728908075123],
              [27.69517655974155, 53.92720899244541],
              [27.695021986257437, 53.927195186651666]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-2A-107",
          "parentID": "FLOOR-2A",
          "pathID": "DOOR-2A-107-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-2A-107, IOT-TEMP-ROOM-2A-107, IOT-LIGHT-ROOM-2A-107, IOT-FIRE-ROOM-2A-107, IOT-WINDOWLOCK-ROOM-2A-107, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69502003813026, 53.92727693513611],
              [27.695054279150103, 53.927279993399054],
              [27.6950540695986, 53.92728081062646],
              [27.695019828578108, 53.92727775236348],
              [27.69502003813026, 53.92727693513611]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-2A-107-1",
          "parentID": "ROOM-2A-107",
          "pathID": "ROOM-2A-107, HALL-2A-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-2A-107-1, IOT-OPEN-DOOR-2A-107-1, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694446888525118, 53.927252492555226],
              [27.69442216000657, 53.92734892526706],
              [27.694655977468834, 53.927369809802755],
              [27.6946807054599, 53.92727337704475],
              [27.694446888525118, 53.927252492555226]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-2A-102",
          "parentID": "FLOOR-2A",
          "pathID": "DOOR-2A-102-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-2A-102, IOT-TEMP-ROOM-2A-102, IOT-LIGHT-ROOM-2A-102, IOT-FIRE-ROOM-2A-102, IOT-WINDOWLOCK-ROOM-2A-102, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694612433048775, 53.92726644306918],
              [27.694612223488704, 53.92726726029588],
              [27.694626898195157, 53.927268571031064],
              [27.69462710775495, 53.92726775380436],
              [27.694612433048775, 53.92726644306918]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-2A-102-1",
          "parentID": "ROOM-2A-102",
          "pathID": "ROOM-2A-102, HALL-2A-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-2A-102-1, IOT-OPEN-DOOR-2A-102-1, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69468168377391, 53.927273464426584],
              [27.694656955785067, 53.92736989718479],
              [27.69491033982234, 53.927392528863486],
              [27.694935067239573, 53.927296096055215],
              [27.69468168377391, 53.927273464426584]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-2A-104",
          "parentID": "FLOOR-2A",
          "pathID": "DOOR-2A-104-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-2A-104, IOT-TEMP-ROOM-2A-104, IOT-LIGHT-ROOM-2A-104, IOT-FIRE-ROOM-2A-104, IOT-WINDOWLOCK-ROOM-2A-104, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69477385486643, 53.92728086105726],
              [27.694773645309443, 53.92728167828421],
              [27.694788320025836, 53.92728298899965],
              [27.694788529582546, 53.92728217177268],
              [27.69477385486643, 53.92728086105726]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-2A-104-1",
          "parentID": "ROOM-2A-104",
          "pathID": "ROOM-2A-104, HALL-2A-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-2A-104-1, IOT-OPEN-DOOR-2A-104-1, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694936045554627, 53.927296183435],
              [27.6949113181396, 53.927392616243445],
              [27.695124591400074, 53.9274116648844],
              [27.695149318333968, 53.92731523203382],
              [27.694936045554627, 53.927296183435]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-2A-106",
          "parentID": "FLOOR-2A",
          "pathID": "DOOR-2A-106-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-2A-106, IOT-TEMP-ROOM-2A-106, IOT-LIGHT-ROOM-2A-106, IOT-FIRE-ROOM-2A-106, IOT-WINDOWLOCK-ROOM-2A-106, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694964626246517, 53.92729790021752],
              [27.694964416693157, 53.927298717444785],
              [27.69497909142132, 53.92730002813688],
              [27.694979300974385, 53.927299210909595],
              [27.694964626246517, 53.92729790021752]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-2A-106-1",
          "parentID": "ROOM-2A-106",
          "pathID": "ROOM-2A-106, HALL-2A-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-2A-106-1, IOT-OPEN-DOOR-2A-106-1, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694581007351104, 53.926729467567974],
              [27.69460057337359, 53.92673121522052],
              [27.694597639564794, 53.92674265639455],
              [27.694578073537066, 53.92674090874154],
              [27.694581007351104, 53.926729467567974]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-2C-111-1",
          "parentID": "ROOM-2C-111",
          "pathID": "ROOM-2C-111",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-2C-111-1, IOT-ALERT-BRD-2C-111-1, IOT-PRESSURE-BRD-2C-111-1, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694756123309585, 53.92674510894466],
              [27.694785472365506, 53.92674773037942],
              [27.694782538606187, 53.92675917155778],
              [27.694753189542407, 53.92675655012234],
              [27.694756123309585, 53.92674510894466]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-2C-113-1",
          "parentID": "ROOM-2C-113",
          "pathID": "ROOM-2C-113",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-2C-113-1, IOT-FIRE-BRD-2C-113-1, IOT-ALERT-BRD-2C-113-1, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69488232427569, 53.92675638106313],
              [27.69487834277998, 53.926771908379685],
              [27.694869538056047, 53.92677112195685],
              [27.69487351955495, 53.92675559464057],
              [27.69488232427569, 53.92675638106313]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-2C-115-1",
          "parentID": "ROOM-2C-115",
          "pathID": "ROOM-2C-115",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-2C-115-1, IOT-ELECTRO-BRD-2C-115-1, IOT-ALERT-BRD-2C-115-1, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69513766131856, 53.92677918703609],
              [27.695131584439196, 53.92680288663686],
              [27.695121801400273, 53.92680201285432],
              [27.695127878285067, 53.92677831325403],
              [27.69513766131856, 53.92677918703609]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-2C-117-1",
          "parentID": "ROOM-2C-117",
          "pathID": "ROOM-2C-117",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-2C-117-1, IOT-ELECTRO-BRD-2C-117-1, IOT-ALERT-BRD-2C-117-1, IOT-SPEED-BRD-2C-117-1, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69513863962194, 53.926779274414244],
              [27.69515722738678, 53.92678093459779],
              [27.6951553414628, 53.926788289646645],
              [27.695136753694758, 53.92678662946282],
              [27.69513863962194, 53.926779274414244]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-2C-119-1",
          "parentID": "ROOM-2C-119",
          "pathID": "ROOM-2C-119",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-2C-119-1, IOT-FIRE-BRD-2C-119-1, IOT-ALERT-BRD-2C-119-1, IOT-SPEED-BRD-2C-119-1, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.695231461241956, 53.92699487879017],
              [27.69519330720931, 53.9269914710662],
              [27.695195193135465, 53.92698411601701],
              [27.695233347161547, 53.92698752374038],
              [27.695231461241956, 53.92699487879017]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-2C-118-2",
          "parentID": "ROOM-2C-118",
          "pathID": "ROOM-2C-118",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-2C-118-2, IOT-ALERT-BRD-2C-118-2, IOT-SPEED-BRD-2C-118-2, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69525409223398, 53.92690661819043],
              [27.69525011086256, 53.926922145518546],
              [27.69523152303137, 53.92692048534962],
              [27.69523550440953, 53.9269049580221],
              [27.69525409223398, 53.92690661819043]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-2C-118-1",
          "parentID": "ROOM-2C-118",
          "pathID": "ROOM-2C-118",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-2C-118-1, IOT-FIRE-BRD-2C-118-1, IOT-ALERT-BRD-2C-118-1, IOT-PRESSURE-BRD-2C-118-1, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694888161100888, 53.9271238818135],
              [27.69488397001943, 53.92714022635655],
              [27.694875165217816, 53.927139439934415],
              [27.694879356302643, 53.92712309539166],
              [27.694888161100888, 53.9271238818135]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-2B-1-1",
          "parentID": "HALL-2B-1",
          "pathID": "HALL-2B-1",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-2B-1-1, IOT-FIRE-BRD-2B-1-1, IOT-ALERT-BRD-2B-1-1, IOT-SPEED-BRD-2B-1-1, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694474131678486, 53.927146253119666],
              [27.694472245618407, 53.927153608157745],
              [27.69448105041569, 53.92715439460944],
              [27.694482936474255, 53.92714703957123],
              [27.694474131678486, 53.927146253119666]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-2A-101-1",
          "parentID": "ROOM-2A-101",
          "pathID": "ROOM-2A-101",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-2A-101-1, IOT-FIRE-BRD-2A-101-1, IOT-ALERT-BRD-2A-101-1, IOT-SPEED-BRD-2A-101-1, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694630661429603, 53.92716023438425],
              [27.69464924934439, 53.92716189464585],
              [27.694647363314438, 53.927169249686585],
              [27.694628775396453, 53.927167589424705],
              [27.694630661429603, 53.92716023438425]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-2A-103",
          "parentID": "ROOM-2A-103",
          "pathID": "ROOM-2A-103",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-2A-103, IOT-ELECTRO-BRD-2A-103, IOT-ALERT-BRD-2A-103, IOT-PRESSURE-BRD-2A-103, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69502100794456, 53.92719509927259],
              [27.695019121978582, 53.927202454318916],
              [27.695009338848408, 53.92720158052757],
              [27.695011224816074, 53.927194225481394],
              [27.69502100794456, 53.92719509927259]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-2A-105-1",
          "parentID": "ROOM-2A-105",
          "pathID": "ROOM-2A-105",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-2A-105-1, IOT-FIRE-BRD-2A-105-1, IOT-ALERT-BRD-2A-105-1, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.695021986257437, 53.927195186651666],
              [27.695040574202757, 53.92719684685259],
              [27.695038688240135, 53.92720420189922],
              [27.695020100291615, 53.927202541698016],
              [27.695021986257437, 53.927195186651666]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-2A-107-1",
          "parentID": "ROOM-2A-107",
          "pathID": "ROOM-2A-107",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-2A-107-1, IOT-FIRE-BRD-2A-107-1, IOT-ALERT-BRD-2A-107-1, IOT-SPEED-BRD-2A-107-1, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69442216000657, 53.92734892526706],
              [27.69443096484409, 53.92734971172227],
              [27.694432850919974, 53.92734235668502],
              [27.694424046083967, 53.927341570229935],
              [27.69442216000657, 53.92734892526706]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-2A-102-1",
          "parentID": "ROOM-2A-102",
          "pathID": "ROOM-2A-102",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-2A-102-1, IOT-ALERT-BRD-2A-102-1, IOT-SPEED-BRD-2A-102-1, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694425093904467, 53.92733748409819],
              [27.69443389873962, 53.9273382705532],
              [27.694437042197375, 53.92732601215765],
              [27.694428237364736, 53.92732522570286],
              [27.694425093904467, 53.92733748409819]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-2A-102-2",
          "parentID": "ROOM-2A-102",
          "pathID": "ROOM-2A-102",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-2A-102-2, IOT-ELECTRO-BRD-2A-102-2, IOT-ALERT-BRD-2A-102-2, IOT-SPEED-BRD-2A-102-2, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694656955785067, 53.92736989718479],
              [27.69469511012092, 53.927373305077985],
              [27.694696996151357, 53.92736595003676],
              [27.69465884182205, 53.92736254214413],
              [27.694656955785067, 53.92736989718479]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-2A-104-1",
          "parentID": "ROOM-2A-104",
          "pathID": "ROOM-2A-104",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-2A-104-1, IOT-FIRE-BRD-2A-104-1, IOT-ALERT-BRD-2A-104-1, IOT-PRESSURE-BRD-2A-104-1, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694714676449376, 53.92737505271082],
              [27.69471656247644, 53.92736769766929],
              [27.694736128803136, 53.92736944529864],
              [27.69473424277945, 53.927376800340454],
              [27.694714676449376, 53.92737505271082]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-2A-104-2",
          "parentID": "ROOM-2A-104",
          "pathID": "ROOM-2A-104",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-2A-104-2, IOT-ALERT-BRD-2A-104-2, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.695124591400074, 53.9274116648844],
              [27.69512857286311, 53.92739613756142],
              [27.695119768003146, 53.92739535115743],
              [27.69511578653692, 53.92741087848013],
              [27.695124591400074, 53.9274116648844]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-2A-106-2",
          "parentID": "ROOM-2A-106",
          "pathID": "ROOM-2A-106",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-2A-106-2, IOT-ELECTRO-BRD-2A-106-2, IOT-ALERT-BRD-2A-106-2, IOT-PRESSURE-BRD-2A-106-2, IOT-SPEED-BRD-2A-106-2, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.695096220175518, 53.92740913091276],
              [27.69509810613692, 53.92740177586548],
              [27.695112780905305, 53.927403086541084],
              [27.695110894946417, 53.92741044158859],
              [27.695096220175518, 53.92740913091276]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-2A-106-1",
          "parentID": "ROOM-2A-106",
          "pathID": "ROOM-2A-106",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-2A-106-1, IOT-FIRE-BRD-2A-106-1, IOT-ELECTRO-BRD-2A-106-1, IOT-ALERT-BRD-2A-106-1, IOT-PRESSURE-BRD-2A-106-1, IOT-SPEED-BRD-2A-106-1, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.695150575632695, 53.92731032866837],
              [27.695131987632696, 53.92730866848467],
              [27.695136178633472, 53.92729232393366],
              [27.695154766626363, 53.92729398411675],
              [27.695150575632695, 53.92731032866837]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-2A-1-1",
          "parentID": "HALL-2A-1",
          "pathID": "HALL-2A-1",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-2A-1-1, IOT-ELECTRO-BRD-2A-1-1, IOT-ALERT-BRD-2A-1-1, IOT-PRESSURE-BRD-2A-1-1, IOT-SPEED-BRD-2A-1-1, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69489308560147, 53.92675734224538],
              [27.694891199632032, 53.92676469729025],
              [27.69494011476378, 53.92676906628905],
              [27.694942000724804, 53.92676171124344],
              [27.69489308560147, 53.92675734224538]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-2C-1-1",
          "parentID": "HALL-2C-1",
          "pathID": "HALL-2C-1",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-2C-1-1, IOT-FIRE-BRD-2C-1-1, IOT-ALERT-BRD-2C-1-1, IOT-PRESSURE-BRD-2C-1-1, IOT-SPEED-BRD-2C-1-1, ",
          "floor": 2
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69458023860813, 53.92672856295858],
              [27.695284616414, 53.926791476443164],
              [27.695232230003917, 53.9269957833953],
              [27.694527848831473, 53.92693286961594],
              [27.69458023860813, 53.92672856295858]
            ]
          ]
        },
        "properties": {
          "ID": "FLOOR-3C",
          "levelID": 0,
          "parentID": "MAIN",
          "pathID": "",
          "IoTIDs": "IOT-SECURUTY-FLOOR-3C, IOT-FIRE-FLOOR-3C, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694831123803162, 53.92695995800047],
              [27.694928954521565, 53.92696869602537],
              [27.694874470613932, 53.92718117509366],
              [27.69477663940924, 53.92717243702618],
              [27.694831123803162, 53.92695995800047]
            ]
          ]
        },
        "properties": {
          "ID": "FLOOR-3B",
          "levelID": 0,
          "pathID": "MAIN",
          "parentID": "",
          "IoTIDs": "IOT-SECURUTY-FLOOR-3B, IOT-FIRE-FLOOR-3B, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694473362930083, 53.92714534850966],
              [27.694420972127094, 53.927349655109445],
              [27.695125360167474, 53.92741256949013],
              [27.695177747603804, 53.92720826259557],
              [27.694473362930083, 53.92714534850966]
            ]
          ]
        },
        "properties": {
          "ID": "FLOOR-3A",
          "levelID": 0,
          "parentID": "MAIN",
          "pathID": "",
          "IoTIDs": "IOT-SECURUTY-FLOOR-3A, IOT-FIRE-FLOOR-3A, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694805977227436, 53.92705802524689],
              [27.694801786120216, 53.92707436978733],
              [27.694802764429806, 53.9270744571682],
              [27.69480695553666, 53.92705811262773],
              [27.694805977227436, 53.92705802524689]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-3B-1-1",
          "levelID": 1,
          "parentID": "HALL-3B-1",
          "pathID": "MAIN, HALL-3B-1",
          "IoTID": "",
          "height": "",
          "bottom": "",
          "comment": "",
          "IoTIDs": "IOT-LOCK-DOOR-3B-1-1, IOT-OPEN-DOOR-3B-1-1, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694870256085697, 53.926963453220004],
              [27.69488982222937, 53.92696520082499],
              [27.694889612676178, 53.92696601805217],
              [27.694870046532127, 53.92696427044715],
              [27.694870256085697, 53.926963453220004]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-3B-1-3",
          "parentID": "HALL-3B-1",
          "pathID": "HALL-3B-1, HALL-3C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-3B-1-3, IOT-OPEN-DOOR-3B-1-3, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694815771886304, 53.927175932262756],
              [27.694835338127245, 53.927177679876245],
              [27.69483554768252, 53.92717686264919],
              [27.69481598144196, 53.92717511503572],
              [27.694815771886304, 53.927175932262756]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-3B-1-2",
          "parentID": "HALL-3B-1",
          "pathID": "HALL-3A-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-3B-1-2, IOT-OPEN-DOOR-3B-1-2, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69483189255584, 53.92696086260819],
              [27.694927766661706, 53.926969425872755],
              [27.694873701856245, 53.92718027048626],
              [27.694777827277477, 53.92717170718028],
              [27.69483189255584, 53.92696086260819]
            ]
          ]
        },
        "properties": {
          "ID": "HALL-3B-1",
          "parentID": "FLOOR-3B",
          "levelID": 1,
          "pathID": "DOOR-3B-1-1, DOOR-3B-1-2, DOOR-3B-1-3, HALL-2B-1, HALL-4B-1",
          "IoTIDs": "IOT-SECURUTY-HALL-3B-1, IOT-TEMP-HALL-3B-1, IOT-LIGHT-HALL-3B-1, IOT-FIRE-HALL-3B-1, IOT-WINDOWLOCK-HALL-3B-1, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694831123803162, 53.92695995800047],
              [27.694854174729088, 53.92687006301885],
              [27.694551878698864, 53.926843062073125],
              [27.694558165471502, 53.92681854527419],
              [27.694860461328343, 53.92684554620475],
              [27.694883302578003, 53.92675646844338],
              [27.694981132830694, 53.92676520642751],
              [27.694958291784896, 53.92685428420672],
              [27.695260588149534, 53.926881284128434],
              [27.69525430177976, 53.92690580096263],
              [27.69495200524175, 53.92687880102576],
              [27.694928954521565, 53.92696869602537],
              [27.694831123803162, 53.92695995800047]
            ]
          ]
        },
        "properties": {
          "ID": "HALL-3C-1",
          "parentID": "FLOOR-3C",
          "pathID": "DOOR-3B-1-3",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-HALL-3C-1, IOT-TEMP-HALL-3C-1, IOT-LIGHT-HALL-3C-1, IOT-FIRE-HALL-3C-1, IOT-WINDOWLOCK-HALL-3C-1, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69452903669731, 53.9269321397725],
              [27.694634693738802, 53.92694157710217],
              [27.694657325962993, 53.92685331661031],
              [27.694551669139653, 53.926843879299746],
              [27.69452903669731, 53.9269321397725]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-3C-112",
          "parentID": "FLOOR-3C",
          "pathID": "DOOR-3C-112-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-3C-112, IOT-TEMP-ROOM-3C-112, IOT-LIGHT-ROOM-3C-112, IOT-FIRE-ROOM-3C-112, IOT-WINDOWLOCK-ROOM-3C-112, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694629164702448, 53.92684996530005],
              [27.694643839262934, 53.92685127603372],
              [27.694643629705467, 53.92685209326049],
              [27.694628955144715, 53.9268507825268],
              [27.694629164702448, 53.92684996530005]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-3C-112-1",
          "parentID": "ROOM-3C-112",
          "pathID": "ROOM-3C-112, HALL-3C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-3C-112-1, IOT-OPEN-DOOR-3C-112-1, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694635672044964, 53.92694166448441],
              [27.69473350268113, 53.9269504026688],
              [27.694756134701297, 53.926862142159095],
              [27.69465830426714, 53.92685340399239],
              [27.694635672044964, 53.92694166448441]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-3C-114",
          "parentID": "FLOOR-3C",
          "pathID": "DOOR-3C-114-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-3C-114, IOT-TEMP-ROOM-3C-114, IOT-LIGHT-ROOM-3C-114, IOT-FIRE-ROOM-3C-114, IOT-WINDOWLOCK-ROOM-3C-114, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69473167708899, 53.926859957624906],
              [27.694746351656086, 53.926861268346016],
              [27.694746561211566, 53.92686045111908],
              [27.69473188664477, 53.92685914039799],
              [27.69473167708899, 53.926859957624906]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-3C-114-1",
          "parentID": "ROOM-3C-114",
          "pathID": "ROOM-3C-114, HALL-3C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-3C-114-1, IOT-OPEN-DOOR-3C-114-1, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69473448098769, 53.926950490050245],
              [27.694830355050517, 53.926959053392736],
              [27.694852986870718, 53.926870792865515],
              [27.694757113005846, 53.92686222954037],
              [27.69473448098769, 53.926950490050245]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-3C-116",
          "parentID": "FLOOR-3C",
          "pathID": "DOOR-3C-116-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-3C-116, IOT-TEMP-ROOM-3C-116, IOT-LIGHT-ROOM-3C-116, IOT-FIRE-ROOM-3C-116, IOT-WINDOWLOCK-ROOM-3C-116, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.6948295075533, 53.92686869573175],
              [27.69484418212642, 53.9268700064409],
              [27.694844391680036, 53.926869189213775],
              [27.694829717107197, 53.926867878504666],
              [27.6948295075533, 53.92686869573175]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-3C-116-1",
          "parentID": "ROOM-3C-116",
          "pathID": "ROOM-3C-116, HALL-3C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-3C-116-1, IOT-OPEN-DOOR-3C-116-1, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694558375030457, 53.92681772804754],
              [27.694664031789173, 53.926827165352464],
              [27.694686663891662, 53.92673890485379],
              [27.694581007351104, 53.926729467567974],
              [27.694558375030457, 53.92681772804754]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-3C-111",
          "parentID": "FLOOR-3C",
          "pathID": "DOOR-3C-111-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-3C-111, IOT-TEMP-ROOM-3C-111, IOT-LIGHT-ROOM-3C-111, IOT-FIRE-ROOM-3C-111, IOT-WINDOWLOCK-ROOM-3C-111, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69465012598283, 53.92682675923016],
              [27.69465033554003, 53.926825942003376],
              [27.694635660988244, 53.92682463127047],
              [27.69463545143076, 53.92682544849723],
              [27.69465012598283, 53.92682675923016]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-3C-111-1",
          "parentID": "ROOM-3C-111",
          "pathID": "ROOM-3C-111, HALL-3C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-3C-111-1, IOT-OPEN-DOOR-3C-111-1, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694665010092706, 53.926827252734476],
              [27.694762840467032, 53.92683599089595],
              [27.694785472365506, 53.92674773037942],
              [27.694687642193177, 53.92673899223562],
              [27.694665010092706, 53.926827252734476]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-3C-113",
          "parentID": "FLOOR-3C",
          "pathID": "DOOR-3C-113-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-3C-113, IOT-TEMP-ROOM-3C-113, IOT-LIGHT-ROOM-3C-113, IOT-FIRE-ROOM-3C-113, IOT-WINDOWLOCK-ROOM-3C-113, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694753057427786, 53.9268351170834],
              [27.69475284787255, 53.926835934310354],
              [27.694738173314168, 53.926834623590004],
              [27.694738382869684, 53.92683380636308],
              [27.694753057427786, 53.9268351170834]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-3C-113-1",
          "parentID": "ROOM-3C-113",
          "pathID": "ROOM-3C-113, HALL-3C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-3C-113-1, IOT-OPEN-DOOR-3C-113-1, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694763818770973, 53.92683607827716],
              [27.694859692577186, 53.926844641597185],
              [27.69488232427569, 53.92675638106313],
              [27.69478645066743, 53.92674781776045],
              [27.694763818770973, 53.92683607827716]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-3C-115",
          "parentID": "FLOOR-3C",
          "pathID": "DOOR-3C-115-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-3C-115, IOT-TEMP-ROOM-3C-115, IOT-LIGHT-ROOM-3C-115, IOT-FIRE-ROOM-3C-115, IOT-WINDOWLOCK-ROOM-3C-115, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694836213274144, 53.926842544464684],
              [27.694836003720486, 53.92684336169178],
              [27.694850678284908, 53.92684467240016],
              [27.694850887838275, 53.926843855173026],
              [27.694836213274144, 53.926842544464684]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-3C-115-1",
          "parentID": "ROOM-3C-115",
          "pathID": "ROOM-3C-115, FLOOR-3C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-3C-115-1, IOT-OPEN-DOOR-3C-115-1, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694952773995528, 53.926879705632714],
              [27.69493014238137, 53.926967966177976],
              [27.695231461241956, 53.92699487879017],
              [27.69525409223398, 53.92690661819043],
              [27.694952773995528, 53.926879705632714]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-3C-118",
          "parentID": "FLOOR-3C",
          "pathID": "DOOR-3C-118-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-3C-118, IOT-TEMP-ROOM-3C-118, IOT-LIGHT-ROOM-3C-118, IOT-FIRE-ROOM-3C-118, IOT-WINDOWLOCK-ROOM-3C-118, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694948861967458, 53.926891059435114],
              [27.694945718691354, 53.92690331784438],
              [27.694946696997253, 53.926903405224095],
              [27.694949840273075, 53.926891146814796],
              [27.694948861967458, 53.926891059435114]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-3C-118-1",
          "parentID": "ROOM-3C-118",
          "pathID": "ROOM-3C-118, HALL-3C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-3C-118-1, IOT-OPEN-DOOR-3C-118-1, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694982111133434, 53.92676529380695],
              [27.694959479640964, 53.92685355435903],
              [27.69511503014727, 53.92686744761629],
              [27.69513766131856, 53.92677918703609],
              [27.694982111133434, 53.92676529380695]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-3C-117",
          "parentID": "FLOOR-3C",
          "pathID": "DOOR-3C-117-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-3C-117, IOT-TEMP-ROOM-3C-117, IOT-LIGHT-ROOM-3C-117, IOT-FIRE-ROOM-3C-117, IOT-WINDOWLOCK-ROOM-3C-117, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694961435053756, 53.926842025797065],
              [27.69496241335825, 53.926842113176654],
              [27.694965556625018, 53.92682985476686],
              [27.694964578320803, 53.92682976738729],
              [27.694961435053756, 53.926842025797065]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-3C-117-1",
          "parentID": "ROOM-3C-117",
          "pathID": "ROOM-3C-117, HALL-3C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-3C-117-1, IOT-OPEN-DOOR-3C-117-1, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69511600845267, 53.92686753499463],
              [27.69526079769506, 53.92688046690061],
              [27.695283428565386, 53.92679220629405],
              [27.69513863962194, 53.926779274414244],
              [27.69511600845267, 53.92686753499463]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-3C-119",
          "parentID": "FLOOR-3C",
          "pathID": "DOOR-3C-119-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-3C-119, IOT-TEMP-ROOM-3C-119, IOT-LIGHT-ROOM-3C-119, IOT-FIRE-ROOM-3C-119, IOT-WINDOWLOCK-ROOM-3C-119, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.695134596255894, 53.92686919518154],
              [27.695134386707938, 53.92687001240913],
              [27.695149061290742, 53.92687132308099],
              [27.69514927083841, 53.92687050585337],
              [27.695134596255894, 53.92686919518154]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-3C-119-1",
          "parentID": "ROOM-3C-119",
          "pathID": "ROOM-3C-119, HALL-3C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-3C-119-1, IOT-OPEN-DOOR-3C-119-1, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69477663940924, 53.92717243702618],
              [27.694755683728236, 53.927254159720256],
              [27.694453384981728, 53.92722715853666],
              [27.69444709808835, 53.927251675328826],
              [27.69514952788377, 53.92731441480625],
              [27.695155814374278, 53.92728989797882],
              [27.69485351511996, 53.92726289780411],
              [27.694874470613932, 53.92718117509366],
              [27.69477663940924, 53.92717243702618]
            ]
          ]
        },
        "properties": {
          "ID": "HALL-3A-1",
          "parentID": "FLOOR-3A",
          "pathID": "DOOR-3B-1-2, DOOR-3A-101-1, DOOR-3A-102-1, DOOR-3A-103-1, DOOR-3A-104-1, DOOR-3A-105-1, DOOR-3A-106-1, DOOR-3A-107-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-HALL-3A-1, IOT-TEMP-HALL-3A-1, IOT-LIGHT-HALL-3A-1, IOT-FIRE-HALL-3A-1, IOT-WINDOWLOCK-HALL-3A-1, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694474131678486, 53.927146253119666],
              [27.69445359454472, 53.927226341310245],
              [27.694609146276015, 53.92724023521809],
              [27.694629683118347, 53.927160147001985],
              [27.694474131678486, 53.927146253119666]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-3A-101",
          "parentID": "FLOOR-3A",
          "pathID": "DOOR-3A-101-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-3A-101, IOT-TEMP-ROOM-3A-101, IOT-LIGHT-ROOM-3A-101, IOT-FIRE-ROOM-3A-101, IOT-WINDOWLOCK-ROOM-3A-101, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694574905320145, 53.927237176828044],
              [27.69457469575948, 53.92723799405465],
              [27.694589370454526, 53.92723930479447],
              [27.694589580014924, 53.92723848756783],
              [27.694574905320145, 53.927237176828044]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-3A-101-1",
          "parentID": "ROOM-3A-101",
          "pathID": "ROOM-3A-101, HALL-3A-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-3A-101-1, IOT-OPEN-DOOR-3A-101-1, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694630661429603, 53.92716023438425],
              [27.694610124589108, 53.92724032260052],
              [27.694754914971757, 53.927253255112085],
              [27.69477545154098, 53.927173166872066],
              [27.694630661429603, 53.92716023438425]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-3A-103",
          "parentID": "FLOOR-3A",
          "pathID": "DOOR-3A-103-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-3A-103, IOT-TEMP-ROOM-3A-103, IOT-LIGHT-ROOM-3A-103, IOT-FIRE-ROOM-3A-103, IOT-WINDOWLOCK-ROOM-3A-103, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694726334318553, 53.92725153827951],
              [27.694726543876335, 53.92725072105265],
              [27.694711869173123, 53.92724941032962],
              [27.694711659615074, 53.92725022755647],
              [27.694726334318553, 53.92725153827951]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-3A-103-1",
          "parentID": "ROOM-3A-103",
          "pathID": "ROOM-3A-103, HALL-3A-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-3A-103-1, IOT-OPEN-DOOR-3A-103-1, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694875239371655, 53.92718207970107],
              [27.694854702989407, 53.92726216795746],
              [27.695000471835414, 53.9272751875529],
              [27.69502100794456, 53.92719509927259],
              [27.694875239371655, 53.92718207970107]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-3A-105",
          "parentID": "FLOOR-3A",
          "pathID": "DOOR-3A-105-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-3A-105, IOT-TEMP-ROOM-3A-105, IOT-LIGHT-ROOM-3A-105, IOT-FIRE-ROOM-3A-105, IOT-WINDOWLOCK-ROOM-3A-105, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694873290958085, 53.92726382818419],
              [27.694873081403127, 53.9272646454113],
              [27.694887756116547, 53.92726595611461],
              [27.694887965671242, 53.92726513888746],
              [27.694873290958085, 53.92726382818419]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-3A-105-1",
          "parentID": "ROOM-3A-105",
          "pathID": "ROOM-3A-105, HALL-3A-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-3A-105-1, IOT-OPEN-DOOR-3A-105-1, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.695021986257437, 53.927195186651666],
              [27.695001450150116, 53.92727527493213],
              [27.695156023923833, 53.92728908075123],
              [27.69517655974155, 53.92720899244541],
              [27.695021986257437, 53.927195186651666]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-3A-107",
          "parentID": "FLOOR-3A",
          "pathID": "DOOR-3A-107-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-3A-107, IOT-TEMP-ROOM-3A-107, IOT-LIGHT-ROOM-3A-107, IOT-FIRE-ROOM-3A-107, IOT-WINDOWLOCK-ROOM-3A-107, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69502003813026, 53.92727693513611],
              [27.695054279150103, 53.927279993399054],
              [27.6950540695986, 53.92728081062646],
              [27.695019828578108, 53.92727775236348],
              [27.69502003813026, 53.92727693513611]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-3A-107-1",
          "parentID": "ROOM-3A-107",
          "pathID": "ROOM-3A-107, HALL-3A-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-3A-107-1, IOT-OPEN-DOOR-3A-107-1, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694446888525118, 53.927252492555226],
              [27.69442216000657, 53.92734892526706],
              [27.694655977468834, 53.927369809802755],
              [27.6946807054599, 53.92727337704475],
              [27.694446888525118, 53.927252492555226]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-3A-102",
          "parentID": "FLOOR-3A",
          "pathID": "DOOR-3A-102-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-3A-102, IOT-TEMP-ROOM-3A-102, IOT-LIGHT-ROOM-3A-102, IOT-FIRE-ROOM-3A-102, IOT-WINDOWLOCK-ROOM-3A-102, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694612433048775, 53.92726644306918],
              [27.694612223488704, 53.92726726029588],
              [27.694626898195157, 53.927268571031064],
              [27.69462710775495, 53.92726775380436],
              [27.694612433048775, 53.92726644306918]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-3A-102-1",
          "parentID": "ROOM-3A-102",
          "pathID": "ROOM-3A-102, HALL-3A-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-3A-102-1, IOT-OPEN-DOOR-3A-102-1, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69468168377391, 53.927273464426584],
              [27.694656955785067, 53.92736989718479],
              [27.69491033982234, 53.927392528863486],
              [27.694935067239573, 53.927296096055215],
              [27.69468168377391, 53.927273464426584]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-3A-104",
          "parentID": "FLOOR-3A",
          "pathID": "DOOR-3A-104-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-3A-104, IOT-TEMP-ROOM-3A-104, IOT-LIGHT-ROOM-3A-104, IOT-FIRE-ROOM-3A-104, IOT-WINDOWLOCK-ROOM-3A-104, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69477385486643, 53.92728086105726],
              [27.694773645309443, 53.92728167828421],
              [27.694788320025836, 53.92728298899965],
              [27.694788529582546, 53.92728217177268],
              [27.69477385486643, 53.92728086105726]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-3A-104-1",
          "parentID": "ROOM-3A-104",
          "pathID": "ROOM-3A-104, HALL-3A-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-3A-104-1, IOT-OPEN-DOOR-3A-104-1, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694936045554627, 53.927296183435],
              [27.6949113181396, 53.927392616243445],
              [27.695124591400074, 53.9274116648844],
              [27.695149318333968, 53.92731523203382],
              [27.694936045554627, 53.927296183435]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-3A-106",
          "parentID": "FLOOR-3A",
          "pathID": "DOOR-3A-106-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-3A-106, IOT-TEMP-ROOM-3A-106, IOT-LIGHT-ROOM-3A-106, IOT-FIRE-ROOM-3A-106, IOT-WINDOWLOCK-ROOM-3A-106, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694964626246517, 53.92729790021752],
              [27.694964416693157, 53.927298717444785],
              [27.69497909142132, 53.92730002813688],
              [27.694979300974385, 53.927299210909595],
              [27.694964626246517, 53.92729790021752]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-3A-106-1",
          "parentID": "ROOM-3A-106",
          "pathID": "ROOM-3A-106, HALL-3A-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-3A-106-1, IOT-OPEN-DOOR-3A-106-1, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694581007351104, 53.926729467567974],
              [27.69460057337359, 53.92673121522052],
              [27.694597639564794, 53.92674265639455],
              [27.694578073537066, 53.92674090874154],
              [27.694581007351104, 53.926729467567974]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-3C-111-1",
          "parentID": "ROOM-3C-111",
          "pathID": "ROOM-3C-111",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-3C-111-1, IOT-ALERT-BRD-3C-111-1, IOT-PRESSURE-BRD-3C-111-1, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694756123309585, 53.92674510894466],
              [27.694785472365506, 53.92674773037942],
              [27.694782538606187, 53.92675917155778],
              [27.694753189542407, 53.92675655012234],
              [27.694756123309585, 53.92674510894466]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-3C-113-1",
          "parentID": "ROOM-3C-113",
          "pathID": "ROOM-3C-113",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-3C-113-1, IOT-FIRE-BRD-3C-113-1, IOT-ALERT-BRD-3C-113-1, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69488232427569, 53.92675638106313],
              [27.69487834277998, 53.926771908379685],
              [27.694869538056047, 53.92677112195685],
              [27.69487351955495, 53.92675559464057],
              [27.69488232427569, 53.92675638106313]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-3C-115-1",
          "parentID": "ROOM-3C-115",
          "pathID": "ROOM-3C-115",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-3C-115-1, IOT-ELECTRO-BRD-3C-115-1, IOT-ALERT-BRD-3C-115-1, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69513766131856, 53.92677918703609],
              [27.695131584439196, 53.92680288663686],
              [27.695121801400273, 53.92680201285432],
              [27.695127878285067, 53.92677831325403],
              [27.69513766131856, 53.92677918703609]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-3C-117-1",
          "parentID": "ROOM-3C-117",
          "pathID": "ROOM-3C-117",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-3C-117-1, IOT-ELECTRO-BRD-3C-117-1, IOT-ALERT-BRD-3C-117-1, IOT-SPEED-BRD-3C-117-1, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69513863962194, 53.926779274414244],
              [27.69515722738678, 53.92678093459779],
              [27.6951553414628, 53.926788289646645],
              [27.695136753694758, 53.92678662946282],
              [27.69513863962194, 53.926779274414244]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-3C-119-1",
          "parentID": "ROOM-3C-119",
          "pathID": "ROOM-3C-119",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-3C-119-1, IOT-FIRE-BRD-3C-119-1, IOT-ALERT-BRD-3C-119-1, IOT-SPEED-BRD-3C-119-1, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.695231461241956, 53.92699487879017],
              [27.69519330720931, 53.9269914710662],
              [27.695195193135465, 53.92698411601701],
              [27.695233347161547, 53.92698752374038],
              [27.695231461241956, 53.92699487879017]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-3C-118-2",
          "parentID": "ROOM-3C-118",
          "pathID": "ROOM-3C-118",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-3C-118-2, IOT-ALERT-BRD-3C-118-2, IOT-SPEED-BRD-3C-118-2, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69525409223398, 53.92690661819043],
              [27.69525011086256, 53.926922145518546],
              [27.69523152303137, 53.92692048534962],
              [27.69523550440953, 53.9269049580221],
              [27.69525409223398, 53.92690661819043]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-3C-118-1",
          "parentID": "ROOM-3C-118",
          "pathID": "ROOM-3C-118",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-3C-118-1, IOT-FIRE-BRD-3C-118-1, IOT-ALERT-BRD-3C-118-1, IOT-PRESSURE-BRD-3C-118-1, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694888161100888, 53.9271238818135],
              [27.69488397001943, 53.92714022635655],
              [27.694875165217816, 53.927139439934415],
              [27.694879356302643, 53.92712309539166],
              [27.694888161100888, 53.9271238818135]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-3B-1-1",
          "parentID": "HALL-3B-1",
          "pathID": "HALL-3B-1",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-3B-1-1, IOT-FIRE-BRD-3B-1-1, IOT-ALERT-BRD-3B-1-1, IOT-SPEED-BRD-3B-1-1, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694474131678486, 53.927146253119666],
              [27.694472245618407, 53.927153608157745],
              [27.69448105041569, 53.92715439460944],
              [27.694482936474255, 53.92714703957123],
              [27.694474131678486, 53.927146253119666]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-3A-101-1",
          "parentID": "ROOM-3A-101",
          "pathID": "ROOM-3A-101",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-3A-101-1, IOT-FIRE-BRD-3A-101-1, IOT-ALERT-BRD-3A-101-1, IOT-SPEED-BRD-3A-101-1, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694630661429603, 53.92716023438425],
              [27.69464924934439, 53.92716189464585],
              [27.694647363314438, 53.927169249686585],
              [27.694628775396453, 53.927167589424705],
              [27.694630661429603, 53.92716023438425]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-3A-103",
          "parentID": "ROOM-3A-103",
          "pathID": "ROOM-3A-103",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-3A-103, IOT-ELECTRO-BRD-3A-103, IOT-ALERT-BRD-3A-103, IOT-PRESSURE-BRD-3A-103, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69502100794456, 53.92719509927259],
              [27.695019121978582, 53.927202454318916],
              [27.695009338848408, 53.92720158052757],
              [27.695011224816074, 53.927194225481394],
              [27.69502100794456, 53.92719509927259]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-3A-105-1",
          "parentID": "ROOM-3A-105",
          "pathID": "ROOM-3A-105",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-3A-105-1, IOT-FIRE-BRD-3A-105-1, IOT-ALERT-BRD-3A-105-1, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.695021986257437, 53.927195186651666],
              [27.695040574202757, 53.92719684685259],
              [27.695038688240135, 53.92720420189922],
              [27.695020100291615, 53.927202541698016],
              [27.695021986257437, 53.927195186651666]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-3A-107-1",
          "parentID": "ROOM-3A-107",
          "pathID": "ROOM-3A-107",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-3A-107-1, IOT-FIRE-BRD-3A-107-1, IOT-ALERT-BRD-3A-107-1, IOT-SPEED-BRD-3A-107-1, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69442216000657, 53.92734892526706],
              [27.69443096484409, 53.92734971172227],
              [27.694432850919974, 53.92734235668502],
              [27.694424046083967, 53.927341570229935],
              [27.69442216000657, 53.92734892526706]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-3A-102-1",
          "parentID": "ROOM-3A-102",
          "pathID": "ROOM-3A-102",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-3A-102-1, IOT-ALERT-BRD-3A-102-1, IOT-SPEED-BRD-3A-102-1, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694425093904467, 53.92733748409819],
              [27.69443389873962, 53.9273382705532],
              [27.694437042197375, 53.92732601215765],
              [27.694428237364736, 53.92732522570286],
              [27.694425093904467, 53.92733748409819]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-3A-102-2",
          "parentID": "ROOM-3A-102",
          "pathID": "ROOM-3A-102",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-3A-102-2, IOT-ELECTRO-BRD-3A-102-2, IOT-ALERT-BRD-3A-102-2, IOT-SPEED-BRD-3A-102-2, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694656955785067, 53.92736989718479],
              [27.69469511012092, 53.927373305077985],
              [27.694696996151357, 53.92736595003676],
              [27.69465884182205, 53.92736254214413],
              [27.694656955785067, 53.92736989718479]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-3A-104-1",
          "parentID": "ROOM-3A-104",
          "pathID": "ROOM-3A-104",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-3A-104-1, IOT-FIRE-BRD-3A-104-1, IOT-ALERT-BRD-3A-104-1, IOT-PRESSURE-BRD-3A-104-1, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694714676449376, 53.92737505271082],
              [27.69471656247644, 53.92736769766929],
              [27.694736128803136, 53.92736944529864],
              [27.69473424277945, 53.927376800340454],
              [27.694714676449376, 53.92737505271082]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-3A-104-2",
          "parentID": "ROOM-3A-104",
          "pathID": "ROOM-3A-104",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-3A-104-2, IOT-ALERT-BRD-3A-104-2, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.695124591400074, 53.9274116648844],
              [27.69512857286311, 53.92739613756142],
              [27.695119768003146, 53.92739535115743],
              [27.69511578653692, 53.92741087848013],
              [27.695124591400074, 53.9274116648844]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-3A-106-2",
          "parentID": "ROOM-3A-106",
          "pathID": "ROOM-3A-106",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-3A-106-2, IOT-ELECTRO-BRD-3A-106-2, IOT-ALERT-BRD-3A-106-2, IOT-PRESSURE-BRD-3A-106-2, IOT-SPEED-BRD-3A-106-2, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.695096220175518, 53.92740913091276],
              [27.69509810613692, 53.92740177586548],
              [27.695112780905305, 53.927403086541084],
              [27.695110894946417, 53.92741044158859],
              [27.695096220175518, 53.92740913091276]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-3A-106-1",
          "parentID": "ROOM-3A-106",
          "pathID": "ROOM-3A-106",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-3A-106-1, IOT-FIRE-BRD-3A-106-1, IOT-ELECTRO-BRD-3A-106-1, IOT-ALERT-BRD-3A-106-1, IOT-PRESSURE-BRD-3A-106-1, IOT-SPEED-BRD-3A-106-1, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.695150575632695, 53.92731032866837],
              [27.695131987632696, 53.92730866848467],
              [27.695136178633472, 53.92729232393366],
              [27.695154766626363, 53.92729398411675],
              [27.695150575632695, 53.92731032866837]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-3A-1-1",
          "parentID": "HALL-3A-1",
          "pathID": "HALL-3A-1",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-3A-1-1, IOT-ELECTRO-BRD-3A-1-1, IOT-ALERT-BRD-3A-1-1, IOT-PRESSURE-BRD-3A-1-1, IOT-SPEED-BRD-3A-1-1, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69489308560147, 53.92675734224538],
              [27.694891199632032, 53.92676469729025],
              [27.69494011476378, 53.92676906628905],
              [27.694942000724804, 53.92676171124344],
              [27.69489308560147, 53.92675734224538]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-3C-1-1",
          "parentID": "HALL-3C-1",
          "pathID": "HALL-3C-1",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-3C-1-1, IOT-FIRE-BRD-3C-1-1, IOT-ALERT-BRD-3C-1-1, IOT-PRESSURE-BRD-3C-1-1, IOT-SPEED-BRD-3C-1-1, ",
          "floor": 3
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69458023860813, 53.92672856295858],
              [27.695284616414, 53.926791476443164],
              [27.695232230003917, 53.9269957833953],
              [27.694527848831473, 53.92693286961594],
              [27.69458023860813, 53.92672856295858]
            ]
          ]
        },
        "properties": {
          "ID": "FLOOR-4C",
          "levelID": 0,
          "parentID": "MAIN",
          "pathID": "",
          "IoTIDs": "IOT-SECURUTY-FLOOR-4C, IOT-FIRE-FLOOR-4C, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694831123803162, 53.92695995800047],
              [27.694928954521565, 53.92696869602537],
              [27.694874470613932, 53.92718117509366],
              [27.69477663940924, 53.92717243702618],
              [27.694831123803162, 53.92695995800047]
            ]
          ]
        },
        "properties": {
          "ID": "FLOOR-4B",
          "levelID": 0,
          "pathID": "MAIN",
          "parentID": "",
          "IoTIDs": "IOT-SECURUTY-FLOOR-4B, IOT-FIRE-FLOOR-4B, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694473362930083, 53.92714534850966],
              [27.694420972127094, 53.927349655109445],
              [27.695125360167474, 53.92741256949013],
              [27.695177747603804, 53.92720826259557],
              [27.694473362930083, 53.92714534850966]
            ]
          ]
        },
        "properties": {
          "ID": "FLOOR-4A",
          "levelID": 0,
          "parentID": "MAIN",
          "pathID": "",
          "IoTIDs": "IOT-SECURUTY-FLOOR-4A, IOT-FIRE-FLOOR-4A, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694805977227436, 53.92705802524689],
              [27.694801786120216, 53.92707436978733],
              [27.694802764429806, 53.9270744571682],
              [27.69480695553666, 53.92705811262773],
              [27.694805977227436, 53.92705802524689]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-4B-1-1",
          "levelID": 1,
          "parentID": "HALL-4B-1",
          "pathID": "MAIN, HALL-4B-1",
          "IoTID": "",
          "height": "",
          "bottom": "",
          "comment": "",
          "IoTIDs": "IOT-LOCK-DOOR-4B-1-1, IOT-OPEN-DOOR-4B-1-1, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694870256085697, 53.926963453220004],
              [27.69488982222937, 53.92696520082499],
              [27.694889612676178, 53.92696601805217],
              [27.694870046532127, 53.92696427044715],
              [27.694870256085697, 53.926963453220004]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-4B-1-3",
          "parentID": "HALL-4B-1",
          "pathID": "HALL-4B-1, HALL-4C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-4B-1-3, IOT-OPEN-DOOR-4B-1-3, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694815771886304, 53.927175932262756],
              [27.694835338127245, 53.927177679876245],
              [27.69483554768252, 53.92717686264919],
              [27.69481598144196, 53.92717511503572],
              [27.694815771886304, 53.927175932262756]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-4B-1-2",
          "parentID": "HALL-4B-1",
          "pathID": "HALL-4A-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-4B-1-2, IOT-OPEN-DOOR-4B-1-2, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69483189255584, 53.92696086260819],
              [27.694927766661706, 53.926969425872755],
              [27.694873701856245, 53.92718027048626],
              [27.694777827277477, 53.92717170718028],
              [27.69483189255584, 53.92696086260819]
            ]
          ]
        },
        "properties": {
          "ID": "HALL-4B-1",
          "parentID": "FLOOR-4B",
          "levelID": 1,
          "pathID": "DOOR-4B-1-1, DOOR-4B-1-2, DOOR-4B-1-3, HALL-3B-1, HALL-5B-1, ",
          "IoTIDs": "IOT-SECURUTY-HALL-4B-1, IOT-TEMP-HALL-4B-1, IOT-LIGHT-HALL-4B-1, IOT-FIRE-HALL-4B-1, IOT-WINDOWLOCK-HALL-4B-1, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694831123803162, 53.92695995800047],
              [27.694854174729088, 53.92687006301885],
              [27.694551878698864, 53.926843062073125],
              [27.694558165471502, 53.92681854527419],
              [27.694860461328343, 53.92684554620475],
              [27.694883302578003, 53.92675646844338],
              [27.694981132830694, 53.92676520642751],
              [27.694958291784896, 53.92685428420672],
              [27.695260588149534, 53.926881284128434],
              [27.69525430177976, 53.92690580096263],
              [27.69495200524175, 53.92687880102576],
              [27.694928954521565, 53.92696869602537],
              [27.694831123803162, 53.92695995800047]
            ]
          ]
        },
        "properties": {
          "ID": "HALL-4C-1",
          "parentID": "FLOOR-4C",
          "pathID": "DOOR-4B-1-3",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-HALL-4C-1, IOT-TEMP-HALL-4C-1, IOT-LIGHT-HALL-4C-1, IOT-FIRE-HALL-4C-1, IOT-WINDOWLOCK-HALL-4C-1, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69452903669731, 53.9269321397725],
              [27.694634693738802, 53.92694157710217],
              [27.694657325962993, 53.92685331661031],
              [27.694551669139653, 53.926843879299746],
              [27.69452903669731, 53.9269321397725]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-4C-112",
          "parentID": "FLOOR-4C",
          "pathID": "DOOR-4C-112-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-4C-112, IOT-TEMP-ROOM-4C-112, IOT-LIGHT-ROOM-4C-112, IOT-FIRE-ROOM-4C-112, IOT-WINDOWLOCK-ROOM-4C-112, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694629164702448, 53.92684996530005],
              [27.694643839262934, 53.92685127603372],
              [27.694643629705467, 53.92685209326049],
              [27.694628955144715, 53.9268507825268],
              [27.694629164702448, 53.92684996530005]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-4C-112-1",
          "parentID": "ROOM-4C-112",
          "pathID": "ROOM-4C-112, HALL-4C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-4C-112-1, IOT-OPEN-DOOR-4C-112-1, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694635672044964, 53.92694166448441],
              [27.69473350268113, 53.9269504026688],
              [27.694756134701297, 53.926862142159095],
              [27.69465830426714, 53.92685340399239],
              [27.694635672044964, 53.92694166448441]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-4C-114",
          "parentID": "FLOOR-4C",
          "pathID": "DOOR-4C-114-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-4C-114, IOT-TEMP-ROOM-4C-114, IOT-LIGHT-ROOM-4C-114, IOT-FIRE-ROOM-4C-114, IOT-WINDOWLOCK-ROOM-4C-114, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69473167708899, 53.926859957624906],
              [27.694746351656086, 53.926861268346016],
              [27.694746561211566, 53.92686045111908],
              [27.69473188664477, 53.92685914039799],
              [27.69473167708899, 53.926859957624906]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-4C-114-1",
          "parentID": "ROOM-4C-114",
          "pathID": "ROOM-4C-114, HALL-4C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-4C-114-1, IOT-OPEN-DOOR-4C-114-1, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69473448098769, 53.926950490050245],
              [27.694830355050517, 53.926959053392736],
              [27.694852986870718, 53.926870792865515],
              [27.694757113005846, 53.92686222954037],
              [27.69473448098769, 53.926950490050245]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-4C-116",
          "parentID": "FLOOR-4C",
          "pathID": "DOOR-4C-116-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-4C-116, IOT-TEMP-ROOM-4C-116, IOT-LIGHT-ROOM-4C-116, IOT-FIRE-ROOM-4C-116, IOT-WINDOWLOCK-ROOM-4C-116, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.6948295075533, 53.92686869573175],
              [27.69484418212642, 53.9268700064409],
              [27.694844391680036, 53.926869189213775],
              [27.694829717107197, 53.926867878504666],
              [27.6948295075533, 53.92686869573175]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-4C-116-1",
          "parentID": "ROOM-4C-116",
          "pathID": "ROOM-4C-116, HALL-4C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-4C-116-1, IOT-OPEN-DOOR-4C-116-1, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694558375030457, 53.92681772804754],
              [27.694664031789173, 53.926827165352464],
              [27.694686663891662, 53.92673890485379],
              [27.694581007351104, 53.926729467567974],
              [27.694558375030457, 53.92681772804754]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-4C-111",
          "parentID": "FLOOR-4C",
          "pathID": "DOOR-4C-111-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-4C-111, IOT-TEMP-ROOM-4C-111, IOT-LIGHT-ROOM-4C-111, IOT-FIRE-ROOM-4C-111, IOT-WINDOWLOCK-ROOM-4C-111, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69465012598283, 53.92682675923016],
              [27.69465033554003, 53.926825942003376],
              [27.694635660988244, 53.92682463127047],
              [27.69463545143076, 53.92682544849723],
              [27.69465012598283, 53.92682675923016]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-4C-111-1",
          "parentID": "ROOM-4C-111",
          "pathID": "ROOM-4C-111, HALL-4C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-4C-111-1, IOT-OPEN-DOOR-4C-111-1, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694665010092706, 53.926827252734476],
              [27.694762840467032, 53.92683599089595],
              [27.694785472365506, 53.92674773037942],
              [27.694687642193177, 53.92673899223562],
              [27.694665010092706, 53.926827252734476]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-4C-113",
          "parentID": "FLOOR-4C",
          "pathID": "DOOR-4C-113-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-4C-113, IOT-TEMP-ROOM-4C-113, IOT-LIGHT-ROOM-4C-113, IOT-FIRE-ROOM-4C-113, IOT-WINDOWLOCK-ROOM-4C-113, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694753057427786, 53.9268351170834],
              [27.69475284787255, 53.926835934310354],
              [27.694738173314168, 53.926834623590004],
              [27.694738382869684, 53.92683380636308],
              [27.694753057427786, 53.9268351170834]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-4C-113-1",
          "parentID": "ROOM-4C-113",
          "pathID": "ROOM-4C-113, HALL-4C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-4C-113-1, IOT-OPEN-DOOR-4C-113-1, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694763818770973, 53.92683607827716],
              [27.694859692577186, 53.926844641597185],
              [27.69488232427569, 53.92675638106313],
              [27.69478645066743, 53.92674781776045],
              [27.694763818770973, 53.92683607827716]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-4C-115",
          "parentID": "FLOOR-4C",
          "pathID": "DOOR-4C-115-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-4C-115, IOT-TEMP-ROOM-4C-115, IOT-LIGHT-ROOM-4C-115, IOT-FIRE-ROOM-4C-115, IOT-WINDOWLOCK-ROOM-4C-115, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694836213274144, 53.926842544464684],
              [27.694836003720486, 53.92684336169178],
              [27.694850678284908, 53.92684467240016],
              [27.694850887838275, 53.926843855173026],
              [27.694836213274144, 53.926842544464684]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-4C-115-1",
          "parentID": "ROOM-4C-115",
          "pathID": "ROOM-4C-115, FLOOR-4C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-4C-115-1, IOT-OPEN-DOOR-4C-115-1, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694952773995528, 53.926879705632714],
              [27.69493014238137, 53.926967966177976],
              [27.695231461241956, 53.92699487879017],
              [27.69525409223398, 53.92690661819043],
              [27.694952773995528, 53.926879705632714]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-4C-118",
          "parentID": "FLOOR-4C",
          "pathID": "DOOR-4C-118-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-4C-118, IOT-TEMP-ROOM-4C-118, IOT-LIGHT-ROOM-4C-118, IOT-FIRE-ROOM-4C-118, IOT-WINDOWLOCK-ROOM-4C-118, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694948861967458, 53.926891059435114],
              [27.694945718691354, 53.92690331784438],
              [27.694946696997253, 53.926903405224095],
              [27.694949840273075, 53.926891146814796],
              [27.694948861967458, 53.926891059435114]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-4C-118-1",
          "parentID": "ROOM-4C-118",
          "pathID": "ROOM-4C-118, HALL-4C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-4C-118-1, IOT-OPEN-DOOR-4C-118-1, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694982111133434, 53.92676529380695],
              [27.694959479640964, 53.92685355435903],
              [27.69511503014727, 53.92686744761629],
              [27.69513766131856, 53.92677918703609],
              [27.694982111133434, 53.92676529380695]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-4C-117",
          "parentID": "FLOOR-4C",
          "pathID": "DOOR-4C-117-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-4C-117, IOT-TEMP-ROOM-4C-117, IOT-LIGHT-ROOM-4C-117, IOT-FIRE-ROOM-4C-117, IOT-WINDOWLOCK-ROOM-4C-117, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694961435053756, 53.926842025797065],
              [27.69496241335825, 53.926842113176654],
              [27.694965556625018, 53.92682985476686],
              [27.694964578320803, 53.92682976738729],
              [27.694961435053756, 53.926842025797065]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-4C-117-1",
          "parentID": "ROOM-4C-117",
          "pathID": "ROOM-4C-117, HALL-4C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-4C-117-1, IOT-OPEN-DOOR-4C-117-1, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69511600845267, 53.92686753499463],
              [27.69526079769506, 53.92688046690061],
              [27.695283428565386, 53.92679220629405],
              [27.69513863962194, 53.926779274414244],
              [27.69511600845267, 53.92686753499463]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-4C-119",
          "parentID": "FLOOR-4C",
          "pathID": "DOOR-4C-119-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-4C-119, IOT-TEMP-ROOM-4C-119, IOT-LIGHT-ROOM-4C-119, IOT-FIRE-ROOM-4C-119, IOT-WINDOWLOCK-ROOM-4C-119, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.695134596255894, 53.92686919518154],
              [27.695134386707938, 53.92687001240913],
              [27.695149061290742, 53.92687132308099],
              [27.69514927083841, 53.92687050585337],
              [27.695134596255894, 53.92686919518154]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-4C-119-1",
          "parentID": "ROOM-4C-119",
          "pathID": "ROOM-4C-119, HALL-4C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-4C-119-1, IOT-OPEN-DOOR-4C-119-1, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69477663940924, 53.92717243702618],
              [27.694755683728236, 53.927254159720256],
              [27.694453384981728, 53.92722715853666],
              [27.69444709808835, 53.927251675328826],
              [27.69514952788377, 53.92731441480625],
              [27.695155814374278, 53.92728989797882],
              [27.69485351511996, 53.92726289780411],
              [27.694874470613932, 53.92718117509366],
              [27.69477663940924, 53.92717243702618]
            ]
          ]
        },
        "properties": {
          "ID": "HALL-4A-1",
          "parentID": "FLOOR-4A",
          "pathID": "DOOR-4B-1-2, DOOR-4A-101-1, DOOR-4A-102-1, DOOR-4A-103-1, DOOR-4A-104-1, DOOR-4A-105-1, DOOR-4A-106-1, DOOR-4A-107-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-HALL-4A-1, IOT-TEMP-HALL-4A-1, IOT-LIGHT-HALL-4A-1, IOT-FIRE-HALL-4A-1, IOT-WINDOWLOCK-HALL-4A-1, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694474131678486, 53.927146253119666],
              [27.69445359454472, 53.927226341310245],
              [27.694609146276015, 53.92724023521809],
              [27.694629683118347, 53.927160147001985],
              [27.694474131678486, 53.927146253119666]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-4A-101",
          "parentID": "FLOOR-4A",
          "pathID": "DOOR-4A-101-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-4A-101, IOT-TEMP-ROOM-4A-101, IOT-LIGHT-ROOM-4A-101, IOT-FIRE-ROOM-4A-101, IOT-WINDOWLOCK-ROOM-4A-101, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694574905320145, 53.927237176828044],
              [27.69457469575948, 53.92723799405465],
              [27.694589370454526, 53.92723930479447],
              [27.694589580014924, 53.92723848756783],
              [27.694574905320145, 53.927237176828044]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-4A-101-1",
          "parentID": "ROOM-4A-101",
          "pathID": "ROOM-4A-101, HALL-4A-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-4A-101-1, IOT-OPEN-DOOR-4A-101-1, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694630661429603, 53.92716023438425],
              [27.694610124589108, 53.92724032260052],
              [27.694754914971757, 53.927253255112085],
              [27.69477545154098, 53.927173166872066],
              [27.694630661429603, 53.92716023438425]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-4A-103",
          "parentID": "FLOOR-4A",
          "pathID": "DOOR-4A-103-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-4A-103, IOT-TEMP-ROOM-4A-103, IOT-LIGHT-ROOM-4A-103, IOT-FIRE-ROOM-4A-103, IOT-WINDOWLOCK-ROOM-4A-103, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694726334318553, 53.92725153827951],
              [27.694726543876335, 53.92725072105265],
              [27.694711869173123, 53.92724941032962],
              [27.694711659615074, 53.92725022755647],
              [27.694726334318553, 53.92725153827951]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-4A-103-1",
          "parentID": "ROOM-4A-103",
          "pathID": "ROOM-4A-103, HALL-4A-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-4A-103-1, IOT-OPEN-DOOR-4A-103-1, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694875239371655, 53.92718207970107],
              [27.694854702989407, 53.92726216795746],
              [27.695000471835414, 53.9272751875529],
              [27.69502100794456, 53.92719509927259],
              [27.694875239371655, 53.92718207970107]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-4A-105",
          "parentID": "FLOOR-4A",
          "pathID": "DOOR-4A-105-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-4A-105, IOT-TEMP-ROOM-4A-105, IOT-LIGHT-ROOM-4A-105, IOT-FIRE-ROOM-4A-105, IOT-WINDOWLOCK-ROOM-4A-105, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694873290958085, 53.92726382818419],
              [27.694873081403127, 53.9272646454113],
              [27.694887756116547, 53.92726595611461],
              [27.694887965671242, 53.92726513888746],
              [27.694873290958085, 53.92726382818419]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-4A-105-1",
          "parentID": "ROOM-4A-105",
          "pathID": "ROOM-4A-105, HALL-4A-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-4A-105-1, IOT-OPEN-DOOR-4A-105-1, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.695021986257437, 53.927195186651666],
              [27.695001450150116, 53.92727527493213],
              [27.695156023923833, 53.92728908075123],
              [27.69517655974155, 53.92720899244541],
              [27.695021986257437, 53.927195186651666]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-4A-107",
          "parentID": "FLOOR-4A",
          "pathID": "DOOR-4A-107-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-4A-107, IOT-TEMP-ROOM-4A-107, IOT-LIGHT-ROOM-4A-107, IOT-FIRE-ROOM-4A-107, IOT-WINDOWLOCK-ROOM-4A-107, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69502003813026, 53.92727693513611],
              [27.695054279150103, 53.927279993399054],
              [27.6950540695986, 53.92728081062646],
              [27.695019828578108, 53.92727775236348],
              [27.69502003813026, 53.92727693513611]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-4A-107-1",
          "parentID": "ROOM-4A-107",
          "pathID": "ROOM-4A-107, HALL-4A-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-4A-107-1, IOT-OPEN-DOOR-4A-107-1, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694446888525118, 53.927252492555226],
              [27.69442216000657, 53.92734892526706],
              [27.694655977468834, 53.927369809802755],
              [27.6946807054599, 53.92727337704475],
              [27.694446888525118, 53.927252492555226]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-4A-102",
          "parentID": "FLOOR-4A",
          "pathID": "DOOR-4A-102-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-4A-102, IOT-TEMP-ROOM-4A-102, IOT-LIGHT-ROOM-4A-102, IOT-FIRE-ROOM-4A-102, IOT-WINDOWLOCK-ROOM-4A-102, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694612433048775, 53.92726644306918],
              [27.694612223488704, 53.92726726029588],
              [27.694626898195157, 53.927268571031064],
              [27.69462710775495, 53.92726775380436],
              [27.694612433048775, 53.92726644306918]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-4A-102-1",
          "parentID": "ROOM-4A-102",
          "pathID": "ROOM-4A-102, HALL-4A-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-4A-102-1, IOT-OPEN-DOOR-4A-102-1, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69468168377391, 53.927273464426584],
              [27.694656955785067, 53.92736989718479],
              [27.69491033982234, 53.927392528863486],
              [27.694935067239573, 53.927296096055215],
              [27.69468168377391, 53.927273464426584]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-4A-104",
          "parentID": "FLOOR-4A",
          "pathID": "DOOR-4A-104-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-4A-104, IOT-TEMP-ROOM-4A-104, IOT-LIGHT-ROOM-4A-104, IOT-FIRE-ROOM-4A-104, IOT-WINDOWLOCK-ROOM-4A-104, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69477385486643, 53.92728086105726],
              [27.694773645309443, 53.92728167828421],
              [27.694788320025836, 53.92728298899965],
              [27.694788529582546, 53.92728217177268],
              [27.69477385486643, 53.92728086105726]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-4A-104-1",
          "parentID": "ROOM-4A-104",
          "pathID": "ROOM-4A-104, HALL-4A-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-4A-104-1, IOT-OPEN-DOOR-4A-104-1, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694936045554627, 53.927296183435],
              [27.6949113181396, 53.927392616243445],
              [27.695124591400074, 53.9274116648844],
              [27.695149318333968, 53.92731523203382],
              [27.694936045554627, 53.927296183435]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-4A-106",
          "parentID": "FLOOR-4A",
          "pathID": "DOOR-4A-106-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-4A-106, IOT-TEMP-ROOM-4A-106, IOT-LIGHT-ROOM-4A-106, IOT-FIRE-ROOM-4A-106, IOT-WINDOWLOCK-ROOM-4A-106, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694964626246517, 53.92729790021752],
              [27.694964416693157, 53.927298717444785],
              [27.69497909142132, 53.92730002813688],
              [27.694979300974385, 53.927299210909595],
              [27.694964626246517, 53.92729790021752]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-4A-106-1",
          "parentID": "ROOM-4A-106",
          "pathID": "ROOM-4A-106, HALL-4A-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-4A-106-1, IOT-OPEN-DOOR-4A-106-1, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694581007351104, 53.926729467567974],
              [27.69460057337359, 53.92673121522052],
              [27.694597639564794, 53.92674265639455],
              [27.694578073537066, 53.92674090874154],
              [27.694581007351104, 53.926729467567974]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-4C-111-1",
          "parentID": "ROOM-4C-111",
          "pathID": "ROOM-4C-111",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-4C-111-1, IOT-ALERT-BRD-4C-111-1, IOT-PRESSURE-BRD-4C-111-1, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694756123309585, 53.92674510894466],
              [27.694785472365506, 53.92674773037942],
              [27.694782538606187, 53.92675917155778],
              [27.694753189542407, 53.92675655012234],
              [27.694756123309585, 53.92674510894466]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-4C-113-1",
          "parentID": "ROOM-4C-113",
          "pathID": "ROOM-4C-113",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-4C-113-1, IOT-FIRE-BRD-4C-113-1, IOT-ALERT-BRD-4C-113-1, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69488232427569, 53.92675638106313],
              [27.69487834277998, 53.926771908379685],
              [27.694869538056047, 53.92677112195685],
              [27.69487351955495, 53.92675559464057],
              [27.69488232427569, 53.92675638106313]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-4C-115-1",
          "parentID": "ROOM-4C-115",
          "pathID": "ROOM-4C-115",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-4C-115-1, IOT-ELECTRO-BRD-4C-115-1, IOT-ALERT-BRD-4C-115-1, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69513766131856, 53.92677918703609],
              [27.695131584439196, 53.92680288663686],
              [27.695121801400273, 53.92680201285432],
              [27.695127878285067, 53.92677831325403],
              [27.69513766131856, 53.92677918703609]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-4C-117-1",
          "parentID": "ROOM-4C-117",
          "pathID": "ROOM-4C-117",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-4C-117-1, IOT-ELECTRO-BRD-4C-117-1, IOT-ALERT-BRD-4C-117-1, IOT-SPEED-BRD-4C-117-1, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69513863962194, 53.926779274414244],
              [27.69515722738678, 53.92678093459779],
              [27.6951553414628, 53.926788289646645],
              [27.695136753694758, 53.92678662946282],
              [27.69513863962194, 53.926779274414244]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-4C-119-1",
          "parentID": "ROOM-4C-119",
          "pathID": "ROOM-4C-119",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-4C-119-1, IOT-FIRE-BRD-4C-119-1, IOT-ALERT-BRD-4C-119-1, IOT-SPEED-BRD-4C-119-1, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.695231461241956, 53.92699487879017],
              [27.69519330720931, 53.9269914710662],
              [27.695195193135465, 53.92698411601701],
              [27.695233347161547, 53.92698752374038],
              [27.695231461241956, 53.92699487879017]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-4C-118-2",
          "parentID": "ROOM-4C-118",
          "pathID": "ROOM-4C-118",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-4C-118-2, IOT-ALERT-BRD-4C-118-2, IOT-SPEED-BRD-4C-118-2, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69525409223398, 53.92690661819043],
              [27.69525011086256, 53.926922145518546],
              [27.69523152303137, 53.92692048534962],
              [27.69523550440953, 53.9269049580221],
              [27.69525409223398, 53.92690661819043]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-4C-118-1",
          "parentID": "ROOM-4C-118",
          "pathID": "ROOM-4C-118",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-4C-118-1, IOT-FIRE-BRD-4C-118-1, IOT-ALERT-BRD-4C-118-1, IOT-PRESSURE-BRD-4C-118-1, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694888161100888, 53.9271238818135],
              [27.69488397001943, 53.92714022635655],
              [27.694875165217816, 53.927139439934415],
              [27.694879356302643, 53.92712309539166],
              [27.694888161100888, 53.9271238818135]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-4B-1-1",
          "parentID": "HALL-4B-1",
          "pathID": "HALL-4B-1",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-4B-1-1, IOT-FIRE-BRD-4B-1-1, IOT-ALERT-BRD-4B-1-1, IOT-SPEED-BRD-4B-1-1, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694474131678486, 53.927146253119666],
              [27.694472245618407, 53.927153608157745],
              [27.69448105041569, 53.92715439460944],
              [27.694482936474255, 53.92714703957123],
              [27.694474131678486, 53.927146253119666]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-4A-101-1",
          "parentID": "ROOM-4A-101",
          "pathID": "ROOM-4A-101",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-4A-101-1, IOT-FIRE-BRD-4A-101-1, IOT-ALERT-BRD-4A-101-1, IOT-SPEED-BRD-4A-101-1, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694630661429603, 53.92716023438425],
              [27.69464924934439, 53.92716189464585],
              [27.694647363314438, 53.927169249686585],
              [27.694628775396453, 53.927167589424705],
              [27.694630661429603, 53.92716023438425]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-4A-103",
          "parentID": "ROOM-4A-103",
          "pathID": "ROOM-4A-103",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-4A-103, IOT-ELECTRO-BRD-4A-103, IOT-ALERT-BRD-4A-103, IOT-PRESSURE-BRD-4A-103, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69502100794456, 53.92719509927259],
              [27.695019121978582, 53.927202454318916],
              [27.695009338848408, 53.92720158052757],
              [27.695011224816074, 53.927194225481394],
              [27.69502100794456, 53.92719509927259]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-4A-105-1",
          "parentID": "ROOM-4A-105",
          "pathID": "ROOM-4A-105",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-4A-105-1, IOT-FIRE-BRD-4A-105-1, IOT-ALERT-BRD-4A-105-1, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.695021986257437, 53.927195186651666],
              [27.695040574202757, 53.92719684685259],
              [27.695038688240135, 53.92720420189922],
              [27.695020100291615, 53.927202541698016],
              [27.695021986257437, 53.927195186651666]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-4A-107-1",
          "parentID": "ROOM-4A-107",
          "pathID": "ROOM-4A-107",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-4A-107-1, IOT-FIRE-BRD-4A-107-1, IOT-ALERT-BRD-4A-107-1, IOT-SPEED-BRD-4A-107-1, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69442216000657, 53.92734892526706],
              [27.69443096484409, 53.92734971172227],
              [27.694432850919974, 53.92734235668502],
              [27.694424046083967, 53.927341570229935],
              [27.69442216000657, 53.92734892526706]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-4A-102-1",
          "parentID": "ROOM-4A-102",
          "pathID": "ROOM-4A-102",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-4A-102-1, IOT-ALERT-BRD-4A-102-1, IOT-SPEED-BRD-4A-102-1, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694425093904467, 53.92733748409819],
              [27.69443389873962, 53.9273382705532],
              [27.694437042197375, 53.92732601215765],
              [27.694428237364736, 53.92732522570286],
              [27.694425093904467, 53.92733748409819]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-4A-102-2",
          "parentID": "ROOM-4A-102",
          "pathID": "ROOM-4A-102",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-4A-102-2, IOT-ELECTRO-BRD-4A-102-2, IOT-ALERT-BRD-4A-102-2, IOT-SPEED-BRD-4A-102-2, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694656955785067, 53.92736989718479],
              [27.69469511012092, 53.927373305077985],
              [27.694696996151357, 53.92736595003676],
              [27.69465884182205, 53.92736254214413],
              [27.694656955785067, 53.92736989718479]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-4A-104-1",
          "parentID": "ROOM-4A-104",
          "pathID": "ROOM-4A-104",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-4A-104-1, IOT-FIRE-BRD-4A-104-1, IOT-ALERT-BRD-4A-104-1, IOT-PRESSURE-BRD-4A-104-1, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694714676449376, 53.92737505271082],
              [27.69471656247644, 53.92736769766929],
              [27.694736128803136, 53.92736944529864],
              [27.69473424277945, 53.927376800340454],
              [27.694714676449376, 53.92737505271082]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-4A-104-2",
          "parentID": "ROOM-4A-104",
          "pathID": "ROOM-4A-104",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-4A-104-2, IOT-ALERT-BRD-4A-104-2, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.695124591400074, 53.9274116648844],
              [27.69512857286311, 53.92739613756142],
              [27.695119768003146, 53.92739535115743],
              [27.69511578653692, 53.92741087848013],
              [27.695124591400074, 53.9274116648844]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-4A-106-2",
          "parentID": "ROOM-4A-106",
          "pathID": "ROOM-4A-106",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-4A-106-2, IOT-ELECTRO-BRD-4A-106-2, IOT-ALERT-BRD-4A-106-2, IOT-PRESSURE-BRD-4A-106-2, IOT-SPEED-BRD-4A-106-2, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.695096220175518, 53.92740913091276],
              [27.69509810613692, 53.92740177586548],
              [27.695112780905305, 53.927403086541084],
              [27.695110894946417, 53.92741044158859],
              [27.695096220175518, 53.92740913091276]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-4A-106-1",
          "parentID": "ROOM-4A-106",
          "pathID": "ROOM-4A-106",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-4A-106-1, IOT-FIRE-BRD-4A-106-1, IOT-ELECTRO-BRD-4A-106-1, IOT-ALERT-BRD-4A-106-1, IOT-PRESSURE-BRD-4A-106-1, IOT-SPEED-BRD-4A-106-1, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.695150575632695, 53.92731032866837],
              [27.695131987632696, 53.92730866848467],
              [27.695136178633472, 53.92729232393366],
              [27.695154766626363, 53.92729398411675],
              [27.695150575632695, 53.92731032866837]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-4A-1-1",
          "parentID": "HALL-4A-1",
          "pathID": "HALL-4A-1",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-4A-1-1, IOT-ELECTRO-BRD-4A-1-1, IOT-ALERT-BRD-4A-1-1, IOT-PRESSURE-BRD-4A-1-1, IOT-SPEED-BRD-4A-1-1, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69489308560147, 53.92675734224538],
              [27.694891199632032, 53.92676469729025],
              [27.69494011476378, 53.92676906628905],
              [27.694942000724804, 53.92676171124344],
              [27.69489308560147, 53.92675734224538]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-4C-1-1",
          "parentID": "HALL-4C-1",
          "pathID": "HALL-4C-1",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-4C-1-1, IOT-FIRE-BRD-4C-1-1, IOT-ALERT-BRD-4C-1-1, IOT-PRESSURE-BRD-4C-1-1, IOT-SPEED-BRD-4C-1-1, ",
          "floor": 4
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69458023860813, 53.92672856295858],
              [27.695284616414, 53.926791476443164],
              [27.695232230003917, 53.9269957833953],
              [27.694527848831473, 53.92693286961594],
              [27.69458023860813, 53.92672856295858]
            ]
          ]
        },
        "properties": {
          "ID": "FLOOR-5C",
          "levelID": 0,
          "parentID": "MAIN",
          "pathID": "",
          "IoTIDs": "IOT-SECURUTY-FLOOR-5C, IOT-FIRE-FLOOR-5C, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694831123803162, 53.92695995800047],
              [27.694928954521565, 53.92696869602537],
              [27.694874470613932, 53.92718117509366],
              [27.69477663940924, 53.92717243702618],
              [27.694831123803162, 53.92695995800047]
            ]
          ]
        },
        "properties": {
          "ID": "FLOOR-5B",
          "levelID": 0,
          "pathID": "MAIN",
          "parentID": "",
          "IoTIDs": "IOT-SECURUTY-FLOOR-5B, IOT-FIRE-FLOOR-5B, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694473362930083, 53.92714534850966],
              [27.694420972127094, 53.927349655109445],
              [27.695125360167474, 53.92741256949013],
              [27.695177747603804, 53.92720826259557],
              [27.694473362930083, 53.92714534850966]
            ]
          ]
        },
        "properties": {
          "ID": "FLOOR-5A",
          "levelID": 0,
          "parentID": "MAIN",
          "pathID": "",
          "IoTIDs": "IOT-SECURUTY-FLOOR-5A, IOT-FIRE-FLOOR-5A, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694805977227436, 53.92705802524689],
              [27.694801786120216, 53.92707436978733],
              [27.694802764429806, 53.9270744571682],
              [27.69480695553666, 53.92705811262773],
              [27.694805977227436, 53.92705802524689]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-5B-1-1",
          "levelID": 1,
          "parentID": "HALL-5B-1",
          "pathID": "MAIN, HALL-5B-1",
          "IoTID": "",
          "height": "",
          "bottom": "",
          "comment": "",
          "IoTIDs": "IOT-LOCK-DOOR-5B-1-1, IOT-OPEN-DOOR-5B-1-1, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694870256085697, 53.926963453220004],
              [27.69488982222937, 53.92696520082499],
              [27.694889612676178, 53.92696601805217],
              [27.694870046532127, 53.92696427044715],
              [27.694870256085697, 53.926963453220004]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-5B-1-3",
          "parentID": "HALL-5B-1",
          "pathID": "HALL-5B-1, HALL-5C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-5B-1-3, IOT-OPEN-DOOR-5B-1-3, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694815771886304, 53.927175932262756],
              [27.694835338127245, 53.927177679876245],
              [27.69483554768252, 53.92717686264919],
              [27.69481598144196, 53.92717511503572],
              [27.694815771886304, 53.927175932262756]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-5B-1-2",
          "parentID": "HALL-5B-1",
          "pathID": "HALL-5A-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-5B-1-2, IOT-OPEN-DOOR-5B-1-2, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69483189255584, 53.92696086260819],
              [27.694927766661706, 53.926969425872755],
              [27.694873701856245, 53.92718027048626],
              [27.694777827277477, 53.92717170718028],
              [27.69483189255584, 53.92696086260819]
            ]
          ]
        },
        "properties": {
          "ID": "HALL-5B-1",
          "parentID": "FLOOR-5B",
          "levelID": 1,
          "pathID": "DOOR-5B-1-1, DOOR-5B-1-2, DOOR-5B-1-3, HALL-4B-1, ",
          "IoTIDs": "IOT-SECURUTY-HALL-5B-1, IOT-TEMP-HALL-5B-1, IOT-LIGHT-HALL-5B-1, IOT-FIRE-HALL-5B-1, IOT-WINDOWLOCK-HALL-5B-1, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694831123803162, 53.92695995800047],
              [27.694854174729088, 53.92687006301885],
              [27.694551878698864, 53.926843062073125],
              [27.694558165471502, 53.92681854527419],
              [27.694860461328343, 53.92684554620475],
              [27.694883302578003, 53.92675646844338],
              [27.694981132830694, 53.92676520642751],
              [27.694958291784896, 53.92685428420672],
              [27.695260588149534, 53.926881284128434],
              [27.69525430177976, 53.92690580096263],
              [27.69495200524175, 53.92687880102576],
              [27.694928954521565, 53.92696869602537],
              [27.694831123803162, 53.92695995800047]
            ]
          ]
        },
        "properties": {
          "ID": "HALL-5C-1",
          "parentID": "FLOOR-5C",
          "pathID": "DOOR-5B-1-3",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-HALL-5C-1, IOT-TEMP-HALL-5C-1, IOT-LIGHT-HALL-5C-1, IOT-FIRE-HALL-5C-1, IOT-WINDOWLOCK-HALL-5C-1, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69452903669731, 53.9269321397725],
              [27.694634693738802, 53.92694157710217],
              [27.694657325962993, 53.92685331661031],
              [27.694551669139653, 53.926843879299746],
              [27.69452903669731, 53.9269321397725]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-5C-112",
          "parentID": "FLOOR-5C",
          "pathID": "DOOR-5C-112-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-5C-112, IOT-TEMP-ROOM-5C-112, IOT-LIGHT-ROOM-5C-112, IOT-FIRE-ROOM-5C-112, IOT-WINDOWLOCK-ROOM-5C-112, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694629164702448, 53.92684996530005],
              [27.694643839262934, 53.92685127603372],
              [27.694643629705467, 53.92685209326049],
              [27.694628955144715, 53.9268507825268],
              [27.694629164702448, 53.92684996530005]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-5C-112-1",
          "parentID": "ROOM-5C-112",
          "pathID": "ROOM-5C-112, HALL-5C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-5C-112-1, IOT-OPEN-DOOR-5C-112-1, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694635672044964, 53.92694166448441],
              [27.69473350268113, 53.9269504026688],
              [27.694756134701297, 53.926862142159095],
              [27.69465830426714, 53.92685340399239],
              [27.694635672044964, 53.92694166448441]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-5C-114",
          "parentID": "FLOOR-5C",
          "pathID": "DOOR-5C-114-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-5C-114, IOT-TEMP-ROOM-5C-114, IOT-LIGHT-ROOM-5C-114, IOT-FIRE-ROOM-5C-114, IOT-WINDOWLOCK-ROOM-5C-114, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69473167708899, 53.926859957624906],
              [27.694746351656086, 53.926861268346016],
              [27.694746561211566, 53.92686045111908],
              [27.69473188664477, 53.92685914039799],
              [27.69473167708899, 53.926859957624906]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-5C-114-1",
          "parentID": "ROOM-5C-114",
          "pathID": "ROOM-5C-114, HALL-5C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-5C-114-1, IOT-OPEN-DOOR-5C-114-1, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69473448098769, 53.926950490050245],
              [27.694830355050517, 53.926959053392736],
              [27.694852986870718, 53.926870792865515],
              [27.694757113005846, 53.92686222954037],
              [27.69473448098769, 53.926950490050245]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-5C-116",
          "parentID": "FLOOR-5C",
          "pathID": "DOOR-5C-116-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-5C-116, IOT-TEMP-ROOM-5C-116, IOT-LIGHT-ROOM-5C-116, IOT-FIRE-ROOM-5C-116, IOT-WINDOWLOCK-ROOM-5C-116, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.6948295075533, 53.92686869573175],
              [27.69484418212642, 53.9268700064409],
              [27.694844391680036, 53.926869189213775],
              [27.694829717107197, 53.926867878504666],
              [27.6948295075533, 53.92686869573175]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-5C-116-1",
          "parentID": "ROOM-5C-116",
          "pathID": "ROOM-5C-116, HALL-5C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-5C-116-1, IOT-OPEN-DOOR-5C-116-1, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694558375030457, 53.92681772804754],
              [27.694664031789173, 53.926827165352464],
              [27.694686663891662, 53.92673890485379],
              [27.694581007351104, 53.926729467567974],
              [27.694558375030457, 53.92681772804754]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-5C-111",
          "parentID": "FLOOR-5C",
          "pathID": "DOOR-5C-111-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-5C-111, IOT-TEMP-ROOM-5C-111, IOT-LIGHT-ROOM-5C-111, IOT-FIRE-ROOM-5C-111, IOT-WINDOWLOCK-ROOM-5C-111, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69465012598283, 53.92682675923016],
              [27.69465033554003, 53.926825942003376],
              [27.694635660988244, 53.92682463127047],
              [27.69463545143076, 53.92682544849723],
              [27.69465012598283, 53.92682675923016]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-5C-111-1",
          "parentID": "ROOM-5C-111",
          "pathID": "ROOM-5C-111, HALL-5C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-5C-111-1, IOT-OPEN-DOOR-5C-111-1, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694665010092706, 53.926827252734476],
              [27.694762840467032, 53.92683599089595],
              [27.694785472365506, 53.92674773037942],
              [27.694687642193177, 53.92673899223562],
              [27.694665010092706, 53.926827252734476]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-5C-113",
          "parentID": "FLOOR-5C",
          "pathID": "DOOR-5C-113-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-5C-113, IOT-TEMP-ROOM-5C-113, IOT-LIGHT-ROOM-5C-113, IOT-FIRE-ROOM-5C-113, IOT-WINDOWLOCK-ROOM-5C-113, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694753057427786, 53.9268351170834],
              [27.69475284787255, 53.926835934310354],
              [27.694738173314168, 53.926834623590004],
              [27.694738382869684, 53.92683380636308],
              [27.694753057427786, 53.9268351170834]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-5C-113-1",
          "parentID": "ROOM-5C-113",
          "pathID": "ROOM-5C-113, HALL-5C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-5C-113-1, IOT-OPEN-DOOR-5C-113-1, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694763818770973, 53.92683607827716],
              [27.694859692577186, 53.926844641597185],
              [27.69488232427569, 53.92675638106313],
              [27.69478645066743, 53.92674781776045],
              [27.694763818770973, 53.92683607827716]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-5C-115",
          "parentID": "FLOOR-5C",
          "pathID": "DOOR-5C-115-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-5C-115, IOT-TEMP-ROOM-5C-115, IOT-LIGHT-ROOM-5C-115, IOT-FIRE-ROOM-5C-115, IOT-WINDOWLOCK-ROOM-5C-115, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694836213274144, 53.926842544464684],
              [27.694836003720486, 53.92684336169178],
              [27.694850678284908, 53.92684467240016],
              [27.694850887838275, 53.926843855173026],
              [27.694836213274144, 53.926842544464684]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-5C-115-1",
          "parentID": "ROOM-5C-115",
          "pathID": "ROOM-5C-115, FLOOR-5C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-5C-115-1, IOT-OPEN-DOOR-5C-115-1, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694952773995528, 53.926879705632714],
              [27.69493014238137, 53.926967966177976],
              [27.695231461241956, 53.92699487879017],
              [27.69525409223398, 53.92690661819043],
              [27.694952773995528, 53.926879705632714]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-5C-118",
          "parentID": "FLOOR-5C",
          "pathID": "DOOR-5C-118-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-5C-118, IOT-TEMP-ROOM-5C-118, IOT-LIGHT-ROOM-5C-118, IOT-FIRE-ROOM-5C-118, IOT-WINDOWLOCK-ROOM-5C-118, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694948861967458, 53.926891059435114],
              [27.694945718691354, 53.92690331784438],
              [27.694946696997253, 53.926903405224095],
              [27.694949840273075, 53.926891146814796],
              [27.694948861967458, 53.926891059435114]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-5C-118-1",
          "parentID": "ROOM-5C-118",
          "pathID": "ROOM-5C-118, HALL-5C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-5C-118-1, IOT-OPEN-DOOR-5C-118-1, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694982111133434, 53.92676529380695],
              [27.694959479640964, 53.92685355435903],
              [27.69511503014727, 53.92686744761629],
              [27.69513766131856, 53.92677918703609],
              [27.694982111133434, 53.92676529380695]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-5C-117",
          "parentID": "FLOOR-5C",
          "pathID": "DOOR-5C-117-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-5C-117, IOT-TEMP-ROOM-5C-117, IOT-LIGHT-ROOM-5C-117, IOT-FIRE-ROOM-5C-117, IOT-WINDOWLOCK-ROOM-5C-117, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694961435053756, 53.926842025797065],
              [27.69496241335825, 53.926842113176654],
              [27.694965556625018, 53.92682985476686],
              [27.694964578320803, 53.92682976738729],
              [27.694961435053756, 53.926842025797065]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-5C-117-1",
          "parentID": "ROOM-5C-117",
          "pathID": "ROOM-5C-117, HALL-5C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-5C-117-1, IOT-OPEN-DOOR-5C-117-1, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69511600845267, 53.92686753499463],
              [27.69526079769506, 53.92688046690061],
              [27.695283428565386, 53.92679220629405],
              [27.69513863962194, 53.926779274414244],
              [27.69511600845267, 53.92686753499463]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-5C-119",
          "parentID": "FLOOR-5C",
          "pathID": "DOOR-5C-119-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-5C-119, IOT-TEMP-ROOM-5C-119, IOT-LIGHT-ROOM-5C-119, IOT-FIRE-ROOM-5C-119, IOT-WINDOWLOCK-ROOM-5C-119, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.695134596255894, 53.92686919518154],
              [27.695134386707938, 53.92687001240913],
              [27.695149061290742, 53.92687132308099],
              [27.69514927083841, 53.92687050585337],
              [27.695134596255894, 53.92686919518154]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-5C-119-1",
          "parentID": "ROOM-5C-119",
          "pathID": "ROOM-5C-119, HALL-5C-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-5C-119-1, IOT-OPEN-DOOR-5C-119-1, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69477663940924, 53.92717243702618],
              [27.694755683728236, 53.927254159720256],
              [27.694453384981728, 53.92722715853666],
              [27.69444709808835, 53.927251675328826],
              [27.69514952788377, 53.92731441480625],
              [27.695155814374278, 53.92728989797882],
              [27.69485351511996, 53.92726289780411],
              [27.694874470613932, 53.92718117509366],
              [27.69477663940924, 53.92717243702618]
            ]
          ]
        },
        "properties": {
          "ID": "HALL-5A-1",
          "parentID": "FLOOR-5A",
          "pathID": "DOOR-5B-1-2, DOOR-5A-101-1, DOOR-5A-102-1, DOOR-5A-103-1, DOOR-5A-104-1, DOOR-5A-105-1, DOOR-5A-106-1, DOOR-5A-107-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-HALL-5A-1, IOT-TEMP-HALL-5A-1, IOT-LIGHT-HALL-5A-1, IOT-FIRE-HALL-5A-1, IOT-WINDOWLOCK-HALL-5A-1, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694474131678486, 53.927146253119666],
              [27.69445359454472, 53.927226341310245],
              [27.694609146276015, 53.92724023521809],
              [27.694629683118347, 53.927160147001985],
              [27.694474131678486, 53.927146253119666]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-5A-101",
          "parentID": "FLOOR-5A",
          "pathID": "DOOR-5A-101-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-5A-101, IOT-TEMP-ROOM-5A-101, IOT-LIGHT-ROOM-5A-101, IOT-FIRE-ROOM-5A-101, IOT-WINDOWLOCK-ROOM-5A-101, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694574905320145, 53.927237176828044],
              [27.69457469575948, 53.92723799405465],
              [27.694589370454526, 53.92723930479447],
              [27.694589580014924, 53.92723848756783],
              [27.694574905320145, 53.927237176828044]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-5A-101-1",
          "parentID": "ROOM-5A-101",
          "pathID": "ROOM-5A-101, HALL-5A-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-5A-101-1, IOT-OPEN-DOOR-5A-101-1, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694630661429603, 53.92716023438425],
              [27.694610124589108, 53.92724032260052],
              [27.694754914971757, 53.927253255112085],
              [27.69477545154098, 53.927173166872066],
              [27.694630661429603, 53.92716023438425]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-5A-103",
          "parentID": "FLOOR-5A",
          "pathID": "DOOR-5A-103-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-5A-103, IOT-TEMP-ROOM-5A-103, IOT-LIGHT-ROOM-5A-103, IOT-FIRE-ROOM-5A-103, IOT-WINDOWLOCK-ROOM-5A-103, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694726334318553, 53.92725153827951],
              [27.694726543876335, 53.92725072105265],
              [27.694711869173123, 53.92724941032962],
              [27.694711659615074, 53.92725022755647],
              [27.694726334318553, 53.92725153827951]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-5A-103-1",
          "parentID": "ROOM-5A-103",
          "pathID": "ROOM-5A-103, HALL-5A-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-5A-103-1, IOT-OPEN-DOOR-5A-103-1, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694875239371655, 53.92718207970107],
              [27.694854702989407, 53.92726216795746],
              [27.695000471835414, 53.9272751875529],
              [27.69502100794456, 53.92719509927259],
              [27.694875239371655, 53.92718207970107]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-5A-105",
          "parentID": "FLOOR-5A",
          "pathID": "DOOR-5A-105-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-5A-105, IOT-TEMP-ROOM-5A-105, IOT-LIGHT-ROOM-5A-105, IOT-FIRE-ROOM-5A-105, IOT-WINDOWLOCK-ROOM-5A-105, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694873290958085, 53.92726382818419],
              [27.694873081403127, 53.9272646454113],
              [27.694887756116547, 53.92726595611461],
              [27.694887965671242, 53.92726513888746],
              [27.694873290958085, 53.92726382818419]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-5A-105-1",
          "parentID": "ROOM-5A-105",
          "pathID": "ROOM-5A-105, HALL-5A-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-5A-105-1, IOT-OPEN-DOOR-5A-105-1, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.695021986257437, 53.927195186651666],
              [27.695001450150116, 53.92727527493213],
              [27.695156023923833, 53.92728908075123],
              [27.69517655974155, 53.92720899244541],
              [27.695021986257437, 53.927195186651666]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-5A-107",
          "parentID": "FLOOR-5A",
          "pathID": "DOOR-5A-107-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-5A-107, IOT-TEMP-ROOM-5A-107, IOT-LIGHT-ROOM-5A-107, IOT-FIRE-ROOM-5A-107, IOT-WINDOWLOCK-ROOM-5A-107, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69502003813026, 53.92727693513611],
              [27.695054279150103, 53.927279993399054],
              [27.6950540695986, 53.92728081062646],
              [27.695019828578108, 53.92727775236348],
              [27.69502003813026, 53.92727693513611]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-5A-107-1",
          "parentID": "ROOM-5A-107",
          "pathID": "ROOM-5A-107, HALL-5A-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-5A-107-1, IOT-OPEN-DOOR-5A-107-1, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694446888525118, 53.927252492555226],
              [27.69442216000657, 53.92734892526706],
              [27.694655977468834, 53.927369809802755],
              [27.6946807054599, 53.92727337704475],
              [27.694446888525118, 53.927252492555226]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-5A-102",
          "parentID": "FLOOR-5A",
          "pathID": "DOOR-5A-102-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-5A-102, IOT-TEMP-ROOM-5A-102, IOT-LIGHT-ROOM-5A-102, IOT-FIRE-ROOM-5A-102, IOT-WINDOWLOCK-ROOM-5A-102, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694612433048775, 53.92726644306918],
              [27.694612223488704, 53.92726726029588],
              [27.694626898195157, 53.927268571031064],
              [27.69462710775495, 53.92726775380436],
              [27.694612433048775, 53.92726644306918]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-5A-102-1",
          "parentID": "ROOM-5A-102",
          "pathID": "ROOM-5A-102, HALL-5A-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-5A-102-1, IOT-OPEN-DOOR-5A-102-1, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69468168377391, 53.927273464426584],
              [27.694656955785067, 53.92736989718479],
              [27.69491033982234, 53.927392528863486],
              [27.694935067239573, 53.927296096055215],
              [27.69468168377391, 53.927273464426584]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-5A-104",
          "parentID": "FLOOR-5A",
          "pathID": "DOOR-5A-104-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-5A-104, IOT-TEMP-ROOM-5A-104, IOT-LIGHT-ROOM-5A-104, IOT-FIRE-ROOM-5A-104, IOT-WINDOWLOCK-ROOM-5A-104, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69477385486643, 53.92728086105726],
              [27.694773645309443, 53.92728167828421],
              [27.694788320025836, 53.92728298899965],
              [27.694788529582546, 53.92728217177268],
              [27.69477385486643, 53.92728086105726]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-5A-104-1",
          "parentID": "ROOM-5A-104",
          "pathID": "ROOM-5A-104, HALL-5A-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-5A-104-1, IOT-OPEN-DOOR-5A-104-1, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694936045554627, 53.927296183435],
              [27.6949113181396, 53.927392616243445],
              [27.695124591400074, 53.9274116648844],
              [27.695149318333968, 53.92731523203382],
              [27.694936045554627, 53.927296183435]
            ]
          ]
        },
        "properties": {
          "ID": "ROOM-5A-106",
          "parentID": "FLOOR-5A",
          "pathID": "DOOR-5A-106-1",
          "levelID": 1,
          "IoTIDs": "IOT-SECURUTY-ROOM-5A-106, IOT-TEMP-ROOM-5A-106, IOT-LIGHT-ROOM-5A-106, IOT-FIRE-ROOM-5A-106, IOT-WINDOWLOCK-ROOM-5A-106, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694964626246517, 53.92729790021752],
              [27.694964416693157, 53.927298717444785],
              [27.69497909142132, 53.92730002813688],
              [27.694979300974385, 53.927299210909595],
              [27.694964626246517, 53.92729790021752]
            ]
          ]
        },
        "properties": {
          "ID": "DOOR-5A-106-1",
          "parentID": "ROOM-5A-106",
          "pathID": "ROOM-5A-106, HALL-5A-1",
          "levelID": 1,
          "IoTIDs": "IOT-LOCK-DOOR-5A-106-1, IOT-OPEN-DOOR-5A-106-1, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694581007351104, 53.926729467567974],
              [27.69460057337359, 53.92673121522052],
              [27.694597639564794, 53.92674265639455],
              [27.694578073537066, 53.92674090874154],
              [27.694581007351104, 53.926729467567974]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-5C-111-1",
          "parentID": "ROOM-5C-111",
          "pathID": "ROOM-5C-111",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-5C-111-1, IOT-ALERT-BRD-5C-111-1, IOT-PRESSURE-BRD-5C-111-1, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694756123309585, 53.92674510894466],
              [27.694785472365506, 53.92674773037942],
              [27.694782538606187, 53.92675917155778],
              [27.694753189542407, 53.92675655012234],
              [27.694756123309585, 53.92674510894466]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-5C-113-1",
          "parentID": "ROOM-5C-113",
          "pathID": "ROOM-5C-113",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-5C-113-1, IOT-FIRE-BRD-5C-113-1, IOT-ALERT-BRD-5C-113-1, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69488232427569, 53.92675638106313],
              [27.69487834277998, 53.926771908379685],
              [27.694869538056047, 53.92677112195685],
              [27.69487351955495, 53.92675559464057],
              [27.69488232427569, 53.92675638106313]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-5C-115-1",
          "parentID": "ROOM-5C-115",
          "pathID": "ROOM-5C-115",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-5C-115-1, IOT-ELECTRO-BRD-5C-115-1, IOT-ALERT-BRD-5C-115-1, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69513766131856, 53.92677918703609],
              [27.695131584439196, 53.92680288663686],
              [27.695121801400273, 53.92680201285432],
              [27.695127878285067, 53.92677831325403],
              [27.69513766131856, 53.92677918703609]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-5C-117-1",
          "parentID": "ROOM-5C-117",
          "pathID": "ROOM-5C-117",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-5C-117-1, IOT-ELECTRO-BRD-5C-117-1, IOT-ALERT-BRD-5C-117-1, IOT-SPEED-BRD-5C-117-1, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69513863962194, 53.926779274414244],
              [27.69515722738678, 53.92678093459779],
              [27.6951553414628, 53.926788289646645],
              [27.695136753694758, 53.92678662946282],
              [27.69513863962194, 53.926779274414244]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-5C-119-1",
          "parentID": "ROOM-5C-119",
          "pathID": "ROOM-5C-119",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-5C-119-1, IOT-FIRE-BRD-5C-119-1, IOT-ALERT-BRD-5C-119-1, IOT-SPEED-BRD-5C-119-1, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.695231461241956, 53.92699487879017],
              [27.69519330720931, 53.9269914710662],
              [27.695195193135465, 53.92698411601701],
              [27.695233347161547, 53.92698752374038],
              [27.695231461241956, 53.92699487879017]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-5C-118-2",
          "parentID": "ROOM-5C-118",
          "pathID": "ROOM-5C-118",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-5C-118-2, IOT-ALERT-BRD-5C-118-2, IOT-SPEED-BRD-5C-118-2, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69525409223398, 53.92690661819043],
              [27.69525011086256, 53.926922145518546],
              [27.69523152303137, 53.92692048534962],
              [27.69523550440953, 53.9269049580221],
              [27.69525409223398, 53.92690661819043]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-5C-118-1",
          "parentID": "ROOM-5C-118",
          "pathID": "ROOM-5C-118",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-5C-118-1, IOT-FIRE-BRD-5C-118-1, IOT-ALERT-BRD-5C-118-1, IOT-PRESSURE-BRD-5C-118-1, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694888161100888, 53.9271238818135],
              [27.69488397001943, 53.92714022635655],
              [27.694875165217816, 53.927139439934415],
              [27.694879356302643, 53.92712309539166],
              [27.694888161100888, 53.9271238818135]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-5B-1-1",
          "parentID": "HALL-5B-1",
          "pathID": "HALL-5B-1",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-5B-1-1, IOT-FIRE-BRD-5B-1-1, IOT-ALERT-BRD-5B-1-1, IOT-SPEED-BRD-5B-1-1, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694474131678486, 53.927146253119666],
              [27.694472245618407, 53.927153608157745],
              [27.69448105041569, 53.92715439460944],
              [27.694482936474255, 53.92714703957123],
              [27.694474131678486, 53.927146253119666]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-5A-101-1",
          "parentID": "ROOM-5A-101",
          "pathID": "ROOM-5A-101",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-5A-101-1, IOT-FIRE-BRD-5A-101-1, IOT-ALERT-BRD-5A-101-1, IOT-SPEED-BRD-5A-101-1, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694630661429603, 53.92716023438425],
              [27.69464924934439, 53.92716189464585],
              [27.694647363314438, 53.927169249686585],
              [27.694628775396453, 53.927167589424705],
              [27.694630661429603, 53.92716023438425]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-5A-103",
          "parentID": "ROOM-5A-103",
          "pathID": "ROOM-5A-103",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-5A-103, IOT-ELECTRO-BRD-5A-103, IOT-ALERT-BRD-5A-103, IOT-PRESSURE-BRD-5A-103, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69502100794456, 53.92719509927259],
              [27.695019121978582, 53.927202454318916],
              [27.695009338848408, 53.92720158052757],
              [27.695011224816074, 53.927194225481394],
              [27.69502100794456, 53.92719509927259]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-5A-105-1",
          "parentID": "ROOM-5A-105",
          "pathID": "ROOM-5A-105",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-5A-105-1, IOT-FIRE-BRD-5A-105-1, IOT-ALERT-BRD-5A-105-1, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.695021986257437, 53.927195186651666],
              [27.695040574202757, 53.92719684685259],
              [27.695038688240135, 53.92720420189922],
              [27.695020100291615, 53.927202541698016],
              [27.695021986257437, 53.927195186651666]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-5A-107-1",
          "parentID": "ROOM-5A-107",
          "pathID": "ROOM-5A-107",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-5A-107-1, IOT-FIRE-BRD-5A-107-1, IOT-ALERT-BRD-5A-107-1, IOT-SPEED-BRD-5A-107-1, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69442216000657, 53.92734892526706],
              [27.69443096484409, 53.92734971172227],
              [27.694432850919974, 53.92734235668502],
              [27.694424046083967, 53.927341570229935],
              [27.69442216000657, 53.92734892526706]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-5A-102-1",
          "parentID": "ROOM-5A-102",
          "pathID": "ROOM-5A-102",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-5A-102-1, IOT-ALERT-BRD-5A-102-1, IOT-SPEED-BRD-5A-102-1, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694425093904467, 53.92733748409819],
              [27.69443389873962, 53.9273382705532],
              [27.694437042197375, 53.92732601215765],
              [27.694428237364736, 53.92732522570286],
              [27.694425093904467, 53.92733748409819]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-5A-102-2",
          "parentID": "ROOM-5A-102",
          "pathID": "ROOM-5A-102",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-5A-102-2, IOT-ELECTRO-BRD-5A-102-2, IOT-ALERT-BRD-5A-102-2, IOT-SPEED-BRD-5A-102-2, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694656955785067, 53.92736989718479],
              [27.69469511012092, 53.927373305077985],
              [27.694696996151357, 53.92736595003676],
              [27.69465884182205, 53.92736254214413],
              [27.694656955785067, 53.92736989718479]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-5A-104-1",
          "parentID": "ROOM-5A-104",
          "pathID": "ROOM-5A-104",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-5A-104-1, IOT-FIRE-BRD-5A-104-1, IOT-ALERT-BRD-5A-104-1, IOT-PRESSURE-BRD-5A-104-1, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.694714676449376, 53.92737505271082],
              [27.69471656247644, 53.92736769766929],
              [27.694736128803136, 53.92736944529864],
              [27.69473424277945, 53.927376800340454],
              [27.694714676449376, 53.92737505271082]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-5A-104-2",
          "parentID": "ROOM-5A-104",
          "pathID": "ROOM-5A-104",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-5A-104-2, IOT-ALERT-BRD-5A-104-2, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.695124591400074, 53.9274116648844],
              [27.69512857286311, 53.92739613756142],
              [27.695119768003146, 53.92739535115743],
              [27.69511578653692, 53.92741087848013],
              [27.695124591400074, 53.9274116648844]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-5A-106-2",
          "parentID": "ROOM-5A-106",
          "pathID": "ROOM-5A-106",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-5A-106-2, IOT-ELECTRO-BRD-5A-106-2, IOT-ALERT-BRD-5A-106-2, IOT-PRESSURE-BRD-5A-106-2, IOT-SPEED-BRD-5A-106-2, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.695096220175518, 53.92740913091276],
              [27.69509810613692, 53.92740177586548],
              [27.695112780905305, 53.927403086541084],
              [27.695110894946417, 53.92741044158859],
              [27.695096220175518, 53.92740913091276]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-5A-106-1",
          "parentID": "ROOM-5A-106",
          "pathID": "ROOM-5A-106",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-5A-106-1, IOT-FIRE-BRD-5A-106-1, IOT-ELECTRO-BRD-5A-106-1, IOT-ALERT-BRD-5A-106-1, IOT-PRESSURE-BRD-5A-106-1, IOT-SPEED-BRD-5A-106-1, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.695150575632695, 53.92731032866837],
              [27.695131987632696, 53.92730866848467],
              [27.695136178633472, 53.92729232393366],
              [27.695154766626363, 53.92729398411675],
              [27.695150575632695, 53.92731032866837]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-5A-1-1",
          "parentID": "HALL-5A-1",
          "pathID": "HALL-5A-1",
          "levelID": 2,
          "IoTIDs": "IOT-FIRE-BRD-5A-1-1, IOT-ELECTRO-BRD-5A-1-1, IOT-ALERT-BRD-5A-1-1, IOT-PRESSURE-BRD-5A-1-1, IOT-SPEED-BRD-5A-1-1, ",
          "floor": 5
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [27.69489308560147, 53.92675734224538],
              [27.694891199632032, 53.92676469729025],
              [27.69494011476378, 53.92676906628905],
              [27.694942000724804, 53.92676171124344],
              [27.69489308560147, 53.92675734224538]
            ]
          ]
        },
        "properties": {
          "ID": "BRD-5C-1-1",
          "parentID": "HALL-5C-1",
          "pathID": "HALL-5C-1",
          "levelID": 2,
          "IoTIDs": "IOT-TEMP-BRD-5C-1-1, IOT-FIRE-BRD-5C-1-1, IOT-ALERT-BRD-5C-1-1, IOT-PRESSURE-BRD-5C-1-1, IOT-SPEED-BRD-5C-1-1, ",
          "floor": 5
        }
      }]
    }];



  return bs;



}