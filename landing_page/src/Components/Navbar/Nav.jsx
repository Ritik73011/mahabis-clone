import Logo from './Logo/Logo'
import MenuLists from './MenuList/MenuLists';
import './Nav.css';
function Nav() {
  return (
    <div className='nav'>
        <Logo/>
        <MenuLists/>
    </div>
  );
}

export default Nav;
