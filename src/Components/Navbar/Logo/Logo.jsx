
import './Logo.css';
import mlogo from './mlogo.svg'
function Logo() {
  return (
    <div className='logoDiv'>
      <img src={mlogo} alt="dd" />
      <h1 className='h1'>mahabis</h1>
    </div>
  );
}

export default Logo;
