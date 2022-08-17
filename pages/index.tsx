//React / Next
import Footer from "@components/body/footer";
import { Header } from "@components/body/headerWhite";
import DashboardPage from "@components/user/dashboard";
import { useAppSelector } from "@redux/hooks";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import { Fragment, useEffect } from "react";

export default function Layout({ children }: { children: React.ReactElement }) {
  let content = (
    <div className="h-screen flex flex-row flex-auto">
      <div className="flex flex-col w-full">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );

  return (
    <Fragment>
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
      {content}
    </Fragment>
  );
}
