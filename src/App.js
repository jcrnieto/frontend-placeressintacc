import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AddProduct from './components/AddProduct/AddProduct.jsx';
import Home from './components/Home/Home.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
         <Route exact path='/addProduct' element={<AddProduct/>}/>
         <Route exact path='/' element={<Home/>}/>
      </Routes>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
