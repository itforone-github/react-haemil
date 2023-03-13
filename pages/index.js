/* med(한의원) 첫페이지 */
import {useSelector} from "react-redux";
import {useRouter} from "next/router";

const IndexPage = ({}) => {
    const router = useRouter();
    const isLogin = useSelector((state) => state.isLogin); // 로그인 여부
    if(!isLogin) router.replace("/login").then(()=>{});
    else router.replace("/main").then(()=>{});

    return (
        <></>
    );
}

export default IndexPage;