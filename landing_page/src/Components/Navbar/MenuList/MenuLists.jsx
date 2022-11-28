import {
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  Button,
  PopoverCloseButton
} from '@chakra-ui/react'
import {ChevronDownIcon,ChevronUpIcon} from '@chakra-ui/icons';
import './Menu.css';
import Icon from '../Icons/Icon';

function MenuLists() {
  return (
    <div className='menulist'>
       
       <Flex>
       <Popover isLazy>
        <PopoverTrigger>
          <Button bg='none' padding='2.5' fontWeight='normal' fontSize='14px' _hover={{bg:'none',color:'black',fontWeight:'600'}} className='menuBtn'>Men <ChevronDownIcon ml='4px'/></Button>
        </PopoverTrigger>
      <PopoverContent pos='absolute' top='2' width='100%'>
      <PopoverHeader fontWeight='semibold'>Popover placement</PopoverHeader>
      <PopoverCloseButton />
      <PopoverBody>
        Hii dodo
      </PopoverBody>
      </PopoverContent>
      </Popover>

      <Popover isLazy>
        <PopoverTrigger>
          <Button bg='none' padding='2.5' fontWeight='normal' fontSize='14px' _hover={{bg:'none',color:'black',fontWeight:'600'}} className='menuBtn'>Women<ChevronDownIcon ml='4px'/></Button>
        </PopoverTrigger>
      <PopoverContent pos='absolute' top='2' width='100%'>
      <PopoverHeader fontWeight='semibold'>Popover placement</PopoverHeader>
      <PopoverCloseButton />
      <PopoverBody>
        Hii dodo
      </PopoverBody>
      </PopoverContent>
      </Popover>

       <Popover isLazy>
        <PopoverTrigger>
          <Button bg='none' padding='2.5' fontWeight='normal' fontSize='14px' _hover={{bg:'none',color:'black',fontWeight:'600'}} className='menuBtn'>Gifting<ChevronDownIcon ml='4px'/></Button>
        </PopoverTrigger>
      <PopoverContent pos='absolute' top='2' width='100%'>
      <PopoverHeader fontWeight='semibold'>Popover placement</PopoverHeader>
      <PopoverCloseButton />
      <PopoverBody>
        Hii dodo
      </PopoverBody>
      </PopoverContent>
      </Popover>

      <Popover isLazy>
        <PopoverTrigger>
          <Button bg='none' padding='2.5' fontWeight='normal' _hover={{bg:'none',color:'black',fontWeight:'600',}} fontSize='14px' className='menuBtn'>About Us<ChevronDownIcon ml='4px'/></Button>
        </PopoverTrigger>
      <PopoverContent pos='absolute' top='2' width='100%'>
      <PopoverHeader fontWeight='semibold'>Popover placement</PopoverHeader>
      <PopoverCloseButton />
      <PopoverBody>
        Hii dodo
      </PopoverBody>
      </PopoverContent>
      </Popover>

      <Popover isLazy>
        <PopoverTrigger>
          <Button bg='none' padding='2.5' fontWeight='normal' _hover={{bg:'none',color:'black',fontWeight:'600'}} fontSize='14px' className='menuBtn'>Help<ChevronDownIcon ml='4px'/></Button>
        </PopoverTrigger>
      <PopoverContent pos='absolute' top='2' width='100%'>
      <PopoverHeader fontWeight='semibold'>Popover placement</PopoverHeader>
      <PopoverCloseButton />
      <PopoverBody>
        Hii dodo
      </PopoverBody>
      </PopoverContent>
      </Popover>
       </Flex>
     <Icon/>
    </div>
  );
}

export default MenuLists;
