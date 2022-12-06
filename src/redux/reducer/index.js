const initialState = {
    products:[]
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

        default:
            return state;
    }
}

export default rootReducer;
