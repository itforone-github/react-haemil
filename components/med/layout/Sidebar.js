/*사이드바*/
import Link from "next/link";

const Sidebar = () => {
    return (
        <>
            <a id="show-sidebar" className="btn btn-sm btn-dark" href="#">
                <i className="fa-light fa-bars"></i>
            </a>
            <nav id="sidebar" className="sidebar-wrapper">
                <div className="sidebar-content">
                    <div className="sidebar-brand">
                        <a href="#"><img src="/img/common/logo.svg" alt="해밀한의원 원외탕전실"/></a>
                        <div id="close-sidebar">
                            <i className="fa-light fa-xmark"></i>
                        </div>
                    </div>

                    <div className="sidebar-header">
                        <div className="user-info">
                            <span className="user-name">유신한의원</span>
                            <span className="user-role"><img alt="" src="/img/common/user_icon01.svg"/>김유신 담당자</span>
                            <span className="user-point"><img alt="" src="/img/common/user_icon02.svg"/>1,000점</span>
                        </div>
                    </div>

                    <div className="sidebar-menu">
                        <div className="side-icon">
                            <Link href={"/"}>
                                <a className="active">
                                    <img alt="환자진료" src="/img/common/sidebar_icon01.svg"/>
                                    <p>환자진료</p>
                                </a>
                            </Link>
                            <Link href={"/"}>
                                <a>
                                    <img alt="처방하기" src="/img/common/sidebar_icon02.svg"/>
                                    <p>처방하기</p>
                                </a>
                            </Link>
                            <Link href={"/"}>
                                <a>
                                    <img alt="한의학몰" src="/img/common/sidebar_icon03.svg"/>
                                    <p>한의학몰</p>
                                </a>
                            </Link>
                            <Link href={"/"}>
                                <a>
                                    <img alt="기본설정" src="/img/common/sidebar_icon04.svg"/>
                                    <p>기본설정</p>
                                </a>
                            </Link>
                        </div>

                        <div className="lnb">
                            <div id="side-icon1">
                                <ul>
                                    <li className="header-menu">
                                        <span>진료실</span>
                                    </li>
                                    <li className="sidebar-dropdown">
                                        <Link href={"/treatPatient"}>
                                            <a>
                                                <img alt="" src="/img/common/sidemenu01_01.svg"/>
                                                <span>환자 관리</span>
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="sidebar-dropdown">
                                        <Link href={"/"}>
                                            <a>
                                                <img alt="" src="/img/common/sidemenu01_02.svg"/>
                                                <span>예약·진료 관리</span>
                                                {/*<span className="badge badge-pill badge-danger">3</span>*/}
                                            </a>
                                        </Link>
                                        <div className="sidebar-submenu">
                                            <ul>
                                                <li>
                                                    <Link href={"/"}>
                                                        <a>실시간 진료 관리
                                                            {/*<span className="badge badge-pill badge-success">on</span>*/}
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href={"/"}>
                                                        <a href="med/components/Sidebar#">예약관리</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href={"/"}>
                                                        <a>최근 진료 내역</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    {/*<li className="sidebar-dropdown">
                                        <a href="#">
                                            <img alt="" src="/img/common/sidemenu01_03.svg"/>
                                            <span>원격 진료</span>
                                        </a>
                                    </li>*/}
                                    <li className="sidebar-dropdown">
                                        <Link href={"/"}>
                                            <a>
                                                <img alt="" src="/img/common/sidemenu01_04.svg"/>
                                                <span>진료 리뷰 관리</span>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
);
}

export default Sidebar;