// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"widgets/Legend/Utils":function(){define(["dojo/_base/array","jimu/LayerInfos/LayerInfos"],function(f,g){function e(a,e){return a.isLeaf()?e.layerState[a.id]?e.layerState[a.id].selected:a.getShowLegendOfWebmap():!0}var d={getLayerInfosParam:function(a){return c(a)}},c=function(a){var c=[],d=g.getInstanceSync().getLayerInfoArray();f.forEach(d,function(b){var d=[];e(b,a)&&(!b.layerObject||"esri.layers.ArcGISDynamicMapServiceLayer"!==b.layerObject.declaredClass&&"esri.layers.ArcGISTiledMapServiceLayer"!==
b.layerObject.declaredClass||f.forEach(b.layerObject.dynamicLayerInfos||b.layerObject.layerInfos,function(k){var c=null;b.traversal(function(b){if(b.subId===k.id)return b.isLeaf()&&!e(b,a)&&d.push(b.originOperLayer.mapService.subId),c=b,!0});c||d.push(k.id)}),b.isMapNotesLayerInfo()?f.forEach(b.getSubLayers(),function(b){e(b,a)&&c.push({layer:b.layerObject,title:"Map Notes - "+b.title})}):c.push({hideLayers:d,layer:b.layerObject,title:b.title}))});return c.reverse()};d.isSupportedLayerType=function(a){return a&&
("esri.layers.ArcGISDynamicMapServiceLayer"===a.declaredClass||"esri.layers.ArcGISImageServiceLayer"===a.declaredClass&&10.2<=a.version||"esri.layers.ArcGISImageServiceVectorLayer"===a.declaredClass||"esri.layers.ArcGISTiledMapServiceLayer"===a.declaredClass||"esri.layers.FeatureLayer"===a.declaredClass||"esri.layers.StreamLayer"===a.declaredClass||"esri.layers.KMLLayer"===a.declaredClass||"esri.layers.GeoRSSLayer"===a.declaredClass||"esri.layers.WMSLayer"===a.declaredClass||"esri.layers.WFSLayer"===
a.declaredClass||"esri.layers.CSVLayer"===a.declaredClass)?!0:!1};return d})},"widgets/Legend/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/Legend/Widget.html":'\x3cdiv\x3e\r\n  \x3c!--div data-dojo-attach-point\x3d"legendDiv"\x3e\x3c/div\x3e\r\n  \x3cdiv style\x3d"display:none" data-dojo-attach-point\x3d"removedDiv"\x3e\x3c/div--\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"operationalLayersPart"\x3e\x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"basemapLayersPart"\x3e\r\n    \x3cdiv class\x3d"basemap-layers-title" data-dojo-attach-point\x3d"basemapLayersTitle"\x3ebasemap layers\x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"basemapLayersDiv"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n\r\n\r\n',
"url:widgets/Legend/css/style.css":".esriLegendServiceLabel {font-size: 14px;}.esriLegendLayer{font-size: 12px;}.jimu-widget-legend .basemap-layers-title {display: none; font-size: 16px; font-weight: bold; margin: 5px 0 10px 0;}","*now":function(f){f(['dojo/i18n!*preload*widgets/Legend/nls/Widget*["ar","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","uk","vi","zh-hk","zh-tw","ROOT"]'])},
"*noref":1}});
define("dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/_base/html dojo/on ./Utils dijit/_WidgetsInTemplateMixin jimu/BaseWidget jimu/LayerInfos/LayerInfos esri/dijit/Legend".split(" "),function(f,g,e,d,c,a,l,m,b,h){return f([m,l],{name:"Legend",baseClass:"jimu-widget-legend",legend:null,_jimuLayerInfos:null,startup:function(){this.inherited(arguments);if(!this.config.layerState||this.config.syncWithWebmap)this.config.layerState={};this._jimuLayerInfos=b.getInstanceSync();this._createLegendForOperationalLayers();this._bindEvent()},
destroy:function(){this.legend.destroy();this.legendForBasemap&&this.legendForBasemap.destroy();this.inherited(arguments)},_createLegendForOperationalLayers:function(){var a={arrangement:this.config.legend.arrangement,autoUpdate:this.config.legend.autoUpdate,respectCurrentMapScale:this.config.legend.respectCurrentMapScale,map:this.map,layerInfos:this._getLayerInfosParam()};this.legend=new h(a,d.create("div",{},this.operationalLayersPart));this.legend.startup()},_createLegendForBasemaplLayers:function(){d.setStyle(this.basemapLayersTitle,
"display","block");var a={arrangement:this.config.legend.arrangement,autoUpdate:this.config.legend.autoUpdate,respectCurrentMapScale:this.config.legend.respectCurrentMapScale,map:this.map,layerInfos:this._getBasemapLayerInfosParam()};this.legendForBasemap=new h(a,d.create("div",{},this.basemapLayersDiv));this.legendForBasemap.startup()},_bindEvent:function(){this.config.legend.autoUpdate&&(this.own(c(this._jimuLayerInfos,"layerInfosIsShowInMapChanged",e.hitch(this,"refreshLegend"))),this.own(c(this._jimuLayerInfos,
"layerInfosChanged",e.hitch(this,"refreshLegend"))),this.own(c(this._jimuLayerInfos,"basemapLayersChanged",e.hitch(this,"refreshLegend"))),this.own(c(this._jimuLayerInfos,"layerInfosRendererChanged",e.hitch(this,"refreshLegend"))))},_getBasemapLayerInfosParam:function(){var b=[];g.forEach(this._jimuLayerInfos.getBasemapLayers(),function(c){a.isSupportedLayerType(c)&&b.push({layer:c,title:c.name})});return b},_getLayerInfosParam:function(){return(this.config.showLegendForBasemap?this._getBasemapLayerInfosParam():
[]).concat(a.getLayerInfosParam(this.config))},refreshLegend:function(){if(this.legend){var a=this._getLayerInfosParam();this.legend.refresh(a)}}})});