var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_TechnicaldrawingGeertruidenberg_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Technical drawing - Geertruidenberg",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/TechnicaldrawingGeertruidenberg_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [537524.649808, 6744634.706465, 539456.282033, 6746009.891145]
                            })
                        });
var format_LandGeertruidenberg_2 = new ol.format.GeoJSON();
var features_LandGeertruidenberg_2 = format_LandGeertruidenberg_2.readFeatures(json_LandGeertruidenberg_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LandGeertruidenberg_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LandGeertruidenberg_2.addFeatures(features_LandGeertruidenberg_2);
var lyr_LandGeertruidenberg_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LandGeertruidenberg_2, 
                style: style_LandGeertruidenberg_2,
                popuplayertitle: "Land Geertruidenberg",
                interactive: true,
                title: '<img src="styles/legend/LandGeertruidenberg_2.png" /> Land Geertruidenberg'
            });
var format_KadastralepercelenGeertruidenberg_3 = new ol.format.GeoJSON();
var features_KadastralepercelenGeertruidenberg_3 = format_KadastralepercelenGeertruidenberg_3.readFeatures(json_KadastralepercelenGeertruidenberg_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KadastralepercelenGeertruidenberg_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KadastralepercelenGeertruidenberg_3.addFeatures(features_KadastralepercelenGeertruidenberg_3);
var lyr_KadastralepercelenGeertruidenberg_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KadastralepercelenGeertruidenberg_3, 
                style: style_KadastralepercelenGeertruidenberg_3,
                popuplayertitle: "Kadastrale percelen - Geertruidenberg",
                interactive: true,
                title: '<img src="styles/legend/KadastralepercelenGeertruidenberg_3.png" /> Kadastrale percelen - Geertruidenberg'
            });
var lyr_TechnicaldrawingWormerland_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Technical drawing - Wormerland",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/TechnicaldrawingWormerland_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [544615.416368, 6891603.188646, 546574.789342, 6892999.800635]
                            })
                        });
var format_LandWormerland_5 = new ol.format.GeoJSON();
var features_LandWormerland_5 = format_LandWormerland_5.readFeatures(json_LandWormerland_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LandWormerland_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LandWormerland_5.addFeatures(features_LandWormerland_5);
var lyr_LandWormerland_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LandWormerland_5, 
                style: style_LandWormerland_5,
                popuplayertitle: "Land Wormerland",
                interactive: true,
                title: '<img src="styles/legend/LandWormerland_5.png" /> Land Wormerland'
            });
var format_KadastralepercelenWormerland_6 = new ol.format.GeoJSON();
var features_KadastralepercelenWormerland_6 = format_KadastralepercelenWormerland_6.readFeatures(json_KadastralepercelenWormerland_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KadastralepercelenWormerland_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KadastralepercelenWormerland_6.addFeatures(features_KadastralepercelenWormerland_6);
var lyr_KadastralepercelenWormerland_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KadastralepercelenWormerland_6, 
                style: style_KadastralepercelenWormerland_6,
                popuplayertitle: "Kadastrale percelen - Wormerland",
                interactive: true,
                title: '<img src="styles/legend/KadastralepercelenWormerland_6.png" /> Kadastrale percelen - Wormerland'
            });
var lyr_TechnicaldrawingMeedenIII_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "Technical drawing - Meeden III",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/TechnicaldrawingMeedenIII_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [767435.574317, 7007147.951578, 768043.966788, 7007579.600836]
                            })
                        });
var format_LandMeedenIII_8 = new ol.format.GeoJSON();
var features_LandMeedenIII_8 = format_LandMeedenIII_8.readFeatures(json_LandMeedenIII_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LandMeedenIII_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LandMeedenIII_8.addFeatures(features_LandMeedenIII_8);
var lyr_LandMeedenIII_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LandMeedenIII_8,
maxResolution:11.201786460904787,
 
                style: style_LandMeedenIII_8,
                popuplayertitle: "Land Meeden III",
                interactive: true,
                title: '<img src="styles/legend/LandMeedenIII_8.png" /> Land Meeden III'
            });
var format_KadastralepercelenMeedenIII_9 = new ol.format.GeoJSON();
var features_KadastralepercelenMeedenIII_9 = format_KadastralepercelenMeedenIII_9.readFeatures(json_KadastralepercelenMeedenIII_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KadastralepercelenMeedenIII_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KadastralepercelenMeedenIII_9.addFeatures(features_KadastralepercelenMeedenIII_9);
var lyr_KadastralepercelenMeedenIII_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KadastralepercelenMeedenIII_9, 
                style: style_KadastralepercelenMeedenIII_9,
                popuplayertitle: "Kadastrale percelen - Meeden III",
                interactive: true,
                title: '<img src="styles/legend/KadastralepercelenMeedenIII_9.png" /> Kadastrale percelen - Meeden III'
            });
var lyr_TechnicaldrawingMeedenII_10 = new ol.layer.Image({
                            opacity: 1,
                            title: "Technical drawing - Meeden II",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/TechnicaldrawingMeedenII_10.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [773354.722951, 7005837.236243, 776369.299173, 7008007.356928]
                            })
                        });
var format_LandMeedenIIBegeman_11 = new ol.format.GeoJSON();
var features_LandMeedenIIBegeman_11 = format_LandMeedenIIBegeman_11.readFeatures(json_LandMeedenIIBegeman_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LandMeedenIIBegeman_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LandMeedenIIBegeman_11.addFeatures(features_LandMeedenIIBegeman_11);
var lyr_LandMeedenIIBegeman_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LandMeedenIIBegeman_11, 
                style: style_LandMeedenIIBegeman_11,
                popuplayertitle: "Land Meeden II - Begeman",
                interactive: true,
                title: '<img src="styles/legend/LandMeedenIIBegeman_11.png" /> Land Meeden II - Begeman'
            });
var format_LandMeedenIILubbers_12 = new ol.format.GeoJSON();
var features_LandMeedenIILubbers_12 = format_LandMeedenIILubbers_12.readFeatures(json_LandMeedenIILubbers_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LandMeedenIILubbers_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LandMeedenIILubbers_12.addFeatures(features_LandMeedenIILubbers_12);
var lyr_LandMeedenIILubbers_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LandMeedenIILubbers_12, 
                style: style_LandMeedenIILubbers_12,
                popuplayertitle: "Land Meeden II - Lubbers",
                interactive: true,
                title: '<img src="styles/legend/LandMeedenIILubbers_12.png" /> Land Meeden II - Lubbers'
            });
