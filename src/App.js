import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AddProduct from './components/AddProduct/AddProduct.jsx';
import Home from './components/Home/Home.jsx';
import CardId from './components/CardId/CardId.jsx';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer.jsx";
import QuienesSomos from './components/QuienesSomos/QuienesSomos.jsx';
import VentaMayorista from './components/VentaMayorista/VentaMayorista.jsx';
import Contacto from './components/Contacto/Contacto.jsx';
import MiCuenta from './components/MiCuenta/MiCuenta.jsx';
import CrearCuenta from './components/CrearCuenta/CrearCuenta.jsx';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <NavBar/>
      <Routes>
         <Route  path='/addProduct' element={<AddProduct/>}/>
         <Route exact path='/' element={<Home/>}/>
         <Route  path='/getId/:id' element={<CardId/>}/>
         <Route  path='/QuienesSomos' element={<QuienesSomos/>}/>
         <Route  path='/VentaMayorista' element={<VentaMayorista/>}/>
         <Route  path='/Contacto' element={<Contacto/>}/>
         <Route  path='/MiCuenta' element={<MiCuenta/>}/>
         <Route  path='/CrearCuenta' element={<CrearCuenta/>}/>
      </Routes>
      <Footer/>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
