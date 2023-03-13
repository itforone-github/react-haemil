/* 로그아웃 */
import {useRouter} from "next/router";
import {useDispatch} from "react-redux";

const LogoutPage = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    dispatch({type: "LOGOUT"});
    router.replace("/").then(()=>{});
    // TODO: 서버 세션 삭제 필요
}

export default LogoutPage;