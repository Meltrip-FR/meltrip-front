import { useRouter } from "next/router"
import Layout from "pages"
import { useEffect } from "react"
import store from "@/redux/store"
import Organization from "@/components/user/organization"

const OrganizationPage = () => {
  let { auth } = store.getState()
  const router = useRouter()

  useEffect(() => {
    if (auth.login === false) {
      router.push("/")
    }
  }, [auth.login, router])

  return (
    <Layout>
      <Organization />
    </Layout>
  )
}

export default OrganizationPage
