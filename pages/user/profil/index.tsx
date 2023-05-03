import { useRouter } from "next/router"
import Layout from "pages"
import { useEffect } from "react"
import store from "@/redux/store"
import Profil from "@/components/user/profil"

const ProfilPage = () => {
  let { auth } = store.getState()
  const router = useRouter()

  useEffect(() => {
    if (auth.login === false) {
      router.push("/")
    }
  }, [auth.login, router])

  return (
    <Layout>
      <Profil />
    </Layout>
  )
}

export default ProfilPage
