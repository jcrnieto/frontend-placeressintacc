import SearchBar from "../SearchBar/SearchBar";
import DropDown from "../DropDown/DropDown";
//import Account from "../Account/Account";
import logo from '../../image/logo.jpeg';
import {Link} from 'react-router-dom';



const NavBar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
  <div class="container-fluid">
       <Link to='/' className="navbar-brand">
              <img src={logo} className='mx-2' width='80'/>
       </ Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to='/'>Home</Link>
        </li>
        <li class="nav-item">
           <Link class="nav-link active" aria-current="page" to='/QuienesSomos'>Quienes Somos</Link>
        </li>
        <li class="nav-item dropdown">
        <DropDown/>
        </li>
      </ul>
      <SearchBar />
    </div>
  </div>
</nav>
    </>


    // <div>
    //   <nav class=" navbar navbar-expand-lg bg-secondary">
    //     <div class="container-fluid">
    //     <Link to='/' className="col-12 col-md-3 d-flex alings-items-center justify-content-center">
    //           <img src={logo} className='mx-2' width='100'/>
    //      </ Link>
    //      <SearchBar />
    //      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
    //      <li class="nav-item">
    //       <Link className="nav-link active" to='/'>
    //         <h3 className="nav-link active">Inicio</h3>
    //       </Link>
    //     </li>
    //     <li class="nav-item">
    //       <Link to='/QuienesSomos'>
    //         <h3 className="nav-link">Quienes Somos</h3>
    //       </Link>
    //     </li>
    //     {/* <li className="nav-item dropdown">
    //       <DropDown/>
    //     </li> */}
    //      <li class="nav-item">
    //       <Link to='/'>
    //         <h3 className="nav-link">Venta Mayorista</h3>
    //       </Link>
    //     </li>
    //     <li class="nav-item">
    //       <Link to='/'>
    //         <h3 className="nav-link">Mi Cuenta</h3>
    //       </Link>
    //     </li>
    //      </ul>
         
    //     </div>
    //   </nav>
    // </div>
  );
};

export default NavBar;
/*
<button
class="navbar-toggler"
type="button"
data-bs-toggle="collapse"
data-bs-target="#navbarSupportedContent"
aria-controls="navbarSupportedContent"
aria-expanded="false"
aria-label="Toggle navigation"
>
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
<ul class="navbar-nav me-auto mb-2 mb-lg-0">
  <li class="nav-item">
    <Link>
   <div>Home</div> 
    </Link>
  </li>
  <li>
  <Account/>
  </li>
  <li>
  <DropDown />
  </li>
</ul>
<SearchBar />
</div>*/