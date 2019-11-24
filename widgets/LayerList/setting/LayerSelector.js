// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/LayerList/setting/LayerSelector.html":'\x3cdiv\x3e\r\n  \x3ctable class\x3d"layer-list-table"\x3e\r\n    \x3ctbody class\x3d"layers-list-body" data-dojo-attach-point\x3d"layerListTable"\x3e\x3c/tbody\x3e\r\n    \x3ctbody class\x3d"layers-list-body" data-dojo-attach-point\x3d"tableListTable"\x3e\x3c/tbody\x3e       \r\n  \x3c/table\x3e\r\n\x3c/div\x3e\r\n'}});
define("dijit/_WidgetBase dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-construct dojo/on dojo/query jimu/dijit/CheckBox dijit/_TemplatedMixin dojo/text!./LayerSelector.html dojo/dom-class dojo/dom-style".split(" "),function(q,r,k,l,e,p,t,u,v,w,f,n){return r([q,v],{templateString:w,baseClass:"layer-selector",_currentSelectedLayerRowNode:null,_displayStateStorage:null,postMixInProperties:function(){this.inherited(arguments);this._displayStateStorage={}},postCreate:function(){l.forEach(this.operLayerInfos.getLayerInfoArrayOfWebmap(),
function(a){this.drawListNode(a,0,this.layerListTable)},this);l.forEach(this.operLayerInfos.getTableInfoArray(),function(a){this.drawListNode(a,0,this.tableListTable)},this)},drawListNode:function(a,b,c){var d;0===a.newSubLayers.length?(d=this.addLayerNode(a,b,c),f.add(t(".showLegend-div",d.currentNode)[0],"hidden")):(d=this.addLayerNode(a,b,c),l.forEach(a.newSubLayers,k.hitch(this,function(a,b){this.drawListNode(b,a+1,d.subNode)},b)))},addLayerNode:function(a,b,c){var d=e.create("tr",{"class":"jimu-widget-row layer-row ",
layerTrNodeId:a.id},c),g,l,h,m;g=e.create("td",{"class":"col col1"},d);for(m=0;m<b;m++)e.create("div",{"class":"begin-blank-div jimu-float-leading",innerHTML:""},g);m=e.create("div",{"class":"showLegend-div jimu-float-leading"},g);l=e.create("div",{"class":"div-select jimu-float-leading"},g);h=!0;this.config.layerOptions&&void 0!==this.config.layerOptions[a.id]&&(h=this.config.layerOptions[a.id].display);h=new u({checked:h,"class":"visible-checkbox-"+a.id});e.place(h.domNode,l);n.set(g,"width",12*
b+35+"px");b=e.create("td",{"class":"col col2"},d);g=e.create("div",{"class":"noLegend-div jimu-float-leading"},b);a.isTable&&f.add(g,"table");a.isTable&&n.set(g,"display","block");b=e.create("div",{innerHTML:a.title,"class":"layer-title-div-"+a.id+" div-content jimu-float-leading "},b);g=e.create("td",{"class":"col col3"},d);e.create("div",{"class":"layers-list-popupMenu-div"},g);c=e.create("tr",{"class":"",layerContentTrNodeId:a.id},c);c=e.create("td",{"class":"",colspan:"3"},c);c=e.create("table",
{"class":"layer-sub-node"},c);this.initDisplayStateStorage(a,h,b);this.own(p(m,"click",k.hitch(this,this._onRowTrClick,a,m,d,c)));this.own(p(d,"mouseover",k.hitch(this,this._onLayerNodeMouseover,d,void 0)));this.own(p(d,"mouseout",k.hitch(this,this._onLayerNodeMouseout,d,void 0)));this.own(p(h.domNode,"click",k.hitch(this,this._onCkSelectNodeClick,a,h)));return{currentNode:d,subNode:c}},_fold:function(a,b,c){"none"===n.get(c,"display")?(n.set(c,"display","table"),f.add(b,"unfold"),a=!1):(n.set(c,
"display","none"),f.remove(b,"unfold"),a=!0);return a},_onCkSelectNodeClick:function(a,b,c){a.traversal(k.hitch(this,function(a){this._grayedLayerLabel(a)}));c.stopPropagation()},_onLayerNodeMouseover:function(a,b){f.add(a,"layer-row-mouseover");b&&f.add(b.btnNode,"jimu-icon-btn-selected")},_onLayerNodeMouseout:function(a,b){f.remove(a,"layer-row-mouseover");b&&f.remove(b.btnNode,"jimu-icon-btn-selected")},_onRowTrClick:function(a,b,c,d){this._changeSelectedLayerRow(c);this._fold(a,b,d)},_changeSelectedLayerRow:function(a){this._currentSelectedLayerRowNode&&
this._currentSelectedLayerRowNode===a||(this._currentSelectedLayerRowNode&&f.remove(this._currentSelectedLayerRowNode,"jimu-widget-row-selected"),f.add(a,"jimu-widget-row-selected"),this._currentSelectedLayerRowNode=a)},initDisplayStateStorage:function(a,b,c){this._displayStateStorage[a.id]={displayCK:b,labelDiv:c};this._grayedLayerLabel(a)},_grayedLayerLabel:function(a){var b=!0,c=a;if(a=this._displayStateStorage[a.id].labelDiv){for(;c;){b=b&&this._displayStateStorage[c.id].displayCK.checked;if(!b)break;
c=c.parentLayerInfo}b?f.remove(a,"grayed-title"):f.add(a,"grayed-title")}},getLayerOptions:function(){var a={},b;for(b in this._displayStateStorage)this._displayStateStorage.hasOwnProperty(b)&&"function"!==typeof this._displayStateStorage[b]&&(a[b]={display:this._displayStateStorage[b].displayCK.checked});return a}})});