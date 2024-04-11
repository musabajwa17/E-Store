/* eslint-disable react/jsx-key */
import { Grid } from "@mui/material";
import { Link } from 'react-router-dom';

import PRODUCTS from '../data/men';

export const Products = () => {
    return (
        <div>
            <div className="container">
                <div className="selected_product_container">
                    <div className="show_more">
                        <div className="selected_title"><p>Selected just for you</p></div>
                        <div className="show_more_button"><a href=" ">show more</a></div>
                    </div>
                    
                    <Grid container spacing={3}>
                        {PRODUCTS.map((item)=>(
                            <Grid item xs={12} sm={4} md={3} lg={3}>
                            <Link to={`/product/${item.id}`}>
                            <div className="selected_product_item" key={item.id}>
                                <div className="product_img"><img src={item.image}/></div>
                                <div className="text_container">
                                    <div className="discount_container">
                                        <div className="discount"><h4>30%</h4></div>
                                    </div>
                                <div className="product_text">
                                <h3>{item.name}</h3>
                                    <h3>${item.price}</h3> 
                                </div>
                                </div>
                            </div>
                             </Link>
                            </Grid>
                        ))}

                    </Grid>
                </div>
            </div>
        </div>
    )
}

