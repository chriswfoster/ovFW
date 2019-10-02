
export const enum Types {
    SET = 'one-caller-set',
    RESET = 'one-caller-reset',
    SELECT = 'one-caller-select',
    UNSELECT = 'one-caller-unselect',
    ADD = 'one-caller-add',
    UPDATE = 'one-caller-update',
    DELETE = 'one-caller-delete',
    PATIENT = 'one-caller-patient',
    PROVIDER = 'one-caller-provider',
    OTHER = 'one-caller-other',
    CALLERPROVIDER = 'caller-provider',
    CALLERPATIENT = 'caller-patient',
};

export interface Action<T, P = any> {
    type: T,
    payload: P,
}

const initial: any = {
    patients: [],
    providers: [],
    others: [],
    selected: undefined,
};
const intialselection: any = null;

export const callerreducer = (context: any) => {
    const { log } = context;
    return (state: typeof initial = initial, action: Action<Types>) => {
        log.debug(
            'one-caller-patients',
            'reducer', {
            action,
        }
        );

        let updated = state;
        const { type, payload } = action;
        let checktype = type;
        let patientpayload = payload;

        if (type === Types.SET) {
            log.debug(
                'one-caller-patientsssssssss',
                'TYPES SET', {
                action
            });
            if (payload && payload[0]) {
                let protype = payload[0].typeID || payload[0].typeName;
                if (protype === "patient") {
                    checktype = Types.PATIENT;
                    // check for the existing data and update the store with new data(from DB)
                    if (updated.patients != patientpayload) {
                        if(payload && payload.length>0) {
                            let copy =true;
                            let name = payload[0].name?payload[0].name:payload[0].Name;
                            if(patientpayload && patientpayload.length>0){
                                let patname=patientpayload[0].name?patientpayload[0].name:patientpayload[0].Name;
                                if(name === patname){
                                    copy = false;
                                }
                            }
                            if(copy){
                                payload.forEach(json => {
                                    patientpayload.push(json);
                                   });
                            }

                        }
                    }

                } else if (protype === "provider") {
                    checktype = Types.PROVIDER;
                } else if (protype === "other") {
                    checktype = Types.OTHER;
                }
            }
        } else if (type === Types.PATIENT) {
            // check for for store has reocrds from DB and update store with Patient.
            if (updated.patients != patientpayload) {
                patientpayload = updated.patients;
                if(payload && payload.length>0) {
                    payload.forEach(json => {
                        patientpayload.push(json);
                       });
                }


            }
        }

        switch (checktype) {
            case Types.PATIENT:
                updated = {
                    patients: patientpayload,
                    providers: updated.providers,
                    others: updated.others,
                    selected: 'patient',
                };
                break;
            case Types.PROVIDER:
                updated = {
                    patients:
                        updated.patients,
                    providers:
                        payload,
                    others:
                        updated.others,
                    selected: 'provider',
                };
                break;
            case Types.OTHER:
                updated = {
                    patients:
                        updated.patients,
                    providers:
                        updated.providers,
                    others:
                        payload,
                    selected: 'other',
                };
                break;
            case Types.RESET:
                updated = initial;
                break;

        }
        return updated;
    }
}
export const callerselection = (context: any) => {
    const { log } = context;
    return (state: typeof initial = intialselection, action: Action<Types>) => {
        log.debug(
            'one-caller-called-selection',
            'callerselection', {
            action,
        }
        );

        let updated = state;
        const { type, payload } = action;
        let checktype = type;

        switch (checktype) {

            case Types.SELECT:
                updated = payload

                break;
            case Types.UNSELECT:
                updated = intialselection

                break;
            case Types.RESET:
                updated = intialselection

                break;
        }
        return updated;
    }
}
