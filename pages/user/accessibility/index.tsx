import { useRouter } from "next/router"
import { useEffect } from "react"
import store from "@/redux/store"
import Accessibility from "@/components/user/organization"

const AccessibilityPage = () => {
  let { auth } = store.getState()
  const router = useRouter()

  useEffect(() => {
    if (auth.login === false) {
      router.push("/")
    }
  }, [auth.login, router])

  return <Accessibility />
}

export default AccessibilityPage
