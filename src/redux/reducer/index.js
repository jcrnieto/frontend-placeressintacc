const initialState = {
    products:[],
    productId:[],
    title:[]
 }

function rootReducer (state = initialState, action) {
    switch(action.type){

        case 'ADD_PRODUCT':
            return{
                ...state
            }
        case 'GET_PRODUCTS':
            return{
                ...state,
                products: action.payload
            } 
        case 'GET_PRODUCT_ID':
            return{
                ...state,
                productId: action.payload
            }
        case 'GET_SEARCH_TITLE':
            return{
                ...state,
                title: action.payload
            }
             
        default:
            return state;
    }
}

export default rootReducer;
