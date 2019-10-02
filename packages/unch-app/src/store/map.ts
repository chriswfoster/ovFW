const initial: any = {
  switch1 : false,
  switch2 : false,
  switch3 : true,
  switch4 : false,
  mapfilter : 'hospital'
};

export const map = (state = initial, action) => {
let updated = state;
const { type, payload } = action;
switch (type) {
case 'MAP_FILTER' : {
    updated = {
        ...updated,
        ...payload
    };
    
}
  break;
  case 'ADD_MAP' : {
    updated = {
        ...updated,
        ...payload
    };
    
}
  break;
  case 'DELETE_MAP' : {
      updated = {
          
      }
  }
    break;
    case 'enable-hook-map' : {
      updated = {
        ...updated,
        'initmaploop': payload
      }
  }
    break;
  default:
}
return updated;
};
