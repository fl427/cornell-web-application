import axios from "axios";
export const fetchValue = async (url) => {
    try {
        const response = await axios.get(url);
        console.log(response);
    } catch (error) {
        console.error(error);
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