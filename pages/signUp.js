/* 1.2 회원가입 */
import SignUp from "@components/med/SignUp";
import Main from "@components/med/Main";
import {useSelector} from "react-redux";

const SignUpPage = () => {
    const isLogin = useSelector((state) => state.isLogin); // 로그인 여부

    return (
        <>
            {isLogin ? <Main/> : <SignUp/>}
        </>
    );
}

export default SignUpPage;