import LINES_D from "../../nonview/constants/LINES_D";

export default class Line {
  constructor({ lineName, stationNames }) {
    this.lineName = lineName;
    this.stationNames = stationNames;
  }
}

export const LINES = LINES_D.map((d) => new Line(d));

export const LINE_IDX = IDX.build(
  LINES,
  (o) => o.lineName,
  (o) => o
);
