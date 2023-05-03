import { useCallback, useEffect, useState } from "react"
import { getPayementBySeminarId } from "@/lib/payements"
import { getSeminarByUserId, updateSeminarById } from "@/lib/seminar"
import { useAppSelector } from "@/redux/hooks"
import BreadCrumbs from "@/components/utils/breadCrumbs"

const Templates = () => {
  const { auth } = useAppSelector((state) => state)
  const [seminarList, setListSeminar] = useState<any>()

  const arrayFilterbyType = (type: string): any => {
    return seminarList?.filter((item: any) => item.status === type)
  }

  const getSeminar = useCallback(async () => {
    const seminar: any = await getSeminarByUserId(
      auth.user.accessToken,
      auth.user.id
    )

    setListSeminar(seminar)
  }, [auth.user.accessToken, auth.user.id])

  useEffect(() => {
    getSeminar().catch((e) => console.error(e))
    seminarList
      ?.filter((item: any) => item.status === "Accepté")
      .map(async (item: any) => {
        const payement = await getPayementBySeminarId(
          auth.user.accessToken,
          item?.idPayement
        )
        if (payement.status === "Terminé") {
          await updateSeminarById(auth.user.accessToken, item.id, {
            status: "Terminé"
          })
        }
      })
  }, [getSeminar])

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-14 mx-auto">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center mb-3 mt-3">
            <BreadCrumbs url="/" name="home" active={false} />
            <BreadCrumbs url="/user/dashboard" name="Compte" active={true} />
            <BreadCrumbs url="/user/seminar" name="Séminaires" active={true} />
            <BreadCrumbs
              url="/user/seminar/"
              name="Vos séminaires prêt à l’emploi préféré"
              active={false}
            />
          </div>
        </div>
        <div className="flex justify-between items-center border-b mt-12 border-black py-5 mb-12">
          <h1 className="text-xl text-black">
            Vos séminaires prêt à l’emploi préféré (
            {arrayFilterbyType("Accepté")?.length || 0})
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Templates
