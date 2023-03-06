/**
 * _app.js 다음에 실행 (SSR)
 * <head><body> 태그 안에 들어갈 내용 커스텀
 * 클래스형 컴포넌트만 지원
 */
import Document, {Html, Head, Main, NextScript} from 'next/document'

class HamilDocument extends Document {
    render() {
        return (
            <Html>
                <Head/>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

export default HamilDocument;