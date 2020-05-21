import axios from "axios";

let $axios = axios.create({
    baseURL: "https://cornell-vet.herokuapp.com",
    timeout: 5000,
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
        const response = await $axios.post(url, JSON.stringify(data),{"Content-Type": "application/json"});
        console.log(response);
    } catch (error) {
        console.error(error);
    }
};