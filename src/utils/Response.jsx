async function handleResponse(res){

    if(!res.ok) { 
        const error = new Error("Something went wrong");
        error.code = res.status;
        error.message = error.code === 404 ? "Something is wrong " :  res.json;
    throw error
}
    return await res.json();
}

export default handleResponse