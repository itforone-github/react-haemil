/* 2.1 환자메인 */
import Main from "@components/med/Main";
import Login from "@components/med/Login";
import {useSelector} from "react-redux";

const MainPage = () => {
    // 로그인 여부 확인
    const isLogin = useSelector((state) => state.isLogin);

    return (
        <>
            {isLogin ? <Main/> : <Login/>}
        </>
    );
}

export default MainPage;