/* 2.1 환자메인 */
import Main from "@components/med/Main";
import Login from "@components/med/Login";
import {useSelector} from "react-redux";
import {useRouter} from "next/router";

const MainPage = () => {
    const isLogin = useSelector((state) => state.isLogin); // 로그인 여부

    return (
        <>
            {isLogin ? <Main/> : <Login/>}
        </>
    );
}

export default MainPage;