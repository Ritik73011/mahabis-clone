
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import Nav from './Components/Navbar/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <div style={{ marginTop: "72px" }}>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
