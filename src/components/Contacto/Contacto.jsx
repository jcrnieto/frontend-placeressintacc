import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { GrLocation } from "react-icons/gr"

const Contacto = () => {
  return (
    <div className="container">
      <div class="row ">
        <div class="col-12 col-md-6 col-lg-3">
          <h2>Contacto</h2>
          <ul className='col-12 col-md-3 list-unstyled'>
          <li>
             <a className='text-Dark text-decoration-none' href="https://github.com/jcrnieto" target="_blank" rel="noreferrer"><i><FaWhatsapp/></i>5493516468746</a>
         </li>
         <li>
             <a className='text-Dark text-decoration-none' href="https://github.com/jcrnieto" target="_blank" rel="noreferrer"><i><SiGmail/></i> placeress.sintacc@gmail.com</a>
         </li>
         <li>
             <a className='text-Dark text-decoration-none' href="https://github.com/jcrnieto" target="_blank" rel="noreferrer"><i><GrLocation/></i> Córdoba Capital</a>
         </li>
          </ul>
        </div>
        <div class="col-12 col-md-6 col-lg-9">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Nombre
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3">
               <label for="exampleInputEmail1" class="form-label">
                Telefono
              </label>
              <input
                type="number"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
               <label for="exampleFormControlTextarea1" class="form-label">Dejá tu mensaje</label>
               <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            
            <div class="mb-3">
              <button type="submit" class="btn btn-primary">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
