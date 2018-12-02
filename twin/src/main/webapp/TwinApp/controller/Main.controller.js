/*sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"TwinApp/utils/DataUtil"
], function(Controller, JSONModel, Filter, DataUtil) {
	"use strict";*/
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/m/MessageBox",
	"sap/m/MessageToast",
	"TwinApp/utils/DataUtil"
], function(Controller, JSONModel, Filter, MessageBox, MessageToast, DataUtil) {
	"use strict";

	return Controller.extend("TwinApp.controller.Main", {

		DataUtil: DataUtil,

		onInit: function() {
			var oLocalModel = this._createLocalModel();
			this.getView().setModel(oLocalModel, "local");

			this.getOwnerComponent().getRouter().getRoute("routeMain").attachPatternMatched(this.onRouteMainMatched, this);
			this.nTimer = null;


			var sLocale = sap.ui.getCore().getConfiguration().getLanguage();
			this._oBundle = jQuery.sap.resources({
				url: "i18n/i18n.properties",
				locale: sLocale
			});
		},

		onRouteMainMatched: function() {
			this.getView().getModel("local").setProperty("/app/busy", true);

			DataUtil.getGeoObjects("all", this._onGeoObjectsLoaded, this._onLoadFail, this);
		},

		//
		// Control handlers
		//
		onAfterRendering: function() {

			if (this._canvas === undefined) {

				// https://archive.sap.com/discussions/message/15977803#15977803

				//				<div id="__xmlview1--appTabBar-content" class="sapMITBContent" role="tabpanel"><div id="__layout1" data-sap-ui="__layout1" class="sapUiHLayout sapUiHLayoutNoWrap"><div class="sapUiHLayoutChildWrapper"><div style="text-align: left" data-sap-ui-preserve="__html0" id="__html0"><canvas id="__viewPort" width="798px" height="375px" style="cursor: default;"></canvas></div></div><div class="sapUiHLayoutChildWrapper"><div id="__layout0" data-sap-ui="__layout0" class="sapUiSmallMargin sapUiVlt sapuiVlt"><div class="sapUiVltCell sapuiVltCell"><div id="__field0" data-sap-ui="__field0" style="width:250px;" class="sapMSF"><form id="__field0-F" class="sapMSFF"><input type="search" autocomplete="off" id="__field0-I" class="sapMSFI" placeholder="Поиск"><div id="__field0-reset" class="sapMSFB sapMSFR"></div><div id="__field0-search" class="sapMSFB sapMSFS"></div></form></div></div><div class="sapUiVltCell sapuiVltCell"><div id="__xmlview1--scrollCont" data-sap-ui="__xmlview1--scrollCont" style="width: 250px; height: 337px; overflow: auto;" class="sapMScrollCont sapMScrollContVH"><div id="__xmlview1--scrollCont-scroll" class="sapMScrollContScroll"><div id="__xmlview1--sensTree" data-sap-ui="__xmlview1--sensTree" data-sap-ui-fastnavgroup="true" style="width:100%" class="sapMList"><div id="__xmlview1--sensTree-before" tabindex="-1" class="sapMListDummyArea"></div><ul role="tree" id="__xmlview1--sensTree-listUl" tabindex="0" class="sapMListModeNone sapMListShowSeparatorsAll sapMListUl"><li id="__item3-__xmlview1--sensTree-0" data-sap-ui="__item3-__xmlview1--sensTree-0" tabindex="-1" role="treeitem" aria-level="1" aria-expanded="false" class="sapMCTI sapMLIB sapMLIB-CTX sapMLIBActionable sapMLIBFocusable sapMLIBHoverable sapMLIBShowSeparator sapMLIBTypeActive sapMTreeItemBase" style="padding-left:0rem"><span id="__item3-__xmlview1--sensTree-0-expander" data-sap-ui="__item3-__xmlview1--sensTree-0-expander" role="presentation" aria-hidden="true" data-sap-ui-icon-content="" class="sapMTreeItemBaseExpander sapUiIcon sapUiIconMirrorInRTL sapUiIconPointer" style="font-family:'SAP-icons'"></span><div class="sapMLIBContent" id="__item3-__xmlview1--sensTree-0-content"><div id="__hbox0-__xmlview1--sensTree-0" data-sap-ui="__hbox0-__xmlview1--sensTree-0" class="sapMFlexBox sapMFlexBoxAlignContentStretch sapMFlexBoxAlignItemsStart sapMFlexBoxBGTransparent sapMFlexBoxJustifyStart sapMFlexBoxWrapNoWrap sapMHBox" style="width:100%"><div id="__data3" style="order:0;flex-grow:0;flex-shrink:1;flex-basis:auto;min-height:auto;min-width:auto" class="sapMFlexBoxBGTransparent sapMFlexItem sapMFlexItemAlignAuto sapUiHiddenPlaceholder"><span id="sap-ui-invisible-__box0-__xmlview1--sensTree-0" class="sapUiHiddenPlaceholder" data-sap-ui="sap-ui-invisible-__box0-__xmlview1--sensTree-0" style="display: none;" aria-hidden="true"></span></div><div id="__data4" style="order:0;flex-grow:0;flex-shrink:1;flex-basis:auto;min-height:auto;min-width:auto" class="sapMFlexBoxBGTransparent sapMFlexItem sapMFlexItemAlignAuto"><span id="__text0-__xmlview1--sensTree-0" data-sap-ui="__text0-__xmlview1--sensTree-0" class="sapMText sapMTextBreakWord sapMTextMaxWidth sapUiSelectable" style="text-align:left">FLOOR-1A</span></div></div></div></li><li id="__item3-__xmlview1--sensTree-1" data-sap-ui="__item3-__xmlview1--sensTree-1" tabindex="-1" role="treeitem" aria-level="1" aria-expanded="false" class="sapMCTI sapMLIB sapMLIB-CTX sapMLIBActionable sapMLIBFocusable sapMLIBHoverable sapMLIBShowSeparator sapMLIBTypeActive sapMTreeItemBase" style="padding-left:0rem"><span id="__item3-__xmlview1--sensTree-1-expander" data-sap-ui="__item3-__xmlview1--sensTree-1-expander" role="presentation" aria-hidden="true" data-sap-ui-icon-content="" class="sapMTreeItemBaseExpander sapUiIcon sapUiIconMirrorInRTL sapUiIconPointer" style="font-family:'SAP-icons'"></span><div class="sapMLIBContent" id="__item3-__xmlview1--sensTree-1-content"><div id="__hbox0-__xmlview1--sensTree-1" data-sap-ui="__hbox0-__xmlview1--sensTree-1" class="sapMFlexBox sapMFlexBoxAlignContentStretch sapMFlexBoxAlignItemsStart sapMFlexBoxBGTransparent sapMFlexBoxJustifyStart sapMFlexBoxWrapNoWrap sapMHBox" style="width:100%"><div id="__data5" style="order:0;flex-grow:0;flex-shrink:1;flex-basis:auto;min-height:auto;min-width:auto" class="sapMFlexBoxBGTransparent sapMFlexItem sapMFlexItemAlignAuto sapUiHiddenPlaceholder"><span id="sap-ui-invisible-__box0-__xmlview1--sensTree-1" class="sapUiHiddenPlaceholder" data-sap-ui="sap-ui-invisible-__box0-__xmlview1--sensTree-1" style="display: none;" aria-hidden="true"></span></div><div id="__data6" style="order:0;flex-grow:0;flex-shrink:1;flex-basis:auto;min-height:auto;min-width:auto" class="sapMFlexBoxBGTransparent sapMFlexItem sapMFlexItemAlignAuto"><span id="__text0-__xmlview1--sensTree-1" data-sap-ui="__text0-__xmlview1--sensTree-1" class="sapMText sapMTextBreakWord sapMTextMaxWidth sapUiSelectable" style="text-align:left">FLOOR-1B</span></div></div></div></li><li id="__item3-__xmlview1--sensTree-2" data-sap-ui="__item3-__xmlview1--sensTree-2" tabindex="-1" role="treeitem" aria-level="1" aria-expanded="false" class="sapMCTI sapMLIB sapMLIB-CTX sapMLIBActionable sapMLIBFocusable sapMLIBHoverable sapMLIBShowSeparator sapMLIBTypeActive sapMTreeItemBase" style="padding-left:0rem"><span id="__item3-__xmlview1--sensTree-2-expander" data-sap-ui="__item3-__xmlview1--sensTree-2-expander" role="presentation" aria-hidden="true" data-sap-ui-icon-content="" class="sapMTreeItemBaseExpander sapUiIcon sapUiIconMirrorInRTL sapUiIconPointer" style="font-family:'SAP-icons'"></span><div class="sapMLIBContent" id="__item3-__xmlview1--sensTree-2-content"><div id="__hbox0-__xmlview1--sensTree-2" data-sap-ui="__hbox0-__xmlview1--sensTree-2" class="sapMFlexBox sapMFlexBoxAlignContentStretch sapMFlexBoxAlignItemsStart sapMFlexBoxBGTransparent sapMFlexBoxJustifyStart sapMFlexBoxWrapNoWrap sapMHBox" style="width:100%"><div id="__data7" style="order:0;flex-grow:0;flex-shrink:1;flex-basis:auto;min-height:auto;min-width:auto" class="sapMFlexBoxBGTransparent sapMFlexItem sapMFlexItemAlignAuto sapUiHiddenPlaceholder"><span id="sap-ui-invisible-__box0-__xmlview1--sensTree-2" class="sapUiHiddenPlaceholder" data-sap-ui="sap-ui-invisible-__box0-__xmlview1--sensTree-2" style="display: none;" aria-hidden="true"></span></div><div id="__data8" style="order:0;flex-grow:0;flex-shrink:1;flex-basis:auto;min-height:auto;min-width:auto" class="sapMFlexBoxBGTransparent sapMFlexItem sapMFlexItemAlignAuto"><span id="__text0-__xmlview1--sensTree-2" data-sap-ui="__text0-__xmlview1--sensTree-2" class="sapMText sapMTextBreakWord sapMTextMaxWidth sapUiSelectable" style="text-align:left">FLOOR-1C</span></div></div></div></li><li id="__item3-__xmlview1--sensTree-3" data-sap-ui="__item3-__xmlview1--sensTree-3" tabindex="-1" role="treeitem" aria-level="1" aria-expanded="false" class="sapMCTI sapMLIB sapMLIB-CTX sapMLIBActionable sapMLIBFocusable sapMLIBHoverable sapMLIBShowSeparator sapMLIBTypeActive sapMTreeItemBase" style="padding-left:0rem"><span id="__item3-__xmlview1--sensTree-3-expander" data-sap-ui="__item3-__xmlview1--sensTree-3-expander" role="presentation" aria-hidden="true" data-sap-ui-icon-content="" class="sapMTreeItemBaseExpander sapUiIcon sapUiIconMirrorInRTL sapUiIconPointer" style="font-family:'SAP-icons'"></span><div class="sapMLIBContent" id="__item3-__xmlview1--sensTree-3-content"><div id="__hbox0-__xmlview1--sensTree-3" data-sap-ui="__hbox0-__xmlview1--sensTree-3" class="sapMFlexBox sapMFlexBoxAlignContentStretch sapMFlexBoxAlignItemsStart sapMFlexBoxBGTransparent sapMFlexBoxJustifyStart sapMFlexBoxWrapNoWrap sapMHBox" style="width:100%"><div id="__data9" style="order:0;flex-grow:0;flex-shrink:1;flex-basis:auto;min-height:auto;min-width:auto" class="sapMFlexBoxBGTransparent sapMFlexItem sapMFlexItemAlignAuto sapUiHiddenPlaceholder"><span id="sap-ui-invisible-__box0-__xmlview1--sensTree-3" class="sapUiHiddenPlaceholder" data-sap-ui="sap-ui-invisible-__box0-__xmlview1--sensTree-3" style="display: none;" aria-hidden="true"></span></div><div id="__data10" style="order:0;flex-grow:0;flex-shrink:1;flex-basis:auto;min-height:auto;min-width:auto" class="sapMFlexBoxBGTransparent sapMFlexItem sapMFlexItemAlignAuto"><span id="__text0-__xmlview1--sensTree-3" data-sap-ui="__text0-__xmlview1--sensTree-3" class="sapMText sapMTextBreakWord sapMTextMaxWidth sapUiSelectable" style="text-align:left">FLOOR-2A</span></div></div></div></li><li id="__item3-__xmlview1--sensTree-4" data-sap-ui="__item3-__xmlview1--sensTree-4" tabindex="-1" role="treeitem" aria-level="1" aria-expanded="false" class="sapMCTI sapMLIB sapMLIB-CTX sapMLIBActionable sapMLIBFocusable sapMLIBHoverable sapMLIBShowSeparator sapMLIBTypeActive sapMTreeItemBase" style="padding-left:0rem"><span id="__item3-__xmlview1--sensTree-4-expander" data-sap-ui="__item3-__xmlview1--sensTree-4-expander" role="presentation" aria-hidden="true" data-sap-ui-icon-content="" class="sapMTreeItemBaseExpander sapUiIcon sapUiIconMirrorInRTL sapUiIconPointer" style="font-family:'SAP-icons'"></span><div class="sapMLIBContent" id="__item3-__xmlview1--sensTree-4-content"><div id="__hbox0-__xmlview1--sensTree-4" data-sap-ui="__hbox0-__xmlview1--sensTree-4" class="sapMFlexBox sapMFlexBoxAlignContentStretch sapMFlexBoxAlignItemsStart sapMFlexBoxBGTransparent sapMFlexBoxJustifyStart sapMFlexBoxWrapNoWrap sapMHBox" style="width:100%"><div id="__data11" style="order:0;flex-grow:0;flex-shrink:1;flex-basis:auto;min-height:auto;min-width:auto" class="sapMFlexBoxBGTransparent sapMFlexItem sapMFlexItemAlignAuto sapUiHiddenPlaceholder"><span id="sap-ui-invisible-__box0-__xmlview1--sensTree-4" class="sapUiHiddenPlaceholder" data-sap-ui="sap-ui-invisible-__box0-__xmlview1--sensTree-4" style="display: none;" aria-hidden="true"></span></div><div id="__data12" style="order:0;flex-grow:0;flex-shrink:1;flex-basis:auto;min-height:auto;min-width:auto" class="sapMFlexBoxBGTransparent sapMFlexItem sapMFlexItemAlignAuto"><span id="__text0-__xmlview1--sensTree-4" data-sap-ui="__text0-__xmlview1--sensTree-4" class="sapMText sapMTextBreakWord sapMTextMaxWidth sapUiSelectable" style="text-align:left">FLOOR-2B</span></div></div></div></li><li id="__item3-__xmlview1--sensTree-5" data-sap-ui="__item3-__xmlview1--sensTree-5" tabindex="-1" role="treeitem" aria-level="1" aria-expanded="false" class="sapMCTI sapMLIB sapMLIB-CTX sapMLIBActionable sapMLIBFocusable sapMLIBHoverable sapMLIBShowSeparator sapMLIBTypeActive sapMTreeItemBase" style="padding-left:0rem"><span id="__item3-__xmlview1--sensTree-5-expander" data-sap-ui="__item3-__xmlview1--sensTree-5-expander" role="presentation" aria-hidden="true" data-sap-ui-icon-content="" class="sapMTreeItemBaseExpander sapUiIcon sapUiIconMirrorInRTL sapUiIconPointer" style="font-family:'SAP-icons'"></span><div class="sapMLIBContent" id="__item3-__xmlview1--sensTree-5-content"><div id="__hbox0-__xmlview1--sensTree-5" data-sap-ui="__hbox0-__xmlview1--sensTree-5" class="sapMFlexBox sapMFlexBoxAlignContentStretch sapMFlexBoxAlignItemsStart sapMFlexBoxBGTransparent sapMFlexBoxJustifyStart sapMFlexBoxWrapNoWrap sapMHBox" style="width:100%"><div id="__data13" style="order:0;flex-grow:0;flex-shrink:1;flex-basis:auto;min-height:auto;min-width:auto" class="sapMFlexBoxBGTransparent sapMFlexItem sapMFlexItemAlignAuto sapUiHiddenPlaceholder"><span id="sap-ui-invisible-__box0-__xmlview1--sensTree-5" class="sapUiHiddenPlaceholder" data-sap-ui="sap-ui-invisible-__box0-__xmlview1--sensTree-5" style="display: none;" aria-hidden="true"></span></div><div id="__data14" style="order:0;flex-grow:0;flex-shrink:1;flex-basis:auto;min-height:auto;min-width:auto" class="sapMFlexBoxBGTransparent sapMFlexItem sapMFlexItemAlignAuto"><span id="__text0-__xmlview1--sensTree-5" data-sap-ui="__text0-__xmlview1--sensTree-5" class="sapMText sapMTextBreakWord sapMTextMaxWidth sapUiSelectable" style="text-align:left">FLOOR-2C</span></div></div></div></li><li id="__item3-__xmlview1--sensTree-6" data-sap-ui="__item3-__xmlview1--sensTree-6" tabindex="-1" role="treeitem" aria-level="1" aria-expanded="false" class="sapMCTI sapMLIB sapMLIB-CTX sapMLIBActionable sapMLIBFocusable sapMLIBHoverable sapMLIBShowSeparator sapMLIBTypeActive sapMTreeItemBase" style="padding-left:0rem"><span id="__item3-__xmlview1--sensTree-6-expander" data-sap-ui="__item3-__xmlview1--sensTree-6-expander" role="presentation" aria-hidden="true" data-sap-ui-icon-content="" class="sapMTreeItemBaseExpander sapUiIcon sapUiIconMirrorInRTL sapUiIconPointer" style="font-family:'SAP-icons'"></span><div class="sapMLIBContent" id="__item3-__xmlview1--sensTree-6-content"><div id="__hbox0-__xmlview1--sensTree-6" data-sap-ui="__hbox0-__xmlview1--sensTree-6" class="sapMFlexBox sapMFlexBoxAlignContentStretch sapMFlexBoxAlignItemsStart sapMFlexBoxBGTransparent sapMFlexBoxJustifyStart sapMFlexBoxWrapNoWrap sapMHBox" style="width:100%"><div id="__data15" style="order:0;flex-grow:0;flex-shrink:1;flex-basis:auto;min-height:auto;min-width:auto" class="sapMFlexBoxBGTransparent sapMFlexItem sapMFlexItemAlignAuto sapUiHiddenPlaceholder"><span id="sap-ui-invisible-__box0-__xmlview1--sensTree-6" class="sapUiHiddenPlaceholder" data-sap-ui="sap-ui-invisible-__box0-__xmlview1--sensTree-6" style="display: none;" aria-hidden="true"></span></div><div id="__data16" style="order:0;flex-grow:0;flex-shrink:1;flex-basis:auto;min-height:auto;min-width:auto" class="sapMFlexBoxBGTransparent sapMFlexItem sapMFlexItemAlignAuto"><span id="__text0-__xmlview1--sensTree-6" data-sap-ui="__text0-__xmlview1--sensTree-6" class="sapMText sapMTextBreakWord sapMTextMaxWidth sapUiSelectable" style="text-align:left">FLOOR-3A</span></div></div></div></li><li id="__item3-__xmlview1--sensTree-7" data-sap-ui="__item3-__xmlview1--sensTree-7" tabindex="-1" role="treeitem" aria-level="1" aria-expanded="false" class="sapMCTI sapMLIB sapMLIB-CTX sapMLIBActionable sapMLIBFocusable sapMLIBHoverable sapMLIBShowSeparator sapMLIBTypeActive sapMTreeItemBase" style="padding-left:0rem"><span id="__item3-__xmlview1--sensTree-7-expander" data-sap-ui="__item3-__xmlview1--sensTree-7-expander" role="presentation" aria-hidden="true" data-sap-ui-icon-content="" class="sapMTreeItemBaseExpander sapUiIcon sapUiIconMirrorInRTL sapUiIconPointer" style="font-family:'SAP-icons'"></span><div class="sapMLIBContent" id="__item3-__xmlview1--sensTree-7-content"><div id="__hbox0-__xmlview1--sensTree-7" data-sap-ui="__hbox0-__xmlview1--sensTree-7" class="sapMFlexBox sapMFlexBoxAlignContentStretch sapMFlexBoxAlignItemsStart sapMFlexBoxBGTransparent sapMFlexBoxJustifyStart sapMFlexBoxWrapNoWrap sapMHBox" style="width:100%"><div id="__data17" style="order:0;flex-grow:0;flex-shrink:1;flex-basis:auto;min-height:auto;min-width:auto" class="sapMFlexBoxBGTransparent sapMFlexItem sapMFlexItemAlignAuto sapUiHiddenPlaceholder"><span id="sap-ui-invisible-__box0-__xmlview1--sensTree-7" class="sapUiHiddenPlaceholder" data-sap-ui="sap-ui-invisible-__box0-__xmlview1--sensTree-7" style="display: none;" aria-hidden="true"></span></div><div id="__data18" style="order:0;flex-grow:0;flex-shrink:1;flex-basis:auto;min-height:auto;min-width:auto" class="sapMFlexBoxBGTransparent sapMFlexItem sapMFlexItemAlignAuto"><span id="__text0-__xmlview1--sensTree-7" data-sap-ui="__text0-__xmlview1--sensTree-7" class="sapMText sapMTextBreakWord sapMTextMaxWidth sapUiSelectable" style="text-align:left">FLOOR-3B</span></div></div></div></li><li id="__item3-__xmlview1--sensTree-8" data-sap-ui="__item3-__xmlview1--sensTree-8" tabindex="-1" role="treeitem" aria-level="1" aria-expanded="false" class="sapMCTI sapMLIB sapMLIB-CTX sapMLIBActionable sapMLIBFocusable sapMLIBHoverable sapMLIBShowSeparator sapMLIBTypeActive sapMTreeItemBase" style="padding-left:0rem"><span id="__item3-__xmlview1--sensTree-8-expander" data-sap-ui="__item3-__xmlview1--sensTree-8-expander" role="presentation" aria-hidden="true" data-sap-ui-icon-content="" class="sapMTreeItemBaseExpander sapUiIcon sapUiIconMirrorInRTL sapUiIconPointer" style="font-family:'SAP-icons'"></span><div class="sapMLIBContent" id="__item3-__xmlview1--sensTree-8-content"><div id="__hbox0-__xmlview1--sensTree-8" data-sap-ui="__hbox0-__xmlview1--sensTree-8" class="sapMFlexBox sapMFlexBoxAlignContentStretch sapMFlexBoxAlignItemsStart sapMFlexBoxBGTransparent sapMFlexBoxJustifyStart sapMFlexBoxWrapNoWrap sapMHBox" style="width:100%"><div id="__data19" style="order:0;flex-grow:0;flex-shrink:1;flex-basis:auto;min-height:auto;min-width:auto" class="sapMFlexBoxBGTransparent sapMFlexItem sapMFlexItemAlignAuto sapUiHiddenPlaceholder"><span id="sap-ui-invisible-__box0-__xmlview1--sensTree-8" class="sapUiHiddenPlaceholder" data-sap-ui="sap-ui-invisible-__box0-__xmlview1--sensTree-8" style="display: none;" aria-hidden="true"></span></div><div id="__data20" style="order:0;flex-grow:0;flex-shrink:1;flex-basis:auto;min-height:auto;min-width:auto" class="sapMFlexBoxBGTransparent sapMFlexItem sapMFlexItemAlignAuto"><span id="__text0-__xmlview1--sensTree-8" data-sap-ui="__text0-__xmlview1--sensTree-8" class="sapMText sapMTextBreakWord sapMTextMaxWidth sapUiSelectable" style="text-align:left">FLOOR-3C</span></div></div></div></li><li id="__item3-__xmlview1--sensTree-9" data-sap-ui="__item3-__xmlview1--sensTree-9" tabindex="-1" role="treeitem" aria-level="1" aria-expanded="false" class="sapMCTI sapMLIB sapMLIB-CTX sapMLIBActionable sapMLIBFocusable sapMLIBHoverable sapMLIBShowSeparator sapMLIBTypeActive sapMTreeItemBase" style="padding-left:0rem"><span id="__item3-__xmlview1--sensTree-9-expander" data-sap-ui="__item3-__xmlview1--sensTree-9-expander" role="presentation" aria-hidden="true" data-sap-ui-icon-content="" class="sapMTreeItemBaseExpander sapUiIcon sapUiIconMirrorInRTL sapUiIconPointer" style="font-family:'SAP-icons'"></span><div class="sapMLIBContent" id="__item3-__xmlview1--sensTree-9-content"><div id="__hbox0-__xmlview1--sensTree-9" data-sap-ui="__hbox0-__xmlview1--sensTree-9" class="sapMFlexBox sapMFlexBoxAlignContentStretch sapMFlexBoxAlignItemsStart sapMFlexBoxBGTransparent sapMFlexBoxJustifyStart sapMFlexBoxWrapNoWrap sapMHBox" style="width:100%"><div id="__data21" style="order:0;flex-grow:0;flex-shrink:1;flex-basis:auto;min-height:auto;min-width:auto" class="sapMFlexBoxBGTransparent sapMFlexItem sapMFlexItemAlignAuto sapUiHiddenPlaceholder"><span id="sap-ui-invisible-__box0-__xmlview1--sensTree-9" class="sapUiHiddenPlaceholder" data-sap-ui="sap-ui-invisible-__box0-__xmlview1--sensTree-9" style="display: none;" aria-hidden="true"></span></div><div id="__data22" style="order:0;flex-grow:0;flex-shrink:1;flex-basis:auto;min-height:auto;min-width:auto" class="sapMFlexBoxBGTransparent sapMFlexItem sapMFlexItemAlignAuto"><span id="__text0-__xmlview1--sensTree-9" data-sap-ui="__text0-__xmlview1--sensTree-9" class="sapMText sapMTextBreakWord sapMTextMaxWidth sapUiSelectable" style="text-align:left">FLOOR-4A</span></div></div></div></li><li id="__item3-__xmlview1--sensTree-10" data-sap-ui="__item3-__xmlview1--sensTree-10" tabindex="-1" role="treeitem" aria-level="1" aria-expanded="false" class="sapMCTI sapMLIB sapMLIB-CTX sapMLIBActionable sapMLIBFocusable sapMLIBHoverable sapMLIBShowSeparator sapMLIBTypeActive sapMTreeItemBase" style="padding-left:0rem"><span id="__item3-__xmlview1--sensTree-10-expander" data-sap-ui="__item3-__xmlview1--sensTree-10-expander" role="presentation" aria-hidden="true" data-sap-ui-icon-content="" class="sapMTreeItemBaseExpander sapUiIcon sapUiIconMirrorInRTL sapUiIconPointer" style="font-family:'SAP-icons'"></span><div class="sapMLIBContent" id="__item3-__xmlview1--sensTree-10-content"><div id="__hbox0-__xmlview1--sensTree-10" data-sap-ui="__hbox0-__xmlview1--sensTree-10" class="sapMFlexBox sapMFlexBoxAlignContentStretch sapMFlexBoxAlignItemsStart sapMFlexBoxBGTransparent sapMFlexBoxJustifyStart sapMFlexBoxWrapNoWrap sapMHBox" style="width:100%"><div id="__data23" style="order:0;flex-grow:0;flex-shrink:1;flex-basis:auto;min-height:auto;min-width:auto" class="sapMFlexBoxBGTransparent sapMFlexItem sapMFlexItemAlignAuto sapUiHiddenPlaceholder"><span id="sap-ui-invisible-__box0-__xmlview1--sensTree-10" class="sapUiHiddenPlaceholder" data-sap-ui="sap-ui-invisible-__box0-__xmlview1--sensTree-10" style="display: none;" aria-hidden="true"></span></div><div id="__data24" style="order:0;flex-grow:0;flex-shrink:1;flex-basis:auto;min-height:auto;min-width:auto" class="sapMFlexBoxBGTransparent sapMFlexItem sapMFlexItemAlignAuto"><span id="__text0-__xmlview1--sensTree-10" data-sap-ui="__text0-__xmlview1--sensTree-10" class="sapMText sapMTextBreakWord sapMTextMaxWidth sapUiSelectable" style="text-align:left">FLOOR-4B</span></div></div></div></li><li id="__item3-__xmlview1--sensTree-11" data-sap-ui="__item3-__xmlview1--sensTree-11" tabindex="-1" role="treeitem" aria-level="1" aria-expanded="false" class="sapMCTI sapMLIB sapMLIB-CTX sapMLIBActionable sapMLIBFocusable sapMLIBHoverable sapMLIBShowSeparator sapMLIBTypeActive sapMTreeItemBase" style="padding-left:0rem"><span id="__item3-__xmlview1--sensTree-11-expander" data-sap-ui="__item3-__xmlview1--sensTree-11-expander" role="presentation" aria-hidden="true" data-sap-ui-icon-content="" class="sapMTreeItemBaseExpander sapUiIcon sapUiIconMirrorInRTL sapUiIconPointer" style="font-family:'SAP-icons'"></span><div class="sapMLIBContent" id="__item3-__xmlview1--sensTree-11-content"><div id="__hbox0-__xmlview1--sensTree-11" data-sap-ui="__hbox0-__xmlview1--sensTree-11" class="sapMFlexBox sapMFlexBoxAlignContentStretch sapMFlexBoxAlignItemsStart sapMFlexBoxBGTransparent sapMFlexBoxJustifyStart sapMFlexBoxWrapNoWrap sapMHBox" style="width:100%"><div id="__data25" style="order:0;flex-grow:0;flex-shrink:1;flex-basis:auto;min-height:auto;min-width:auto" class="sapMFlexBoxBGTransparent sapMFlexItem sapMFlexItemAlignAuto sapUiHiddenPlaceholder"><span id="sap-ui-invisible-__box0-__xmlview1--sensTree-11" class="sapUiHiddenPlaceholder" data-sap-ui="sap-ui-invisible-__box0-__xmlview1--sensTree-11" style="display: none;" aria-hidden="true"></span></div><div id="__data26" style="order:0;flex-grow:0;flex-shrink:1;flex-basis:auto;min-height:auto;min-width:auto" class="sapMFlexBoxBGTransparent sapMFlexItem sapMFlexItemAlignAuto"><span id="__text0-__xmlview1--sensTree-11" data-sap-ui="__text0-__xmlview1--sensTree-11" class="sapMText sapMTextBreakWord sapMTextMaxWidth sapUiSelectable" style="text-align:left">FLOOR-4C</span></div></div></div></li><li id="__item3-__xmlview1--sensTree-12" data-sap-ui="__item3-__xmlview1--sensTree-12" tabindex="-1" role="treeitem" aria-level="1" aria-expanded="false" class="sapMCTI sapMLIB sapMLIB-CTX sapMLIBActionable sapMLIBFocusable sapMLIBHoverable sapMLIBShowSeparator sapMLIBTypeActive sapMTreeItemBase" style="padding-left:0rem"><span id="__item3-__xmlview1--sensTree-12-expander" data-sap-ui="__item3-__xmlview1--sensTree-12-expander" role="presentation" aria-hidden="true" data-sap-ui-icon-content="" class="sapMTreeItemBaseExpander sapUiIcon sapUiIconMirrorInRTL sapUiIconPointer" style="font-family:'SAP-icons'"></span><div class="sapMLIBContent" id="__item3-__xmlview1--sensTree-12-content"><div id="__hbox0-__xmlview1--sensTree-12" data-sap-ui="__hbox0-__xmlview1--sensTree-12" class="sapMFlexBox sapMFlexBoxAlignContentStretch sapMFlexBoxAlignItemsStart sapMFlexBoxBGTransparent sapMFlexBoxJustifyStart sapMFlexBoxWrapNoWrap sapMHBox" style="width:100%"><div id="__data27" style="order:0;flex-grow:0;flex-shrink:1;flex-basis:auto;min-height:auto;min-width:auto" class="sapMFlexBoxBGTransparent sapMFlexItem sapMFlexItemAlignAuto sapUiHiddenPlaceholder"><span id="sap-ui-invisible-__box0-__xmlview1--sensTree-12" class="sapUiHiddenPlaceholder" data-sap-ui="sap-ui-invisible-__box0-__xmlview1--sensTree-12" style="display: none;" aria-hidden="true"></span></div><div id="__data28" style="order:0;flex-grow:0;flex-shrink:1;flex-basis:auto;min-height:auto;min-width:auto" class="sapMFlexBoxBGTransparent sapMFlexItem sapMFlexItemAlignAuto"><span id="__text0-__xmlview1--sensTree-12" data-sap-ui="__text0-__xmlview1--sensTree-12" class="sapMText sapMTextBreakWord sapMTextMaxWidth sapUiSelectable" style="text-align:left">FLOOR-5A</span></div></div></div></li><li id="__item3-__xmlview1--sensTree-13" data-sap-ui="__item3-__xmlview1--sensTree-13" tabindex="-1" role="treeitem" aria-level="1" aria-expanded="false" class="sapMCTI sapMLIB sapMLIB-CTX sapMLIBActionable sapMLIBFocusable sapMLIBHoverable sapMLIBShowSeparator sapMLIBTypeActive sapMTreeItemBase" style="padding-left:0rem"><span id="__item3-__xmlview1--sensTree-13-expander" data-sap-ui="__item3-__xmlview1--sensTree-13-expander" role="presentation" aria-hidden="true" data-sap-ui-icon-content="" class="sapMTreeItemBaseExpander sapUiIcon sapUiIconMirrorInRTL sapUiIconPointer" style="font-family:'SAP-icons'"></span><div class="sapMLIBContent" id="__item3-__xmlview1--sensTree-13-content"><div id="__hbox0-__xmlview1--sensTree-13" data-sap-ui="__hbox0-__xmlview1--sensTree-13" class="sapMFlexBox sapMFlexBoxAlignContentStretch sapMFlexBoxAlignItemsStart sapMFlexBoxBGTransparent sapMFlexBoxJustifyStart sapMFlexBoxWrapNoWrap sapMHBox" style="width:100%"><div id="__data29" style="order:0;flex-grow:0;flex-shrink:1;flex-basis:auto;min-height:auto;min-width:auto" class="sapMFlexBoxBGTransparent sapMFlexItem sapMFlexItemAlignAuto sapUiHiddenPlaceholder"><span id="sap-ui-invisible-__box0-__xmlview1--sensTree-13" class="sapUiHiddenPlaceholder" data-sap-ui="sap-ui-invisible-__box0-__xmlview1--sensTree-13" style="display: none;" aria-hidden="true"></span></div><div id="__data30" style="order:0;flex-grow:0;flex-shrink:1;flex-basis:auto;min-height:auto;min-width:auto" class="sapMFlexBoxBGTransparent sapMFlexItem sapMFlexItemAlignAuto"><span id="__text0-__xmlview1--sensTree-13" data-sap-ui="__text0-__xmlview1--sensTree-13" class="sapMText sapMTextBreakWord sapMTextMaxWidth sapUiSelectable" style="text-align:left">FLOOR-5B</span></div></div></div></li><li id="__item3-__xmlview1--sensTree-14" data-sap-ui="__item3-__xmlview1--sensTree-14" tabindex="-1" role="treeitem" aria-level="1" aria-expanded="false" class="sapMCTI sapMLIB sapMLIB-CTX sapMLIBActionable sapMLIBFocusable sapMLIBHoverable sapMLIBShowSeparator sapMLIBTypeActive sapMTreeItemBase" style="padding-left:0rem"><span id="__item3-__xmlview1--sensTree-14-expander" data-sap-ui="__item3-__xmlview1--sensTree-14-expander" role="presentation" aria-hidden="true" data-sap-ui-icon-content="" class="sapMTreeItemBaseExpander sapUiIcon sapUiIconMirrorInRTL sapUiIconPointer" style="font-family:'SAP-icons'"></span><div class="sapMLIBContent" id="__item3-__xmlview1--sensTree-14-content"><div id="__hbox0-__xmlview1--sensTree-14" data-sap-ui="__hbox0-__xmlview1--sensTree-14" class="sapMFlexBox sapMFlexBoxAlignContentStretch sapMFlexBoxAlignItemsStart sapMFlexBoxBGTransparent sapMFlexBoxJustifyStart sapMFlexBoxWrapNoWrap sapMHBox" style="width:100%"><div id="__data31" style="order:0;flex-grow:0;flex-shrink:1;flex-basis:auto;min-height:auto;min-width:auto" class="sapMFlexBoxBGTransparent sapMFlexItem sapMFlexItemAlignAuto sapUiHiddenPlaceholder"><span id="sap-ui-invisible-__box0-__xmlview1--sensTree-14" class="sapUiHiddenPlaceholder" data-sap-ui="sap-ui-invisible-__box0-__xmlview1--sensTree-14" style="display: none;" aria-hidden="true"></span></div><div id="__data32" style="order:0;flex-grow:0;flex-shrink:1;flex-basis:auto;min-height:auto;min-width:auto" class="sapMFlexBoxBGTransparent sapMFlexItem sapMFlexItemAlignAuto"><span id="__text0-__xmlview1--sensTree-14" data-sap-ui="__text0-__xmlview1--sensTree-14" class="sapMText sapMTextBreakWord sapMTextMaxWidth sapUiSelectable" style="text-align:left">FLOOR-5C</span></div></div></div></li></ul><div id="__xmlview1--sensTree-after" tabindex="0" class="sapMListDummyArea"></div></div></div></div></div></div></div></div><div id="__hbox1" data-sap-ui="__hbox1" class="sapMFlexBox sapMFlexBoxAlignContentStretch sapMFlexBoxAlignItemsStretch sapMFlexBoxBGTransparent sapMFlexBoxJustifyStart sapMFlexBoxWrapNoWrap sapMHBox"><div id="__data2" style="order:0;flex-grow:0;flex-shrink:1;flex-basis:auto;min-height:auto;min-width:auto" class="sapMFlexBoxBGTransparent sapMFlexItem sapMFlexItemAlignAuto"><button id="__button0" data-sap-ui="__button0" aria-disabled="true" disabled="disabled" class="sapMBtn sapMBtnBase sapMBtnDisabled"><span id="__button0-inner" class="sapMBtnDefault sapMBtnInner sapMBtnText"><span class="sapMBtnContent" id="__button0-content"><bdi>Найти путь</bdi></span></span></button></div></div></div>

				var vpDims = this._calcViewportSize(95);

				this._canvas = document.getElementById("__viewPort");
				this._canvas.setAttribute("width", vpDims.width.toString() + "px");
				this._canvas.setAttribute("height", vpDims.height.toString() + "px");

			}

			// allign tree's scroll container
			this.getView().byId("scrollCont").setHeight(Math.floor(vpDims.height * 0.90) + "px");
		},
		onToProps: function(oEvent) {
			var oTabBar = this.getView().byId("appTabBar");
			oTabBar.setSelectedKey("tabInfo");
			oTabBar.fireSelect({
				key: "tabInfo"
			});
		},
		onTabBarSelect: function(oEvent) {
			var oTabBar = this.getView().byId("appTabBar");
			var oLocalModel = this.getView().getModel("local");

			if (oTabBar.getSelectedKey() === "tabInfo") {
				var sNodeId = oLocalModel.getProperty("/app/pressedObj");
				//ruslan				
				this._onTimeInterval(sNodeId, oLocalModel);
				this.nTimer = setInterval(this._onTimeInterval.bind(this), 2000, sNodeId, oLocalModel);
			} else {
				clearInterval(this.nTimer);
			}
		},

		onTreeItemPress: function(oEvent) {
			var a = oEvent.getSource().getAggregation("content")[0];
			var b = a.getAggregation("items")[0];

			var nodeID = b.getProperty("text");

			/// do you 3D visualisation
			var oModel = this.getView().getModel("local");
			var selectedObj = oModel.getProperty("/app/selectedObj");
			twin3d.selectFromUI(selectedObj, nodeID);

			oModel.setProperty("/app/pressedObj", nodeID);

		},

		onSearchSens: function(oEvent) {
			const query = oEvent.getParameter("newValue").trim();
			this.byId("sensTree").getBinding("items").filter(query ? new Filter({
				path: "objectName",
				operator: "Contains",
				value1: query,
			}) : null);
		},

		onTreeChange: function(oEvent) {
			if (oEvent.getParameter("reason") == "filter") {
				const model = this.getView().getModel("local");
				const query = model.getProperty("/app/query");
				this.byId("sensTree").expandToLevel(query ? 99 : 0);
			}
		},

		onRoomSelected: function(oEvent) {
			var oControl = oEvent.getSource();
			var isSelected = oEvent.getParameter("selected");
			var sObjectID = oControl.getProperty("text")



			var oModel = this.getView().getModel("local");
			var selectedObj = oModel.getProperty("/app/selectedObj");
			//ruslan
			oModel.setProperty("/app/pressedObj", sObjectID);

			var maxFind = 0;

			function updateSelections(oObjects) {

				for (var a = 0; a < oObjects.length; a++) {

					if (oObjects[a].objectSel === true) {
						if (oObjects[a].objectName === selectedObj[0]) continue;
						if (oObjects[a].objectName === selectedObj[1]) continue;

						oObjects[a].objectSel = false;
						maxFind++;
					}


					if (maxFind > 1) return;

					if (oObjects[a].node) updateSelections(oObjects[a].node);
				}

			}


			if (isSelected) {
				if (selectedObj[0] === null && selectedObj[1] === null) selectedObj[0] = sObjectID;
				else
				if (selectedObj[0] !== null && selectedObj[1] === null) selectedObj[1] = sObjectID;
				else {
					selectedObj[0] = sObjectID;
					selectedObj[1] = null;
				}


			} else {
				if (selectedObj[0] === sObjectID) {
					selectedObj[0] = selectedObj[1]
					selectedObj[1] = null;
				} else
				if (selectedObj[1] === sObjectID) {
					selectedObj[1] = null;
				}
			}

			twin3d.selectFromUI(selectedObj, sObjectID);

			updateSelections(oModel.getProperty("/objects"));

			if (selectedObj[0] && selectedObj[1]) {
				oModel.setProperty("/app/isRouteFindPossible", true);
			} else {
				oModel.setProperty("/app/isRouteFindPossible", false);
			}
		},

		onFindRoute: function(oEvent) {
			var oModel = this.getView().getModel("local");
			var selectedObj = oModel.getProperty("/app/selectedObj");

			// массив из 2х objectID
			DataUtil.getPath(selectedObj[0], selectedObj[1], this._onPathLoaded, this._onLoadFail, this);
		},

		onPressBtnSend: function(oEvent) {
			var oModel = this.getView().getModel("local");
			var feedback = oModel.getProperty("/feedback");
			//here			
			if (feedback.fio === "" || feedback.text === "") {
				MessageToast.show(this._oBundle.getText("TX_FILLFIELDS"));
				return;
			}

			DataUtil.postFeedback(feedback.fio, feedback.text, this._onFeedbackPosted, this._onLoadFail, this)
		},

		//
		// private methods
		//
		_createLocalModel: function() {
			return new JSONModel({
				app: {
					busy: false,
					query: "",
					selectedObj: [null, null],
					pressedObj: null,
					isRouteFindPossible: false
				},
				hdr: {
					fio: "Иванов Иван Иванович",
					position: "ведущий инженер",
					phone: "+375 55 265256",
					email: "stuff@sap.com"
				},
				objects: [],
				senCurr: {
					image: "https://www.alphaomega-electronics.com/1304-large_default/wet-2-sensor-para-contenido-de-agua-ec-y-temperatura.jpg",
					name: "",
					devId: "",
					devStatus: "",
					devMsg: "",
					data1Name: "",
					data2Name: "",
					data3Name: "",
					data1: [],
					data2: [],
					data3: []
				},
				feedback: {
					fio: "",
					text: ""
				}
			});
		},

		_onLoadFail: function(oError, oListener) {

			oListener.getView().getModel("local").setProperty("/app/busy", false);
		},

		_onPathLoaded: function(oData, oListener) {
			twin3d.showPath(oData);
		},

		_onGeoObjectsLoaded: function(oData, oListener) {

			// Post LOADED geoJSON to 3d renderer HERE !!!!
			var canvas = document.getElementById("__viewPort");
			var vpWidth = parseInt(canvas.getAttribute("width").replace("px", "")),
				vpHeight = parseInt(canvas.getAttribute("height").replace("px", ""));

			twin3d = new Twin3d(oData, '__viewPort', vpWidth, vpHeight, [27.694762, 53.927052]);

			oListener._parseFloors(oData, oListener);
		},

		_parseFloors: function(oGeoData, oListener) {

			var oObjects = oListener.getView().getModel("local").getProperty("/objects");

			for (var idx = 0; idx < oGeoData.length; idx++) {
				if (oGeoData[idx].nodeID.startsWith("FLOOR")) {
					oObjects.push({
						objectName: oGeoData[idx].nodeID,
						objectSel: false,
						isVisible: false,
						floor: oGeoData[idx].floor,
						levelID: oGeoData[idx].levelID
					});
				}
			}

			oObjects = oObjects.sort(function(a, b) {
				if (a.objectName[6] > b.objectName[6]) return +1;
				else
				if (a.objectName[6] < b.objectName[6]) return -1;
				else
				if (a.objectName[6] == b.objectName[6]) {
					if (a.objectName[7] > b.objectName[7]) return +1;
					else return -1;
				}
				return 0;

			});

			var sensTree = oListener.getView().byId("sensTree");
			sensTree.getBinding("items").refresh();

			oListener._parseRooms(oGeoData, oListener);
		},

		_parseRooms: function(oGeoData, oListener) {
			var oFloors = oListener.getView().getModel("local").getProperty("/objects");

			for (var idx = 0; idx < oFloors.length; idx++) {
				var sArea = oFloors[idx].objectName.slice(6);

				for (var idx2 = 0; idx2 < oGeoData.length; idx2++) {
					if ((oGeoData[idx2].nodeID.indexOf(sArea) != -1) &&
						((oGeoData[idx2].nodeID.startsWith("ROOM")) || (oGeoData[idx2].nodeID.startsWith("HALL")))) {
						if (!oFloors[idx].node) oFloors[idx].node = [];
						oFloors[idx].node.push({
							objectName: oGeoData[idx2].nodeID,
							objectSel: false,
							isVisible: true,
							floor: oGeoData[idx2].floor,
							levelID: oGeoData[idx2].levelID
						});
					}
				}
			}

			var sensTree = oListener.getView().byId("sensTree");
			sensTree.getBinding("items").refresh();

			this._parseRoomObjects(oGeoData, oListener);
		},

		_parseRoomObjects: function(oGeoData, oListener) {
			var oFloors = oListener.getView().getModel("local").getProperty("/objects");

			for (var idx = 0; idx < oFloors.length; idx++) {

				if (!oFloors[idx].node) continue;

				var oRooms = oFloors[idx].node;
				var sFloorId = oFloors[idx].objectName.slice(6);

				for (var idx2 = 0; idx2 < oRooms.length; idx2++) {
					var iRoomIdStart = oRooms[idx2].objectName.indexOf(sFloorId);

					if (iRoomIdStart == -1) continue;

					var sRoomId = oRooms[idx2].objectName.slice(iRoomIdStart - 1);

					for (var idx3 = 0; idx3 < oGeoData.length; idx3++) {
						//ruslan
						//						if ((oGeoData[idx3].nodeID.indexOf(sRoomId) !== -1) &&
						// ruslan 								
						//								(!oGeoData[idx3].nodeID.startsWith("ROOM") && !oGeoData[idx3].nodeID.startsWith("HALL"))) {
						if (
							(
								(oGeoData[idx3].nodeID.endsWith(sRoomId + "-1") && oRooms[idx2].objectName.startsWith("HALL")) ||
								((oGeoData[idx3].nodeID.indexOf(sRoomId) !== -1) && oRooms[idx2].objectName.startsWith("ROOM"))

							) &&
							(oGeoData[idx3].nodeID.startsWith("BRD"))) {
							if (!oRooms[idx2].node) oRooms[idx2].node = [];
							oRooms[idx2].node.push({
								objectName: oGeoData[idx3].nodeID,
								objectSel: false,
								isVisible: false,
								room: sRoomId,
								levelID: oGeoData[idx3].levelID
							});
						}
					}

				}

			}

			var sensTree = oListener.getView().byId("sensTree");
			sensTree.getBinding("items").refresh();

			oListener.getView().getModel("local").setProperty("/app/busy", false);
		},


		_findTreeItemByNodeId: function(sNodeId, bSelect) {
			var oTree = this.getView().byId("sensTree");
			oTree.expandToLevel(10);
			var oItems = oTree.getItems()

			for (var idx = 0; idx < oItems.length; idx++) {
				var oItem = oItems[idx];
				var a = oItem.getAggregation("content")[0];
				var b = a.getAggregation("items")[0];

				var nodeId = b.getProperty("text");
				if (nodeId === sNodeId) {
					if (bSelect) {
						oTree.setSelectedItem(oItem, true);
					}
					return oItem;
				}
			}

			return null;
		},

		_onFeedbackPosted: function(oData, oListener) {
			var oModel = oListener.getView().getModel("local");
			var feedback = oModel.getProperty("/feedback");

			MessageToast.show(oListener._oBundle.getText("TX_THANKS"));

			feedback.fio = feedback.text = "";
			oModel.refresh();
		},

		_onTimeInterval: function(sNodeId, oLocal) {
			//ruslan
			let mesh = twin3d.getSelected().selectedBlock;
			if (mesh) {
				sNodeId = mesh.properties.ID;
			} else {
				mesh = twin3d.getSelected().selectedRoom;
				if (mesh)
					sNodeId = mesh.properties.ID;
			}
			//sNodeId = "IOT-TEMP-HALL-1B-1";
			var oSenorData = twin3d.iotData;
			var oSenCurr = oLocal.getProperty("/senCurr");
			if (oSenCurr.devId != sNodeId) {
				oSenCurr.devId = sNodeId;
				oSenCurr.data1 = [];
				oSenCurr.data1Name = "Влажность";
				oSenCurr.data2Name = "Температура";
				oSenCurr.data2 = [];
				oLocal.refresh();

			}
			oSenorData.forEach(function(oItem) {
				//ruslan				
				if (oItem.ID.includes(sNodeId)) {
					if (oItem.measures.temperature) {
						oSenCurr.name = "";
						oSenCurr.devId = sNodeId;
						oSenCurr.data1Name = "Влажность";
						oSenCurr.data2Name = "Температура";

						oSenCurr.data1 = [];
						if (oItem.measures.humidity) {
							oItem.measures.humidity.forEach(function(oH) {
								oSenCurr.data1.push(parseFloat(oH.value));
							});
						}

						oSenCurr.data2 = [];
						if (oItem.measures.temperature) {
							oItem.measures.temperature.forEach(function(oT) {
								oSenCurr.data2.push(parseFloat(oT.value));
							});
						}

						oLocal.refresh();
					}
				}
			});



		},

		/*
		 * 
		 * name: "",
					devId: "",
					devStatus: "",
					devMsg: "",
					data1Name: "",
					data2Name: "",
					data3Name: "",
					data1: [],
					data2: [],
					data3: []*/

		//
		// 3D related
		//
		_calcViewportSize: function(percent) {

			var pxRatio = window.devicePixelRatio || 1;
			var aTabBarContent = document.getElementById("__xmlview1--appTabBar-content");
			var dims = aTabBarContent.getBoundingClientRect();

			var vpWidth = Math.floor(((dims.width - 250) * percent) / (100 * pxRatio));
			var vpHeight = Math.floor(((dims.height) * percent) / (125 * pxRatio));

			console.log("w:" + vpWidth + " h: " + vpHeight + ", pr: " + pxRatio);
			$("#topleft").offset({
				top: 50,
				left: 70
			});
			$("#topright").offset({
				top: 50,
				left: vpWidth - 220
			});
			return {
				width: vpWidth,
				height: vpHeight
			};
		}
	});
});