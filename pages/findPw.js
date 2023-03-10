/* 1.3 아이디/비밀번호 찾기 */
import FindPw from "@components/med/FindPw";
import {Main} from "next/document";
import {useSelector} from "react-redux";

const FindPwPage = () => {
    const isLogin = useSelector((state) => state.isLogin); // 로그인 여부

    return (
        <>
            {isLogin ? <Main/> : <FindPw/>}
        </>
    );
}

export default FindPwPage;