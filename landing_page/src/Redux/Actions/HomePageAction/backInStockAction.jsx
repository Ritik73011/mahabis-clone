export const backInStockAction = (payload, dispatch) => {
  dispatch({
    type: "STOCK",
    payload: payload,
  });
};
