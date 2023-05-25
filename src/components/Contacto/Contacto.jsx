import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { GrLocation } from "react-icons/gr";
import { postClientEmail } from "../../redux/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';


const Contacto = () => {
  const dispatch = useDispatch();
  const [submitedForm, setSubmitedForm] = useState(false);
  const navigate = useNavigate();

  return (
   <div className="container">
   
      <div class="row ">
        <div class="col-12 col-md-6 col-lg-3">
          <h2>Contacto</h2>
          <ul className='col-12 col-md-3 list-unstyled'>
          <li>
             <a className='link-secondary text-decoration-none d-flex mt-3' href="https://github.com/jcrnieto" target="_blank" rel="noreferrer"><i className="mx-2"><FaWhatsapp/></i>5493516468746</a>
         </li>
         <li>
             <a className='link-secondary text-decoration-none d-flex mt-3' href="https://github.com/jcrnieto" target="_blank" rel="noreferrer"><i className="mx-2"><SiGmail/></i> placeress.sintacc@gmail.com</a>
         </li>
         <li>
             <a className='link-secondary text-decoration-none d-flex mt-3' href="https://github.com/jcrnieto" target="_blank" rel="noreferrer"><i className="mx-2"><GrLocation/></i> Córdoba Capital</a>
         </li>
          </ul>
        </div>
        <div class="col-12 col-md-6 col-lg-9">
        <Formik
       initialValues={{
        nombre: "",
        email:"",
        telefono:"",
        mensaje:""
      }}
      
       validate={(value)=>{
         let error = {}
        
         if(!value.nombre){
          error.nombre = "Ingrese un nombre";
          }else if (!/[a-zA-Z ]{2,254}/.test(value.nombre)){
           error.nombre = "nombre incorrecto";
         }
         
         if(!value.email){
           error.email = "ingrese un email"
         }else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value.email)){
           error.email = "email incorrecto"
         }
         
         if(!value.telefono){
          error.telefono = "ingrese telefono";
         }else if(!/^[0-9]+$/.test(value.telefono)){
           error.telefono = "teléfono incorrecto"
         }

         if(!value.mensaje){
          error.telefono = "ingrese mensaje";
         }

         return error;
        }}
      
      onSubmit={(value,{resetForm})=>{
        console.log("formulario enviado", value);
        dispatch(postClientEmail(value))
        navigate("/")
        resetForm();
        setSubmitedForm(true);
        setTimeout(()=> setSubmitedForm(false), 5000);
      }}
    >
          {( {errors} )=>(
              <Form class="border border-custom-color rounded mt-3 mb-3 pe-3 ps-3" >
              <div class="mb-3">
                <label for="exampleInputNombre1" class="form-label">
                  Nombre
                </label>
                <Field
                  type="text"
                  class="form-control"
                  id="exampleInputNombre1"
                  aria-describedby="emailHelp"
                  name="nombre"
                 />
                 
                 <ErrorMessage name= "nombre" component={()=>(<div className="alert">{errors.nombre}</div>)}/>
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email
                </label>
                <Field
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  name="email"
                  />
                  <ErrorMessage name= "email" component={()=>(<div className="alert">{errors.email}</div>)}/>
              </div>
              <div class="mb-3">
                 <label for="exampleInputEmail1" class="form-label">
                  Telefono
                </label>
                <Field
                  type="number"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="telefono"
                 />
                 <ErrorMessage name= "telefono" component={()=>(<div className="alert">{errors.telefono}</div>)}/>
              </div>
              <div class="mb-3">
                 <label for="exampleFormControlTextarea1" class="form-label">
                  Dejá tu mensaje
                  </label>
                 <Field 
                  class="form-control"
                  id="exampleFormControlTextarea1" 
                  rows="3"
                  name="mensaje"
                   />
              <ErrorMessage name= "mensaje" component={()=>(<div className="alert">{errors.mensaje}</div>)}/>
              </div>
              
              <div class="mb-3">
                <button type="submit" class="btn btn-primary">
                  Enviar
                </button>
              </div>
            </Form>
          )}
          </Formik>
        </div>
      </div>
     
    </div>
  );
};

export default Contacto;
