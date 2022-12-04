import {
ChevronRightIcon
} from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import './NavItems.css';

function NavItems({name,arr}){

    return <div className='navGrid'>
        <p className='name'>{name} <ChevronRightIcon/></p>
        {
            arr.map((ele)=>{
                return <Link key={ele.id} to={`/products/${name}/${ele.title}`}>
                        <div className='navGridFlex'>
                        <img src={ele.img} alt={ele.title} />
                        <p>{ele.title}</p>
                        </div>
                </Link>
            })
        }
    </div>
}

export default NavItems