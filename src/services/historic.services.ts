import ApiService from "@/services/apiService";

//TODO: check is its correct to put this enum here
export enum GenericCallType{
  PerSecond = 0,
  PerMinute = 1,
  PerHour = 2,
}
export enum SensorType{
  Humedad= '/humedad',
  PH= '/ph',
  TempAgua= '/temp_agua',
  TempAire = '/temp_aire'
}


export class HistoricService extends ApiService {
  constructor() {
    super({ baseUrl: "/data/historico" });
  }

  async getSensorHistoric(sensorName: SensorType,filterType: GenericCallType,firstEpochTime: number ,secondEpochTime?: number){
      switch(filterType){
        case 0: 
        return (await this.getGenericHistoricPerSecond(sensorName,firstEpochTime, secondEpochTime)).data;
        case 1: 
        return (await this.getGenericPromPerMinuteBetweenTwoDates(firstEpochTime, sensorName, secondEpochTime)).data;
        case 2: 
        default:
        return (await this.getGenericHistoricPerDay(sensorName, firstEpochTime, secondEpochTime!)).data

      }
  }

  
  //NOTE: not sure if do this
  private async getGenericHistoricPerDay(
    sensorPath: string,
    epochTime: number,
    secondEpochTime: number
  ) {
    return await this.get('/horas'+sensorPath + "/mindate/" + epochTime + '/maxdate/' + secondEpochTime);
  }

  private async getGenericPromPerMinuteBetweenTwoDates(
    firstEpochTime: number,
    sensorPath: string,
    secondEpochTime?: number,
  ) {
    return await this.get(
      "/minutos" +
        sensorPath +
        "/mindate/" +
        firstEpochTime +
        "/maxdate/" +
        secondEpochTime
    );
  }

  private async getGenericHistoricPerSecond(
    sensorPath: string,
    firstEpochTime: number,
    secondEpochTime?: number
  ) {
    if(secondEpochTime){
      return await this.get(sensorPath+'/mindate/'+firstEpochTime + '/maxdate/'+secondEpochTime)
    }
    return await this.get(sensorPath+'/date/'+firstEpochTime);
  }

 
}
