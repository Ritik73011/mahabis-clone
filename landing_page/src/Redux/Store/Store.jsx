import { legacy_createStore as createStore } from "redux";
import bestSellerReducer from "../Reducer/HomePageReducer/bestSellerReducer";
export const store = createStore(
  bestSellerReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
