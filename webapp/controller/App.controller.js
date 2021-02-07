sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
  ],
  function (Controller, MessageToast) {
    "use strict";
    return Controller.extend("com.ui5walkthrough.controller.App", {
      // onInit: function () {
        // var json = new JSONModel();

        // var data = {
        //   introMessage: {
        //     name: "Subin",
        //     category:"Welcome to the world of SAPUI5"
        //   },
        // };

        // json.setData(data);
        // default model
        // this.getView().setModel(json);

        // named model
        // this.getView().setModel({json:"newModel"})

        // set i18n model to view
        // var i18nModel = new ResourceModel({
        //   bundleName:"com.ui5walkthrough.i18n.i18n",
        //   supportedLocales:[""],
        //   fallbackLocales:""
        // });

        // this.getView().setModel(i18nModel, "i18n");

      // },

      onPress: function () {
        // 1) get the i18n model bundle using "getResourceBundle" method
        var oBundle = this.getView().getModel("i18n").getResourceBundle();
        // 2) get the json data from model (named or default) using getProperty
        var oText = this.getView().getModel().getProperty("/introMessage/name");
        var oText1 = this.getView().getModel().getProperty("/introMessage/category");
        // 3) to pass the binded data to i18n, using i18n bundle getText property, pass the i18n key and value to be passed in array
        var oMsg = oBundle.getText("inputDescription", [oText,oText1]);
        // 4) show the message toast        
        MessageToast.show(oMsg);
      },
    });
  }
);