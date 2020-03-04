import * as fromActions from '../actions'

let initialState = {
    products: []
}


const ProductsReducer = (state = initialState, action) => {
    switch(action.type){
        case fromActions.GET_PRODUCTS:
            return {...state, products: [...action.payload]}
        default:
            return state
    }
}

export default ProductsReducer