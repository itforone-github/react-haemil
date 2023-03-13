/* 1.1 로그인 */
import Login from "@components/med/Login";
import Main from "@components/med/Main";
import {useSelector} from "react-redux";
import {useRouter} from "next/router";

const LoginPage = () => {
    const router = useRouter();
    const isLogin = useSelector((state) => state.isLogin); // 로그인 여부
    if(isLogin) router.replace("/main").then(()=>{});

    return (
        <>
            {isLogin ? <Main/> : <Login/>}
        </>
    );
}

export default LoginPage;