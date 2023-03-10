/* 1.1 로그인 */
import Login from "@components/med/Login";
import Main from "@components/med/Main";
import {useSelector} from "react-redux";

const LoginPage = () => {
    // 로그인 여부 확인
    const isLogin = useSelector((state) => state.isLogin);

    return (
        <>
            {isLogin ? <Main/> : <Login/>}
        </>
    );
}

export default LoginPage;