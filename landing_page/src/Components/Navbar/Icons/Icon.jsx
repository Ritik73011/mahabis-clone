
import { Flex } from '@chakra-ui/react';
import './Icon.css';
function Icon() {
  return (
    <div className='iconDiv'>
     <img src="https://cdn.shopify.com/s/files/1/0238/5795/t/29/assets/icon-myaccount.png?v=85297090699021414941656596220" alt="" />
        <img src="https://gepi.global-e.com/content/images/flags/in.png" alt="" />
        <Flex>
        <img src="https://cdn.shopify.com/s/files/1/0238/5795/t/29/assets/icon-cart.png?v=182661896060636914941656596211" alt="" />
        <span className='cartQnt'>99</span>
        </Flex>
    </div>
  );
}

export default Icon;
