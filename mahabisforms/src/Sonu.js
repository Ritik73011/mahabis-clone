import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Signup from './ComponentsS/Signup';
import { Provider } from 'react-redux';
import myStoreS1 from './ComponentsS/ReduxS/ReduxStoreS/StoreS1';



const Sonu = () => {
  return (
    <div>
      <BrowserRouter>
        <Provider store={myStoreS1}>
          <Signup />
        </Provider>
        </BrowserRouter>
    </div>
  )
}

export default Sonu;
