import {Route,Routes} from 'react-router-dom'
import HomePage from '../Components/HomePage/HomePage';
import { Products } from '../Components/Product_Page/product';
import Profile from '../Components/Profile/Profile';
import { PrivateRouting } from "./PrivateRouting";
const CustumRouting = ()=>{

    return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/products/:gen/:cat' element={<Products/>}/>
            <Route path='/profile' element={<PrivateRouting><Profile /></PrivateRouting>} />
            {/*<Route path='/cart' element={<Cart/>}/>*/}
          
          {/*Sonu Rounting*/}
        </Routes>
    </div>
    );
}
export default CustumRouting;