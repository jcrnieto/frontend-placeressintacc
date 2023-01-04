import axios from 'axios';

export function addProduct(payload ){
    return async function(dispatch){
    try{
          var json = await axios.post('http://localhost:3001/addProduct', payload)
          //console.log(json.data)
          return json.data
    }catch(error){
        console.log(error)
    }
}
}

export function getProduct(){
    return async function (dispatch){
        try{
            var json = await axios.get('http://localhost:3001/getProduct')
            //console.log('actions', json.data)
            return dispatch({
                type:'GET_PRODUCTS',
                payload: json.data
            })
        }catch(error){
            console.log(error)
        }
    }
}

export function getProductId(id){
    return async function (dispatch){
        try {
            //console.log('parametro',id)
            var json = await axios.get(`http://localhost:3001/getId/${id}`)
            //console.log('actions', json.data)
            return dispatch({
                type: 'GET_PRODUCT_ID',
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getSearchTitle(title){
    return async function (dispatch){
        try{
           var json = await axios.get(`http://localhost:3001/getName?title=${title}`)
           //console.log('actions', json.data)
           return dispatch({
            type: 'GET_SEARCH_TITLE',
            payload: json.data
           })
        }catch (error) {
            console.log(error)
        }
    }
}