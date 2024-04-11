import { Box, Grid } from "@mui/material";
// import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "./Header";
// import { useHistory } from "react-router";
// import PRODUCTS from "../data/men";
import {  useDispatch } from 'react-redux'
import { addToCart, getTotals } from '../store/slice/CartSlice'
import { useQuery } from "@tanstack/react-query";
import { MenProduct } from "../queries/MenData";
import StarRating from "./StarRating";
const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  // const history = useHistory()

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
    dispatch(getTotals())
    // history.push("/cart")
  }
  const {data} = useQuery({
    queryKey : ["men"],
    queryFn: MenProduct,
    })
  return (
    <div className="singleProduct__page">
      <div className="navbar__shadow color-black">
      <Header />
      </div>
    <div className="singleproduct__section">
      <div className="single__product container">
        {data && data.filter((item) => item.id == id).map((item) => (
          <div className="product" key={item.id}>
            <Grid container spacing={3}>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
              <div className="product__img">
                <img src={item.productImage} alt="" />
              </div>
            </Grid>
            <Grid item xs={4} sm={4} md={5} lg={4} xl={4}>
              <div className="product__img">
                <img src={item.productImage} alt="" style={{height: '450px'}} />
              </div>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
              <div className="product__details">
                <h4 className="product__discount">sale</h4>
                <h1 className="product__name">{item.productTitle}</h1>
                <h2 className="product__price">${item.price}</h2>
                <h4 className="product__description">{item.description}</h4>

                <div className="cart__btn" onClick={() => handleAddToCart(item) }>
                  <a href="#">Cart</a>
                </div>
                <div>
                  <Box sx={{mt: 3}}>
                <StarRating id={id} />
                  </Box>
                </div>
              </div>
            </Grid>
            </Grid>
          </div>
        ))}
      {/* <h2>single product component {id}</h2> */}
   
    </div>
    </div>
    </div>
  );
};

export default SingleProduct;
