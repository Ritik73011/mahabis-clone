
import './Accessories.css'

function Accessories({name,arr}){

    return <div className='navGridAc'>
    <p className='name'>{name}</p>
    
    <div className='mgt'>{
        arr.map((ele,idx)=>{
            return <div key={idx+1} className='access'>
                <p>{ele}</p>
            </div>
        })
    }
    </div>
</div>
}
export default Accessories