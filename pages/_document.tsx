import { Html, Main, Head, NextScript } from "next/document";

const MyDocument = () => {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Envie de voyager mais pas le temps d'organiser ou pas d'inspiration pour décider du lieu de ta destination ? En groupe, vous n'arrivez pas à vous mettre d'accord ?
Meltrip, c'est l'agence qui organise tes voyages selon ta personnalité et tes envies de vacances grâce à un questionnaire dynamique et amusant !
C'est aussi un acteur engagé, qui participe à la démarche écologique en choisissant ses partenaires pour leur qualité, leurs valeurs et leur aspect écologique et reverse une partie des bénéfices aux entreprises pour contribuer au développement des partenaires locaux
priorise les choses stp pour que demain on présente un truc béton !!"
        />
        <meta name="keywords" content="Voyage agence numérique Meltrip" />
        <meta name="author" content="Meltrip" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-EBJFPBQ4GX"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-EBJFPBQ4GX');`,
          }}
        />
      </Head>
      <body className="font-['DIN Alternate']">
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
};

export default MyDocument;
