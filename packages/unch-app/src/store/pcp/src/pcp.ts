
export const enum Types {
    PCPSELECT = 'pcp-select',
    PCPCLEAR = 'pcp-clear',
};

export interface Action<T, P = any> {
    type: T,
    payload: P,
}
const initial: any = {};

export const pcpreducer = (context: any) => {
    const { log } = context;
    return (state:typeof initial = initial,action: Action<Types>) => {
        log.debug(
            'one-state-patients-pcp',
            'reducer', {
                action,
            }
        );

        let updated = state;
        const { type, payload } = action;
        let pcp=payload
        switch (type) {
            case Types.PCPSELECT:
                updated = pcp;
                break;

            case Types.PCPCLEAR:
                updated = {

                };
                break;

        }
        return updated;
    }
}
