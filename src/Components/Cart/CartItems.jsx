import { Box, Button, Flex,Image,useMediaQuery } from "@chakra-ui/react";
import SingleCart from "./SingleCart";
import './Cart.css'
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { context } from "../Navbar/ContextApi/Context";
import { useState } from "react";
function CartItems()
{
    const [isLargerThan768] = useMediaQuery('(max-width: 768px)')
    let nevigate = useNavigate();
    let {setLen} = useContext(context); 
    let [t,setT] = useState(1);
    let arr = JSON.parse(localStorage.getItem("cart"))||[];

    const toatlPrices = ()=>{
        let tt = arr.reduce((a,v) =>  a = a + +v.price*+ +v.qnt , 0 );
        setT(tt);
    }

    useEffect(()=>{
        toatlPrices();
    },[])
    const deleteProduct = (i) => {
        arr.splice(i, 1);
        localStorage.setItem("cart", JSON.stringify(arr));
        let temp = JSON.parse(localStorage.getItem("cart"))||[];
        setLen(temp.length)
        toatlPrices();
      };
      const checkout = ()=>{
        nevigate('/checkout')
      }
    return <Flex padding={'0 6px'} justifyContent={'center'} fontFamily='Raleway,sans-serif'>
        {arr.length>0?<Box display={isLargerThan768?'block':'flex'} className="mediaLayout" gap={'40px'} textAlign={'left'} maxWidth='1033px' width={'100%'} m='16px 0'>
            <div className="cartDiv">
            {
                arr.map((ele,idx)=>{
                    return <SingleCart key={idx+1} arr={arr} call={toatlPrices} del={deleteProduct} idx={idx} ele={ele}/>
                })
            }
            </div>

            <Box maxW={'300px'} width={'100%'} m={isLargerThan768?'16px auto':'0'}>
                <Flex mt={'16px'} fontSize={'12px'} justifyContent='space-between'>
                    <p style={{color:"#8A8A8A"}}>SUBTOTAL</p>
                    <p style={{fontWeight:"600"}}>₹{t}</p>
                </Flex>
                <Flex mt={'16px'} fontSize={'12px'} justifyContent='space-between'>
                    <p style={{color:"#8A8A8A"}}>SHIPPING</p>                    
                    <p style={{fontWeight:"600"}}>calculated at checkout</p>                    
                </Flex>
                <Button onClick={checkout} mt={'16px'} p='10px' color={'white'} fontSize='13px' bg={'#F34C3F'} w={'100%'}>CHECKOUT</Button>
                <Button mt={'10px'} fontSize='12px' p='10px' w={'100%'}>CONTINUE SHOPPING</Button>

            </Box>
        </Box>:<Image src="https://cdn-icons-png.flaticon.com/512/2762/2762885.png"/>}
    </Flex>
}
export default CartItems;