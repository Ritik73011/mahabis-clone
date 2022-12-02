import {
ChevronRightIcon
} from '@chakra-ui/icons';
import './NavItems.css';

function NavItems({name,arr}){

    return <div className='navGrid'>
        <p className='name'>{name} <ChevronRightIcon/></p>
        {
            arr.map((ele)=>{
                return <div key={ele.id} className='navGridFlex'>
                    <img src={ele.img} alt={ele.title} />
                    <p>{ele.title}</p>
                </div>
            })
        }
    </div>
}

export default NavItems