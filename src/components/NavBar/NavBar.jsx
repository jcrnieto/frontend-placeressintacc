import SearchBar from "../SearchBar/SearchBar";
import DropDown from "../DropDown/DropDown";
import logos from "../../image/logos.jpeg"
import {Link} from 'react-router-dom';



const NavBar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-custom-color bg-custom-color">
  <div class="container-fluid">
       <Link to='/' className="navbar-brand">
              <img src={logos} className='mx-2' width='200'/>
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
 );
};

export default NavBar;
