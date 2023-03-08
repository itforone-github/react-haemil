/* med(한의원) 첫페이지 */
import Login from "@components/med/Login";
import Main from "./main";

const IndexPage = () => {
    // 로그인 여부 확인
    const isLogin = false;
    return (
        <>
            {isLogin ? <Main/> : <Login/>}
        </>
    );
}

export default IndexPage;