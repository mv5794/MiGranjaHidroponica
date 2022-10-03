import {ICardTimeSeries, ISeries} from "@/components/highchart/splineGraph/splineController";
import axios from "axios";
import {reactive} from "vue";
import {SeriesSplineOptions} from "highcharts";

export class HistoricController {
    private _temperatureData: ISeries  | any| undefined = undefined;
    private _temperatureSeries: ICardTimeSeries ;

    constructor() {
        this._temperatureSeries = {
            title: 'Temperature',
            series: [{
                data: []
            }]
        }
    }



    async loadData(){
        this._temperatureData = (await axios.get('http://20.206.200.27:1880/data/historico/humedad/date/1664057282')).data;
        console.log(this._temperatureData);
        this._temperatureSeries.series.at(0).data = this._temperatureData.data;
        //TODO: REMOVE THIS
        this._temperatureSeries.series.at(0).data.length = 15
    }

    get temperatureData(): Array<any> | undefined {
        return this._temperatureData;
    }

    get temperatureSeries(): ICardTimeSeries | undefined {
        return this._temperatureSeries;
    }
}

const historicController = reactive(new HistoricController());
export default historicController;
