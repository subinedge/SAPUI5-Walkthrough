sap.ui.define(["sap/ui/core/ComponentContainer"], function(ComponentContainer){
    "use strict";

    new ComponentContainer({
      name: "com.ui5walkthrough",
      settings: {
        id: "walkthrough",
      },
      async: true,
    }).placeAt("content");
  });