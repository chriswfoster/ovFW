
import { createEpicMiddleware,combineEpics,ofType } from 'redux-observable';
import { map,mergeMap } from 'rxjs/operators';
import {ajax } from 'rxjs/ajax';
import { from, Observable } from 'rxjs';

import { useCtx } from 'one-ui-provider';
import { isArray } from 'util';
import { address } from 'one-model-address';
import { array } from 'one-core';


export const enum Types {
    SET = 'one-patients-set',
    RESET = 'one-patients-reset',
    SELECT = 'one-patients-select',
    UNSELECT = 'one-patients-unselect',
    ADD = 'one-patients-add',
    UPDATE = 'one-patients-update',
    DELETE = 'one-patients-delete',
    CALLERPATIENT= 'caller-patient',
    CALLERPROVIDER= 'caller-provider',
    APPT='appointments-select',
    REF='referals-select',
    CALLERPAT = 'one-caller-patient',
    CALLERSETPAT ='one-caller-set',
    PCP='pcp-select',
    CALLEDTO='calledto-select',
    CALLEDTOCLEAR = 'calledto-clear',
    CALLERTOCLEAR = 'one-caller-reset',
    REFCLEAR = 'referals-clear',
    APPTCLEAR = 'appointments-clear',
    ENABLE_HOOK_MAP= 'enable-hook-map',
    CANCELAPPT= 'cancel-appt',
    GETGLOBALSEARCH= 'get-global-search-data',
    SETGLOBALSEARCH= 'set-global-search-data',
    GLOBALSEARCHCLEAR='clear-global-search-data',
    ADD_MAP= 'ADD_MAP',
    SETCANCELAPPT='set-cancel-appt',
    ONESCREENPOPGET='one-screenpop-get',
    ONESCREENPOPSET='one-screenpop-set'


};


const fetchCallerFulfilled = (payload:any) => ({type:Types.SET, payload});
const pushtoAppt = (payload:any) => ({type:Types.APPT, payload});
const pushtoRef = (payload:any) => ({type:Types.REF, payload});
const pushtoCallerPatient = (payload:any) => ({type:Types.CALLERPAT, payload});
const pushtoSETCallerPatient = (payload:any) => ({type:Types.CALLERSETPAT, payload});
const pushtoPCP = (payload:any) => ({type:Types.PCP, payload});
const pushtoCalledTo = (payload:any) => ({type:Types.CALLEDTO, payload});
const clearCalledTo=(payload:any) => ({type:Types.CALLEDTOCLEAR,payload});
const clearCaller =(payload:any) => ({type:Types.CALLERTOCLEAR,payload});
const clearReferal=(payload:any) => ({type:Types.REFCLEAR,payload});
const clearAppt=(payload:any) => ({type:Types.APPTCLEAR,payload});
const clearGlobalSearch=(payload:any) => ({type:Types.GLOBALSEARCHCLEAR,payload});
const pushtoMap = (payload:any) => ({type:Types.ENABLE_HOOK_MAP,payload});
const pushGlobalPatient = (payload:any) => ({type:Types.SETGLOBALSEARCH, payload});
const pushtoMapAddress = (payload:any) => ({type:Types.ADD_MAP,payload});
const pushtoCancelAppt = (payload:any) => ({type:Types.SETCANCELAPPT, payload});
const pushPatientEpicScreenPop = (payload:any) => ({type:Types.ONESCREENPOPSET, payload});
 export interface Action<T, P = any> {
    type: T,
    payload: P,
}

const initial: any = {
    patients: [],
    selected: undefined,
};

// export const fetchPatientEpic = (action$: { pipe: (arg0: any, arg1: any) => void; }) => action$.pipe(
//     ofType(Types.CALLER),
//     mergeMap(action => (
//       ajax.getJSON(`https://api.myjson.com/bins/${action.payload}`).pipe(
//       map(response => fetchCallerFulfilled(response))
//     )
//     )

//     )
//   );





