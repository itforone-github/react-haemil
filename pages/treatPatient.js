/* 2.2.1 환자관리 */
import TreatPatient from "@components/med/TreatPatient";
import Login from "@components/med/Login";
import {useSelector} from "react-redux";

const TreatPatientPage = () => {
    // 로그인 여부 확인
    const isLogin = useSelector((state) => state.isLogin);

    return (
        <>
            {isLogin ? <TreatPatient/> : <Login/>}
        </>
    );
}

export default TreatPatientPage;