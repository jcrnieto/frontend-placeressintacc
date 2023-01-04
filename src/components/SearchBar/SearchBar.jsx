import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchTitle } from '../../redux/actions';

const SearchBar = () => {

    const dispatch = useDispatch();
    const [title, setTitle] = useState("");

    function handleInput(e){
        e.preventDefault();
        setTitle(e.target.value)
    }

    function handleSubmit(e){
         e.preventDefault();
         dispatch(getSearchTitle(title))
        //document.getElementById("search").value = "";
    }

    return(
    <form class="d-flex" role="search">
        <input className="form-control me-2"
               type="search" 
               placeholder="buscar producto..." 
               aria-label="Search"
               onChange={(e)=>handleInput(e)}
         />
         
        <button className="btn btn-outline-success btn-dark" type="submit" onClick={(e)=>handleSubmit(e)}>Search</button>
    </form>
    )
}

export default SearchBar