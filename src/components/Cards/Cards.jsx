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
    //d-flex justify-content-center
    return(
        <div className='container-fluid'>
          <h1 className="fw-bold text-center">Productos</h1>
        <div className='card-group justify-content-center' >
          { displayProduct.length > 0 ?(
            displayProduct?.map((product) => {
                return(
                    <div  key={product.id}>
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
            
          )): <div className="not-found"><h1>No se encontró producto</h1></div> }
          </div>
          <ReactPaginate
          previousLabel={'<<'}
          nextLabel={'>>'}
          breakLabel={'...'}
          pageCount={pageCount}
          onPageChange={handleClickPage}
          containerClassName={'pagination justify-content-center mt-3'}
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