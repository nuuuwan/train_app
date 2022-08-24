import { CircleMarker } from "react-leaflet";

const DEFAULT_CIRLE_RADIUS = 10;

const STYLE_STATION_CIRCLE = { color: "red", stroke: null, fillOpacity: 0.5 };

export default function StationView({ station }) {
  return (
    <CircleMarker
      center={station.latLng}
      radius={DEFAULT_CIRLE_RADIUS}
      pathOptions={STYLE_STATION_CIRCLE}
    />
  );
}
