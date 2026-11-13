var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Quartierparprixmoyen_1 = new ol.format.GeoJSON();
var features_Quartierparprixmoyen_1 = format_Quartierparprixmoyen_1.readFeatures(json_Quartierparprixmoyen_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Quartierparprixmoyen_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Quartierparprixmoyen_1.addFeatures(features_Quartierparprixmoyen_1);
var lyr_Quartierparprixmoyen_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Quartierparprixmoyen_1, 
                style: style_Quartierparprixmoyen_1,
                popuplayertitle: 'Quartier par prix moyen',
                interactive: true,
    title: 'Quartier par prix moyen<br />\
    <img src="styles/legend/Quartierparprixmoyen_1_0.png" /> 0 - 75 €<br />\
    <img src="styles/legend/Quartierparprixmoyen_1_1.png" /> 75 - 147 €<br />\
    <img src="styles/legend/Quartierparprixmoyen_1_2.png" /> 147 - 213 €<br />\
    <img src="styles/legend/Quartierparprixmoyen_1_3.png" /> 213 - 281 €<br />\
    <img src="styles/legend/Quartierparprixmoyen_1_4.png" /> 281 - 462 €<br />\
    <img src="styles/legend/Quartierparprixmoyen_1_5.png" /> 462 - 680 €<br />' });
var format_LogementAirBnBparquartier_2 = new ol.format.GeoJSON();
var features_LogementAirBnBparquartier_2 = format_LogementAirBnBparquartier_2.readFeatures(json_LogementAirBnBparquartier_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LogementAirBnBparquartier_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LogementAirBnBparquartier_2.addFeatures(features_LogementAirBnBparquartier_2);
var lyr_LogementAirBnBparquartier_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LogementAirBnBparquartier_2, 
                style: style_LogementAirBnBparquartier_2,
                popuplayertitle: 'Logement AirBnB par quartier',
                interactive: true,
    title: 'Logement AirBnB par quartier<br />\
    <img src="styles/legend/LogementAirBnBparquartier_2_0.png" /> 0 - 87519<br />\
    <img src="styles/legend/LogementAirBnBparquartier_2_1.png" /> 87519 - 175039<br />\
    <img src="styles/legend/LogementAirBnBparquartier_2_2.png" /> 175039 - 262558<br />\
    <img src="styles/legend/LogementAirBnBparquartier_2_3.png" /> 262558 - 350077<br />\
    <img src="styles/legend/LogementAirBnBparquartier_2_4.png" /> 350077 - 437597<br />\
    <img src="styles/legend/LogementAirBnBparquartier_2_5.png" /> 437597 - 525116<br />\
    <img src="styles/legend/LogementAirBnBparquartier_2_6.png" /> 525116 - 612635<br />\
    <img src="styles/legend/LogementAirBnBparquartier_2_7.png" /> 612635 - 700154<br />\
    <img src="styles/legend/LogementAirBnBparquartier_2_8.png" /> 700154 - 787674<br />\
    <img src="styles/legend/LogementAirBnBparquartier_2_9.png" /> 787674 - 875193<br />' });

lyr_ESRIGraylight_0.setVisible(true);lyr_Quartierparprixmoyen_1.setVisible(true);lyr_LogementAirBnBparquartier_2.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,lyr_Quartierparprixmoyen_1,lyr_LogementAirBnBparquartier_2];
lyr_Quartierparprixmoyen_1.set('fieldAliases', {'fid': 'fid', 'neighbourhood': 'neighbourhood', 'neighbourhood_group': 'neighbourhood_group', 'NUMPOINTS': 'NUMPOINTS', 'mean': 'mean', });
lyr_LogementAirBnBparquartier_2.set('fieldAliases', {'fid': 'fid', 'neighbourhood': 'neighbourhood', 'neighbourhood_group': 'neighbourhood_group', 'NUMPOINTS': 'NUMPOINTS', 'mean': 'mean', });
lyr_Quartierparprixmoyen_1.set('fieldImages', {'fid': 'TextEdit', 'neighbourhood': 'TextEdit', 'neighbourhood_group': 'TextEdit', 'NUMPOINTS': 'TextEdit', 'mean': 'TextEdit', });
lyr_LogementAirBnBparquartier_2.set('fieldImages', {'fid': 'TextEdit', 'neighbourhood': 'TextEdit', 'neighbourhood_group': 'TextEdit', 'NUMPOINTS': 'TextEdit', 'mean': 'TextEdit', });
lyr_Quartierparprixmoyen_1.set('fieldLabels', {'fid': 'no label', 'neighbourhood': 'inline label - visible with data', 'neighbourhood_group': 'no label', 'NUMPOINTS': 'inline label - visible with data', 'mean': 'no label', });
lyr_LogementAirBnBparquartier_2.set('fieldLabels', {'fid': 'no label', 'neighbourhood': 'inline label - visible with data', 'neighbourhood_group': 'no label', 'NUMPOINTS': 'inline label - visible with data', 'mean': 'no label', });
lyr_LogementAirBnBparquartier_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});