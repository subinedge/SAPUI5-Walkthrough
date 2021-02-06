sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
  ],
  function (Controller, MessageToast, JSONModel) {
    "use strict";
    return Controller.extend("com.ui5walkthrough.controller.App", {

      onInit: function() {
        var json = new JSONModel();

        var data = {
          introMessage: {
            name: "World"
          }
        };

        json.setData(data);
        // default model
        this.getView().setModel(json);

        // named model
        // this.getView().setModel({json:"newModel"})
      },

      onPress: function () {
        MessageToast.show("This is a message toast");
      },
    });
  }
);