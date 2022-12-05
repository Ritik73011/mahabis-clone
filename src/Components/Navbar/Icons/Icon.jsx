
import { Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, useDisclosure } from '@chakra-ui/react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { context } from '../ContextApi/Context';
import CartItems from '../../Cart/CartItems'
import './Icon.css';
function Icon() {
  let nevigate = useNavigate();
  let {length} = useContext(context);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const goToCart = () =>{
    nevigate('/cart')
  }
  return (
    <div className='iconDiv'>
    <Link to={'/login'}> <img className='acountInfo' src="https://cdn.shopify.com/s/files/1/0238/5795/t/29/assets/icon-myaccount.png?v=85297090699021414941656596220" alt="" /></Link>
        <img src="https://gepi.global-e.com/content/images/flags/in.png" alt="" />
        <Flex onClick={goToCart}>
        <img src="https://cdn.shopify.com/s/files/1/0238/5795/t/29/assets/icon-cart.png?v=182661896060636914941656596211" alt="" />
        <span className='cartQnt'>{length}</span>
        </Flex>


        <Drawer onClose={onClose} placement='right' isOpen={isOpen} size={'sm'}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>cart</DrawerHeader>
          <Divider/>
          <DrawerBody>
           { /*<CartItems/>*/}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default Icon;
