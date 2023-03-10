/* med(한의원) 첫페이지 */
import Login from "@components/med/Login";
import Main from "@components/med/Main";
import {useSelector} from "react-redux";

const IndexPage = ({}) => {
    const isLogin = useSelector((state) => state.isLogin); // 로그인 여부

    return (
        <>
            <div>
                {isLogin ? <Main/> : <Login/>}
            </div>
        </>
    );
}

export default IndexPage;