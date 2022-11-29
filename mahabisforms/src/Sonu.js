import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Signup from './ComponentsS/Signup';
import Login from './ComponentsS/Login';
import { Provider } from 'react-redux';
import myStoreS1 from './ComponentsS/ReduxS/ReduxStoreS/StoreS1';
import RoutingS1 from './ComponentsS/RoutingS/RoutingS1';



const Sonu = () => {
  return (
    <div>
      <BrowserRouter>
        <Provider store={myStoreS1}>
          <RoutingS1 />
        </Provider>
        </BrowserRouter>
    </div>
  )
}

export default Sonu;
