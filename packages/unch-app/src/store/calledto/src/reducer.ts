
export const enum Types {
    CALLEDTOSELECT = 'calledto-select',
    CALLEDTOCLEAR = 'calledto-clear',
};

export interface Action<T, P = any> {
    type: T,
    payload: P,
}
const initial: any = {};

export const calledtoreducer = (context: any) => {
    const { log } = context;
    return (state:typeof initial = initial,action: Action<Types>) => {
        log.debug(
            'one-state-calledto',
            'reducer', {
                action,
            }
        );

        let updated = state;
        const { type, payload } = action;
        let calledto=payload
        switch (type) {
            case Types.CALLEDTOSELECT:
                updated = calledto;
                break;

            case Types.CALLEDTOCLEAR:
                updated = {

                };
                break;

        }
        return updated;
    }
}
