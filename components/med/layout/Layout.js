/*공통레이아웃*/
import Header from "./Header";
import Footer from "./Footer";
import PropTypes from "prop-types";

const Layout = ({children}) => {
    return (
        <div className="page-wrapper chiller-theme toggled">
            {/*header*/}
            <Header />

            {/*body*/}
            <main className="page-content">
                <div className="container-fluid">
                    <h2>
                        <strong>{/*hearder_name*/}</strong>
                        <span>{/*상단페이지설명문*/}</span>
                    </h2>
                    {/*props.children: props로 전달받은 컴포넌트의 내용*/}
                    {children}
                </div>
            </main>

            {/*footer*/}
            <Footer/>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;