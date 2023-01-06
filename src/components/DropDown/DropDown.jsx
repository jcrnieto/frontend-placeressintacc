//import {BiMenu} from 'react-icons/bi';
import {Link} from 'react-router-dom';


const Dropdown = () => {
    return(
        <div>
            <li class="dropdown">
            
            <button class="btn btn-black dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Inicio
            </button>
          
          <ul class="dropdown-menu">
            <li>
              <Link class="dropdown-item" to='/'>
                Productos
              </Link>
            </li>
            <li>
              <Link class="dropdown-item" to='/VentaMayorista'>
                Venta Mayorista
              </Link>
            </li>
            <li>
              <Link class="dropdown-item" to='/Contacto'>
                 Contacto
              </Link>
            </li>
            <li>
              <Link class="dropdown-item" to='/MiCuenta'>
                 Mi Cuenta
              </Link>
            </li>
            
          </ul>
        </li>
        </div>
    )
}

export default Dropdown;