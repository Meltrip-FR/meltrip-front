import { useRouter } from "next/router"
import Layout from "pages"
import { useEffect } from "react"
import SeminarMeet from "@/components/templates/Meet"

const SeminarMeetPage = () => {
  const router = useRouter()
  let id = "1"
  useEffect(() => {
    if (!router.isReady) return
    id = router.query.id as string
  }, [router.isReady])

  return (
    <Layout>
      <SeminarMeet id={(id && parseInt(id as string)) || 1} />
    </Layout>
  )
}

export default SeminarMeetPage
