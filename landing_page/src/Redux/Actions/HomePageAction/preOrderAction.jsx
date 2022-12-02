export const preOrderAction = (payload, dispatch) => {
  dispatch({
    type: "PRE",
    payload: payload,
  });
};
