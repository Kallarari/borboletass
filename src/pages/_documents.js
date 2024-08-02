import { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render(){
        return (
            <Html>
                <Head>
                    <link rel="manifest" href="/manigest.json" />
                    <link rel="apple-touch-icon" href="/icon.png" />
                    <meta name="theme-color" content="#fff" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}