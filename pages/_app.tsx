//React / Next
import type { AppProps } from "next/app";
import Script from "next/script";

//Redux
import store, { persistor } from "@redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

//CSS
import "../styles/globals.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={false} persistor={persistor}>
        <html lang="fr">
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-EBJFPBQ4GX"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'G-EBJFPBQ4GX');
        `}
          </Script>
          <Head>
            <meta name="author" content="Meltrip" />
            <meta name="keywords" content="Voyage agence numérique Meltrip" />
            <meta charSet="utf-8" />
            <title>Meltrip</title>
            <link rel="meltrip icon" href="logo2.webp" />
            <meta property="og:title" content="Meltrip" key="title" />
            <meta
              name="description"
              content="Envie de voyager mais pas le temps d'organiser ou pas d'inspiration pour décider du lieu de ta destination ? En groupe, vous n'arrivez pas à vous mettre d'accord ?
Meltrip, c'est l'agence qui organise tes voyages selon ta personnalité et tes envies de vacances grâce à un questionnaire dynamique et amusant !
C'est aussi un acteur engagé, qui participe à la démarche écologique en choisissant ses partenaires pour leur qualité, leurs valeurs et leur aspect écologique et reverse une partie des bénéfices aux entreprises pour contribuer au développement des partenaires locaux
priorise les choses stp pour que demain on présente un truc béton !!"
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
            <Component {...pageProps} />
          </body>
        </html>
      </PersistGate>
    </Provider>
  );
}
