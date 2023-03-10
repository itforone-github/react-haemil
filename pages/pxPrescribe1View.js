/* 3.2.4 탕전처방 */
import PxPrescribe1View from "@components/med/PxPrescribe1View";
import Login from "@components/med/Login";
import {useSelector} from "react-redux";

const PxPrescribe1ViewPage = () => {
    const isLogin = useSelector((state) => state.isLogin); // 로그인 여부

    return (
        <>
            {isLogin ? <PxPrescribe1View/> : <Login/>}
        </>
    );
}

export default PxPrescribe1ViewPage;