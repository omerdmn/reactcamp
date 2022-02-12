import { AD_TO_CARD } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
cartItems :cartItems
}

export default function cartReducer(state=initialState,{type,payload}) {

    switch (type) {
        case AD_TO_CARD:
            let product =state.cartItems.find(c=>c.product.id===payload.id)
            if (product) {
                product.quantity++;
                return{
                    ...state
                }
            } else {
                return{
                    ...state,
                    cartItems:[...state.cartItems,{quantity:1},product.payload]
                }
            }
           
    
        default:
            break;
    }
}