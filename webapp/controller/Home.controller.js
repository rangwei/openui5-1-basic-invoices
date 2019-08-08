sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"../model/formatter"
], function(Controller, MessageToast, formatter) {
	"use strict";

	return Controller.extend("sap.ui.demo.basicTemplate.controller.App", {

		formatter: formatter,

		onInit: function () {
			
		},
		
		onShowHello: function() {

			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			var sMsg = this.getResourceBundle().getText("helloMsg", sRecipient);
			//this.getResourceBundle().getText("masterTitleCount", [0]),

			// alert("Hello World");
			MessageToast.show(sMsg);
		},

		getResourceBundle : function () {
			return this.getOwnerComponent().getModel("i18n").getResourceBundle();
		}
	});
});