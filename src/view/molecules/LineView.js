import { Polyline } from "react-leaflet";

import { STATION_IDX } from "../../nonview/core/Station";

const STYLE_LINE_POLYLINE = {};

export default function LineView({ line }) {
  const positions = line.stationNames
    .filter((stationName) => STATION_IDX[stationName])
    .map((stationName) => STATION_IDX[stationName].latLng);
  return <Polyline pathOptions={STYLE_LINE_POLYLINE} positions={positions} />;
}
