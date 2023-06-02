
document.addEventListener('DOMContentLoaded', function () {
    let osm = new ol.layer.Tile({
        title: 'OpenStreetMap',
        type: 'base',
        visible: false,
        source: new ol.source.OSM()
    });

    var Aspect = new ol.layer.Image({
        title: 'Aspect',
        visible: false,
        source: new ol.source.ImageWMS({
            url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_04/wms',
            params: { 'LAYERS': 'gisgeoserver_04:aspect' }
        }),
        opacity: 1
    });

    var roads = new ol.layer.Image({
        title: 'Roads',
        visible: false,
        source: new ol.source.ImageWMS({
            url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_04/wms',
            params: { 'LAYERS': 'gisgeoserver_04:roads' }
        }),
        opacity: 1
    });

    var rivers = new ol.layer.Image({
        title: 'Rivers',
        visible: false,
        source: new ol.source.ImageWMS({
            url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_04/wms',
            params: { 'LAYERS': 'gisgeoserver_04:rivers' }
        }),
        opacity: 1
    });

    var population = new ol.layer.Image({
        title: 'Population',
        visible: false,
        source: new ol.source.ImageWMS({
            url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_04/wms',
            params: { 'LAYERS': 'gisgeoserver_04:population' }
        }),
        opacity: 1
    });
    var dtm = new ol.layer.Image({
        title: 'DTM',
        visible: false,
        source: new ol.source.ImageWMS({
            url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_04/wms',
            params: { 'LAYERS': 'gisgeoserver_04:dtm' }
        }),
        opacity: 1
    });

    var dusaf = new ol.layer.Image({
        title: 'DUSAF',
        visible: false,
        source: new ol.source.ImageWMS({
            url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_04/wms',
            params: { 'LAYERS': 'gisgeoserver_04:dusaf' }
        }),
        opacity: 1
    });

    var faults = new ol.layer.Image({
        title: 'Faults',
        visible: false,
        source: new ol.source.ImageWMS({
            url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_04/wms',
            params: { 'LAYERS': 'gisgeoserver_04:faults' }
        }),
        opacity: 1
    });

    var ndvi = new ol.layer.Image({
        title: 'NDVI',
        visible: false,
        source: new ol.source.ImageWMS({
            url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_04/wms',
            params: { 'LAYERS': 'gisgeoserver_04:ndvi' }
        }),
        opacity: 1
    });

    var plan = new ol.layer.Image({
        title: 'Plan',
        visible: false,
        source: new ol.source.ImageWMS({
            url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_04/wms',
            params: { 'LAYERS': 'gisgeoserver_04:plan' }
        }),
        opacity: 1
    });

    var profile = new ol.layer.Image({
        title: 'Profile',
        visible: false,
        source: new ol.source.ImageWMS({
            url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_04/wms',
            params: { 'LAYERS': 'gisgeoserver_04:profile' }
        }),
        opacity: 1
    });

    var slope = new ol.layer.Image({
        title: 'Slope',
        visible: false,
        source: new ol.source.ImageWMS({
            url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_04/wms',
            params: { 'LAYERS': 'gisgeoserver_04:slope' }
        }),
        opacity: 1
    });

    var LandslideSusceptibilityMap = new ol.layer.Image({
        title: 'Landslide Susceptibility Map',
        visible: true,

        source: new ol.source.ImageWMS({
            url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_04/wms',
            params: { 'LAYERS': 'gisgeoserver_04:LandslideSusceptibilityMap' }
        }),
        opacity: 1
    });
    var LandslideSusceptibilityMapRe = new ol.layer.Image({
        title: 'Landslide Susceptibility Map Reclass',
        visible: false,

        source: new ol.source.ImageWMS({
            url: 'https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_04/wms',
            params: { 'LAYERS': 'gisgeoserver_04:LandslideSusceptibilityMap_reclass' }
        }),
        opacity: 1
    });

    let basemapLayers = new ol.layer.Group({
        title: "Base Maps",
        layers: [osm]
    });
    let overlayLayers = new ol.layer.Group({
        title: "Overlay Layers",
        layers: [Aspect, roads,
            rivers,
            population, dtm, dusaf, faults, ndvi, plan, profile, slope, LandslideSusceptibilityMap, LandslideSusceptibilityMapRe]
    })
    let map = new ol.Map({
        target: document.getElementById('map'),
        layers: [basemapLayers, overlayLayers],
        view: new ol.View({
            center: ol.proj.fromLonLat([9.937947001125176, 45.772257231775406]), // Longitude and latitude of study area
            zoom: 12 // Zoom level (adjust as needed)
        }),
        controls: ol.control.defaults().extend([
            new ol.control.Zoom(),
            new ol.control.ScaleLine(),
            new ol.control.FullScreen(),
            new ol.control.Rotate(),
            new ol.control.MousePosition({
                coordinateFormat: ol.coordinate.createStringXY(4),
                projection: 'EPSG:4326',
                className: 'custom-control',
                placeholder: '0.0000, 0.0000'
            })
        ])
    });
    //Add the Stamen base layers
    var stamenWatercolor = new ol.layer.Tile({
        title: 'Stamen Watercolor',
        type: 'base',
        visible: false,
        source: new ol.source.Stamen({
            layer: 'watercolor'
        })
    });
    var darkLayer = new ol.layer.Tile({
        title: 'Dark',
        type: 'base',
        visible: false,
        source: new ol.source.XYZ({
            url: 'https://cartodb-basemaps-{a-d}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png',
            attributions: 'Tiles courtesy of <a href="https://carto.com/">Carto</a>'
        })
    });
    var lightLayer = new ol.layer.Tile({
        title: 'Light',
        type: 'base',
        visible: true,
        source: new ol.source.XYZ({
            url: 'https://cartodb-basemaps-{a-d}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
            attributions: 'Tiles courtesy of <a href="https://carto.com/">Carto</a>'
        })
    });

    //Get the list of basemaps and Extend the list using the .extend() function adding the 2 new layers
    basemapLayers.getLayers().extend([stamenWatercolor, darkLayer, lightLayer]);
    //Add the layer switcher control
    var layerSwitcher = new ol.control.LayerSwitcher({});
    map.addControl(layerSwitcher);



});
