import {
    createStore,
    combineReducers,
    applyMiddleware,
} from 'redux';

import {
    VoiceEvent,
} from 'one-interact-voice'

import {
    interact,
    reducer as voice,
    Actions as VoiceActions,
} from 'one-state-interact-voice';

import {
    reducer as hotkeys,
} from 'one-state-hotkeys';



import {
    reducer as patients,
    Types as PatientTypes,
} from './patient';


import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { build as buildEpic } from '../epics';
import { createEpicMiddleware } from 'redux-observable';

import {patients as patient,fetchPatientEpic } from '../epics/patient';
import { map } from "./map";
import { appointmentsreducer } from './appointment/src/appointments';
import { referalsreducer } from "./referals/src/referals";
import { drawer } from "./drawer";
import { patientdrawer } from "./patientdrawer";
import { callerreducer,callerselection } from "./caller";
import { pcpreducer } from "./pcp";
import { calledtoreducer } from "./calledto";
import { calleridentify } from './calleridentify';
import { globalsearch } from './globalsearch';
import { screenpop } from './screenpop';

const epicMiddleware = createEpicMiddleware();

export const build = (context: any): any => {
    const { log } = context;
    const store = createStore(
        combineReducers({
            voice: voice(context),
            hotkeys: hotkeys(context),
            patient:patient(context),
            screenpop:screenpop(context),
            map,
            appointment:appointmentsreducer(context),
            referal:referalsreducer(context),
            caller:callerreducer(context),
            callerselection:callerselection(context),
            pcp:pcpreducer(context),
            calledto:calledtoreducer(context),
            calleridentify:calleridentify(context),
            drawer,
            patientdrawer,
            globalsearch:globalsearch(context)
        }),

        applyMiddleware(
            epicMiddleware
        ),

    );
    epicMiddleware.run(buildEpic (context));
    return store;
};
