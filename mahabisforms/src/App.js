import './App.css';
import Signup from './Components/Signup';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
