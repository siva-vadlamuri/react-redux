import { createStore } from "redux";
import { reducer } from "./reducer";
// import { reducer } from "./reducer";
import { ProductReducer } from "./reducer/ProductReducer";
console.log(ProductReducer)

export const Store = createStore(reducer,{}) 