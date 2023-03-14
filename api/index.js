import axios from "axios";

export const apiURL = "http://15.165.92.13:8200/";
const API = axios.create({
    baseURL: apiURL,
    withCredentials: true, // 로그인 세션 공유 시 필요
    headers: {
        // 'Content-type': 'application/json; charset=UTF-8',
        'Content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json,',
    },
    timeout: 10000,
});

export default API;