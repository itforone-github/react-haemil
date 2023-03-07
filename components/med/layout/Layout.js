/**
 * 공통 레이아웃
 * @children: 컴포넌트의 내용
 * @title: 상단 타이틀
 * @desc: 페이지 설명
 */
import Header from "./Header";
import Footer from "./Footer";
import PropTypes from "prop-types";

const Layout = ({children, title, desc}) => {
    return (
        <div className="page-wrapper chiller-theme toggled">
            {/*header*/}
            <Header />

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
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
};

export default Layout;