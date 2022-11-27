import {
  Flex,
} from '@chakra-ui/react'
import {ChevronDownIcon} from '@chakra-ui/icons';
import './Menu.css';
import Icon from '../Icons/Icon';

function MenuLists() {
  return (
    <div className='menulist'>
      <Flex gap={"8px"}>
        <p className='menuLists'>Men <ChevronDownIcon/></p>
        <p className='menuLists'>Women <ChevronDownIcon/></p>
        <p className='menuLists'>Gifting</p>
        <p className='menuLists'>About Us <ChevronDownIcon/></p>
        <p className='menuLists'>Help <ChevronDownIcon/></p>
      </Flex>
     <Icon/>
    </div>
  );
}

export default MenuLists;
