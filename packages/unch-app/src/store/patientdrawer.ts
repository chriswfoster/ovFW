const initial: any = {};

export const patientdrawer = (state = initial, action: { type: any; payload: any; }) => {
  let updated = state;
  const { type, payload } = action;
  switch (type) {
    case "one-patient-drawer":
      updated =
        payload
      break;
  }
  return updated;
};
