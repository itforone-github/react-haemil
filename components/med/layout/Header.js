/*헤더*/
import Sidebar from "./Sidebar";
import Link from "next/link";

const Header = () => {
    return (
        <>
            <header>
                <Sidebar/>

                <div className="tnb">
                    <Link href="/main"><a><img alt="" src="/img/common/top_menu01.svg"/><span>메인</span></a></Link>
                    <Link href="/"><a><img alt="" src="/img/common/top_menu02.svg"/><span>계좌정보</span></a></Link>
                    <Link href="/"><a><img alt="" src="/img/common/top_menu03.svg"/><span>마이페이지</span></a></Link>
                    <Link href="/"><a><img alt="" src="/img/common/top_menu04.svg"/><span>홈페이지</span></a></Link>
                    <Link href="/"><a><img alt="" src="/img/common/top_menu05.svg"/><span>로그아웃</span></a></Link>
                </div>
            </header>
        </>
    );
}

export default Header;