import Head from "next/head"
import { useRouter } from "next/router"
import { Fragment } from "react"
import Footer from "@/components/body/footer"
import HeaderWhite from "@/components/body/header/headerWhite"
import HomePage from "@/components/home"
import SiteDown from "@/components/siteDown"

const Home = ({ children }: { children: React.ReactElement }) => {
  const router = useRouter()
  const urlPathname = router.pathname

  return (
    <Fragment>
      <Head>
        <title>Meltrip</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="logo2.webp" />
      </Head>
      {urlPathname === "/" ? (
        <HomePage />
      ) : (
        <Fragment>
          <HeaderWhite />
          {children}
          <Footer />
        </Fragment>
      )}
      {/* <SiteDown /> */}
    </Fragment>
  )
}

export default Home
