
export const enum Types {
    REFSELECT = 'referals-select',
    REFCLEAR = 'referals-clear',
};

export interface Action<T, P = any> {
    type: T,
    payload: P,
}
const initial: any = {};

export const referalsreducer = (context: any) => {
    const { log } = context;
    return (state:typeof initial = initial,action: Action<Types>) => {
        log.debug(
            'one-state-patients-referals',
            'reducer', {
                action,
            }
        );

        let updated=state;
        const { type, payload } = action;
        let refer=payload
        switch (type) {
            case Types.REFSELECT:
                updated = refer;
                break;

            case Types.REFCLEAR:
                updated = {

                };
                break;

        }
        return updated;
    }
}
