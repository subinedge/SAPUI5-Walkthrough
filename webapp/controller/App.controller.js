sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict";
    return Controller.extend("com.ui5walkthrough.controller.App", {
      onInit: function () {
        var json = new JSONModel();

        var data = {
          introMessage: {
            name: "World",
          },
        };

        json.setData(data);
        // default model
        this.getView().setModel(json);

        // named model
        // this.getView().setModel({json:"newModel"})

        // set i18n model to view
        var i18nModel = new ResourceModel({
          bundleName:"com.ui5walkthrough.i18n.i18n",
          supportedLocales:[""],
          fallbackLocales:""
        });

        this.getView().setModel(i18nModel, "i18n");

      },

      onPress: function () {
        var oBundle = this.getView().getModel("i18n").getResourceBundle();
        var oText = this.getView().getModel().getProperty("/introMessage/name");
        var oMsg = oBundle.getText("inputDescription", oText);

        MessageToast.show(oMsg);
      },
    });
  }
);