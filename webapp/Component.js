sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (UIComponent, JSONModel, ResourceModel) {
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

        // set i18n model
        var i18nModel = new ResourceModel({
          bundleName: "com.ui5walkthrough.i18n.i18n",
          supportedLocales: [""],
          fallbackLocale: "",
        });
        this.setModel(i18nModel, "i18n");
      },
    });
  }
);
