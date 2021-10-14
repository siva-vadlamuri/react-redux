import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setProduct } from '../redux/ProductActions/ProductActions';



function Products() {
    const [products,setProducts] = useState([]);
    const productsData = useSelector((state)=>state.productsData.products)
    console.log(productsData);

    // alert(JSON.stringify(state))
    const dispatch = useDispatch();

    const fetchProducts = async()=>{
        const {data} = await axios.get('https://fakestoreapi.com/products/');
        console.log(data);
        // setProducts(data);
        // console.log(setProduct(data));
        dispatch(setProduct(data))

    }

    useEffect(()=>{
        fetchProducts()
    },[])
    return (
        <div className="row">
            {
              productsData &&  productsData.length > 0 && productsData.map((product)=>(
                    <div className="col-md-3 p-3">
                        <Link to={`/product/${product.id}`}>
                        <div className="card text-dark">
                            <img src={product.image} style={{minHeight:'200px',maxHeight:'250px'}} alt="" className="card-img-top img-fluid p-2" />
                            <div className="card-body">
                                <h3 className="card-title">{product.category}</h3>
                                
                                <p>Price $:{product.price}</p>
                            </div>
                        </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default Products
