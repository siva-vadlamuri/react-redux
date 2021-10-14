import axios from 'axios';
import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/ProductActions/ProductActions';






function Product() {
    const cartData = useSelector(state => state.productsData.cartData)
    console.log(cartData);
     const dispatch = useDispatch();

    const [product,setProduct] = useState({})
    const {id} = useParams();

    const fetchSingleProduct = async()=>{
        const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`)
        console.log(data);
        setProduct(data);
    }


    useEffect(()=>{
        fetchSingleProduct()
    },[])


    const handleAddToCart = (product)=>{
        dispatch(addToCart(product));
    }



    return (
        <div>
            <ul>
                <li><Link to="/cart">cart</Link></li>
            </ul>
            <h2>Product Page {id} </h2>
            <div className="container pt-3">
                <div className="row">
                    <div className="col-md-6 border">
                        <img className="img-fluid" src={product.image} alt="" />
                    </div>
                    <div className="col-md-6">
                        <div className="pt-5">
                            <h3>{product.title}</h3>

                            <div className="pt-2">
                                <p>Price : {product.price}</p>
                            </div>

                            <div className="bg-secondary pt-2">
                                <p>{product.category}</p>
                            </div>
                            <div>
                                <button className="btn btn-primary px-2" onClick={()=>handleAddToCart(product)} >Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
