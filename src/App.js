import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Products from './Components/Products';
import { Route } from 'react-router';
import Routes from './Components/Routes/Routes';


function App() {
  

  
  return (
    <div>
      <div className="container py-5">
        <Routes/>
      </div>
  
     
    

      
    </div>
  );
}

export default App;
