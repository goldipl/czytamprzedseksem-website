import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="pl">
        <Head>
          <meta name="robots" content="noindex, nofollow" />
          <link rel="icon" href="./icons/favicon.ico" />
          <link rel="apple-touch-icon" href="./icons/favicon.ico" />
          <title>Czytam przed seksem - Hubert Pajączkowski</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
