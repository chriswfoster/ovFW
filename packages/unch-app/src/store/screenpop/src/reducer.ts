
export enum Types {
  SET = 'one-screenpop-set',
  RESET = 'one-screenpop-reset',
};

export interface Action<T, P = any> {
  type: T,
  payload: P,
}

const initial: any = {
  active: false,
  dnis: undefined,
};

export const screenpop = (context: any) => {
  const { log } = context;
  return (state: typeof initial = initial, action: Action<Types>) => {
      console.debug (
          'screenpop', action,
      );

      let updated = state;
      const { type, payload } = action;
      let active = false;
      let screenpopmsg = '';
      if(payload && payload === 'Patient_Request_Sent_Successfully'){
        active = true;
        screenpopmsg = 'Epic Screen pop to the Patient Chart is successfully initiated'
      }else{
        active = true;
        screenpopmsg = 'Epic Screenpop failed. Please make sure you are connected to the Snap Adapter'
      }

      switch (type) {
          case Types.SET:
              updated = {
                  ...updated,
                  active: active,
                  screenpopmsg: screenpopmsg
              };
              break;

          case Types.RESET:
              updated = initial;
              break;
      }
      return updated;
  }
}