var format_KadastralepercelenMeedenII_13 = new ol.format.GeoJSON();
var features_KadastralepercelenMeedenII_13 = format_KadastralepercelenMeedenII_13.readFeatures(json_KadastralepercelenMeedenII_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KadastralepercelenMeedenII_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KadastralepercelenMeedenII_13.addFeatures(features_KadastralepercelenMeedenII_13);
var lyr_KadastralepercelenMeedenII_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KadastralepercelenMeedenII_13, 
                style: style_KadastralepercelenMeedenII_13,
                popuplayertitle: "Kadastrale percelen - Meeden II",
                interactive: true,
                title: '<img src="styles/legend/KadastralepercelenMeedenII_13.png" /> Kadastrale percelen - Meeden II'
            });
var lyr_TechnicaldrawingMeedenI_14 = new ol.layer.Image({
                            opacity: 1,
                            title: "Technical drawing - Meeden I",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/TechnicaldrawingMeedenI_14.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [765248.267027, 6997848.428672, 766254.481793, 6998586.024749]
                            })
                        });
var format_LandMeedenI_15 = new ol.format.GeoJSON();
var features_LandMeedenI_15 = format_LandMeedenI_15.readFeatures(json_LandMeedenI_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LandMeedenI_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LandMeedenI_15.addFeatures(features_LandMeedenI_15);
var lyr_LandMeedenI_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LandMeedenI_15,
maxResolution:14.00223307613098,
 
                style: style_LandMeedenI_15,
                popuplayertitle: "Land Meeden I",
                interactive: true,
                title: '<img src="styles/legend/LandMeedenI_15.png" /> Land Meeden I'
            });
var format_KadastralepercelenMeedenI_16 = new ol.format.GeoJSON();
var features_KadastralepercelenMeedenI_16 = format_KadastralepercelenMeedenI_16.readFeatures(json_KadastralepercelenMeedenI_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KadastralepercelenMeedenI_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KadastralepercelenMeedenI_16.addFeatures(features_KadastralepercelenMeedenI_16);
var lyr_KadastralepercelenMeedenI_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KadastralepercelenMeedenI_16, 
                style: style_KadastralepercelenMeedenI_16,
                popuplayertitle: "Kadastrale percelen - Meeden I",
                interactive: true,
                title: '<img src="styles/legend/KadastralepercelenMeedenI_16.png" /> Kadastrale percelen - Meeden I'
            });
var lyr_NewTenneTsubstation_17 = new ol.layer.Image({
                            opacity: 1,
                            title: "New TenneT substation",
                            
maxResolution:42.00669922839295,

                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NewTenneTsubstation_17.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [783032.501392, 6968891.687104, 784355.109568, 6970118.615049]
                            })
                        });
var lyr_TechnicaldrawingMusselkanaal_18 = new ol.layer.Image({
                            opacity: 1,
                            title: "Technical drawing - Musselkanaal",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/TechnicaldrawingMusselkanaal_18.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [785562.468282, 6969267.365203, 787062.232392, 6970350.320194]
                            })
                        });
var format_LandMusselkanaal_19 = new ol.format.GeoJSON();
var features_LandMusselkanaal_19 = format_LandMusselkanaal_19.readFeatures(json_LandMusselkanaal_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LandMusselkanaal_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LandMusselkanaal_19.addFeatures(features_LandMusselkanaal_19);
var lyr_LandMusselkanaal_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LandMusselkanaal_19,
maxResolution:2.8004466152261966,
 
                style: style_LandMusselkanaal_19,
                popuplayertitle: "Land Musselkanaal",
                interactive: true,
                title: '<img src="styles/legend/LandMusselkanaal_19.png" /> Land Musselkanaal'
            });
var format_Mussel_kadastraalkadastrale_kaart_20 = new ol.format.GeoJSON();
var features_Mussel_kadastraalkadastrale_kaart_20 = format_Mussel_kadastraalkadastrale_kaart_20.readFeatures(json_Mussel_kadastraalkadastrale_kaart_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mussel_kadastraalkadastrale_kaart_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mussel_kadastraalkadastrale_kaart_20.addFeatures(features_Mussel_kadastraalkadastrale_kaart_20);
var lyr_Mussel_kadastraalkadastrale_kaart_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mussel_kadastraalkadastrale_kaart_20, 
                style: style_Mussel_kadastraalkadastrale_kaart_20,
                popuplayertitle: "Mussel_kadastraal — kadastrale_kaart",
                interactive: true,
                title: '<img src="styles/legend/Mussel_kadastraalkadastrale_kaart_20.png" /> Mussel_kadastraal — kadastrale_kaart'
            });
var group_BESSMusselkanaal = new ol.layer.Group({
                                layers: [lyr_NewTenneTsubstation_17,lyr_TechnicaldrawingMusselkanaal_18,lyr_LandMusselkanaal_19,lyr_Mussel_kadastraalkadastrale_kaart_20,],
                                fold: "open",
                                title: "BESS Musselkanaal"});
var group_BESSMeedenI = new ol.layer.Group({
                                layers: [lyr_TechnicaldrawingMeedenI_14,lyr_LandMeedenI_15,lyr_KadastralepercelenMeedenI_16,],
                                fold: "open",
                                title: "BESS Meeden I"});
var group_BESSMeedenII = new ol.layer.Group({
                                layers: [lyr_TechnicaldrawingMeedenII_10,lyr_LandMeedenIIBegeman_11,lyr_LandMeedenIILubbers_12,lyr_KadastralepercelenMeedenII_13,],
                                fold: "open",
                                title: "BESS Meeden II"});
var group_BESSMeedenIII = new ol.layer.Group({
                                layers: [lyr_TechnicaldrawingMeedenIII_7,lyr_LandMeedenIII_8,lyr_KadastralepercelenMeedenIII_9,],
                                fold: "open",
                                title: "BESS Meeden III"});
var group_BESSWormerland = new ol.layer.Group({
                                layers: [lyr_TechnicaldrawingWormerland_4,lyr_LandWormerland_5,lyr_KadastralepercelenWormerland_6,],
                                fold: "open",
                                title: "BESS Wormerland"});
var group_BESSGeertruidenberg = new ol.layer.Group({
                                layers: [lyr_TechnicaldrawingGeertruidenberg_1,lyr_LandGeertruidenberg_2,lyr_KadastralepercelenGeertruidenberg_3,],
                                fold: "open",
                                title: "BESS Geertruidenberg"});

