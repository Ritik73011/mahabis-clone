import { Box, Flex, Image } from "@chakra-ui/react";

function OrderH({ele}){
    return <div>
    <Flex gap={'24px'} w='100%' mt={'1px'}>
        <Box>
            <Image width={'90px'} h='90px' src={ele.image.img1}/>
        </Box>
    <Box textAlign={'left'} width='100%'>
        <p style={{fontSize:"13px", color:"",fontWeight:"600"}}>{ele.title} in {ele.color}</p>
        <p style={{fontSize:"9px", color:"#8A8A8A",fontWeight:""}}>{ele.color}</p>
        <p style={{fontSize:"9px", color:"#8A8A8A",fontWeight:""}}>SIZE EU 37</p>
        <Flex justifyContent={'space-between'} mt='10px'>
            <Flex gap={'0px'}  fontSize='12px' alignItems={'center'}>
               <p>Quantity: {ele.qnt}</p>
            </Flex>
            <p style={{fontSize:"12px",fontWeight:"600"}}>₹{ele.price}</p>
        </Flex>
    </Box>
    </Flex>
    <hr style={{width:"100%",marginTop:"8px"}} />
</div>
}
export default OrderH;