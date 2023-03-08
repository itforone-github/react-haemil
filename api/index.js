import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true, // 로그인 세션 공유 시 필요
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
        accept: 'application/json,',
    }
});

export default api;
