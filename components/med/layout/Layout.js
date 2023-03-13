/**
 * med(한의원) 공통 레이아웃
 * @param children: 컴포넌트의내용
 * @param title: 상단타이틀
 * @param desc: 페이지설명
 * @param pid: 레이아웃구분번호
 */
import Header from "./Header";
import Footer from "./Footer";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";
import {useRouter} from "next/router";
import Login from "@components/med/Login";
import {useEffect} from "react";

const Layout = ({children, title, desc, pageId}) => {
    const router = useRouter();
    const isLogin = useSelector((state) => state.isLogin); // 로그인 여부
    if (!isLogin) router.replace("/login").then(()=>{});

    // 로그인
    if (isLogin) {
        if(pageId == 1) {
            return (
                <div className="page-wrapper chiller-theme toggled">
                    {/*header*/}
                    <Header/>

                    {/*body*/}
                    <main className="page-content">
                        <div className="container-fluid">
                            <h2>
                                <strong>{title}</strong>
                                <span>{desc}</span>
                            </h2>
                            {children}
                        </div>
                    </main>

                    {/*footer*/}
                    <Footer/>
                </div>
            );
        }
        else if(pageId == 0) {
            return <></>;
        }
    }
    // 미로그인
    return <Login/>;
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
};

export default Layout;