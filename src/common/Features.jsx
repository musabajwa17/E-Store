/* eslint-disable react/no-unescaped-entities */
import { Grid } from "@mui/material";
import { featuresData } from "../assets/featuresData";
import FeaturesCard from "../components/cards/FeaturesCard";

export const Features = () => {
  return (
    <div className="features__section">
      <div className="features_container">
        <Grid container >
        {featuresData.map((item)=>(
            <Grid item xs={4} sm={4} md={4} lg={4} xl={4} key={item.head} >
            <FeaturesCard key={item.para} img={item.img} head={item.head} para={item.para}  />
          </Grid>
        ))} 
        </Grid>
      </div>
    </div>
  );
};
