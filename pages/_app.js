/**
 * 페이지 초기화
 * 서버 요청 시 가장 먼저 실행되며 모든 페이지에 공통적으로 적용
 * @Component: 서버에 요청한 페이지
 */
import PropTypes from "prop-types";
import {useEffect} from "react";
// css
import "styles/bootstrap.min.css";
import "styles/all.min.css";
import "styles/sideber.css";
import "styles/common.css";
import "styles/member.css";
import "styles/layout.css";
import "styles/med.css";
import Script from "next/script";

const HamilApp = ({Component, pageProps}) => {
    // 페이지 렌더링 후 실행 (useEffect(function, deps) => deps 생략 시 렌더링 될 때 마다 실행)
    // useEffect(() => {
    //     const script1 = document.createElement("script");
    //     script1.src = "/utils/jquery-1.9.1.min.js";
    //     const script2 = document.createElement("script");
    //     script2.src = "/utils/ui.js";
    //     document.body.appendChild(script1);
    //     document.body.appendChild(script2);
    //     return () => {
    //     }
    // }, []);

    return (
        <>
            <Component {...pageProps}/>

            <Script src="/utils/jquery-1.9.1.min.js"></Script>
            <Script src="/utils/bootstrap.min.js" strategy={"lazyOnload"}></Script>
            <Script src="/utils/ui.js" strategy={"lazyOnload"}></Script>
            <Script src="/utils/wow.min.js" strategy={"lazyOnload"}></Script>
            <Script src="/utils/swiper.min.js" strategy={"lazyOnload"}></Script>
        </>
    )
};

HamilApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    // pageProps: PropTypes.elementType.isRequired
}

export default HamilApp;
