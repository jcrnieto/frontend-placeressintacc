import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import { getProductId } from "../../redux/actions";

const CardId = ()=>{

    const dispatch = useDispatch();
    const idProduct = useSelector((state)=> state.productId)
    console.log('esto es idproduct', idProduct)
    const { id } = useParams();

    useEffect(()=>{
       dispatch(getProductId(id))
    },[dispatch,id])
    return(
      <div className='container'>
        <div class="card mb-5 mt-5">
           <img src={idProduct.image} class="card-img-top"  alt="..."/>
           <div class="card-body">
           <h5 class="card-title">{idProduct.title}</h5>
           <p class="card-text">{idProduct.description}</p>
           <p class="card-text"><small class="text-muted">${idProduct.price}</small></p>
        </div>
        <Link to={'/'}>VOLVER</Link>

     </div>
 
       
     
   
    </div>
    )
}

export default CardId;