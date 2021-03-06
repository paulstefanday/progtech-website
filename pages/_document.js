import Document, { Html, Head, Main, NextScript } from "next/document";
// import { ServerStyleSheet } from 'styled-components'
import GlobalStyles from "../styles/global";

/**
 * Rendered Server Side
 */
export default class MyDocument extends Document {
  // static getInitialProps({ renderPage }) {
  //     const sheet = new ServerStyleSheet()
  //     const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
  //     const styleTags = sheet.getStyleElement()
  //     return { ...page, styleTags }
  // }

  render = () => (
    <Html lang="en">
      <Head>

        <meta
          name="description"
          content="We're teaming up on tech to win. We want progressive organisations 
and activists have the best tools possible, and the skills & support to use them."
        />
        <meta name="author" content="Progressive Tech Network" />
        <script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
        <script src="https://embed.typeform.com/embed.js"></script>
        {/* <link rel="icon" href="/static/favicon.ico" /> */}
        <meta
          key="viewport"
          name="viewport"
          content="initial-scale=1, minimum-scale=1, width=device-width"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&family=Rubik:wght@300;500;700&display=swap"
          rel="stylesheet"
        />
        <GlobalStyles />
        {this.props.styleTags}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>

    </Html>
  );
}