lyr_GoogleSatellite_0.setVisible(true);lyr_TechnicaldrawingGeertruidenberg_1.setVisible(true);lyr_LandGeertruidenberg_2.setVisible(true);lyr_KadastralepercelenGeertruidenberg_3.setVisible(true);lyr_TechnicaldrawingWormerland_4.setVisible(true);lyr_LandWormerland_5.setVisible(true);lyr_KadastralepercelenWormerland_6.setVisible(true);lyr_TechnicaldrawingMeedenIII_7.setVisible(true);lyr_LandMeedenIII_8.setVisible(true);lyr_KadastralepercelenMeedenIII_9.setVisible(true);lyr_TechnicaldrawingMeedenII_10.setVisible(true);lyr_LandMeedenIIBegeman_11.setVisible(true);lyr_LandMeedenIILubbers_12.setVisible(true);lyr_KadastralepercelenMeedenII_13.setVisible(true);lyr_TechnicaldrawingMeedenI_14.setVisible(true);lyr_LandMeedenI_15.setVisible(true);lyr_KadastralepercelenMeedenI_16.setVisible(true);lyr_NewTenneTsubstation_17.setVisible(true);lyr_TechnicaldrawingMusselkanaal_18.setVisible(true);lyr_LandMusselkanaal_19.setVisible(true);lyr_Mussel_kadastraalkadastrale_kaart_20.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_BESSGeertruidenberg,group_BESSWormerland,group_BESSMeedenIII,group_BESSMeedenII,group_BESSMeedenI,group_BESSMusselkanaal];
lyr_LandGeertruidenberg_2.set('fieldAliases', {'id': 'id', 'identifica': 'identifica', 'identifi_1': 'identifi_1', 'beginGeldi': 'beginGeldi', 'tijdstipRe': 'tijdstipRe', 'volgnummer': 'volgnummer', 'statusHist': 'statusHist', 'statusHi_1': 'statusHi_1', 'kadastrale': 'kadastrale', 'kadastra_1': 'kadastra_1', 'sectie': 'sectie', 'AKRKadastr': 'AKRKadastr', 'AKRKadas_1': 'AKRKadas_1', 'kadastra_2': 'kadastra_2', 'soortGroot': 'soortGroot', 'soortGro_1': 'soortGro_1', 'perceelnum': 'perceelnum', 'perceeln_1': 'perceeln_1', 'perceeln_2': 'perceeln_2', 'perceeln_3': 'perceeln_3', 'perceeln_4': 'perceeln_4', 'perceeln_5': 'perceeln_5', });
lyr_KadastralepercelenGeertruidenberg_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fuuid': 'fuuid', 'identificatieNamespace': 'identificatieNamespace', 'identificatieLokaalID': 'identificatieLokaalID', 'beginGeldigheid': 'beginGeldigheid', 'tijdstipRegistratie': 'tijdstipRegistratie', 'volgnummer': 'volgnummer', 'statusHistorieCode': 'statusHistorieCode', 'statusHistorieWaarde': 'statusHistorieWaarde', 'kadastraleGemeenteCode': 'kadastraleGemeenteCode', 'kadastraleGemeenteWaarde': 'kadastraleGemeenteWaarde', 'sectie': 'sectie', 'AKRKadastraleGemeenteCodeCode': 'AKRKadastraleGemeenteCodeCode', 'AKRKadastraleGemeenteCodeWaarde': 'AKRKadastraleGemeenteCodeWaarde', 'kadastraleGrootteWaarde': 'kadastraleGrootteWaarde', 'soortGrootteCode': 'soortGrootteCode', 'soortGrootteWaarde': 'soortGrootteWaarde', 'perceelnummer': 'perceelnummer', 'perceelnummerRotatie': 'perceelnummerRotatie', 'perceelnummerVerschuivingDeltaX': 'perceelnummerVerschuivingDeltaX', 'perceelnummerVerschuivingDeltaY': 'perceelnummerVerschuivingDeltaY', 'perceelnummerPlaatscoordinaatX': 'perceelnummerPlaatscoordinaatX', 'perceelnummerPlaatscoordinaatY': 'perceelnummerPlaatscoordinaatY', });
lyr_LandWormerland_5.set('fieldAliases', {'id': 'id', 'identifica': 'identifica', 'identifi_1': 'identifi_1', 'beginGeldi': 'beginGeldi', 'tijdstipRe': 'tijdstipRe', 'volgnummer': 'volgnummer', 'statusHist': 'statusHist', 'statusHi_1': 'statusHi_1', 'kadastrale': 'kadastrale', 'kadastra_1': 'kadastra_1', 'sectie': 'sectie', 'AKRKadastr': 'AKRKadastr', 'AKRKadas_1': 'AKRKadas_1', 'kadastra_2': 'kadastra_2', 'soortGroot': 'soortGroot', 'soortGro_1': 'soortGro_1', 'perceelnum': 'perceelnum', 'perceeln_1': 'perceeln_1', 'perceeln_2': 'perceeln_2', 'perceeln_3': 'perceeln_3', 'perceeln_4': 'perceeln_4', 'perceeln_5': 'perceeln_5', });
lyr_KadastralepercelenWormerland_6.set('fieldAliases', {'kadastra_1': 'kadastra_1', 'sectie': 'sectie', 'perceelnum': 'perceelnum', });
lyr_LandMeedenIII_8.set('fieldAliases', {'id': 'id', 'identifica': 'identifica', 'identifi_1': 'identifi_1', 'beginGeldi': 'beginGeldi', 'tijdstipRe': 'tijdstipRe', 'volgnummer': 'volgnummer', 'statusHist': 'statusHist', 'statusHi_1': 'statusHi_1', 'kadastrale': 'kadastrale', 'kadastra_1': 'kadastra_1', 'sectie': 'sectie', 'AKRKadastr': 'AKRKadastr', 'AKRKadas_1': 'AKRKadas_1', 'kadastra_2': 'kadastra_2', 'soortGroot': 'soortGroot', 'soortGro_1': 'soortGro_1', 'perceelnum': 'perceelnum', 'perceeln_1': 'perceeln_1', 'perceeln_2': 'perceeln_2', 'perceeln_3': 'perceeln_3', 'perceeln_4': 'perceeln_4', 'perceeln_5': 'perceeln_5', });
lyr_KadastralepercelenMeedenIII_9.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fuuid': 'fuuid', 'identificatieNamespace': 'identificatieNamespace', 'identificatieLokaalID': 'identificatieLokaalID', 'beginGeldigheid': 'beginGeldigheid', 'tijdstipRegistratie': 'tijdstipRegistratie', 'volgnummer': 'volgnummer', 'statusHistorieCode': 'statusHistorieCode', 'statusHistorieWaarde': 'statusHistorieWaarde', 'kadastraleGemeenteCode': 'kadastraleGemeenteCode', 'kadastraleGemeenteWaarde': 'kadastraleGemeenteWaarde', 'sectie': 'sectie', 'AKRKadastraleGemeenteCodeCode': 'AKRKadastraleGemeenteCodeCode', 'AKRKadastraleGemeenteCodeWaarde': 'AKRKadastraleGemeenteCodeWaarde', 'kadastraleGrootteWaarde': 'kadastraleGrootteWaarde', 'soortGrootteCode': 'soortGrootteCode', 'soortGrootteWaarde': 'soortGrootteWaarde', 'perceelnummer': 'perceelnummer', 'perceelnummerRotatie': 'perceelnummerRotatie', 'perceelnummerVerschuivingDeltaX': 'perceelnummerVerschuivingDeltaX', 'perceelnummerVerschuivingDeltaY': 'perceelnummerVerschuivingDeltaY', 'perceelnummerPlaatscoordinaatX': 'perceelnummerPlaatscoordinaatX', 'perceelnummerPlaatscoordinaatY': 'perceelnummerPlaatscoordinaatY', });
lyr_LandMeedenIIBegeman_11.set('fieldAliases', {'id': 'id', 'identifica': 'identifica', 'identifi_1': 'identifi_1', 'beginGeldi': 'beginGeldi', 'tijdstipRe': 'tijdstipRe', 'volgnummer': 'volgnummer', 'statusHist': 'statusHist', 'statusHi_1': 'statusHi_1', 'kadastrale': 'kadastrale', 'kadastra_1': 'kadastra_1', 'sectie': 'sectie', 'AKRKadastr': 'AKRKadastr', 'AKRKadas_1': 'AKRKadas_1', 'kadastra_2': 'kadastra_2', 'soortGroot': 'soortGroot', 'soortGro_1': 'soortGro_1', 'perceelnum': 'perceelnum', 'perceeln_1': 'perceeln_1', 'perceeln_2': 'perceeln_2', 'perceeln_3': 'perceeln_3', 'perceeln_4': 'perceeln_4', 'perceeln_5': 'perceeln_5', });
lyr_LandMeedenIILubbers_12.set('fieldAliases', {'id': 'id', 'identifica': 'identifica', 'identifi_1': 'identifi_1', 'beginGeldi': 'beginGeldi', 'tijdstipRe': 'tijdstipRe', 'volgnummer': 'volgnummer', 'statusHist': 'statusHist', 'statusHi_1': 'statusHi_1', 'kadastrale': 'kadastrale', 'kadastra_1': 'kadastra_1', 'sectie': 'sectie', 'AKRKadastr': 'AKRKadastr', 'AKRKadas_1': 'AKRKadas_1', 'kadastra_2': 'kadastra_2', 'soortGroot': 'soortGroot', 'soortGro_1': 'soortGro_1', 'perceelnum': 'perceelnum', 'perceeln_1': 'perceeln_1', 'perceeln_2': 'perceeln_2', 'perceeln_3': 'perceeln_3', 'perceeln_4': 'perceeln_4', 'perceeln_5': 'perceeln_5', });
lyr_KadastralepercelenMeedenII_13.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fuuid': 'fuuid', 'identificatieNamespace': 'identificatieNamespace', 'identificatieLokaalID': 'identificatieLokaalID', 'beginGeldigheid': 'beginGeldigheid', 'tijdstipRegistratie': 'tijdstipRegistratie', 'volgnummer': 'volgnummer', 'statusHistorieCode': 'statusHistorieCode', 'statusHistorieWaarde': 'statusHistorieWaarde', 'kadastraleGemeenteCode': 'kadastraleGemeenteCode', 'kadastraleGemeenteWaarde': 'kadastraleGemeenteWaarde', 'sectie': 'sectie', 'AKRKadastraleGemeenteCodeCode': 'AKRKadastraleGemeenteCodeCode', 'AKRKadastraleGemeenteCodeWaarde': 'AKRKadastraleGemeenteCodeWaarde', 'kadastraleGrootteWaarde': 'kadastraleGrootteWaarde', 'soortGrootteCode': 'soortGrootteCode', 'soortGrootteWaarde': 'soortGrootteWaarde', 'perceelnummer': 'perceelnummer', 'perceelnummerRotatie': 'perceelnummerRotatie', 'perceelnummerVerschuivingDeltaX': 'perceelnummerVerschuivingDeltaX', 'perceelnummerVerschuivingDeltaY': 'perceelnummerVerschuivingDeltaY', 'perceelnummerPlaatscoordinaatX': 'perceelnummerPlaatscoordinaatX', 'perceelnummerPlaatscoordinaatY': 'perceelnummerPlaatscoordinaatY', });
lyr_LandMeedenI_15.set('fieldAliases', {'id': 'id', 'identifica': 'identifica', 'identifi_1': 'identifi_1', 'beginGeldi': 'beginGeldi', 'tijdstipRe': 'tijdstipRe', 'volgnummer': 'volgnummer', 'statusHist': 'statusHist', 'statusHi_1': 'statusHi_1', 'kadastrale': 'kadastrale', 'kadastra_1': 'kadastra_1', 'sectie': 'sectie', 'AKRKadastr': 'AKRKadastr', 'AKRKadas_1': 'AKRKadas_1', 'kadastra_2': 'kadastra_2', 'soortGroot': 'soortGroot', 'soortGro_1': 'soortGro_1', 'perceelnum': 'perceelnum', 'perceeln_1': 'perceeln_1', 'perceeln_2': 'perceeln_2', 'perceeln_3': 'perceeln_3', 'perceeln_4': 'perceeln_4', 'perceeln_5': 'perceeln_5', });
lyr_KadastralepercelenMeedenI_16.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fuuid': 'fuuid', 'identificatieNamespace': 'identificatieNamespace', 'identificatieLokaalID': 'identificatieLokaalID', 'beginGeldigheid': 'beginGeldigheid', 'tijdstipRegistratie': 'tijdstipRegistratie', 'volgnummer': 'volgnummer', 'statusHistorieCode': 'statusHistorieCode', 'statusHistorieWaarde': 'statusHistorieWaarde', 'kadastraleGemeenteCode': 'kadastraleGemeenteCode', 'kadastraleGemeenteWaarde': 'kadastraleGemeenteWaarde', 'sectie': 'sectie', 'AKRKadastraleGemeenteCodeCode': 'AKRKadastraleGemeenteCodeCode', 'AKRKadastraleGemeenteCodeWaarde': 'AKRKadastraleGemeenteCodeWaarde', 'kadastraleGrootteWaarde': 'kadastraleGrootteWaarde', 'soortGrootteCode': 'soortGrootteCode', 'soortGrootteWaarde': 'soortGrootteWaarde', 'perceelnummer': 'perceelnummer', 'perceelnummerRotatie': 'perceelnummerRotatie', 'perceelnummerVerschuivingDeltaX': 'perceelnummerVerschuivingDeltaX', 'perceelnummerVerschuivingDeltaY': 'perceelnummerVerschuivingDeltaY', 'perceelnummerPlaatscoordinaatX': 'perceelnummerPlaatscoordinaatX', 'perceelnummerPlaatscoordinaatY': 'perceelnummerPlaatscoordinaatY', });
lyr_LandMusselkanaal_19.set('fieldAliases', {'id': 'id', 'area': 'area', });
lyr_Mussel_kadastraalkadastrale_kaart_20.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fuuid': 'fuuid', 'identificatieNamespace': 'identificatieNamespace', 'identificatieLokaalID': 'identificatieLokaalID', 'beginGeldigheid': 'beginGeldigheid', 'tijdstipRegistratie': 'tijdstipRegistratie', 'volgnummer': 'volgnummer', 'statusHistorieCode': 'statusHistorieCode', 'statusHistorieWaarde': 'statusHistorieWaarde', 'kadastraleGemeenteCode': 'kadastraleGemeenteCode', 'kadastraleGemeenteWaarde': 'kadastraleGemeenteWaarde', 'sectie': 'sectie', 'AKRKadastraleGemeenteCodeCode': 'AKRKadastraleGemeenteCodeCode', 'AKRKadastraleGemeenteCodeWaarde': 'AKRKadastraleGemeenteCodeWaarde', 'kadastraleGrootteWaarde': 'kadastraleGrootteWaarde', 'soortGrootteCode': 'soortGrootteCode', 'soortGrootteWaarde': 'soortGrootteWaarde', 'perceelnummer': 'perceelnummer', 'perceelnummerRotatie': 'perceelnummerRotatie', 'perceelnummerVerschuivingDeltaX': 'perceelnummerVerschuivingDeltaX', 'perceelnummerVerschuivingDeltaY': 'perceelnummerVerschuivingDeltaY', 'perceelnummerPlaatscoordinaatX': 'perceelnummerPlaatscoordinaatX', 'perceelnummerPlaatscoordinaatY': 'perceelnummerPlaatscoordinaatY', });
lyr_LandGeertruidenberg_2.set('fieldImages', {'id': 'TextEdit', 'identifica': 'TextEdit', 'identifi_1': 'TextEdit', 'beginGeldi': 'TextEdit', 'tijdstipRe': 'TextEdit', 'volgnummer': 'TextEdit', 'statusHist': 'TextEdit', 'statusHi_1': 'TextEdit', 'kadastrale': 'TextEdit', 'kadastra_1': 'TextEdit', 'sectie': 'TextEdit', 'AKRKadastr': 'TextEdit', 'AKRKadas_1': 'TextEdit', 'kadastra_2': 'TextEdit', 'soortGroot': 'TextEdit', 'soortGro_1': 'TextEdit', 'perceelnum': 'TextEdit', 'perceeln_1': 'TextEdit', 'perceeln_2': 'TextEdit', 'perceeln_3': 'TextEdit', 'perceeln_4': 'TextEdit', 'perceeln_5': 'TextEdit', });
lyr_KadastralepercelenGeertruidenberg_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fuuid': 'TextEdit', 'identificatieNamespace': 'TextEdit', 'identificatieLokaalID': 'TextEdit', 'beginGeldigheid': 'TextEdit', 'tijdstipRegistratie': 'TextEdit', 'volgnummer': 'Range', 'statusHistorieCode': 'TextEdit', 'statusHistorieWaarde': 'TextEdit', 'kadastraleGemeenteCode': 'TextEdit', 'kadastraleGemeenteWaarde': 'TextEdit', 'sectie': 'TextEdit', 'AKRKadastraleGemeenteCodeCode': 'TextEdit', 'AKRKadastraleGemeenteCodeWaarde': 'TextEdit', 'kadastraleGrootteWaarde': 'TextEdit', 'soortGrootteCode': 'TextEdit', 'soortGrootteWaarde': 'TextEdit', 'perceelnummer': 'Range', 'perceelnummerRotatie': 'TextEdit', 'perceelnummerVerschuivingDeltaX': 'TextEdit', 'perceelnummerVerschuivingDeltaY': 'TextEdit', 'perceelnummerPlaatscoordinaatX': 'TextEdit', 'perceelnummerPlaatscoordinaatY': 'TextEdit', });
lyr_LandWormerland_5.set('fieldImages', {'id': 'TextEdit', 'identifica': 'TextEdit', 'identifi_1': 'TextEdit', 'beginGeldi': 'TextEdit', 'tijdstipRe': 'TextEdit', 'volgnummer': 'TextEdit', 'statusHist': 'TextEdit', 'statusHi_1': 'TextEdit', 'kadastrale': 'TextEdit', 'kadastra_1': 'TextEdit', 'sectie': 'TextEdit', 'AKRKadastr': 'TextEdit', 'AKRKadas_1': 'TextEdit', 'kadastra_2': 'TextEdit', 'soortGroot': 'TextEdit', 'soortGro_1': 'TextEdit', 'perceelnum': 'TextEdit', 'perceeln_1': 'TextEdit', 'perceeln_2': 'TextEdit', 'perceeln_3': 'TextEdit', 'perceeln_4': 'TextEdit', 'perceeln_5': 'TextEdit', });
lyr_KadastralepercelenWormerland_6.set('fieldImages', {'kadastra_1': 'TextEdit', 'sectie': 'TextEdit', 'perceelnum': 'TextEdit', });
lyr_LandMeedenIII_8.set('fieldImages', {'id': 'TextEdit', 'identifica': 'TextEdit', 'identifi_1': 'TextEdit', 'beginGeldi': 'TextEdit', 'tijdstipRe': 'TextEdit', 'volgnummer': 'TextEdit', 'statusHist': 'TextEdit', 'statusHi_1': 'TextEdit', 'kadastrale': 'TextEdit', 'kadastra_1': 'TextEdit', 'sectie': 'TextEdit', 'AKRKadastr': 'TextEdit', 'AKRKadas_1': 'TextEdit', 'kadastra_2': 'TextEdit', 'soortGroot': 'TextEdit', 'soortGro_1': 'TextEdit', 'perceelnum': 'TextEdit', 'perceeln_1': 'TextEdit', 'perceeln_2': 'TextEdit', 'perceeln_3': 'TextEdit', 'perceeln_4': 'TextEdit', 'perceeln_5': 'TextEdit', });
lyr_KadastralepercelenMeedenIII_9.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fuuid': 'TextEdit', 'identificatieNamespace': 'TextEdit', 'identificatieLokaalID': 'TextEdit', 'beginGeldigheid': 'TextEdit', 'tijdstipRegistratie': 'TextEdit', 'volgnummer': 'Range', 'statusHistorieCode': 'TextEdit', 'statusHistorieWaarde': 'TextEdit', 'kadastraleGemeenteCode': 'TextEdit', 'kadastraleGemeenteWaarde': 'TextEdit', 'sectie': 'TextEdit', 'AKRKadastraleGemeenteCodeCode': 'TextEdit', 'AKRKadastraleGemeenteCodeWaarde': 'TextEdit', 'kadastraleGrootteWaarde': 'TextEdit', 'soortGrootteCode': 'TextEdit', 'soortGrootteWaarde': 'TextEdit', 'perceelnummer': 'Range', 'perceelnummerRotatie': 'TextEdit', 'perceelnummerVerschuivingDeltaX': 'TextEdit', 'perceelnummerVerschuivingDeltaY': 'TextEdit', 'perceelnummerPlaatscoordinaatX': 'TextEdit', 'perceelnummerPlaatscoordinaatY': 'TextEdit', });
lyr_LandMeedenIIBegeman_11.set('fieldImages', {'id': 'TextEdit', 'identifica': 'TextEdit', 'identifi_1': 'TextEdit', 'beginGeldi': 'TextEdit', 'tijdstipRe': 'TextEdit', 'volgnummer': 'TextEdit', 'statusHist': 'TextEdit', 'statusHi_1': 'TextEdit', 'kadastrale': 'TextEdit', 'kadastra_1': 'TextEdit', 'sectie': 'TextEdit', 'AKRKadastr': 'TextEdit', 'AKRKadas_1': 'TextEdit', 'kadastra_2': 'TextEdit', 'soortGroot': 'TextEdit', 'soortGro_1': 'TextEdit', 'perceelnum': 'TextEdit', 'perceeln_1': 'TextEdit', 'perceeln_2': 'TextEdit', 'perceeln_3': 'TextEdit', 'perceeln_4': 'TextEdit', 'perceeln_5': 'TextEdit', });
lyr_LandMeedenIILubbers_12.set('fieldImages', {'id': 'TextEdit', 'identifica': 'TextEdit', 'identifi_1': 'TextEdit', 'beginGeldi': 'TextEdit', 'tijdstipRe': 'TextEdit', 'volgnummer': 'TextEdit', 'statusHist': 'TextEdit', 'statusHi_1': 'TextEdit', 'kadastrale': 'TextEdit', 'kadastra_1': 'TextEdit', 'sectie': 'TextEdit', 'AKRKadastr': 'TextEdit', 'AKRKadas_1': 'TextEdit', 'kadastra_2': 'TextEdit', 'soortGroot': 'TextEdit', 'soortGro_1': 'TextEdit', 'perceelnum': 'TextEdit', 'perceeln_1': 'TextEdit', 'perceeln_2': 'TextEdit', 'perceeln_3': 'TextEdit', 'perceeln_4': 'TextEdit', 'perceeln_5': 'TextEdit', });
lyr_KadastralepercelenMeedenII_13.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fuuid': 'TextEdit', 'identificatieNamespace': 'TextEdit', 'identificatieLokaalID': 'TextEdit', 'beginGeldigheid': 'TextEdit', 'tijdstipRegistratie': 'TextEdit', 'volgnummer': 'Range', 'statusHistorieCode': 'TextEdit', 'statusHistorieWaarde': 'TextEdit', 'kadastraleGemeenteCode': 'TextEdit', 'kadastraleGemeenteWaarde': 'TextEdit', 'sectie': 'TextEdit', 'AKRKadastraleGemeenteCodeCode': 'TextEdit', 'AKRKadastraleGemeenteCodeWaarde': 'TextEdit', 'kadastraleGrootteWaarde': 'TextEdit', 'soortGrootteCode': 'TextEdit', 'soortGrootteWaarde': 'TextEdit', 'perceelnummer': 'Range', 'perceelnummerRotatie': 'TextEdit', 'perceelnummerVerschuivingDeltaX': 'TextEdit', 'perceelnummerVerschuivingDeltaY': 'TextEdit', 'perceelnummerPlaatscoordinaatX': 'TextEdit', 'perceelnummerPlaatscoordinaatY': 'TextEdit', });
lyr_LandMeedenI_15.set('fieldImages', {'id': 'TextEdit', 'identifica': 'TextEdit', 'identifi_1': 'TextEdit', 'beginGeldi': 'TextEdit', 'tijdstipRe': 'TextEdit', 'volgnummer': 'TextEdit', 'statusHist': 'TextEdit', 'statusHi_1': 'TextEdit', 'kadastrale': 'TextEdit', 'kadastra_1': 'TextEdit', 'sectie': 'TextEdit', 'AKRKadastr': 'TextEdit', 'AKRKadas_1': 'TextEdit', 'kadastra_2': 'TextEdit', 'soortGroot': 'TextEdit', 'soortGro_1': 'TextEdit', 'perceelnum': 'TextEdit', 'perceeln_1': 'TextEdit', 'perceeln_2': 'TextEdit', 'perceeln_3': 'TextEdit', 'perceeln_4': 'TextEdit', 'perceeln_5': 'TextEdit', });
lyr_KadastralepercelenMeedenI_16.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fuuid': 'TextEdit', 'identificatieNamespace': 'TextEdit', 'identificatieLokaalID': 'TextEdit', 'beginGeldigheid': 'TextEdit', 'tijdstipRegistratie': 'TextEdit', 'volgnummer': 'Range', 'statusHistorieCode': 'TextEdit', 'statusHistorieWaarde': 'TextEdit', 'kadastraleGemeenteCode': 'TextEdit', 'kadastraleGemeenteWaarde': 'TextEdit', 'sectie': 'TextEdit', 'AKRKadastraleGemeenteCodeCode': 'TextEdit', 'AKRKadastraleGemeenteCodeWaarde': 'TextEdit', 'kadastraleGrootteWaarde': 'TextEdit', 'soortGrootteCode': 'TextEdit', 'soortGrootteWaarde': 'TextEdit', 'perceelnummer': 'Range', 'perceelnummerRotatie': 'TextEdit', 'perceelnummerVerschuivingDeltaX': 'TextEdit', 'perceelnummerVerschuivingDeltaY': 'TextEdit', 'perceelnummerPlaatscoordinaatX': 'TextEdit', 'perceelnummerPlaatscoordinaatY': 'TextEdit', });
lyr_LandMusselkanaal_19.set('fieldImages', {'id': 'TextEdit', 'area': '', });
lyr_Mussel_kadastraalkadastrale_kaart_20.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fuuid': 'TextEdit', 'identificatieNamespace': 'TextEdit', 'identificatieLokaalID': 'TextEdit', 'beginGeldigheid': 'TextEdit', 'tijdstipRegistratie': 'TextEdit', 'volgnummer': 'Range', 'statusHistorieCode': 'TextEdit', 'statusHistorieWaarde': 'TextEdit', 'kadastraleGemeenteCode': 'TextEdit', 'kadastraleGemeenteWaarde': 'TextEdit', 'sectie': 'TextEdit', 'AKRKadastraleGemeenteCodeCode': 'TextEdit', 'AKRKadastraleGemeenteCodeWaarde': 'TextEdit', 'kadastraleGrootteWaarde': 'TextEdit', 'soortGrootteCode': 'TextEdit', 'soortGrootteWaarde': 'TextEdit', 'perceelnummer': 'Range', 'perceelnummerRotatie': 'TextEdit', 'perceelnummerVerschuivingDeltaX': 'TextEdit', 'perceelnummerVerschuivingDeltaY': 'TextEdit', 'perceelnummerPlaatscoordinaatX': 'TextEdit', 'perceelnummerPlaatscoordinaatY': 'TextEdit', });
lyr_LandGeertruidenberg_2.set('fieldLabels', {'id': 'no label', 'identifica': 'no label', 'identifi_1': 'no label', 'beginGeldi': 'no label', 'tijdstipRe': 'no label', 'volgnummer': 'no label', 'statusHist': 'no label', 'statusHi_1': 'no label', 'kadastrale': 'no label', 'kadastra_1': 'no label', 'sectie': 'no label', 'AKRKadastr': 'no label', 'AKRKadas_1': 'no label', 'kadastra_2': 'no label', 'soortGroot': 'no label', 'soortGro_1': 'no label', 'perceelnum': 'no label', 'perceeln_1': 'no label', 'perceeln_2': 'no label', 'perceeln_3': 'no label', 'perceeln_4': 'no label', 'perceeln_5': 'no label', });
lyr_KadastralepercelenGeertruidenberg_3.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fuuid': 'no label', 'identificatieNamespace': 'no label', 'identificatieLokaalID': 'no label', 'beginGeldigheid': 'no label', 'tijdstipRegistratie': 'no label', 'volgnummer': 'no label', 'statusHistorieCode': 'no label', 'statusHistorieWaarde': 'no label', 'kadastraleGemeenteCode': 'no label', 'kadastraleGemeenteWaarde': 'no label', 'sectie': 'no label', 'AKRKadastraleGemeenteCodeCode': 'no label', 'AKRKadastraleGemeenteCodeWaarde': 'no label', 'kadastraleGrootteWaarde': 'no label', 'soortGrootteCode': 'no label', 'soortGrootteWaarde': 'no label', 'perceelnummer': 'no label', 'perceelnummerRotatie': 'no label', 'perceelnummerVerschuivingDeltaX': 'no label', 'perceelnummerVerschuivingDeltaY': 'no label', 'perceelnummerPlaatscoordinaatX': 'no label', 'perceelnummerPlaatscoordinaatY': 'no label', });
lyr_LandWormerland_5.set('fieldLabels', {'id': 'no label', 'identifica': 'no label', 'identifi_1': 'no label', 'beginGeldi': 'no label', 'tijdstipRe': 'no label', 'volgnummer': 'no label', 'statusHist': 'no label', 'statusHi_1': 'no label', 'kadastrale': 'no label', 'kadastra_1': 'no label', 'sectie': 'no label', 'AKRKadastr': 'no label', 'AKRKadas_1': 'no label', 'kadastra_2': 'no label', 'soortGroot': 'no label', 'soortGro_1': 'no label', 'perceelnum': 'no label', 'perceeln_1': 'no label', 'perceeln_2': 'no label', 'perceeln_3': 'no label', 'perceeln_4': 'no label', 'perceeln_5': 'no label', });
lyr_KadastralepercelenWormerland_6.set('fieldLabels', {'kadastra_1': 'no label', 'sectie': 'no label', 'perceelnum': 'no label', });
lyr_LandMeedenIII_8.set('fieldLabels', {'id': 'no label', 'identifica': 'no label', 'identifi_1': 'no label', 'beginGeldi': 'no label', 'tijdstipRe': 'no label', 'volgnummer': 'no label', 'statusHist': 'no label', 'statusHi_1': 'no label', 'kadastrale': 'no label', 'kadastra_1': 'no label', 'sectie': 'no label', 'AKRKadastr': 'no label', 'AKRKadas_1': 'no label', 'kadastra_2': 'no label', 'soortGroot': 'no label', 'soortGro_1': 'no label', 'perceelnum': 'no label', 'perceeln_1': 'no label', 'perceeln_2': 'no label', 'perceeln_3': 'no label', 'perceeln_4': 'no label', 'perceeln_5': 'no label', });
lyr_KadastralepercelenMeedenIII_9.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fuuid': 'no label', 'identificatieNamespace': 'no label', 'identificatieLokaalID': 'no label', 'beginGeldigheid': 'no label', 'tijdstipRegistratie': 'no label', 'volgnummer': 'no label', 'statusHistorieCode': 'no label', 'statusHistorieWaarde': 'no label', 'kadastraleGemeenteCode': 'no label', 'kadastraleGemeenteWaarde': 'no label', 'sectie': 'no label', 'AKRKadastraleGemeenteCodeCode': 'no label', 'AKRKadastraleGemeenteCodeWaarde': 'no label', 'kadastraleGrootteWaarde': 'no label', 'soortGrootteCode': 'no label', 'soortGrootteWaarde': 'no label', 'perceelnummer': 'no label', 'perceelnummerRotatie': 'no label', 'perceelnummerVerschuivingDeltaX': 'no label', 'perceelnummerVerschuivingDeltaY': 'no label', 'perceelnummerPlaatscoordinaatX': 'no label', 'perceelnummerPlaatscoordinaatY': 'no label', });
lyr_LandMeedenIIBegeman_11.set('fieldLabels', {'id': 'no label', 'identifica': 'no label', 'identifi_1': 'no label', 'beginGeldi': 'no label', 'tijdstipRe': 'no label', 'volgnummer': 'no label', 'statusHist': 'no label', 'statusHi_1': 'no label', 'kadastrale': 'no label', 'kadastra_1': 'no label', 'sectie': 'no label', 'AKRKadastr': 'no label', 'AKRKadas_1': 'no label', 'kadastra_2': 'no label', 'soortGroot': 'no label', 'soortGro_1': 'no label', 'perceelnum': 'no label', 'perceeln_1': 'no label', 'perceeln_2': 'no label', 'perceeln_3': 'no label', 'perceeln_4': 'no label', 'perceeln_5': 'no label', });
lyr_LandMeedenIILubbers_12.set('fieldLabels', {'id': 'no label', 'identifica': 'no label', 'identifi_1': 'no label', 'beginGeldi': 'no label', 'tijdstipRe': 'no label', 'volgnummer': 'no label', 'statusHist': 'no label', 'statusHi_1': 'no label', 'kadastrale': 'no label', 'kadastra_1': 'no label', 'sectie': 'no label', 'AKRKadastr': 'no label', 'AKRKadas_1': 'no label', 'kadastra_2': 'no label', 'soortGroot': 'no label', 'soortGro_1': 'no label', 'perceelnum': 'no label', 'perceeln_1': 'no label', 'perceeln_2': 'no label', 'perceeln_3': 'no label', 'perceeln_4': 'no label', 'perceeln_5': 'no label', });
lyr_KadastralepercelenMeedenII_13.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fuuid': 'no label', 'identificatieNamespace': 'no label', 'identificatieLokaalID': 'no label', 'beginGeldigheid': 'no label', 'tijdstipRegistratie': 'no label', 'volgnummer': 'no label', 'statusHistorieCode': 'no label', 'statusHistorieWaarde': 'no label', 'kadastraleGemeenteCode': 'no label', 'kadastraleGemeenteWaarde': 'no label', 'sectie': 'no label', 'AKRKadastraleGemeenteCodeCode': 'no label', 'AKRKadastraleGemeenteCodeWaarde': 'no label', 'kadastraleGrootteWaarde': 'no label', 'soortGrootteCode': 'no label', 'soortGrootteWaarde': 'no label', 'perceelnummer': 'no label', 'perceelnummerRotatie': 'no label', 'perceelnummerVerschuivingDeltaX': 'no label', 'perceelnummerVerschuivingDeltaY': 'no label', 'perceelnummerPlaatscoordinaatX': 'no label', 'perceelnummerPlaatscoordinaatY': 'no label', });
lyr_LandMeedenI_15.set('fieldLabels', {'id': 'no label', 'identifica': 'no label', 'identifi_1': 'no label', 'beginGeldi': 'no label', 'tijdstipRe': 'no label', 'volgnummer': 'no label', 'statusHist': 'no label', 'statusHi_1': 'no label', 'kadastrale': 'no label', 'kadastra_1': 'no label', 'sectie': 'no label', 'AKRKadastr': 'no label', 'AKRKadas_1': 'no label', 'kadastra_2': 'no label', 'soortGroot': 'no label', 'soortGro_1': 'no label', 'perceelnum': 'no label', 'perceeln_1': 'no label', 'perceeln_2': 'no label', 'perceeln_3': 'no label', 'perceeln_4': 'no label', 'perceeln_5': 'no label', });
lyr_KadastralepercelenMeedenI_16.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fuuid': 'no label', 'identificatieNamespace': 'no label', 'identificatieLokaalID': 'no label', 'beginGeldigheid': 'no label', 'tijdstipRegistratie': 'no label', 'volgnummer': 'no label', 'statusHistorieCode': 'no label', 'statusHistorieWaarde': 'no label', 'kadastraleGemeenteCode': 'no label', 'kadastraleGemeenteWaarde': 'no label', 'sectie': 'no label', 'AKRKadastraleGemeenteCodeCode': 'no label', 'AKRKadastraleGemeenteCodeWaarde': 'no label', 'kadastraleGrootteWaarde': 'no label', 'soortGrootteCode': 'no label', 'soortGrootteWaarde': 'no label', 'perceelnummer': 'no label', 'perceelnummerRotatie': 'no label', 'perceelnummerVerschuivingDeltaX': 'no label', 'perceelnummerVerschuivingDeltaY': 'no label', 'perceelnummerPlaatscoordinaatX': 'no label', 'perceelnummerPlaatscoordinaatY': 'no label', });
lyr_LandMusselkanaal_19.set('fieldLabels', {'id': 'no label', 'area': 'no label', });
lyr_Mussel_kadastraalkadastrale_kaart_20.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fuuid': 'no label', 'identificatieNamespace': 'no label', 'identificatieLokaalID': 'no label', 'beginGeldigheid': 'no label', 'tijdstipRegistratie': 'no label', 'volgnummer': 'no label', 'statusHistorieCode': 'no label', 'statusHistorieWaarde': 'no label', 'kadastraleGemeenteCode': 'no label', 'kadastraleGemeenteWaarde': 'no label', 'sectie': 'no label', 'AKRKadastraleGemeenteCodeCode': 'no label', 'AKRKadastraleGemeenteCodeWaarde': 'no label', 'kadastraleGrootteWaarde': 'no label', 'soortGrootteCode': 'no label', 'soortGrootteWaarde': 'no label', 'perceelnummer': 'no label', 'perceelnummerRotatie': 'no label', 'perceelnummerVerschuivingDeltaX': 'no label', 'perceelnummerVerschuivingDeltaY': 'no label', 'perceelnummerPlaatscoordinaatX': 'no label', 'perceelnummerPlaatscoordinaatY': 'no label', });
lyr_Mussel_kadastraalkadastrale_kaart_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});