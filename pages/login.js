/* 1.1 로그인 */
import Login from "@components/med/Login";
import Main from "@components/med/Main";
import {useSelector} from "react-redux";

const LoginPage = () => {
    const isLogin = useSelector((state) => state.isLogin); // 로그인 여부

    return (
        <>
            {isLogin ? <Main/> : <Login/>}
        </>
    );
}

export default LoginPage;