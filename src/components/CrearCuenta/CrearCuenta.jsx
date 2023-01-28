import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { postAddUser } from '../../redux/actions';
import { useDispatch } from "react-redux";
import "./crearCuenta.css";



const CrearCuenta = () => {
    const [submitedForm, setSubmitedForm] = useState(false)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div className="container ">
            <Formik
              initialValues={{
                email: "",
                password:"",
                confirmPassword:""
              }}
               validate={(value)=>{
                 let error = {}
                 //email
                 if(!value.email){
                  error.email = "Ingrese un email";
                  }else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value.email)){
                   error.email = "email incorrecto";
                 }
                 //contraseña
                 if(!value.password){
                   error.password = "ingrese una contraseña"
                 }else if (!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(value.password)){
                   error.password = "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito y al menos una mayúscula."
                 }
                 //confirmar contraseña
                 if(!value.confirmPassword){
                  error.confirmPassword = "confirmar contraseña";
                }else if(value.confirmPassword !== value.password){
                   error.confirmPassword = "contraseña incorrecta"
                 }

                return error;

               }}
              onSubmit={(value,{resetForm})=>{
                console.log("formulario enviado", value);
                dispatch(postAddUser(value))
                navigate("/")
                resetForm();
                setSubmitedForm(true);
                setTimeout(()=> setSubmitedForm(false), 5000);
              }}
              >
                {( {errors} ) => (
                    <Form action="#" className='w-50 mt-4'>
                    <div className="mb-4">
                      <label for="email" className="form-label">Correo Electrónico</label>
                      <Field 
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                        />
                        {errors.email && <div className="alert">{errors.email}</div> }
                       {/* <ErrorMessage name= "email" component={()=>(<div className="alert">{errors.email}</div>)}/> */}
                    </div>
                    <div className="mb-4">
                    <label for="email" className="form-label">Contraseña</label>
                      <Field 
                         type="password" 
                         className="form-control" 
                         name="password" 
                         id="password"
                         />
                         {errors.password && <div className="alert">{errors.password}</div> }
                        {/* <ErrorMessage name= "password" component={()=>(<div className="alert">{errors.password}</div>)}/> */}
                    </div>
                    <div className="mb-4">
                    <label for="email" className="form-label">Confirmar Contraseña</label>
                      <Field
                          type="password" 
                          className="form-control"
                          name="confirmPassword"
                          id="confirmPassword"
                         />
                        {errors.confirmPassword && <div className="alert">{errors.confirmPassword}</div> }
                      {/* <ErrorMessage name= "confirmPassword" component={()=>(<div className="alert">{errors.confirmPassword}</div>)}/> */}
                    </div>
                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary">Iniciar Sesion</button>
                      { submitedForm && <div class="alert-formulario">Formulario enviado con éxito</div>}
                    </div>
                  </Form>
                )}
           </Formik>
        </div>
        
       
    );
}


export default CrearCuenta;