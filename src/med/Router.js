/*
 * 라우터
 * @path: 컴포넌트경로
 * @element: 컴포넌트명
 */
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./Main";
import Login from "./Login";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}></Route> {/*메인*/}
                <Route path="./Med/Login" element={<Login/>}></Route> {/*로그인*/}
            </Routes>
        </BrowserRouter>
    );
}

export default Router;