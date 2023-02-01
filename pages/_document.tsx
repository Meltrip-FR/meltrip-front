import Document, { Html, Head, Main, NextScript } from "next/document";

const url = "https://meltrip.fr";
const imgUrl = "logo2.webp";
const titleBase = "Meltrip";
const desc =
  "Envie de voyager mais pas le temps d'organiser ou pas d'inspiration pour décider du lieu de ta destination ? En groupe, vous n'arrivez pas à vous mettre d'accord ? Meltrip, c'est l'agence qui organise tes voyages selon ta personnalité et tes envies de vacances grâce à un questionnaire dynamique et amusant ! C'est aussi un acteur engagé, qui participe à la démarche écologique en choisissant ses partenaires pour leur qualité, leurs valeurs et leur aspect écologique et reverse une partie des bénéfices aux entreprises pour contribuer au développement des partenaires locaux priorise les choses stp pour que demain on présente un truc béton !!";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        <Head>
          <link rel="icon" href="logo2.webp" />
          <meta property="og:title" content={titleBase} />
          <meta property="og:description" content={desc} />
          <meta name="description" content={desc} />
          <meta property="og:image" content={imgUrl} />
          <meta property="og:url" content={url} />
          <meta name="twitter:title" content={titleBase} />
          <meta name="twitter:description" content={desc} />
          <meta name="twitter:image" content={imgUrl} />
        </Head>
        <body>
          <noscript
            style={{
              fontFamily: "sans-serif",
              display: "grid",
              placeItems: "center",
              height: "100vh",
            }}
          >
            Please enable Javascript to access to Meltrip
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
