/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
import { Grid } from "@mui/material";
import { cards } from "../assets/data";
import Choose_us_Card from "../components/cards/Choose_us_Card";
export const Choose_us = () => {
  return (
    <div className="container">
      <div className="choose_us_container">
        <div className="choose_title">
          <div>
            <h4>Why should you choose us?</h4>
          </div>
        </div>
        <Grid container spacing={3}>
        {cards.map((item)=>(
          <Grid item xs={12} sm={4} md={3} lg={3} key={item.para}>
          <Choose_us_Card  img={item.img} heading={item.head} para={item.para} key={item.head}/>
          </Grid>
        ))}
        </Grid>
      </div>
    </div>
  );
};
