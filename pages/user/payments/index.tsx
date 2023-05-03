import { useRouter } from "next/router"
import Layout from "pages"
import { useEffect } from "react"
import store from "@/redux/store"
import Payments from "@/components/user/payment"

const PaymentPage = () => {
  let { auth } = store.getState()
  const router = useRouter()

  useEffect(() => {
    if (auth.login === false) {
      router.push("/")
    }
  }, [auth.login, router])
  return (
    <Layout>
      <Payments />
    </Layout>
  )
}

export default PaymentPage
