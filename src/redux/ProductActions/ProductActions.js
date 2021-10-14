import { ACTION_TYPE } from "../ActionType";


// Action Creators which will return Object

export  const setProduct = (products)=>{
    console.log(ACTION_TYPE);
    return {
        type : ACTION_TYPE.SET_PRODUCTS,
        payload : products
    }
}

export const addToCart = (product)=>{
    return{
        type : ACTION_TYPE.ADD_TO_CART,
        payload : product,
    }
}
