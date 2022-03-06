import { Html, Main, Head, NextScript } from "next/document";

const MyDocument = () => {
  const url = "https://meltrip.fr";
  const titleBase = "Meltrip";
  const desc =
    "Envie de voyager mais pas le temps d'organiser ou pas d'inspiration pour décider du lieu de ta destination ? En groupe, vous n'arrivez pas à vous mettre d'accord ? Meltrip, c'est l'agence qui organise tes voyages selon ta personnalité et tes envies de vacances grâce à un questionnaire dynamique et amusant ! C'est aussi un acteur engagé, qui participe à la démarche écologique en choisissant ses partenaires pour leur qualité, leurs valeurs et leur aspect écologique et reverse une partie des bénéfices aux entreprises pour contribuer au développement des partenaires locaux priorise les choses stp pour que demain on présente un truc béton !!";

  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo2.png" />
        <meta property="og:title" content={titleBase} />
        <meta property="og:description" content={desc} />
        <meta name="description" content={desc} />
        <meta property="og:url" content={url} />
        <meta name="description" content="" />
        <meta name="keywords" content="Voyage agence numérique Meltrip" />
        <meta name="author" content="Meltrip" />
      </Head>
      <body className="font-['DIN Alternate']">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
