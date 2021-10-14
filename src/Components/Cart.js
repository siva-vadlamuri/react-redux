import React from 'react'
import {useSelector} from 'react-redux'


function Cart() {
    const cart = useSelector(state => state.productsData.cartData)
    console.log(cart);
    return (
        <div>
            
        </div>
    )
}

export default Cart
