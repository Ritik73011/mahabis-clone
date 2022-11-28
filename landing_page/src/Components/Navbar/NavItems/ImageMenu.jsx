
import { CloseButton, Divider, Flex, Grid, PopoverCloseButton } from '@chakra-ui/react'
import './ImageMenu.css'

function ImageMenu({name,img1,img2}){

    return <Flex gap='16px' className='imgDiv'>
    <p><CloseButton/></p>
    <Divider orientation='vertical' size='xl'/>
    <div className='imgMenuGrid'>
        <img width='190px' height='215px' src="https://cdn.shopify.com/s/files/1/0238/5795/files/2_72fb26be-e2da-4153-ab1b-bed4caf9ac3d.jpg?v=1668504600" alt="" />
        <img className='secondImg' width='190px' height='215px' src="https://cdn.shopify.com/s/files/1/0238/5795/files/3_9441f258-ec1d-4485-a5ad-16e9085b789d.jpg?v=1668504819" alt="" />
    </div>
    </Flex>
}
export default ImageMenu