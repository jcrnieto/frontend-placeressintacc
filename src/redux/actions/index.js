import axios from 'axios';

export function addProduct(payload ){
    return async function(dispatch){
    try{
          var json = await axios.post('/addProduct', payload)
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
            var json = await axios.get('/getProduct')
            console.log('actions', json.data.result);
            return dispatch({
                type:'GET_PRODUCTS',
                payload: json.data.result
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
            var json = await axios.get(`/getId/${id}`)
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
           var json = await axios.get(`/getName?title=${title}`)
           console.log('actions', json.data)
           return dispatch({
            type: 'GET_SEARCH_TITLE',
            payload: json.data
           })
        }catch (error) {
            console.log(error)
        }
    }
}

export function postAddUser(payload){
    console.log('action', payload)
    return async function(dispatch){
        try{
         var json = await axios.post("/addUser", payload)
        
         return json.data;
        
        }catch (error) {
            console.log(error)
        }
    }
}

export function postClientEmail(payload){
    console.log('action', payload)
    return async function(dispatch){
        try{
         var json = await axios.post("/clientEmail", payload)
        
         return json.data;
        
        }catch (error) {
            console.log(error)
        }
    }
}