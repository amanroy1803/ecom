// CategoryProduct.js
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./CategoryProduct.css";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";
import Header from "../components/Layout/Header";

const CategoryProduct = () => {
  const params = useParams();
  const [cart, setCart] = useCart();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (params?.slug) getProductsByCat();
  }, [params?.slug]);

  const getProductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <Header />
      <div className='container mt-3 category'>
        <h4 className='category-title'>Category - {category?.name}</h4>
        <h6 className='category-result'>{products?.length} results found</h6>
        <div className='row category-list'>
          {products?.map((p) => (
            <div className='card m-2 product-card' key={p._id}>
              <img
                src={`/api/v1/product/product-photo/${p._id}`}
                className='card-img-top'
                alt={p.name}
              />
              <div className='card-body'>
                <div className='card-name-price'>
                  <h5 className='card-title'>{p.name}</h5>
                  <h5 className='card-title card-price'>
                    {p.price.toLocaleString("en-IN", {
                      style: "currency",
                      currency: "INR",
                    })}
                  </h5>
                </div>
                <p className='card-text'>{p.description.substring(0, 60)}...</p>
                <div className='card-buttons'>
                  <button
                    className='btn btn-info ms-1'
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    More Details
                  </button>
                  <button
                    className='btn btn-dark ms-1'
                    onClick={() => {
                      setCart([...cart, p]);
                      localStorage.setItem(
                        "cart",
                        JSON.stringify([...cart, p])
                      );
                      toast.success("Item Added to cart");
                    }}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProduct;
