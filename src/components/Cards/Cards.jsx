import Card from "../Card/Card";
import {Link} from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { useState, useEffect} from 'react';
import {getProduct} from '../../redux/actions/index';
import ReactPaginate from 'react-paginate';

const Cards = () => {

    const dispatch = useDispatch();
    const allProducts = useSelector((state)=>state.products);
    //console.log('useSelector', allProducts)

    const handleClickPage = (data) => {
       //console.log(data.selected + 1)
       let currentPage = data.selected ;
       setPageNumber(currentPage)
    }

    const [pageNumber, setPageNumber] = useState(0);
    const productPerPage = 4;
    const pagesVisited = pageNumber * productPerPage;
    const displayProduct = allProducts.slice(pagesVisited,pagesVisited + productPerPage);
    const pageCount = Math.ceil(allProducts.length / productPerPage);

    useEffect(()=>{
        dispatch(getProduct())
      
    },[])

    return(
        <div className='container-fluid'>
          <h1>Productos</h1>
        <div className='card-group mx-3' >
          { displayProduct.length > 0 ?(
            displayProduct?.map((product) => {
                return(
                    <div className='card text-center border-info' key={product.id}>
                       <Link to={'getId/'+ product.id}>
                          <Card
                            id={product.id}
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
          <ReactPaginate
          previousLabel={'<<'}
          nextLabel={'>>'}
          breakLabel={'...'}
          pageCount={pageCount}
          onPageChange={handleClickPage}
          containerClassName={'pagination justify-content-center'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-item'}
          previousLinkClassName={'page-link'}
          nextClassName={'page-item'}
          nextLinkClassName={'page-link'}
          breakClassName={'page-item'}
          breakLinkClassName={'page-link'}
          activeClassName={'active'}
          />
        
        </div>
        
    )
}

export default Cards