/* eslint-disable react/jsx-key */
import { Grid } from "@mui/material";
import { Link } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import { MenProduct } from "../queries/MenData";
export const MenClothes = () => {
    const {data} = useQuery({
    queryKey : ["men"],
    queryFn: MenProduct,
    })
    return (
        <div>
            <div>
                <div className="selected_product_container">
                    
                    <Grid container spacing={3}>
                        {data && data.map((item)=>(
                            <Grid item xs={12} sm={4} md={4} lg={4} key={item.id}>
                            <Link to={`/product/${item.id}`}>
                            <div className="selected_product_item" key={item.id}>
                                <div className="product_img"><img src={item.productImages}/></div>
                                <div className="text_container">
                                    <div className="discount_container">
                                        <div className="discount"><h4>30%</h4></div>
                                    </div>
                                <div className="product_text">
                                <h3>{item.productTitle}</h3>
                                    <h3>$ {item.price}</h3> 
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
