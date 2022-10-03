import { ICardTimeSeries } from "@/components/highchart/splineGraph/splineController";
import { IStats } from "./IStats";

export class StatsController {
  private _sensorsInformation: Array<IStats> | undefined = undefined;

  /**
   * Getter $sensorsInformation
   * @return {Array<IStats> }
   */
  public get sensorsInformation(): Array<IStats> {
    return this._sensorsInformation!;
  }

  /**
   * Setter $sensorsInformation
   * @param {Array<IStats> } value
   */
  public set sensorsInformation(value: Array<IStats>) {
    this._sensorsInformation = value;
  }

  //TODO: CHANGE THIS FUNCTION
  getFakeData(): Array<IStats> {
    return [
      {
        sensor: "Temperatura",
        value: 38.6,
        unity: "Grados",
        minValue: 20,
        maxValue: 35,
      },
      {
        sensor: "PH del agua",
        value: 12,
        unity: "Grados",
        minValue: 5,
        maxValue: 11,
      },
      {
        sensor: "Humedad",
        value: 87,
        unity: "Grados",
        minValue: 80,
        maxValue: 90,
      },
      {
        sensor: "Temperatura agua",
        value: 19,
        unity: "Grados",
        minValue: 15,
        maxValue: 50,
      },
    ];
  }

  getFakeWholeGraph() {
    return [
      {
        name: "Temperature",
        data: [
          [Date.UTC(1970, 9, 24), 0],
          [Date.UTC(1970, 9, 27), 0.12],
          [Date.UTC(1970, 9, 30), 0.09],
          [Date.UTC(1970, 10, 3), 0.13],
          [Date.UTC(1970, 10, 6), 0.12],
          [Date.UTC(1970, 10, 9), 0.13],
          [Date.UTC(1970, 10, 12), 0.13],
          [Date.UTC(1970, 10, 15), 0.16],
          [Date.UTC(1970, 10, 18), 0.19],
          [Date.UTC(1970, 10, 21), 0.25],
          [Date.UTC(1970, 10, 24), 0.26],
          [Date.UTC(1970, 10, 27), 0.24],
          [Date.UTC(1970, 10, 30), 0.25],
          [Date.UTC(1970, 11, 3), 0.26],
          [Date.UTC(1970, 11, 6), 0.36],
          [Date.UTC(1970, 11, 9), 0.43],
          [Date.UTC(1970, 11, 12), 0.32],
          [Date.UTC(1970, 11, 15), 0.48],
          [Date.UTC(1970, 11, 18), 0.5],
          [Date.UTC(1970, 11, 21), 0.44],
          [Date.UTC(1970, 11, 24), 0.43],
          [Date.UTC(1970, 11, 27), 0.45],
          [Date.UTC(1970, 11, 30), 0.4],
          [Date.UTC(1971, 0, 3), 0.39],
          [Date.UTC(1971, 0, 6), 0.56],
          [Date.UTC(1971, 0, 9), 0.57],
          [Date.UTC(1971, 0, 12), 0.68],
          [Date.UTC(1971, 0, 15), 0.93],
          [Date.UTC(1971, 0, 18), 1.11],
          [Date.UTC(1971, 0, 21), 1.01],
          [Date.UTC(1971, 0, 24), 0.99],
          [Date.UTC(1971, 0, 27), 1.17],
          [Date.UTC(1971, 0, 30), 1.24],
          [Date.UTC(1971, 1, 3), 1.41],
          [Date.UTC(1971, 1, 6), 1.47],
          [Date.UTC(1971, 1, 9), 1.4],
          [Date.UTC(1971, 1, 12), 1.92],
          [Date.UTC(1971, 1, 15), 2.03],
          [Date.UTC(1971, 1, 18), 2.46],
          [Date.UTC(1971, 1, 21), 2.53],
          [Date.UTC(1971, 1, 24), 2.73],
          [Date.UTC(1971, 1, 27), 2.67],
          [Date.UTC(1971, 2, 3), 2.65],
          [Date.UTC(1971, 2, 6), 2.62],
          [Date.UTC(1971, 2, 9), 2.79],
          [Date.UTC(1971, 2, 13), 2.93],
          [Date.UTC(1971, 2, 20), 3.09],
          [Date.UTC(1971, 2, 27), 2.76],
          [Date.UTC(1971, 2, 30), 2.73],
          [Date.UTC(1971, 3, 4), 2.9],
          [Date.UTC(1971, 3, 9), 2.77],
          [Date.UTC(1971, 3, 12), 2.78],
          [Date.UTC(1971, 3, 15), 2.76],
          [Date.UTC(1971, 3, 18), 2.76],
          [Date.UTC(1971, 3, 21), 2.7],
          [Date.UTC(1971, 3, 24), 2.61],
          [Date.UTC(1971, 3, 27), 2.52],
          [Date.UTC(1971, 3, 30), 2.53],
          [Date.UTC(1971, 4, 3), 2.55],
          [Date.UTC(1971, 4, 6), 2.52],
        ],
      },
      {
        name: "Humedad",
        data: [
          [Date.UTC(1970, 10, 14), 0],
          [Date.UTC(1970, 11, 6), 0.35],
          [Date.UTC(1970, 11, 13), 0.35],
          [Date.UTC(1970, 11, 20), 0.33],
          [Date.UTC(1970, 11, 30), 0.53],
          [Date.UTC(1971, 0, 13), 0.62],
          [Date.UTC(1971, 0, 20), 0.6],
          [Date.UTC(1971, 1, 2), 0.69],
          [Date.UTC(1971, 1, 18), 0.67],
          [Date.UTC(1971, 1, 21), 0.65],
          [Date.UTC(1971, 1, 24), 0.66],
          [Date.UTC(1971, 1, 27), 0.66],
          [Date.UTC(1971, 2, 3), 0.61],
          [Date.UTC(1971, 2, 6), 0.6],
          [Date.UTC(1971, 2, 9), 0.69],
          [Date.UTC(1971, 2, 12), 0.66],
          [Date.UTC(1971, 2, 15), 0.75],
          [Date.UTC(1971, 2, 18), 0.76],
        ],
      },
      {
        name: "PH",
        data: [
          [Date.UTC(1970, 10, 5), 0],
          [Date.UTC(1970, 10, 12), 0.1],
          [Date.UTC(1970, 10, 21), 0.15],
          [Date.UTC(1970, 10, 22), 0.19],
          [Date.UTC(1970, 10, 27), 0.17],
          [Date.UTC(1970, 10, 30), 0.27],
          [Date.UTC(1970, 11, 2), 0.25],
          [Date.UTC(1970, 11, 4), 0.27],
          [Date.UTC(1970, 11, 5), 0.26],
          [Date.UTC(1970, 11, 6), 0.25],
          [Date.UTC(1970, 11, 7), 0.26],
        ],
      },
      {
        name: "Temperatura del agua",
        data: [
          [Date.UTC(1970, 11, 9), 0.25],
          [Date.UTC(1970, 11, 10), 0.25],
          [Date.UTC(1970, 11, 11), 0.25],
          [Date.UTC(1970, 11, 12), 0.26],
          [Date.UTC(1970, 11, 22), 0.22],
          [Date.UTC(1970, 11, 23), 0.22],
          [Date.UTC(1970, 11, 24), 0.22],
          [Date.UTC(1970, 11, 25), 0.24],
        ],
      },
    ];
  }
}

const statsController = new StatsController();
export default statsController;
