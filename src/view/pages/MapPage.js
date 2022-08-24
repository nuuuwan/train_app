import { Component } from "react";

import { LINES } from "../../nonview/core/Line";
import { STATIONS } from "../../nonview/core/Station";

import GeoMap from "../../view/molecules/GeoMap";
import LineView from "../../view/molecules/LineView";
import StationView from "../../view/molecules/StationView";

export default class MapPage extends Component {
  renderStations() {
    return STATIONS.map(function (station) {
      const key = "station-" + station.stationName;
      return <StationView key={key} station={station} />;
    });
  }

  renderLines() {
    return LINES.map(function (line) {
      const key = "line-" + line.lineName;
      return <LineView key={key} line={line} />;
    });
  }

  render() {
    return (
      <GeoMap>
        {this.renderLines()}
        {this.renderStations()}
      </GeoMap>
    );
  }
}
