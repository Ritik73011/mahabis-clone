import { Box, Flex, Image, useToast } from "@chakra-ui/react";
import { useState } from "react";
function SingleCart({call,arr,ele,idx,del}){

    const [qnt,setQnt] = useState(ele.qnt)
    let toast = useToast();
    const incQnt = ()=>{
        ele.qnt = qnt+1;
        setQnt((pre)=>pre+1)
        localStorage.setItem("cart",JSON.stringify(arr));
        call();
    }
    const decQnt = ()=>{
      if(qnt!==1){
        ele.qnt = qnt-1;
        setQnt((pre)=>pre-1)
        localStorage.setItem("cart",JSON.stringify(arr));
        call();
      }
      else{
        toast({
            title: `${'product should have atleast 1 quantity'}`,
            position: "top",
            icon: " ",
            isClosable: true,
            colorScheme:"tomato"
          })
      }
    }
    return <div>
        <Flex gap={'24px'} w='100%' mt={'1px'}>
            <Box>
                <Image width={'90px'} h='90px' src={ele.image.img1}/>
            </Box>
        <Box textAlign={'left'} width='100%'>
            <p onClick={()=>del(idx)} style={{textAlign:"right",cursor:"pointer"}}>×</p>
            <p style={{fontSize:"13px", color:"",fontWeight:"600"}}>{ele.title} in {ele.color}</p>
            <p style={{fontSize:"9px", color:"#8A8A8A",fontWeight:""}}>{ele.color}</p>
            <p style={{fontSize:"9px", color:"#8A8A8A",fontWeight:""}}>SIZE EU 37</p>
            <Flex justifyContent={'space-between'} mt='10px'>
                <Flex gap={'0px'}  fontSize='12px' alignItems={'center'}>
                    <p onClick={decQnt} style={{border:"1px solid grey",padding:"0 7px",cursor:"pointer"}}>-</p>
                    <p style={{border:"1px solid grey",padding:"0 7px"}}>{qnt}</p>
                    <p onClick={incQnt} style={{border:"1px solid grey",padding:"0 7px",cursor:"pointer"}}>+</p>
                </Flex>
                <p style={{fontSize:"12px",fontWeight:"600"}}>₹{ele.price}</p>
            </Flex>
        </Box>
        </Flex>
        <hr style={{width:"100%",marginTop:"8px"}} />
    </div>
}
export default SingleCart;