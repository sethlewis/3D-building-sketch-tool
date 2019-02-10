import Map from "esri/Map";
import SceneView from "esri/views/SceneView";

const map = new Map({
    basemap: "satellite"
});

const view = new SceneView({
    map,
    container: "viewDiv"
});