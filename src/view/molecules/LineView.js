import { Polyline } from "react-leaflet";

import { STATION_IDX } from "../../nonview/core/Station";

const STYLE_LINE_POLYLINE = { weight: 5, color: "red" };

export default function LineView({ line }) {
  const positions = line.stationNames
    .filter((stationName) => STATION_IDX[stationName])
    .map((stationName) => STATION_IDX[stationName].latLng);
  return <Polyline pathOptions={STYLE_LINE_POLYLINE} positions={positions} />;
}
