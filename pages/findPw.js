/* 1.3 아이디/비밀번호 찾기 */
import FindPw from "@components/med/FindPw";
import Main from "@components/med/Main";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";

const FindPwPage = () => {
    const router = useRouter();
    const isLogin = useSelector((state) => state.isLogin); // 로그인 여부
    if(isLogin) router.replace("/main").then(()=>{});

    return (
        <>
            {isLogin ? <Main/> : <FindPw/>}
        </>
    );
}

export default FindPwPage;