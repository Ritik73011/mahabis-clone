import { legacy_createStore as createStore,combineReducers } from "redux";
import bestSellerReducer from "../Reducer/HomePageReducer/bestSellerReducer";
import productReducer from '../Reducer/ProductPage/productReducer'
const reducers = combineReducers({
  bestSellerReducer,
  productReducer
})
export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
