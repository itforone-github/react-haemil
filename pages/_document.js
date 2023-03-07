/**
 * _app.js 다음에 실행 (SSR)
 * <head><body> 태그 안에 들어갈 내용 커스텀
 * 클래스형 컴포넌트만 지원
 */
import Document, { Html, Head, Main, NextScript } from 'next/document'
import {ServerStyleSheet} from "styled-components";
import Script from "next/script";

class HamilDocument extends Document {
    // CSS 서버사이드렌더링을 위함
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
        try {
            ctx.renderPage = () => originalRenderPage({
                enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
            });
            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } catch (error) {
            console.log(error);
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html>
                <Head/>
                <body>
                <Main />
                <NextScript />
                <Script src="/utils/jquery-1.9.1.min.js" strategy={"beforeInteractive"}></Script>
                <Script src="/utils/bootstrap.min.js" strategy={"afterInteractive"}></Script>
                <Script src="/utils/ui.js" strategy={"afterInteractive"}></Script>
                <Script src="/utils/wow.min.js" strategy={"afterInteractive"}></Script>
                <Script src="/utils/swiper.min.js" strategy={"afterInteractive"}></Script>
                </body>
            </Html>
        )
    }
}

export default HamilDocument