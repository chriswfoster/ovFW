
import { createEpicMiddleware,combineEpics,ofType } from 'redux-observable';
import { map,mergeMap } from 'rxjs/operators';
import {ajax } from 'rxjs/ajax';
import { from, Observable } from 'rxjs';

import { useCtx } from 'one-ui-provider';
import { isArray } from 'util';


export const enum Types {
    SET = 'one-caller-set',
    RESET = 'one-caller-reset',
    SELECT = 'one-caller-select',
    UNSELECT = 'one-caller-unselect',
    ADD = 'one-caller-add',
    UPDATE = 'one-caller-update',
    DELETE = 'one-caller-delete',
    PATIENT='one-caller-patient',
    PROVIDER='one-caller-provider',
    OTHER='one-caller-other',
    CALLERPROVIDER= 'caller-provider',

};


const fetchCaller = (payload:any) => ({ type:Types.SET,payload});
const oncecallerupdate = (payload:any) => ({type:Types.UPDATE,payload});

 export interface Action<T, P = any> {
    type: T,
    payload: P,
}


export const updateCallertoDB = (context:any ) => (

    (action$:any) =>{
            const{server}=context;
            return action$.pipe(
                ofType(Types.UPDATE),
                mergeMap(action => {
                        const updateDetails = (payload) => {
                                const data = payload;
                                const response = server.post({
                                        path:"callerdetails",
                                        data:data
                                }).then((response: any) =>response)
                        return from(response);
                        }
                        return updateDetails(action.payload).pipe(
                            map(response => fetchCaller(response))
                        )
                })

            )
    }
)

export const ferchCallerFromDB = (context:any) => (
        (action$:any) =>{
                const {server} = context;
                return action$.pipe(
                    ofType(Types.CALLERPROVIDER),
                    mergeMap(action => {
                        const getCallerDetails = (payload) => {
                            const response=server.get({
                                path:"getcallerdetails?phone="+payload.number+"&typename=provider",
                            }).then((response:any)=>response)
                        return from(response);
                        }
                        return getCallerDetails(action.payload).pipe(
                            map(response => fetchCaller(response))
                    )
                    })
                )
        }
)


