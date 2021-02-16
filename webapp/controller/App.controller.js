sap.ui.define(
  [
    "sap/ui/core/mvc/Controller"
  ],
  function (Controller) {
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
    });
  }
);