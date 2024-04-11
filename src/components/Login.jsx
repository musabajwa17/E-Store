import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import {IconButton} from "@mui/material";
import {OutlinedInput} from "@mui/material";
import {InputLabel} from "@mui/material";
import {InputAdornment} from "@mui/material";
import {FormControl} from "@mui/material";
import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";
import {Checkbox} from "@mui/material";
import { Header } from "./Header";
import "./index.css"
import axios from "axios";

export const Login = () => {
  const navigate = useNavigate();
  const [email , setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setPassword(event.target.value)
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  async function handleLogin(e){
    e.preventDefault();
    const URL = 'http://127.0.0.1:3000/api/v1/user/auth/login';
    const body = {
      "password" : password,
      "email": email,
    }
  const res =  await  axios.post( URL, body)
  const user = {
    name: res.data.data.user.name,
    status: res.data.status
}
localStorage.setItem("user", JSON.stringify(user))
   if(user.status === 'success'){
    navigate("/dashboard")
   }else{
    alert("Incorrect Email or Password");
   }
  }
  return (
    <div className="login__section">
      <div className="navbar__shadow color-black">
        <Header />
      </div>
      <div className="container">
        <div className="login_container">
          <div className="center_form">
            <div className="login_title">
              <h3>Login</h3>
            </div>
            <div className="root">
              <form className="login_form">
                <div className="root">
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  className="root"
                  onChange={(e)=> setEmail(e.target.value)}
                />
                </div>
                <FormControl
                  className="root_password"
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    labelWidth={70}
                  />
                </FormControl>

                <div className="checkbox_container">
                  <div className="checkbox">
                    <Checkbox
                      inputProps={{ "aria-label": "uncontrolled-checkbox" }}
                    />
                    <p>Keep me signed in </p>
                  </div>
                  <div className="forget_container">
                    <Link to="">Forgot password?</Link>
                  </div>
                </div>

                <div className="login_using_container">
                  <div className="signup">
                    <button onClick={()=> navigate("/signup")}>SignUp</button>
                  </div>
                  <div className="signup">
                    <button onClick={handleLogin}>Login</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
