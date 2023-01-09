import {Link} from 'react-router-dom';
import logos from "../../image/logos.jpeg"
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { GrLocation } from "react-icons/gr"

const Footer = () => {
    return(
       
            <footer className="text-black py-4 bg-custom-color mt-auto ">
                 <div className="container">
                    <nav className="row">
                        <Link to='/' className="col-12 col-md-3 d-flex alings-items-center justify-content-center">
                            <img src={logos} className='mx-2' width='300'/>
                        </ Link>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='font-weight-bold '>CATEGORIAS</li>
                            <li><Link to='/' className='text-white text-decoration-none'>Inicio</Link></li>
                            <li><Link  to='/' className='text-white text-decoration-none'>Productos</Link></li>
                            <li><Link  to='/QuienesSomos' className='text-white text-decoration-none'>Quienes Somos</Link></li>
                            <li><Link  to='/Contacto' className='text-white text-decoration-none'>Contacto</Link></li>
                        </ul>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='font-weight-bold'>CONTACTANOS</li>
                            <li>
                                <a className='text-white text-decoration-none' href="https://wa.me/+543516468746" target="_blank" rel="noreferrer"><i className="mx-1"><FaWhatsapp/></i>5493516468746</a>
                            </li>
                            <li>
                                <a className='text-white text-decoration-none' href="https://github.com/jcrnieto" target="_blank" rel="noreferrer"><i className="mx-1"><SiGmail/></i> placeress.sintacc@gmail.com</a>
                            </li>
                            <li>
                                <a className='text-white text-decoration-none' href="https://github.com/jcrnieto" target="_blank" rel="noreferrer"><i className="mx-1"><GrLocation/></i> Córdoba Capital</a>
                            </li>
                        </ul>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='font-weight-bold '>SIGUENOS</li>
                            <li className='d-flex justify-content-center'>
                                <a href="https://github.com/jcrnieto" target="_blank" rel="noreferrer"><i><FaFacebookSquare size={30}/></i></a>
                                <a href="https://github.com/jcrnieto" target="_blank" rel="noreferrer"><i><FaInstagram size={30}/></i></a>
                            </li>
                        </ul>
                        <div className='container'>
                              <p className='text-center mb-0 mt-2'> Todos los derechos reservados © 2022 Copyright Placeres sin tacc </p>
                        </div> 
                    </nav>
                 </div>
            </footer>
       
    )
}

export default Footer