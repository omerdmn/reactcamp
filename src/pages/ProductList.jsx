import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, } from "semantic-ui-react";
import ProductService from "../services/productService";
import { addToCart } from "../store/actions/cartActions"
import { toast } from "react-toastify";


export default function ProductList() {
  const dispatch = useDispatch()
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let productService = new ProductService();
    productService.getProducts().then((result) => setProducts(result.data.data));
  }, []);

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
            <div className="productName">
              <Link to={`/products/${product.productName}`}>{product.productName}</Link>
            </div>
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
