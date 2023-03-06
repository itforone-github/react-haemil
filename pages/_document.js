/**
 * _app.js 다음에 실행 (SSR)
 * <head><body> 태그 안에 들어갈 내용 커스텀
 * 클래스형 컴포넌트만 지원
 */
import Document, { Html, Head, Main, NextScript } from 'next/document'

class HamilDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head/>
                <body>
                <Main />
                <NextScript />
                </body>
                <script src="/utils/jquery-1.9.1.min.js"></script>
                <script src="/utils/bootstrap.min.js"></script>
                <script src="/utils/ui.js"></script>
                <script src="/utils/wow.min.js"></script>
                <script src="/utils/swiper.min.js"></script>
            </Html>
        )
    }
}

export default HamilDocument