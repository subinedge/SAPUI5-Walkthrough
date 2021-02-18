sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/core/Fragment"],
  function (Controller, MessageToast, Fragment) {
    "use strict";

    return Controller.extend("com.ui5walkthrough.controller.HomePanel", {
      onPress: function () {
        // 1) get the i18n model bundle using "getResourceBundle" method
        var oBundle = this.getView().getModel("i18n").getResourceBundle();
        // 2) get the json data from model (named or default) using getProperty
        var oText = this.getView().getModel().getProperty("/introMessage/name");
        var oText1 = this.getView()
          .getModel()
          .getProperty("/introMessage/category");
        // 3) to pass the binded data to i18n, using i18n bundle getText property, pass the i18n key and value to be passed in array
        var oMsg = oBundle.getText("inputDescription", [oText, oText1]);
        // 4) show the message toast
        MessageToast.show(oMsg);
      },

      onPressDialog: function () {
        // if(!this.oDialog) {
        //   this.oDialog = sap.ui.xmlfragment("com.ui5walkthrough.view.Dialog", this);
        // }

        // this.oDialog.open();

        var oView = this.getView();

        // create dialog lazily
        if (!this.pDialog) {
          this.pDialog = Fragment.load({
            id: oView.getId(),
            name: "com.ui5walkthrough.view.Dialog",
            controller: this,
          }).then(function (oDialog) {
            // connect dialog to the root view of this component (models, lifecycle)
            oView.addDependent(oDialog);
            return oDialog;
          });
        }
        this.pDialog.then(function (oDialog) {
          oDialog.open();
        });
      },

      onCloseDialog: function() {
        this.byId("helloDialog").close();
      }
    });
  }
);