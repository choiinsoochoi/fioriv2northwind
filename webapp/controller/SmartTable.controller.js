sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator'
], function (Controller, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("fioriv2northwind.controller.SmartTable", {
        
        onInit: function () {
            // Initialization code if required
            // Now automatically trigger the search on initial load
            var oFilterBar = this.getView().byId("smartFilterBar");
            oFilterBar.search();
            
        },


        handleSearch: function (oEvent) {
            var oSmartTable = this.getView().byId("smartTable");
            if (oSmartTable) {
                oSmartTable.rebindTable();
            } else {
                console.error("SmartTable is undefined or not found.");
            }
        }
    });
    
});
