import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';



const CrearCuenta = () => {
    const navigate = useNavigate();

   

    return (
        <div className="container ">
            <Formik>
                {() => (
                    <form action="#" className='w-50 mt-4 needs-validation' novalidate>
                    <div className="mb-4">
                      <label for="email" className="form-label">Correo Electrónico</label>
                      <input 
                          type="email"
                          className="form-control"
                          name="email"
                          id="validationCustomEmail"
                          aria-describedby="inputGroupPrepend" 
                          required
                       />
                      <div class="invalid-feedback">
                        Ingresar Correo Eléctronico
                       </div>
                    </div>
                    <div className="mb-4">
                    <label for="email" className="form-label">Contraseña</label>
                      <input 
                         type="password" 
                         className="form-control" 
                         name="password" 
                         />
                    </div>
                    <div className="mb-4">
                    <label for="email" className="form-label">Confirmar Contraseña</label>
                      <input
                          type="password" 
                          className="form-control"
                          name="password"
                         />
                    </div>
                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary">Iniciar Sesion</button>
                    </div>
                  </form>
                )}
           </Formik>
        </div>
        
       
    );
}


export default CrearCuenta;