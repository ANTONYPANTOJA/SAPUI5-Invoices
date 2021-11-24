sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
],
    /**
     * 
     * @param { typeof sap.ui.core.mvc.Controller } Controller 
     * @param { typeof sap.m.MessageToast } MessageToast
    *  @param { typeof sap.ui.model.resource.ResourceModel } ResourceModel
     */
    function (Controller, MessageToast, Models,ResourceModel){
        'use strict';
        return Controller.extend("logaligroup.SAPUI5.Controller.App", {

            onInit: function () {
            },
            onShowHello: function () {
                //Read text from i18n model
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                //Read Property
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMsg",[sRecipient]);
                console.log(oBundle);
                console.log(sRecipient);
                MessageToast.show(sMsg);
            }
        })
    });