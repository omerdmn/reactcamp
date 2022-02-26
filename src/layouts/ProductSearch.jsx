import React, { useState, useEffect } from "react";
import ProductService from '../services/productService';
import { Link, useParams } from "react-router-dom";
import { Button, } from "semantic-ui-react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions/cartActions";

export default function ProductSearch() {
    const dispatch = useDispatch()
    let { search } = useParams();
    const [products, setProduct] = useState([]);

    useEffect(() => {
        let productService = new ProductService()
        productService.getByProductNameContains(search).then(result => setProduct(result.data.data))
    }, [])

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
        toast.success(`${product.productName} sepete eklendi!`)
    }



    return (
        <div className="products" >
            {products.map((product) => (
                <div key={product.productName} className="product"  >
                    <Link to={`/products/${product.productName}`}>
                        <img  className="img" alt="productimg"
                            src="https://pbs.twimg.com/profile_images/1404479261566713856/_MklDkhx_400x400.jpg" >
                        </img>
                    </Link>
                    <div className="productinfo">
                        <div className="productName"><Link to={`/products/${product.productName}`}>{product.productName}</Link></div>
                        <div className="unitPrice">{product.unitPrice} TL</div>
                        <div className="categoryName">{product.category.categoryName}</div>
                        <div className="sepeteEkle">
                            <Button onClick={() => handleAddToCart(product)} color="blue" >Sepete Ekle</Button>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    );
}

//    {products.map((product) => (    <Card fluid color="red">
//                         <Image src="https://pbs.twimg.com/profile_images/1404479261566713856/_MklDkhx_400x400.jpg" wrapped ui={false} />
//                         <Card.Content >
//                             <div >{product.productName}</div>
//                             <Card.Meta>{product.unitPrice},00 TL</Card.Meta>
//                             <Card.Description>
//                                 {product.category.categoryName}
//                             </Card.Description>
//                         </Card.Content>
//                         <Card.Content extra>
//                             <Button>Sepete ekle</Button>
//                         </Card.Content>
//                     </Card>))}
