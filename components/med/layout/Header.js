/*헤더*/
import Sidebar from "./Sidebar";
import {useRouter} from "next/router";

const Header = () => {
    const router = useRouter();

    return (
        <>
            <header>
                <Sidebar/>

                <div className="tnb">
                    <a onClick={() => router.push("/main")}><img alt="" src="/img/common/top_menu01.svg"/><span>메인</span></a>
                    <a onClick={() => router.push("/")}><img alt="" src="/img/common/top_menu02.svg"/><span>계좌정보</span></a>
                    <a onClick={() => router.push("/")}><img alt="" src="/img/common/top_menu03.svg"/><span>마이페이지</span></a>
                    <a onClick={() => router.push("/")}><img alt="" src="/img/common/top_menu04.svg"/><span>홈페이지</span></a>
                    <a onClick={() => router.push("/")}><img alt="" src="/img/common/top_menu05.svg"/><span>로그아웃</span></a>
                </div>
            </header>
        </>
    );
}

export default Header;