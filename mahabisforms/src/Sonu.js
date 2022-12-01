import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutingS1 from './ComponentsS/RoutingS/RoutingS1';



const Sonu = () => {
  return (
    <div>
      <BrowserRouter>
          <RoutingS1 />
        </BrowserRouter>
    </div>
  )
}

export default Sonu;
