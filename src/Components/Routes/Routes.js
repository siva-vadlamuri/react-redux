import React from 'react'
import { Route,BrowserRouter } from 'react-router-dom'
import Cart from '../Cart'
import Product from '../Product'
import Products from '../Products'



function Routes() {
    return (
        <div>

             <BrowserRouter>
             <Route path="/" exact component={Products}/>
             <Route path="/product/:id" component={Product}/>
             <Route path="/cart" component={Cart}/>
             </BrowserRouter>
        </div>
    )
}

export default Routes