// call epic for patient search by phone
export const fetchPatientEpic = (context:any) => (
    (action$:any) => {
        const {server}=context;
        return action$.pipe(
            ofType(Types.CALLERPATIENT),
            mergeMap(action => {
                //var pay=action.payload;
                const getRequest =  (payload: any) => {
                    // const response =  fetch(`https://api.myjson.com/bins/${payload.number}`)
                    const data= {
                        "PhoneNumber":payload.number
                    }
                    const response =  server.post({
                        path:"getpatientlookup",
                        data:data
                    })
                         .then((response: any) => response[0])
                    return from(response)
                }

                return getRequest(action.payload).pipe(

                        map(response => fetchCallerFulfilled(response))



                )
            })
        )
    }
);

// call DB for patient search by phone
export const fetchPatientFromDB = (context:any) => (
    (action$:any) =>{
        const {server} = context;
        return action$.pipe(
            ofType(Types.CALLERPATIENT),
            mergeMap(action => {
                const getCallerDetails = (payload) => {
                    const response=server.get({
                        path:"getcallerdetails?phone="+payload.number+"&typename=patient",
                    }).then((response:any)=>response[0])
                return from(response);
                }
                return getCallerDetails(action.payload).pipe(
                    map(response => pushtoSETCallerPatient(response))
            )
            })
        )
}

);


export const pushCallerPatEpic = (context:any) => (
    (action$:any) => {
            return action$.pipe(
                    ofType(Types.SET, Types.RESET),
                    map(action =>pushtoCallerPatient(action.payload))

            )
    }
);

// sned nomatch for patient for provider match
export const patientNoMatchEpic = (context:any) => (
    (action$:any) => {
        return action$.pipe(
            ofType(Types.CALLERPROVIDER),
            map(action => {
                return fetchCallerFulfilled([]);
             })
        )
    }
)


export const fetchCalledToEpic = (context:any) => (
    (action$:any) => {
        const {server}=context;
        return action$.pipe(
            ofType(Types.CALLERPATIENT,Types.CALLERPROVIDER),
            mergeMap(action => {
                //var pay=action.payload;
                const getRequest =  (payload: any) => {
                    // const response =  fetch(`https://api.myjson.com/bins/${payload.number}`)
                    const data= {
                        "phone":payload.dnis
                    }
                    const response =  server.get({
                        path:"getentitydetails?phone="+payload.dnis,

                    })
                         .then((response: any) => response[0])
                    return from(response)
                }

                return getRequest(action.payload).pipe(

                        map(response => pushtoCalledTo(response))



                )
            })
        )
    }
);

export const fetchMapToEpic = (context:any) => (
    (action$:any) => {
        const {server}=context;
        return action$.pipe(
            ofType(Types.CALLERPATIENT,Types.CALLERPROVIDER,Types.SELECT),
            mergeMap(action => {
                return pushtoMap(true);
            })
        )
    }
);

export const fetchAddressOfMapToEpic = (context:any) => (
    (action$:any) => {
        const {server}=context;
        return action$.pipe(
            ofType(Types.SELECT),
            mergeMap(action => {
                var dataresponse=action.payload;
                if(isArray(dataresponse)){
                    dataresponse = dataresponse[0];
                }

                const getRequest =  (dataresponse) => {
                    let response;
                    if(dataresponse && dataresponse.Addresses) {
                        const add = array(dataresponse.Addresses).filter((a: any) => (
                            a.Type === 'Permanent'
                        )).map((a: any) => (
                            address(
                                a,
                            )
                        ));
                        let patientAddress= (add && add.length>0)?add[0]:null;
                        let mapaddress = "";
                        let phone = "";
                        if(patientAddress!=null){
                            mapaddress = `${patientAddress.country && patientAddress.country.trim().length > 0 ? `${patientAddress.country}${','}` : ''}${patientAddress.state && patientAddress.state.trim().length > 0 ? `${patientAddress.state}${','}` : ''} ${patientAddress.city && patientAddress.city.trim().length > 0 ? `${patientAddress.city}${','}` : ''}${patientAddress.zip && patientAddress.zip.trim().length > 0 ? `${patientAddress.zip}` : ''}`;
                            phone = (patientAddress.phones && patientAddress.phones[0])? patientAddress.phones[0].num : '';

                        }
                        console.log('mapaddress:',mapaddress);
                        console.log('phone:',phone);

                        const payload = [{
                            mapaddress: mapaddress,
                            phone: phone,
                            initmaploop: true
                        }
                        ]

                        return from(payload);
                    } else {
                        const payload:any = [];
                            return from(payload);
                    }

                }

                //  let response = getRequest(dataresponse);
                //  return  pushtoMapAddress(response);
                 return getRequest(dataresponse).pipe(
                    map(response => pushtoMapAddress(response))
                    )

            })
        )
    }
);



