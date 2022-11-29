import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../Login';
import Signup from '../Signup';
import ForgotPassword from '../ForgotPassword';

const RoutingS1 = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/forgotPassword' element={ <ForgotPassword />} />
        </Routes>
    </div>
  )
}

export default RoutingS1
