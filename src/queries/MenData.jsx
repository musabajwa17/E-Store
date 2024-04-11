import axios from "axios";
// import handleResponse from "../utils/Response";
export async function MenProduct(){
    const res = await axios.get('http://127.0.0.1:3000/api/v1/products');
    return res.data.data
}