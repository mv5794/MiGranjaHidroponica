import {
  ICardTimeSeries,
  ISeries,
} from "@/components/highchart/splineGraph/splineController";
import { HistoricService, SensorType } from "@/services/historic.services";
import { reactive } from "vue";
import { GenericCallType } from "../../../services/historic.services";

export class HistoricController {
  private _humidityData: ISeries | any | undefined = undefined;
  private _humiditySeries: ICardTimeSeries;

  private _phData: ISeries | any | undefined = undefined;
  private _phSeries: ICardTimeSeries;

  private _temperatureAirData: ISeries | any | undefined = undefined;
  private _temperatureWaterData: ISeries | any | undefined = undefined;
  private _temperatureSeries: ICardTimeSeries;

  private historicService: HistoricService;

  constructor() {
    this._humiditySeries = {
      title: "Humedad",
      series: [
        {
          data: [],
        },
      ],
    };
    this._phSeries = {
      title: "PH",
      series: [
        {
          data: [],
        },
      ],
    };
    this._temperatureSeries = {
      title: "Temperatura",
      series: [
        {
          data: [],
        },
      ],
    };
    this.historicService = new HistoricService();
  }

  async loadData(
    filterType: GenericCallType,
    firstEpochTime: number,
    secondEpochTime?: number
  ) {
    await this.loadHumidity(filterType, firstEpochTime, secondEpochTime);
    await this.loadPH(filterType, firstEpochTime, secondEpochTime);
    await this.loadTemperature(filterType, firstEpochTime, secondEpochTime);
  }

  async loadHumidity(
    filterType: GenericCallType,
    epochTime: number,
    secondEpochTime?: number
  ) {
    this._humidityData = await this.historicService.getSensorHistoric(
      SensorType.Humedad,
      filterType,
      epochTime,
      secondEpochTime
    );
    this._humiditySeries.series.at(0).data = this._humidityData.data;
  }

  async loadPH(
    filterType: GenericCallType,
    epochTime: number,
    secondEpochTime?: number
  ) {
    this._phData = await this.historicService.getSensorHistoric(
      SensorType.PH,
      filterType,
      epochTime,
      secondEpochTime
    );
    this._phSeries.series.at(0).data = this._phData.data;
  }

  async loadTemperature(
    filterType: GenericCallType,
    epochTime: number,
    secondEpochTime?: number
  ) {
    this._temperatureAirData = await this.historicService.getSensorHistoric(
      SensorType.TempAire,
      filterType,
      epochTime,
      secondEpochTime
    );
    this._temperatureWaterData = await this.historicService.getSensorHistoric(
      SensorType.TempAgua,
      filterType,
      epochTime,
      secondEpochTime
    );
    

    this._temperatureSeries.series= [];
    this._temperatureSeries.series.push(this._temperatureWaterData, this._temperatureAirData);
    console.log( 'assasas',this._temperatureSeries);
  }

  /**
   * Getter humiditySeries
   * @return {ICardTimeSeries}
   */
  public get humiditySeries(): ICardTimeSeries {
    return this._humiditySeries;
  }

  /**
   * Getter phSeries
   * @return {ICardTimeSeries}
   */
  public get phSeries(): ICardTimeSeries {
    return this._phSeries;
  }

  /**
   * Getter temperatureSeries
   * @return {ICardTimeSeries}
   */
  public get temperatureSeries(): ICardTimeSeries {
    return this._temperatureSeries;
  }
}

const historicController = reactive(new HistoricController());
export default historicController;
