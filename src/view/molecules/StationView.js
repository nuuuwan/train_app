import { CircleMarker } from "react-leaflet";

const DEFAULT_CIRLE_RADIUS = 5;

const STYLE_STATION_CIRCLE = {
  color: "red",
  fillColor: "white",
  fillOpacity: 1,
};

export default function StationView({ station }) {
  return (
    <CircleMarker
      center={station.latLng}
      radius={DEFAULT_CIRLE_RADIUS}
      pathOptions={STYLE_STATION_CIRCLE}
    />
  );
}
