import {
  Flex,
} from '@chakra-ui/react'

import './Menu.css';
import Icon from '../Icons/Icon';
import MegaMenu from './MegaMenu';

function MenuLists() {
  return (
    <div className='menulist'>
      <MegaMenu Layout={Flex}/>
      <Icon />
    </div>
  );
}
export default MenuLists;