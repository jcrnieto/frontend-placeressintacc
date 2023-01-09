import {Link} from 'react-router-dom';
import imgLogin from "../../image/imgLogin.jpeg"

const MiCuenta = () => {


    return (
      <div className="container w-75">
        <div className="row">
          <div className="col mt-3 mb-3 align-items-strech d-none d-lg-block">
             <img src={imgLogin} width='500'/>
          </div>
          <div className="col mt-3 mb-3">
            <h2 className="fw-bold text-center pt-5 mb-5">Bienvenido</h2>
          <form action="#">
            <div className="mb-4">
              <label for="email" className="form-label">Correo Electrónico</label>
              <input type="email" className="form-control" name="email" />
            </div>
            <div className="mb-4">
            <label for="email" className="form-label">Password</label>
              <input type="password" className="form-control" name="password" />
            </div>
            <div className="mb-4 form-check">
              <input type="checkbox" name="connected" className="form-check-input"/>
              <label for="connected" className="form-check-label">Mantenerme Conectado</label>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">Iniciar Sesion</button>
            </div>
            <div className="my-3">
              <span>No tienes cuenta? <Link to="/CrearCuenta">Crear Cuenta</Link> </span>
            </div>
          </form>
          </div>
        </div>
      </div>
    )
}



export default MiCuenta;