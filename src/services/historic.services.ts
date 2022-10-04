import ApiService from "@/services/apiService";

//TODO: DO thi extends APISERVICE when working with auth
export class HistoricService extends ApiService {

  constructor() {
    super({ baseUrl: "/data/historico" });
  }

  async getCompleateHumedadHistoric(epochTime: number){
    return (await this.get('/humedad/date/'+ epochTime)).data;
  }

  async getCompleatePHHistoric(epochTime: number){
    return (await this.get('/ph/date/'+ epochTime)).data;
  }
  
  async getCompleateTmpAireHistoric(epochTime: number){
    return (await this.get('/tmp_aire/date/'+ epochTime)).data;
  }
  
  async getCompleateTmpAguaHistoric(epochTime: number){
    return (await this.get('/tmp_agua/date/'+ epochTime)).data;
  }
  
}
