import Logo from './Logo/Logo'
import MenuLists from './MenuList/MenuLists';
import {HamburgerIcon} from '@chakra-ui/icons'
import './Nav.css';
import { Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure, useMediaQuery } from '@chakra-ui/react';
import Icon from './Icons/Icon';
import MobileNav from './MobileLayout/MobileNav';
function Nav() {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div className='nav'>
        {isLargerThan768?null:<HamburgerIcon onClick={()=>{onOpen()}} cursor='pointer' w={6} h={6} mt={'16px'}/>}
        <Logo/>
        {isLargerThan768?<MenuLists/>:<Icon/>}


        <Drawer onClose={onClose} placement='left' isOpen={isOpen} size={'xs'}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader><Logo/></DrawerHeader>
          <Divider/>
          <DrawerBody position={'relative'}>
            <MobileNav/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>

  );
}

export default Nav;
