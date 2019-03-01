import SceneView from "esri/views/SceneView";
import WebScene from "esri/WebScene";
import GraphicsLayer from "esri/layers/GraphicsLayer";
import SceneLayer from "esri/layers/SceneLayer";

const buildingSketches = new GraphicsLayer({});

const solidEdges = {
  type: "solid",
  color: [0, 0, 0, 0.6],
  size: 1
};

const sketchEdges = {
  type: "sketch",
  color: [0, 0, 0, 0.4],
  size: 1.2,
  extensionLength: 6
};

let renderer = {
  type: "unique-value",
  field: "OBJECTID",
  defaultSymbol: {
    type: "mesh-3d",
    symbolLayers: [
      {
        type: "fill",
        material: {
          color: "#fff"
        },
        edges: solidEdges
      }
    ]
  }
};

const existingBuildingsLyr = new SceneLayer({
  portalItem: {
    id: "04c80918de134d149d906cd1a0446237"
  },
  title: "Tempe Buildings",
  renderer: renderer
});

const webscene = new WebScene({
  portalItem: {
    id: "a96b42baaead43d399cc28825a97e6eb"
  },
  layers: [existingBuildingsLyr]
});

const view = new SceneView({
  map: webscene,
  container: "viewDiv",
  qualityProfile: "high",
  environment: {
    lighting: {
      directShadowsEnabled: true
    }
  }
});
