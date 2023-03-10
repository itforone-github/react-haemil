/**
 * 페이지 초기화
 * 서버 요청 시 가장 먼저 실행되며 모든 페이지에 공통적으로 적용
 * @param Component: 서버에 요청한 페이지
 * @param pageProps: getInitialProps 통해 전달받은 props
 */
import PropTypes from "prop-types";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {store, persistor} from "@reducers/index";
// css
import "@styles/bootstrap.min.css";
import "@styles/all.min.css";
import "@styles/sideber.css";
import "@styles/common.css";
import "@styles/member.css";
import "@styles/layout.css";
import "@styles/med.css";

const HamilApp = ({Component, pageProps}) => {
    return (
        <>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Component {...pageProps}/>
                </PersistGate>
            </Provider>
        </>
    )
};

HamilApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.elementType.isRequired
}

export default HamilApp;
