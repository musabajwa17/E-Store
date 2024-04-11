/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const Protected = (props) => {
    const {Component} =  props;
    const navigate = useNavigate();
    useEffect(()=>{
       let auth = localStorage.getItem("user");
       if(!auth){
        navigate("/login");
       }
    }, [])
  return (
    <div>
      {Component}
    </div>
  )
}

export default Protected
