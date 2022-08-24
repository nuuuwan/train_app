import { Component } from "react";

import { STATIONS } from "../../nonview/core/Station";

import GeoMap from "../../view/molecules/GeoMap";
import StationView from "../../view/molecules/StationView";

export default class MapPage extends Component {
  renderStations() {
    return STATIONS.map(function (station) {
      const key = "station-" + station.stationName;
      return <StationView key={key} station={station} />;
    });
  }

  render() {
    return <GeoMap>{this.renderStations()}</GeoMap>;
  }
}
