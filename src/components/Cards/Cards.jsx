import Card from "../Card/Card";
import {Link} from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { useState, useEffect} from 'react';
import {getProduct} from '../../redux/actions/index';

const Cards = () => {

    const dispatch = useDispatch();
    const allProduct = useSelector((state)=>state.products);
    //console.log('useSelector', allProduct)

    useEffect(()=>{
        dispatch(getProduct())
    },[dispatch])

    return(
        <div className='cards-container'>
          { allProduct.length > 0 ?(
            allProduct?.map((product) => {
                console.log(product.title)
                return(
                    <div className='card' key={product.id}>
                       <Link to={'/'+ product.id}>
                          <Card
                            title={product.title}
                            image={product.image}
                            description={product.description}
                            price={product.price}
                          />
                       </Link> 
                    </div>
                );
            }
          )): <div className="not-found"><h1>No se encontró receta</h1></div> }
        </div>
    )
}

export default Cards