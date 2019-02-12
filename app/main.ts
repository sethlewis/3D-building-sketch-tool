import SceneView from "esri/views/SceneView";
import WebScene from "esri/WebScene";
import GraphicsLayer from "esri/layers/GraphicsLayer";

const buildingSketches = new GraphicsLayer({});

const webscene = new WebScene({
  portalItem: {
    id: "dc8c61ae930b4db78daf1fe083f1deff"
  }
});

const view = new SceneView({
  map: webscene,
  container: "viewDiv"
});
