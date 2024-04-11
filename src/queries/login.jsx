import axios from "axios"
import handleResponse from "../utils/Response"
export default async function login(data){
    const res = await axios.post('http://127.0.0.1:3000/api/v1/user/auth/login', data, {
          headers: {
              'Content-Type': 'application/json',
            }
        })
        const user = {
            name: res.data.data.user.name,
            status: res.data.status
        }
        localStorage.setItem("user", JSON.stringify(user))
        return handleResponse(res)
  }