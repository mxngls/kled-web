import Document, { Html, Head, Main, NextScript } from "next/document";

class Doc extends Document {
    render() {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default Doc;
