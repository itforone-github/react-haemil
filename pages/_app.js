/**
 * 페이지 초기화
 * 서버 요청 시 가장 먼저 실행되며 모든 페이지에 공통적으로 적용
 * @Component: 서버에 요청한 페이지
 * @pageProps: getInitialProps 통해 전달받은 props
 */
import PropTypes from "prop-types";
// css
import "/styles/bootstrap.min.css";
import "/styles/all.min.css";
import "/styles/sideber.css";
import "/styles/common.css";
import "/styles/member.css";
import "/styles/layout.css";
import "/styles/med.css";

const HamilApp = ({Component, pageProps}) => {
    return (
        <>
            <Component {...pageProps}/>
        </>
    )
};

HamilApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.elementType.isRequired
}

export default HamilApp;
