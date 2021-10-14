import React from 'react'
import { ACTION_TYPE } from '../ActionType'



const intitalState = {
    products : [],
    cartData : [],
}

export const ProductReducer = (state=intitalState,action)=>{
    // console.log(action)
    switch(action.type){
        
        case ACTION_TYPE.SET_PRODUCTS:
            console.log(action.payload);
            return {...state,products: action.payload };
        case ACTION_TYPE.ADD_TO_CART:
            return {...state, cartData: [...state.cartData, action.payload] }    

            default:
                return state;
    }
}
