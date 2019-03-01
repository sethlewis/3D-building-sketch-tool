var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "esri/views/SceneView", "esri/WebScene", "esri/layers/GraphicsLayer"], function (require, exports, SceneView_1, WebScene_1, GraphicsLayer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    SceneView_1 = __importDefault(SceneView_1);
    WebScene_1 = __importDefault(WebScene_1);
    GraphicsLayer_1 = __importDefault(GraphicsLayer_1);
    var buildingSketches = new GraphicsLayer_1.default({});
    var webscene = new WebScene_1.default({
        portalItem: {
            id: "dc8c61ae930b4db78daf1fe083f1deff"
        }
    });
    var view = new SceneView_1.default({
        map: webscene,
        container: "viewDiv"
    });
    view.environment = {
        lighting: {
            directShadowsEnabled: true
        }
    };
});
//# sourceMappingURL=main.js.map