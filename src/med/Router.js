/**
 * med폴더의 라우터
 * @path: 컴포넌트경로
 * @element: 컴포넌트명
 */
import {BrowserRouter, Route, Routes} from "react-router-dom";

import "css/med.css";
import Main from "./pages/Main";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import FindPw from "./pages/FindPw";
import PwReset from "./pages/PwReset";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Login/>}></Route> {/*홈페이지 접근 시 보여줄 첫 화면*/}
                <Route path="Main" element={<Main/>}></Route> {/*2.1 메인*/}
                <Route path="Login" element={<Login/>}></Route> {/*1.1 로그인*/}
                <Route path="SignUp" element={<SignUp/>}></Route> {/*1.2 회원가입*/}
                <Route path="FindPw" element={<FindPw/>}></Route> {/*1.3 아이디/비밀번호 찾기*/}
                <Route path="PwReset" element={<PwReset/>}></Route> {/*1.3.1 비밀번호 재설정*/}
                <Route element={<notFound/>}></Route> {/*접근거부*/}
            </Routes>
        </BrowserRouter>
    );
}

export default Router;