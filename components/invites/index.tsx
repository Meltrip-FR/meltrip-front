import axios from "axios"
import { useRouter } from "next/router"
import { Fragment, useCallback, useEffect, useState } from "react"
import ResultCard from "./result"
import Eight from "./steps/eight"
import First from "./steps/first"
import Five from "./steps/five"
import Four from "./steps/four"
import Nine from "./steps/nine"
import Present from "./steps/present"
import Second from "./steps/second"
import Seven from "./steps/seven"
import Six from "./steps/six"
import Ten from "./steps/ten"
import Three from "./steps/three"
import { addMembers, updateMembers } from "@/lib/members"

const Invites = () => {
  const router = useRouter()
  const [result, setResult] = useState<any>()
  const [formState, setFormState] = useState({
    email: "",
    firstname: "",
    lastname: "",
    empathique: 0,
    reveur: 0,
    rebelle: 0,
    perseverant: 0,
    perfectionniste: 0,
    travailaddict: 0,
    resultat: "",
    steps: 0,
    activeIndex: 0
  })

  const calculateResponsePercentages = () => {
    const totalCount =
      formState.empathique +
      formState.reveur +
      formState.rebelle +
      formState.perseverant +
      formState.perfectionniste +
      formState.travailaddict

    const responsePercentages: any = {
      empathique: (formState.empathique / totalCount) * 100,
      reveur: (formState.reveur / totalCount) * 100,
      rebelle: (formState.rebelle / totalCount) * 100,
      perseverant: (formState.perseverant / totalCount) * 100,
      perfectionniste: (formState.perfectionniste / totalCount) * 100,
      travailaddict: (formState.travailaddict / totalCount) * 100
    }

    let highestPercentage: any = 0
    let objectWithHighestPercentage: any = {}

    for (const [key, value] of Object.entries(responsePercentages) as any) {
      if (value > highestPercentage) {
        highestPercentage = value
        objectWithHighestPercentage = {
          type: key,
          pourcent: Math.round(value)
        }
      }
    }
    return objectWithHighestPercentage
  }

  const handleSubmit = async () => {
    const resultState = calculateResponsePercentages()
    const data = {
      idGroup: parseInt(router.query.id as string),
      email: formState.email,
      firstname: formState.firstname,
      lastname: formState.lastname,
      present: 1,
      resultType: resultState?.type,
      resultState: resultState.pourcent
    }
    const add = await addMembers(data)
    if (add) {
      setFormState({ ...formState, activeIndex: 0, steps: 11 })
      return setResult(add)
    }
  }

  const getSeminar = useCallback(async () => {
    const seminar = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/seminar/${router.query.id}`
    )
    const member = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/group/member/${seminar.data.idGroup}`
    )

    if (seminar.data.adultNumber <= member.data.length) {
      router.push(`/invites/limit`)
    }
  }, [router.query.id])

  useEffect(() => {
    getSeminar()
  }, [getSeminar])

  console.log({ result })
  return (
    <Fragment>
      <div className="mx-auto container">
        {formState.steps === 0 ? (
          <Present setFormState={setFormState} formState={formState} />
        ) : formState.steps === 1 ? (
          <First setFormState={setFormState} formState={formState} />
        ) : formState.steps === 2 ? (
          <Second setFormState={setFormState} formState={formState} />
        ) : formState.steps === 3 ? (
          <Three setFormState={setFormState} formState={formState} />
        ) : formState.steps === 4 ? (
          <Four setFormState={setFormState} formState={formState} />
        ) : formState.steps === 5 ? (
          <Five setFormState={setFormState} formState={formState} />
        ) : formState.steps === 6 ? (
          <Six setFormState={setFormState} formState={formState} />
        ) : formState.steps === 7 ? (
          <Seven setFormState={setFormState} formState={formState} />
        ) : formState.steps === 8 ? (
          <Eight setFormState={setFormState} formState={formState} />
        ) : formState.steps === 9 ? (
          <Nine setFormState={setFormState} formState={formState} />
        ) : formState.steps === 10 ? (
          <Ten
            setFormState={setFormState}
            formState={formState}
            handleSubmit={handleSubmit}
          />
        ) : (
          <ResultCard formState={result} />
        )}
      </div>
    </Fragment>
  )
}

export default Invites