export const fetchApptEpic = (context:any) => (
    (action$:any) => {
        const {server}=context;
        return action$.pipe(
            ofType(Types.SELECT),
            mergeMap(action => {
                var dataresponse=action.payload;
                if(isArray(dataresponse)){
                    dataresponse = dataresponse[0];
                }
                const getRequest =  (dataresponse) => {
                    let response;
                    if(dataresponse && dataresponse.PatientID) {
                        let id= dataresponse.PatientID.find((id:any) => {
                            if(id['Type'] === "EPI") {
                                return id['ID']
                            }
                    });

                        const data= {
                            // "PatientID":"E5597"
                            "PatientID":id.ID
                        }
                        const response =  server.post({
                            path:"getpatientappointment",
                            data:data
                        })
                             .then((response: any) => response[0])
                        return from(response)
                    } else {
                            return from([]);
                    }

                }

                return getRequest(dataresponse).pipe(
                    map(response => pushtoAppt(response))
                    )
            })
        )
    }
);

export const pushCancelApptToEpic = (context:any) => (
    (action$:any) => {
        const {server}=context;
        return action$.pipe(
            ofType(Types.CANCELAPPT),
            mergeMap(action => {
                var dataresponse=action.payload;

                const getRequest =  (dataresponse:any) => {
                    if(dataresponse) {
                        const response =  server.handle({
                            path:"cancelappointment?PatientID="+dataresponse.PatientID+"&ContactID="+dataresponse.ContactID+"&Reason="+dataresponse.Reason+"&Comment="+dataresponse.Comment+"",                            
                        }, 'delete')
                             .then((response: any) => response[0])
                        return from(response)
                    } else {
                            return from([]);
                    }

                }

                return getRequest(dataresponse).pipe(
                    map(response => pushtoCancelAppt(response))
                    )
            })
        )
    }
);


export const fetchRefEpic = (context:any) => (
    (action$:any) => {
        const {server}=context;
        return action$.pipe(
            ofType(Types.SELECT),
            mergeMap(action => {
                var dataresponse=action.payload;
                if(isArray(dataresponse)){
                    dataresponse = dataresponse[0];
                }
                const getRequest =  (dataresponse) => {
                    let response;
                    if(dataresponse && dataresponse.PatientID) {
                        let id= dataresponse.PatientID.find((id:any) => {
                            if(id['Type'] === "EPI") {
                                return id['ID']
                            }
                    });

                        const data= {
                            // "PatientID":"E5597"
                            "PatientID":id.ID
                        }
                        const response =  server.post({
                            path:"getpatientreferrals",
                            data:data
                        })
                             .then((response: any) => response[0])
                        return from(response)
                    }
                    else {
                        return from([]);
                    }

                }

                return getRequest(dataresponse).pipe(
                    map(response => pushtoRef(response))
                    )
            })
        )
    }
);





//Claer gadget on Call end

export const pushClearCalledTo = (context:any) => (
    (action$:any) => {
            return action$.pipe(
                    ofType(Types.RESET),
                    map(action =>clearCalledTo(action.payload))

            )
    }
);

export const pushClearCaller = (context:any) => (
    (action$:any) => {
            return action$.pipe(
                    ofType(Types.RESET),
                    map(action =>clearCaller(action.payload))

            )
    }
);

export const pushClearReferal = (context:any) => (
    (action$:any) => {
            return action$.pipe(
                    ofType(Types.RESET),
                    map(action =>clearReferal(action.payload))

            )
    }
);

