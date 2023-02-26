/*헤더*/
import Sidebar from "./Sidebar"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header>
                <Sidebar/>

                <div className="tnb">
                    <Link to="/"><img alt="" src="/img/common/top_menu01.svg"/><span>메인</span></Link>
                    <Link to="/"><img alt="" src="/img/common/top_menu02.svg"/><span>계좌정보</span></Link>
                    <Link to="/"><img alt="" src="/img/common/top_menu03.svg"/><span>마이페이지</span></Link>
                    <Link to="/"><img alt="" src="/img/common/top_menu04.svg"/><span>홈페이지</span></Link>
                    <Link to="/"><img alt="" src="/img/common/top_menu05.svg"/><span>로그아웃</span></Link>
                </div>
            </header>
        </>
    );
}

export default Header;