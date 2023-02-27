/*
 * 라우터
 * @path: 컴포넌트경로
 * @element: 컴포넌트명
 */
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./Main";
import Login from "./Login";
import SignUp from "./SignUp";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Login/>}></Route> {/*홈페이지 접근 시 보여줄 첫 화면*/}
                <Route path="Main" element={<Main/>}></Route> {/*메인*/}
                <Route path="Login" element={<Login/>}></Route> {/*로그인*/}
                <Route path="SignUp" element={<SignUp/>}></Route> {/*회원가입*/}
                <Route path="FindPw" element={<Login/>}></Route> {/*아이디/비밀번호 찾기*/}
                <Route element={<notFound/>}></Route> {/*접근거부*/}
            </Routes>
        </BrowserRouter>
    );
}

export default Router;