/* 1.2 회원가입 */
import SignUp from "@components/med/SignUp";
import Main from "@components/med/Main";
import {useSelector} from "react-redux";
import {useRouter} from "next/router";

const SignUpPage = () => {
    const router = useRouter();
    const isLogin = useSelector((state) => state.isLogin); // 로그인 여부
    if(isLogin) router.replace("/main").then(()=>{});

    return (
        <>
            {isLogin ? <Main/> : <SignUp/>}
        </>
    );
}

export default SignUpPage;