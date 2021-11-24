sap.ui.define([
    "sap/ui/model/json/JSONModel"
],
    /**
     * 
     * @param {sap.ui.model.json.JSONModel} JSONModel 
     */
    function (JSONModel) {
        'use strict';
        return {
            createRecipient: function () {
                var oData = {
                    recipient: {
                        name: "Word"

                    }
                };
                return new JSONModel(oData);
            }
        }

    });