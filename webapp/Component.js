sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceBundle",
  ],
  function (UIComponent, JSONModel, ResourceBundle) {
    "use strict";
    return UIComponent.extend("com.ui5walkthrough.Component", {
      metadata: {
        rootView: {
          viewName: "com.ui5walkthrough.view.App",
          type: "XML",
          async: true,
          id: "app",
        },
      },

      init: function () {
        // call init function of parent
        UIComponent.prototype.init.apply(this, argumnets);

        // set data model
        var data = {
          introMessage: {
            name: "Subin",
            category: "Welcome to the world of SAPUI5",
          },
        };

        json.setData(data);
        // default model
        this.setModel(json);

        // set i18n model to view
        var i18nModel = new ResourceModel({
          bundleName: "com.ui5walkthrough.i18n.i18n",
          supportedLocales: [""],
          fallbackLocales: "",
        });

        this.setModel(i18nModel, "i18n");
      },
    });
  }
);