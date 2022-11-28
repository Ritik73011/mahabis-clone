import {
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  /*PopoverArrow,*/
  Button,
  PopoverCloseButton
} from '@chakra-ui/react'
import {mens,womens,mensCollections,womensCollections,accessories} from '../NavArrays/NavArrays'
import {ChevronDownIcon,/*ChevronUpIcon*/} from '@chakra-ui/icons';
import './Menu.css';
import Icon from '../Icons/Icon';
import NavItems from '../NavItems/NavItems';
import Accessories from '../NavItems/Accessories';
import ImageMenu from '../NavItems/ImageMenu';

function MenuLists() {
  return (
    <div className='menulist'>
       
       <Flex>
       <Popover isLazy>
        <PopoverTrigger>
          <Button bg='none' padding='3' fontWeight='normal' fontSize='14px' _hover={{bg:'none',color:'black',fontWeight:'600'}} className='menuBtn'>Men <ChevronDownIcon ml='4px'/></Button>
        </PopoverTrigger>
        <PopoverContent pos='absolute' top='2' width='100%' bg='#f5f5f5'>
        <PopoverBody>
            <Flex gap='64px' justifyContent='center' padding='20px 16px'>
              <NavItems name={'mens'} arr={mens}/>
              <NavItems name={'collections'} arr={mensCollections}/>
              <Accessories name={'accessories'} arr={accessories}/>
              <ImageMenu/>
            </Flex>
        </PopoverBody>
      </PopoverContent>
      </Popover>

      <Popover isLazy>
        <PopoverTrigger>
          <Button bg='none' padding='3' fontWeight='normal' fontSize='14px' _hover={{bg:'none',color:'black',fontWeight:'600'}} className='menuBtn'>Women<ChevronDownIcon ml='4px'/></Button>
        </PopoverTrigger>
        
      </Popover>

       <Popover isLazy>
        <Button bg='none' padding='3' fontWeight='normal' fontSize='14px' _hover={{bg:'none'}} className='menuBtn'>Gifting</Button>
       
      </Popover>

      <Popover isLazy>
        <PopoverTrigger>
          <Button bg='none' padding='3' fontWeight='normal' _hover={{bg:'none',color:'black',fontWeight:'600',}} fontSize='14px' className='menuBtn'>About Us<ChevronDownIcon ml='4px'/></Button>
        </PopoverTrigger>
     
      </Popover>

      <Popover isLazy>
        <PopoverTrigger>
          <Button bg='none' padding='3' fontWeight='normal' _hover={{bg:'none',color:'black',fontWeight:'600'}} fontSize='14px' className='menuBtn'>Help<ChevronDownIcon ml='4px'/></Button>
        </PopoverTrigger>
      </Popover>
       </Flex>
     <Icon/>
    </div>
  );
}
export default MenuLists;
