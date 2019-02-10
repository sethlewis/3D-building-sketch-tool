import Map from "esri/Map";
import SceneView from "esri/views/SceneView";
import WebScene from "esri/WebScene";
import GraphicsLayer from "./layer";

const GraphicsLayer 
const webscene = new WebScene({
    portalItem: {
      id: "dc8c61ae930b4db78daf1fe083f1deff"
    }
  });

const view = new SceneView({
    map: webscene,
    container: "viewDiv"
});