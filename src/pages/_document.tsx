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
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {/* <meta
            name="description"
            content="Hubert Pajączkowski - edukator seksualny, współpraca ze szkołami, organizacjami pozarządowymi, i klientami indywidualnymi."
          />
          <meta
            name="keywords"
            content="edukator seksualny, edukacja seksualna, seksuologia, bezpieczeństwo w sieci, wychowanie do życia w rodzinie"
          />
          <meta name="author" content="Hubert Pajączkowski" />
          <meta
            property="og:title"
            content="Czytam przed seksem - Hubert Pajączkowski"
          />
          <meta
            property="og:description"
            content="Edukator seksualny współpracujący ze szkołami, organizacjami i klientami indywidualnymi."
          />
          <meta property="og:image" content="/img/hubert/hubert02.jpg" />
          <meta property="og:url" content="https://www.czytamprzedseksem.pl/" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Czytam przed seksem - Hubert Pajączkowski"
          />
          <meta
            name="twitter:description"
            content="Edukator seksualny współpracujący ze szkołami, organizacjami i klientami indywidualnymi."
          />
          <meta name="twitter:image" content="/img/hubert/hubert02.jpg" />
          <meta name="robots" content="index, follow" /> */}

          {/*Github version noindex, no follow */}
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
