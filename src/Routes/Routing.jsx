import {Route,Routes} from 'react-router-dom'
import HomePage from '../Components/HomePage/HomePage';
import { Products } from '../Components/Product_Page/product';
const CustumRouting = ()=>{

    return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/products/:gen/:cat' element={<Products/>}/>
            {/*<Route path='/cart' element={<Cart/>}/>*/}
          
          {/*Sonu Rounting*/}
        </Routes>
    </div>
    );
}
export default CustumRouting;