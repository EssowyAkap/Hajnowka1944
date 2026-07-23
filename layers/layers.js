var wms_layers = [];


    var projection_ORTOFOTOMAPA_0 = ol.proj.get('EPSG:3857');
    var projectionExtent_ORTOFOTOMAPA_0 = projection_ORTOFOTOMAPA_0.getExtent();
    var size_ORTOFOTOMAPA_0 = ol.extent.getWidth(projectionExtent_ORTOFOTOMAPA_0) / 256;
    var resolutions_ORTOFOTOMAPA_0 = new Array(14);
    var matrixIds_ORTOFOTOMAPA_0 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_ORTOFOTOMAPA_0[z] = size_ORTOFOTOMAPA_0 / Math.pow(2, z);
        matrixIds_ORTOFOTOMAPA_0[z] = z;
    }
    var lyr_ORTOFOTOMAPA_0 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://mapy.geoportal.gov.pl/wss/service/PZGIK/ORTO/WMTS/StandardResolution?Service=WMTS&Request=GetCapabilities",
                                attributions: ' ',
                                "layer": "ORTOFOTOMAPA",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/jpeg',
              projection: projection_ORTOFOTOMAPA_0,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_ORTOFOTOMAPA_0),
                resolutions: resolutions_ORTOFOTOMAPA_0,
                matrixIds: matrixIds_ORTOFOTOMAPA_0
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'ORTOFOTOMAPA',
                            opacity: 1.0,
                            
                            
                          });
var lyr_Tyniewicze_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Tyniewicze<br />\
    <img src="styles/legend/Tyniewicze_1_0.png" /> 0<br />\
    <img src="styles/legend/Tyniewicze_1_1.png" /> 254<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Tyniewicze_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [2604942.751096, 6951313.575031, 2623878.922106, 6970381.658008]
        })
    });
var lyr_Hajnwka_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Hajnówka<br />\
    <img src="styles/legend/Hajnwka_2_0.png" /> 0<br />\
    <img src="styles/legend/Hajnwka_2_1.png" /> 231<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Hajnwka_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [2612299.550148, 6932278.131806, 2630340.033039, 6950761.963442]
        })
    });

lyr_ORTOFOTOMAPA_0.setVisible(true);lyr_Tyniewicze_1.setVisible(true);lyr_Hajnwka_2.setVisible(true);
var layersList = [lyr_ORTOFOTOMAPA_0,lyr_Tyniewicze_1,lyr_Hajnwka_2];
