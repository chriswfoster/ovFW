
export const enum Types {
    SET = 'one-patients-set',
    RESET = 'one-patients-reset',
    SELECT = 'one-patients-select',
    UNSELECT = 'one-patients-unselect',
    ADD = 'one-patients-add',
    UPDATE = 'one-patients-update',
    DELETE = 'one-patients-delete',
};

export interface Action<T, P = any> {
    type: T,
    payload: P,
}

const initial: any = {
    patients: [],
    selected: undefined,
};

export const reducer = (context: any) => {
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
                updated = {
                    patients: [
                        ...payload
                    ],
                    selected: false,
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
