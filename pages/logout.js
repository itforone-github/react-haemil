/* 로그아웃 */
import {useRouter} from "next/router";
import {useDispatch} from "react-redux";

const LogoutPage = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    dispatch({type: "LOGOUT"});
    router.replace("/").then(()=>{});
}

export default LogoutPage;