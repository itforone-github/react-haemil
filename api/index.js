import axios from "axios";

export const apiURL = "http://15.165.92.13:8200/";
const API = axios.create({
    baseURL: apiURL,
    withCredentials: true, // 로그인 세션 공유 시 필요
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
        accept: 'application/json,',
    }
});

export default API;
