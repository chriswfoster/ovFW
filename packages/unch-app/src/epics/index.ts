import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import {patients,fetchPatientEpic,fetchApptEpic,fetchRefEpic, pushCallerPatEpic, fetchPCPEpic,
            fetchCalledToEpic,patientNoMatchEpic,
            pushClearCalledTo,pushClearCaller,pushClearReferal,pushClearAppt,
            fetchGlobalPatientEpic, fetchAddressOfMapToEpic, pushClearGlobalSearch,
            pushCancelApptToEpic, fetchPatientEpicScreenPop, fetchPatientFromDB
            } from './patient';
import {updateCallertoDB, ferchCallerFromDB} from './caller';

export const rootEpic = combineEpics (
    fetchPatientEpic
);

// export const rootReducer = combineReducers ({
//         patients
// });


export const build = (context:any)=>(
    combineEpics (
        fetchPatientEpic (context),
        fetchApptEpic(context),
        fetchRefEpic(context),
        pushCallerPatEpic(context),
        fetchPatientFromDB(context),
        fetchPCPEpic(context),
        updateCallertoDB(context),
        fetchCalledToEpic(context),
        ferchCallerFromDB(context),
        pushClearCalledTo(context),
        pushClearCaller(context),
        pushClearReferal(context),
        pushClearAppt(context),
        patientNoMatchEpic(context),
        fetchGlobalPatientEpic(context),
        fetchAddressOfMapToEpic(context),
        pushClearGlobalSearch(context),
        pushCancelApptToEpic(context),
        fetchPatientEpicScreenPop(context)
    )
);