export const pushClearAppt = (context:any) => (
    (action$:any) => {
            return action$.pipe(
                    ofType(Types.RESET),
                    map(action =>clearAppt(action.payload))

            )
    }
);

export const pushClearGlobalSearch = (context:any) => (
    (action$:any) => {
            return action$.pipe(
                    ofType(Types.RESET),
                    map(action =>clearGlobalSearch(action.payload))

            )
    }
);



export const fetchPCPEpic = (context:any) => (
    (action$:any) => {
        const {server}=context;
        return action$.pipe(
            ofType(Types.SELECT),
            mergeMap(action => {
                var dataresponse=action.payload;
                if(isArray(dataresponse)){
                    dataresponse = dataresponse[0];
                }
                const getRequest =  (payload) => {
                    let response;
                    if(dataresponse && dataresponse.PatientID) {
                        let id= dataresponse.PatientID.find((id:any) => {
                            if(id['Type'] === "EPI") {
                                return id['ID']
                            }
                    });

                        const data= {
                            // "PatientID":"E5597"
                            "PatientID":id.ID
                        }
                        const response =  server.post({
                            path:"getpcp",
                            data:data
                        })
                             .then((response: any) => response[0])
                        return from(response)
                    } else {
                            return from([]);
                    }
                }

                return getRequest(action.payload).pipe(

                        map(response => pushtoPCP(response))



                )
            })
        )
    }
);

// call epic for patient search by phone
export const fetchGlobalPatientEpic = (context:any) => (
    (action$:any) => {
        const {server}=context;
        return action$.pipe(
            ofType(Types.GETGLOBALSEARCH),
            mergeMap(action => {
                //var pay=action.payload;
                const getRequest =  (payload: any) => {
                    // const response =  fetch(`https://api.myjson.com/bins/${payload.number}`)
                    const data= {
                        "Name": payload.name,
                        "DateOfBirth": payload.dob,
                        "PatientID": payload.mrn,
                        "PhoneNumber": payload.phone
                    }
                    const response =  server.post({
                        path:"getpatientsearchglobal",
                        data:data
                    })
                         .then((response: any) => response[0])
                    return from(response)
                }

                return getRequest(action.payload).pipe(

                        map(response => pushGlobalPatient(response))



                )
            })
        )
    }
);

// call epic for patient screenpop
export const fetchPatientEpicScreenPop = (context:any) => (
    (action$:any) => {
        const {epicserver}=context;
        console.log('epicserver::',epicserver);
        return action$.pipe(
            ofType(Types.ONESCREENPOPGET),
            mergeMap(action => {
                //var pay=action.payload;
                const getRequest =  (payload: any) => {
                    // const response =  fetch(`https://api.myjson.com/bins/${payload.number}`)
                    
                    const response =  epicserver.get({
                        path:"?agentId="+payload.agentId+"&location="+payload.location+"&patientId="+payload.patientid+"&activityId="+payload.activityId+"&eventType=Epic"
                    })
                         .then((response: any) => response[1]).catch((response: any) => response)
                         
                         return from(response);
                    
                }

                return getRequest(action.payload).pipe(

                        map(response => pushPatientEpicScreenPop(response))



                )
            })
        )
    }
);

// Patient Store
export const patients = (context: any) => {
    const { log } = context;
    return (state: typeof initial = initial, action: Action<Types>) => {
        log.debug(
            'one-state-patients',
            'reducer', {
                action,
            }
        );

        let updated = state;
        const { type, payload } = action;
        switch (type) {
            case Types.SET:
                const  patientdetails  = payload;
                let selected;
                // if ((patientdetails) && (patientdetails.length >1)) {
                //   selected = patientdetails[0];
                // }
                updated = {
                  selected,
                  patientdetails,
                  orgList: undefined,
                };
                break;

            case Types.RESET:
                updated = initial;
                break;

            case Types.SELECT:
                updated = {
                    ...updated,
                    selected: payload,
                };
                break;
        }
        return updated;
    }
}
