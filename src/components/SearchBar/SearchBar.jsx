import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchTitle, getProduct } from '../../redux/actions';

const SearchBar = () => {

    const dispatch = useDispatch();
    const [title, setTitle] = useState("");

    function handleInput(e){
        e.preventDefault();
        setTitle(e.target.value)
        if(e.target.value === ""){
            dispatch(getProduct());
        }
    }

    function handleSubmit(e){
         e.preventDefault();
         dispatch(getSearchTitle(title));
         console.log(title);
        //document.getElementById("search").value = "";
    }
    

    return(
    <form class="d-flex" role="search" onSubmit={(e)=>handleSubmit(e)}>
        <input className="form-control me-2"
               type="search" 
               placeholder="Que producto necesitas?" 
               aria-label="Search"
               onChange={(e)=>handleInput(e)}
         />
         
        <button className="btn btn-outline-dark btn-light" type="submit">Buscar</button>
    </form>
    )
}

export default SearchBar