import Logo from './Logo/Logo'
import MenuLists from './MenuList/MenuLists';
import {HamburgerIcon} from '@chakra-ui/icons'
import './Nav.css';
function Nav() {
  return (
    <div className='nav'>
        <HamburgerIcon cursor='pointer' display='none'/>
        <Logo/>
        <MenuLists/>
    </div>
  );
}

export default Nav;
