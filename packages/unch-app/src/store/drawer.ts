const initial: any = {};

export const drawer = (state = initial, action: { type: any; payload: any; }) => {
  let updated = state;
  const { type, payload } = action;
  switch (type) {
    case "drawer":
      updated = {
        ...payload
      };
      break;
  }
  return updated;
};
