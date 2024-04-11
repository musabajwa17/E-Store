import axios from "axios";

export default async function updateRating(data){
     axios.patch(`http://127.0.0.1:3000/api/v1/products/${data.id}`,{
        rating: data.rating
     })
}