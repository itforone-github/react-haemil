/*
 * 라우터
 * @path: 컴포넌트경로
 * @element: 컴포넌트명
 */
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./Main";
import Login from "./Login";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}></Route> {/**/}
                <Route path="Main" element={<Main/>}></Route> {/*메인*/}
                <Route path="Login" element={<Login/>}></Route> {/*로그인*/}
                <Route path="SignUp" element={<Login/>}></Route> {/*회원가입*/}
                <Route path="FindPw" element={<Login/>}></Route> {/*아이디/비밀번호 찾기*/}
            </Routes>
        </BrowserRouter>
    );
}

export default Router;