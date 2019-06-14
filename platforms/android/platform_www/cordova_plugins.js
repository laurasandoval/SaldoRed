cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-taptic-engine.TapticEngine",
      "file": "plugins/cordova-plugin-taptic-engine/www/TapticEngine.js",
      "pluginId": "cordova-plugin-taptic-engine",
      "clobbers": [
        "TapticEngine"
      ]
    },
    {
      "id": "cordova-plugin-3dtouch.ThreeDeeTouch",
      "file": "plugins/cordova-plugin-3dtouch/www/ThreeDeeTouch.js",
      "pluginId": "cordova-plugin-3dtouch",
      "clobbers": [
        "ThreeDeeTouch"
      ]
    },
    {
      "id": "cordova-plugin-inappbrowser.inappbrowser",
      "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
      "pluginId": "cordova-plugin-inappbrowser",
      "clobbers": [
        "cordova.InAppBrowser.open",
        "window.open"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-taptic-engine": "2.1.0",
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-3dtouch": "1.3.6",
    "cordova-plugin-inappbrowser": "3.0.0"
  };
});