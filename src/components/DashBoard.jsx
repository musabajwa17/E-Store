import { useDispatch, useSelector } from 'react-redux';
import { Header } from './Header'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from '../store/slice/CartSlice';
import { ArrowBack } from '@mui/icons-material';
import { Grid } from '@mui/material';
const DashBoard = () => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  console.log(cart)
  useEffect(() => {
   dispatch(getTotals())
  }, [cart, dispatch])

  //function will get an id which wil be remove from cart items
  const handleRemoveItem = (item) => {
    dispatch(removeFromCart(item))
  }

  const handleDecreaseCart = (item) => {
    dispatch(decreaseCart(item))
  }

  const handleIncreaseCart = (item) => {
    dispatch(addToCart(item))
  }
  return (
    <div className='cart_section'>
        <div className='navbar__shadow color-black'>
          <Header />
        </div>   
     <div className="main__section container">
        <div className="cart__continer">
          {cart.cartItems.length === 0 ? (
            <div className="continue__shopping">
              <h2>Your cart is empty</h2>
              <Link to="/">
                <h5>
                  <ArrowBack /> continue shopping
                </h5>
              </Link>
            </div>
          ) : (
            <div>
              <div className="titles">
                <Grid container>
                  <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <h3 className="product__title">Product</h3>
                  </Grid>
                  <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                    <h3 className="product__price-title">Price</h3>
                  </Grid>
                  <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                    <h3 className="product__quantity">Quantity</h3>
                  </Grid>
                  <Grid
                    item
                    xs={2}
                    sm={2}
                    md={2}
                    lg={2}
                    xl={2}
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <h3 className="product__total">Total</h3>
                  </Grid>
                </Grid>
              </div>
              <div className="cart__items">
                <Grid container>
                  {cart.cartItems &&
                    cart.cartItems.map((item) => (
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                        key={item.id}
                        style={{ padding: "15px 0", borderTop: "1px solid grey" }}
                      >
                        <Grid container>
                          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                            <div className="cart__image">
                              <div>
                                <img
                                  src={item.image}
                                  alt="cart__img"
                                  style={{ width: "120px", height: "120px" }}
                                />
                              </div>
                              <div className="image__desc">
                                <h3>{item.name}</h3>
                                <button className="remove__item" onClick={() => handleRemoveItem(item)}>Remove</button>
                              </div>
                            </div>
                          </Grid>
                          <Grid
                            item
                            xs={2}
                            sm={2}
                            md={2}
                            lg={2}
                            xl={2}
                            style={{
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                            }}
                          >
                            <div className="cart__price">$ {item.price}</div>
                          </Grid>
                          <Grid
                            item
                            xs={3}
                            sm={3}
                            md={3}
                            lg={3}
                            xl={3}
                            style={{
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                            }}
                          >
                            <div className="cart__quantity">
                              <button  className="count" onClick={() => handleDecreaseCart(item)}> - </button>
                              <div>{item.cartQuantity}</div>
                              <button onClick={() => handleIncreaseCart(item)} > + </button>
                            </div>
                          </Grid>
                          <Grid
                            item
                            xs={1}
                            sm={1}
                            md={1}
                            lg={1}
                            xl={1}
                            style={{
                              display: "flex",
                              justifyContent: "end",
                              alignItems: "center",
                            }}
                          >
                            <div className="cart__total">
                              <h3> ${item.price * item.cartQuantity}</h3>
                            </div>
                          </Grid>
                        </Grid>
                      </Grid>
                    ))}
                </Grid>
              </div>

              <div className="cart__summary">
                <div className="clear__cart">
                  <button className="clear__btn" onClick={() => dispatch(clearCart())}>Clear Cart</button>
                </div>

                <div className="cart__checkout">
                  <div className="subtotal">
                    <span><h3>Subtotal</h3></span>
                    <span className="amount"><h3>$ {cart.cartTotalAmount}</h3></span>
                  </div>
                  <div className="checkout">
                    <p>Taxes and shipping calculated at checkout</p>
                    <button className="checkout__btn" onClick={()=> navigate("/dashboard")}>Check out</button>
                  </div>
                  <div className="continue__shopping text-start">
                    <Link to="/">
                      <h5>
                        <ArrowBack /> continue shopping
                      </h5>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* {cartItem.map()} */}
        </div>
      </div>

     </div>
  )
}

export default DashBoard
