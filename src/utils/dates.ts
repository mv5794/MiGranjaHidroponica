export function fromDateToEpoch(p_date: Date | string): number{
  let date: Date;
  if(typeof p_date == 'string'){
    date = new Date(p_date);
  }
  else{
    date = p_date;
  }
  return date.getTime()/1000.0;
}

export function convertEpcochToLocalDate(p_epochDate: number){
  return new Date(p_epochDate *1000);
}


export function getCurrentEpochTime(){
  return Math.floor(new Date().getTime()/1000.0);
}