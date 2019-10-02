
export const enum Types {
    APPTSELECT = 'appointments-select',
    APPTCLEAR = 'appointments-clear',
    SETCANCELAPPT='set-cancel-appt',
    RESETAPPTNOTIFICATION='reset-appointment-notification'
};

export interface Action<T, P = any> {
    type: T,
    payload: P,
}
const initial: any = {
    
};

export const appointmentsreducer = (context: any) => {
    const { log } = context;
    return (state:typeof initial = initial,action: Action<Types>) => {
        log.debug(
            'one-state-patients-appointments',
            'reducer', {
                action,
            }
        );



        let updated = state;
        const { type, payload } = action;
        //let appointments=payload;

        let cancelmsg = '';
        let apptcode = '0';
        if(type === Types.SETCANCELAPPT){
            if(Array.isArray(payload) && payload.length>0){
                let val = payload[0];
                if(val && val.Success && val.Success === '1'){
                    cancelmsg = 'Appointment Successfully Cancelled';
                    apptcode = val.Success;
                }else if(val && val.Success && val.Success === '0'){
                    cancelmsg = val.Error;
                    apptcode = val.Success;
                }
            }else{
                cancelmsg = 'Unable to cancel the appointment, please try to cancel the appointment in Epic Hyperspace';
            }
        }



        switch (type) {
            case Types.APPTSELECT:
                updated = {
                    ...updated,
                    appointments: [
                        ...payload
                    ]
                };
                break;

            case Types.APPTCLEAR:
                updated = {

                };
                break;
            case Types.SETCANCELAPPT:
                updated = {
                    ...updated,
                    cancelmsg: cancelmsg,
                    apptcode: apptcode
                };
              break;
              case Types.RESETAPPTNOTIFICATION:
                updated = {
                    ...updated,
                    ...payload
                };
              break;  
             
              

        }
        return updated;
    }
}
