/*
 * 레이아웃
 * @props: 컴포넌트명 (상위컴포넌트에서 전달)
 */
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
    return (
        <>
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
                        {props.children}
                    </div>
                </main>

                {/*footer*/}
                <Footer/>
            </div>
        </>
    );
}

export default Layout;