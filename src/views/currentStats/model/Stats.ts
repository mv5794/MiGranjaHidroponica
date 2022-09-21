import { IStats } from "./IStats";

export class StatsController {
  private _sensorsInformation: Array<IStats> | undefined = undefined;


    /**
     * Getter $sensorsInformation
     * @return {Array<IStats> }
     */
	public get sensorsInformation(): Array<IStats>  {
		return this._sensorsInformation!;
	}

    /**
     * Setter $sensorsInformation
     * @param {Array<IStats> } value
     */
	public set sensorsInformation(value: Array<IStats> ) {
		this._sensorsInformation = value;
	}


  //TODO: CHANGE THIS FUNCTION
  getFakeData(): Array<IStats>{
    return [
      {name: 'Temperatura', value: 38.6, unity: 'Grados', minValue: 20, maxValue: 35},
      {name: 'PH del agua', value:12, unity: 'Grados', minValue: 5, maxValue:11},
      {name: 'Humedad', value: 87, unity: 'Grados', minValue:80, maxValue:90},
      {name: 'Temperatura agua', value: 19, unity: 'Grados', minValue:15, maxValue:50}
    ]
  }
}

const statsController = new StatsController();
export default statsController;