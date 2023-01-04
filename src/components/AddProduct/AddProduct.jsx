import { addProduct } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";


const AddProduct = () =>{
    const dispatch = useDispatch();

    const [input, setInput] = useState({
        title:"",
        image:"",
        description:"",
        price:""
    });

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
         })
         //console.log(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Formulario creado con exito!");
        dispatch(addProduct(input))
        console.log(input)
    }


    return(
        <div className='container bg-secondary mt-5'>
            <h1>Cargar Producto</h1>
 <form className='col-md-12'  onSubmit={(e) => handleSubmit(e)} >
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Titulo</label>
    <input type="text" 
           className="form-control input-lg" 
           id="exampleInputEmail1" 
           aria-describedby="emailHelp"
           autofocus
           value={input.title}
           name="title"
           onChange={(e)=> handleChange(e)}
           />
  </div>
  <div class="mb-3">
    <label for="file" class="form-label">Foto</label>
    <input type="file"
           class="form-control"
           id="exampleInputEmail1" 
           aria-describedby="emailHelp"
           value={input.image}
           name="image"
           onChange={(e)=> handleChange(e)}
           />
  </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Descripcion Producto</label>
  <textarea class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={input.description}
            name="description"
            onChange={(e)=> handleChange(e)}></textarea>
</div>
  <div class="mb-3">
    <label for="text" class="form-label">Precio</label>
    <input type="number"
           class="form-control"
           id="exampleInputPassword1"
           value={input.price}
           name="price"
           onChange={(e)=> handleChange(e)}
           />
  </div>
   <button type="submit" class="btn btn-primary">Subir</button>
</form>
        </div>
    )
}

export default AddProduct