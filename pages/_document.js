import Document, { Head, Main, NextScript } from "next/document";

import "spectre.css/dist/spectre.min.css";
//import "spectre.css/dist/spectre-exp.min.css";
import "spectre.css/dist/spectre-icons.min.css";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
