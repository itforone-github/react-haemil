/* 1.3.1 비밀번호 재설정 */
import PwReset from "@components/med/PwReset";
import {Main} from "next/document";
import {useSelector} from "react-redux";

const PwResetPage = () => {
    const isLogin = useSelector((state) => state.isLogin); // 로그인 여부

    return (
        <>
            {isLogin ? <Main/> : <PwReset/>}
        </>
    );
}

export default PwResetPage;