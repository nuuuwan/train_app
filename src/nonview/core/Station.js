import IDX from "../../nonview/base/IDX";
import STATIONS_D from "../../nonview/constants/STATIONS_D";

export default class Station {
  constructor({ stationName, latLng }) {
    this.stationName = stationName;
    this.latLng = latLng;
  }
}

export const STATIONS = STATIONS_D.map((d) => new Station(d));

export const STATION_IDX = IDX.build(
  STATIONS,
  (o) => o.stationName,
  (o) => o
);
