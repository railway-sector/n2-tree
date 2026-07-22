import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import GroupLayer from "@arcgis/core/layers/GroupLayer";
import {
  chainage_renderer,
  clusterConfig,
  label_chainage,
  label_stationp,
  portalItems,
  prow_renderer,
  tree_popup,
  treec_renderer,
  treem_renderer,
  treen_renderer,
} from "./uniqueValues";

//---------------------------------------------//
//          Alignment Layers                   //
//---------------------------------------------//
//--- CHAINAGE LAYER ---//
export const chainageLayer = new FeatureLayer({
  portalItem: portalItems("876de8483da9485aac5df737cbef2143"),
  layerId: 5,
  title: "Chainage",
  elevationInfo: { mode: "relative-to-ground" },
  labelingInfo: [label_chainage],
  minScale: 150000,
  maxScale: 0,
  renderer: chainage_renderer,
  popupEnabled: false,
});

//--- PROW LAYER ---//
export const prowLayer = new FeatureLayer({
  url: "https://gis.railway-sector.com/server/rest/services/N2_Alignment/FeatureServer/1",
  layerId: 1,
  title: "PROW",
  renderer: prow_renderer,
  popupEnabled: false,
});

//--- STATION POINT LAYER ---//
export const stationLayer = new FeatureLayer({
  portalItem: portalItems("876de8483da9485aac5df737cbef2143"),
  layerId: 2,
  title: "Station",
  labelingInfo: [label_stationp],
  elevationInfo: { mode: "relative-to-ground" },
});
stationLayer.listMode = "hide";

export const alignmentGroupLayer = new GroupLayer({
  title: "Alignment",
  visible: true,
  visibilityMode: "independent",
  layers: [chainageLayer, prowLayer], //stationLayer,
});

//---------------------------------------------//
//            Other layers                     //
//---------------------------------------------//
export const dateTable = new FeatureLayer({
  portalItem: portalItems("b2a118b088a44fa0a7a84acbe0844cb2"),
});

//---------------------------------------------//
//        Tree Cutting & Compensation          //
//---------------------------------------------//
//--- TREE CUTTING LAYER ---//
export const treeCuttingLayer = new FeatureLayer({
  portalItem: portalItems("05b19f50364243dbabf06605085b09ce"),
  layerId: 2,
  elevationInfo: { mode: "on-the-ground" },
  title: "Tree Cutting",
  renderer: treec_renderer,
  featureReduction: clusterConfig,
  popupTemplate: tree_popup,
});

//--- TREE COMPENSATION LAYER ---//
export const treeCompensationLayer = new FeatureLayer({
  portalItem: portalItems("05b19f50364243dbabf06605085b09ce"),
  layerId: 2,
  title: "Tree Compensation",
  renderer: treem_renderer,
  featureReduction: clusterConfig,
  popupTemplate: tree_popup,
});

//--- TREE CONSERVATION LAYER ---//
export const treeConservationLayer = new FeatureLayer({
  portalItem: portalItems("05b19f50364243dbabf06605085b09ce"),
  layerId: 2,
  title: "Tree Conservation",
  renderer: treen_renderer,
  featureReduction: clusterConfig,
  popupTemplate: tree_popup,
});

export const treeGroupLayer = new GroupLayer({
  title: "Tree Cutting & Compensation",
  visible: false,
  visibilityMode: "exclusive",
  layers: [treeConservationLayer, treeCompensationLayer, treeCuttingLayer],
});
