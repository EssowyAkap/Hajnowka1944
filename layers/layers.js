var wms_layers = [];

// Zastąpienie trudnego WMTS prosta i niezawodna usługa kafelkowa XYZ w EPSG:3857
var lyr_ORTOFOTOMAPA_0 = new ol.layer.Tile({
    source: new ol.source.XYZ({
        url: 'https://mapy.geoportal.gov.pl/wss/ext/Orto/WMTS/tile/1.0.0/ORTO/EPSG3857/{z}/{y}/{x}.jpeg',
        maxZoom: 21,
        attributions: 'GUGiK - Geoportal'
    }),
    title: 'ORTOFOTOMAPA',
    opacity: 1.0
});

var lyr_Tyniewicze_1 = new ol.layer.Image({
    opacity: 1,
    title: 'Tyniewicze<br />\
    <img src="styles/legend/Tyniewicze_1_0.png" /> 0<br />\
    <img src="styles/legend/Tyniewicze_1_1.png" /> 254<br />',
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
    <img src="styles/legend/Hajnwka_2_1.png" /> 231<br />',
    source: new ol.source.ImageStatic({
        url: "./layers/Hajnwka_2.png",
        attributions: ' ',
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [2612299.550148, 6932278.131806, 2630340.033039, 6950761.963442]
    })
});

lyr_ORTOFOTOMAPA_0.setVisible(true);
lyr_Tyniewicze_1.setVisible(true);
lyr_Hajnwka_2.setVisible(true);

var layersList = [lyr_ORTOFOTOMAPA_0, lyr_Tyniewicze_1, lyr_Hajnwka_2];
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
