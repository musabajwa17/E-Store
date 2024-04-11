
import { Grid } from "@mui/material";
import { ProductsData } from "../assets/ProductsData";
import NewProduct from "../components/today_product/NewProduct";

export const Today_products = () => {
    return (
        <div>
            <div className="container">
                <div className="today_product_container">
                    <div className="today_title">
                        <div><h4>Products in today</h4></div>
                    </div>
                    <Grid container spacing={3}>
                     {ProductsData.map((item)=>(
                        <Grid item xs={12} sm={4} md={3} lg={3} key={item.head}>
                        <NewProduct img={item.img} head={item.head} para={item.para} key={item.para} /> 
                        </Grid>  
                     ))}             
                    </Grid>
                </div>
            </div>
        </div>
    )
}

