import { useRouter } from "next/router"
import Layout from "pages"
import { useEffect } from "react"
import store from "@/redux/store"
import CreateSeminar from "@/components/seminar"

const DashboardPage = () => {
  let { auth } = store.getState()
  const router = useRouter()

  useEffect(() => {
    if (auth.login === false) {
      router.push("/")
    }
  }, [auth.login, router])

  return (
    <Layout>
      <CreateSeminar />
    </Layout>
  )
}

export default DashboardPage
