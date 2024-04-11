import axios from "axios";
import handleResponse from "../utils/Response";

export default async function signup(data){
   console.log(data)
  const body = {
    "name" : data.name,
    "password" : data.password,
    "email": data.email,
    "userImage": data.userImage
  }
    const res = await axios.post('http://127.0.0.1:3000/api/v1/user/auth/signup', body, {
        headers: {
            'Content-Type': 'application/json',
          }
      })
      return handleResponse(res)
}