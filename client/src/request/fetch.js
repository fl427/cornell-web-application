import axios from "axios";

let $axios = axios.create({
    baseURL: "http://localhost:5000",
    timeout: 1000,
    headers: {"Content-Type": "application/json"}
});


export const fetchValue = async (url) => {
    try {
        return await $axios.get(url).then((res)=>res);
    } catch (error) {
        console.error(error);
        return undefined;
    }

};

export const postValue = async (url, data) => {
    try {
        const response = await axios.post(url, JSON.stringify(data));
        console.log(response);
    } catch (error) {
        console.error(error);
    }
};