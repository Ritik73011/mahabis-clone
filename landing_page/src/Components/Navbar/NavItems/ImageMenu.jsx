
import { CloseButton, Divider, Flex } from '@chakra-ui/react'
import './ImageMenu.css'

function ImageMenu({name1,name2,img1,img2}){

    return <Flex gap='16px' className='imgDiv'>
    <p><CloseButton color={'#b0b0b0'}/></p>
    <Divider orientation='vertical'/>
    <div className='imgMenuGrid'>
        <div>
        <img src={img1} alt="" />
        <p>{name1}</p>
        </div>
        <div>
            <img className='secondImg' src={img2} alt="" />
            <p>{name2}</p>
        </div>
    </div>
    </Flex>
}
export default ImageMenu