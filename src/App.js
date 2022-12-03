import './App.css';
import Nav from './Components/Navbar/Nav'
import {ChakraProvider} from '@chakra-ui/react'
import CustumRouting from './Routes/Routing';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login'
import Signup from './Components/Signup'
import Ckeckout from './Components/Checkout'
import ForgotPassword from './Components/ForgotPassword'
import OrderPlaced from './Components/OrderPlaced'
function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Nav />
      </ChakraProvider>
      <div style={{ marginTop: "72px" }}>
       <ChakraProvider>
        <CustumRouting/>
       </ChakraProvider>
      </div>

      <Routes>
      <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/forgotPassword' element={ <ForgotPassword />} />
            <Route path='/checkout' element={<Ckeckout />} />
            <Route path='/orderplaced' element={<OrderPlaced />} />
            <Route path="*" element={<h1>Page not found</h1> }/>
      </Routes>
    </div>
  );
}

export default App;
