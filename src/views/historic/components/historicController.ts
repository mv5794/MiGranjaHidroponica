import {ICardTimeSeries, ISeries} from "@/components/highchart/splineGraph/splineController";
import { HistoricService } from "@/services/historic.services";
import axios from "axios";
import {reactive} from "vue";

export class HistoricController {
    private _temperatureData: ISeries | any | undefined = undefined;
    private _temperatureSeries: ICardTimeSeries;
    
    private historicService: HistoricService;

    constructor() {
        this._temperatureSeries = {
            title: 'Temperature',
            series: [{
                data: []
            }]
        }
        this.historicService = new HistoricService();
    }

    async loadData() {
        this._temperatureData = (await axios.get(process.env.VUE_APP_BASE_URL_API + '/data/historico/humedad/date/1664057282')).data;
        console.log('chichi'+this._temperatureData);
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
