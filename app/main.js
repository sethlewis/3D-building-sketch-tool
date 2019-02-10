var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "esri/views/SceneView", "esri/WebScene"], function (require, exports, SceneView_1, WebScene_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    SceneView_1 = __importDefault(SceneView_1);
    WebScene_1 = __importDefault(WebScene_1);
    var GraphicsLayer;
    var webscene = new WebScene_1.default({
        portalItem: {
            id: "dc8c61ae930b4db78daf1fe083f1deff"
        }
    });
    var view = new SceneView_1.default({
        map: webscene,
        container: "viewDiv"
    });
});
//# sourceMappingURL=main.js.map