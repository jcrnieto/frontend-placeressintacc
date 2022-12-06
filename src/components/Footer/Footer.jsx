import {Link} from 'react-router-dom';
import logo from '../../image/logo.jpeg';

const Footer = () => {
    return(
        <div>
            <footer className="text-white py-4 bg-secondary">
                 <div className="container">
                    <nav className="row">
                        <Link to='/' className="col-12 col-md-3 d-flex alings-items-center justify-content-center">
                            <img src={logo} className='mx-2' width='150'/>
                        </ Link>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='font-weight-bold '>CATEGORIAS</li>
                            <Link><li>Inicio</li></Link>
                            <Link><li>Productos</li></Link>
                            <Link><li>Quienes Somos</li></Link>
                            <Link><li>Contacto</li></Link>
                        </ul>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='font-weight-bold '>CONTACTANOS</li>
                            <Link><li> logo 5493516468746</li></Link>
                            <Link><li> logo placeress.sintacc@gmail.com</li></Link>
                            <Link><li>logo Córdoba Capital</li></Link>
                        </ul>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='font-weight-bold '>CONTACTANOS</li>
                            <Link><li>logo de instagram</li></Link>
                            <Link><li>logo de facebook</li></Link>
                            
                        </ul>
                    </nav>
                 </div>
            </footer>
        </div>
    )
}

export default Footer