sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
  ],
  function (UIComponent, JSONModel) {
    "use strict";
    return UIComponent.extend("com.ui5walkthrough.Component", {


      metadata: {
        manifest:"json"
      },


      init: function () {
        // call the init function of the parent
        UIComponent.prototype.init.apply(this, arguments);
        // set data model
        var data = {
          introMessage: {
            name: "Subin",
            category:"Welcome to the world of SAPUI5"
          },
        };
        var oModel = new JSONModel(data);
        this.setModel(oModel);
      },
    });
  }
);
