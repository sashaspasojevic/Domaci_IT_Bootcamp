import axios from "axios";

export const getAllProducts = () => {
        return axios.get(`http://localhost:3005/product`)
};

export const postProduct = (newProduct) => {
        return axios.post(`http://localhost:3005/product`, newProduct)
};

