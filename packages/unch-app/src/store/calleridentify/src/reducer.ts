
export const enum Types {
    CALLERPROVIDER= 'caller-provider',
    CALLERPATIENT= 'caller-patient',


};

export interface Action<T, P = any> {
    type: T,
    payload: P,
}



export const calleridentify = (context: any) => {
    const { log } = context;
    return (state:any, action: Action<Types>) => {
        log.debug(
            'one-caller-identify',
            'reducer', {
                action,
            }
        );

        let updated = {};
        const { type, payload } = action;


        switch (type) {

            case Types.CALLERPATIENT:
                    updated =
                        payload

                break;
            case Types.CALLERPROVIDER:
                updated =
                    payload
                break;
        }
        return updated;
    }
}
