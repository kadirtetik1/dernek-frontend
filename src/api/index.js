import axios from "axios";

export const BaseUrl= "https://localhost:44307/api/";

export const EndPoints = {   //controller names
    user:"Users",
    address:"Addresses",
    user_login : "Users/userControl",
    base:"base"
}

export const createAPIEndpoint = endpoint => {

    let url = BaseUrl + endpoint + "/";
   

    return {
        get : () => axios.get(url),
        post: new1 => axios.post(url, new1),  
        put: update => axios.put(url, update ),
        delete: id=> axios.delete(url + id),

    }

    
}