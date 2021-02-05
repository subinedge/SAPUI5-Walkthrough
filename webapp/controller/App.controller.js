sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";
  return Controller.extend("com.ui5walkthrough.controller.App", {
    onPress: function () {
      // show a native JavaScript alert
      alert("Hello World");
    },
  });
});
