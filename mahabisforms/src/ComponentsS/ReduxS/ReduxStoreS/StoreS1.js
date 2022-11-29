import { legacy_createStore as createStore } from 'redux';
import reducerS1 from '../ReducersS/reducerS1';

const myStoreS1 = createStore(reducerS1, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default myStoreS1;