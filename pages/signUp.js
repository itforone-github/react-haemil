/* 1.2 회원가입 */
import SignUp from "@components/med/SignUp";
import Main from "@components/med/Main";
import {useSelector} from "react-redux";

const SignUpPage = () => {
    // 로그인 여부 확인
    const isLogin = useSelector((state) => state.isLogin);

    return (
        <>
            {isLogin ? <Main/> : <SignUp/>}
        </>
    );
}

export default SignUpPage;