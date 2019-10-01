import { NODATA } from "dns";

const initial: any = {};

export const enum Types {
  GLOBALSEARCH= 'globalsearch',
  SETGLOBALSEARCH= 'set-global-search-data',
  GLOBALSEARCHCLEAR='clear-global-search-data',
  SETGLOBALSEARCHSELECTED='set-global-search-data-selected',
  RESETEMPTYDATA='reset-emptydata'

};

export interface Action<T, P = any> {
  type: T,
  payload: P,
}

export const globalsearch = (context: any) => {
  const { log } = context;
  return (state: typeof initial = initial, action: Action<Types>) => {
    log.debug(
      'one-caller-header',
      'reducer', {
          action,
      }
    );
    let emptydata = false;
    let updated = state;
    const { type, payload } = action;
    let pdata = [];
    if(!(payload === null || payload === undefined)){
      pdata = payload;
    }else{
      emptydata = true;
    }
    
    switch (type) {
      case Types.GLOBALSEARCH:
        updated = {
          ...updated,
          ...payload
        };
        break;

        case Types.SETGLOBALSEARCH:
            updated = {
              ...updated,
              patients: [
                ...pdata
              ],
              emptydata: emptydata
          };
            break; 
            
            case Types.GLOBALSEARCHCLEAR:
              updated = {

              };
              break;
      
        case Types.SETGLOBALSEARCHSELECTED:
            updated = {
               ...updated,
               ...payload
             };
           break;       
        case Types.RESETEMPTYDATA:
            updated = {
               ...updated,
               ...payload
             };
           break;    
        
    }
    return updated;
  }
};
