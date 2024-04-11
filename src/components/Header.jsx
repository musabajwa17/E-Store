import "./index.css";

import { Link, useNavigate } from 'react-router-dom';
// import SearchIcon from "@material-ui/icons/Search";
import SearchIcon from '@mui/icons-material/Search';
import { Grid } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logo from '../assets/images/noun_cloth_2129414.png'
import { useSelector } from "react-redux";
export const Header = () => {
  const navigate = useNavigate();
  const { cartTotalQuantity } = useSelector((state) => state.cart)
  const user = JSON.parse(localStorage.getItem("user"))
  function handleLogout(){
    localStorage.removeItem("user");
    navigate("/login");
  }
  return (
    <div className="contai">
      <div className="navbar_container">
        <Grid container alignItems="center">
          <Grid item md={4}>
            <div className="nav_logo">
              <Link to="/"><img src={Logo} alt="" /></Link>
              <Link to="/"><span className="logo__name"> <span className="e">E</span> -Shop</span></Link>
            </div>
          </Grid>
          <Grid item md={4}>
            <div className="nav_options">
              <div>
                <ul>
                  <li><Link to='/men-products'>Men</Link></li>
                  <li><Link to='/women-products'>Women</Link></li>
                  <li><Link to='/kids-products'>Kids</Link></li>
                </ul>
              </div>
            </div>
          </Grid>
          <Grid item md={4}>
            <div className="nav_icons">
              <div>
                <ul>
                  <li>
                    <a href=" "><SearchIcon /></a>
                  </li>
                  <li className="cart__logo"><Link to="/cart"><ShoppingCartIcon /></Link><span className="total__items">{cartTotalQuantity}</span></li>
                  <li><Link to="/login"><PersonIcon /></Link></li>
                  <li className="action4">{ user ?  user.name : "No user"}</li>
                  <li className="action4" onClick={handleLogout}>{user && "Log out"}</li>
                </ul>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
