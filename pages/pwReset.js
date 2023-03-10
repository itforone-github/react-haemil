/* 1.3.1 비밀번호 재설정 */
import PwReset from "@components/med/PwReset";
import {Main} from "next/document";
import {useSelector} from "react-redux";

const PwResetPage = () => {
    // 로그인 여부 확인
    const isLogin = useSelector((state) => state.isLogin);

    return (
        <>
            {isLogin ? <Main/> : <PwReset/>}
        </>
    );
}

export default PwResetPage;