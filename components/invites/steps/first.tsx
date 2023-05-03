import { Fragment, useState } from "react"
import { questions } from "../data/questions"
import LogoColor from "@/components/assets/icons/logoColor"

const First = ({ setFormState, formState }: any) => {
  const questionsList: any = questions[0]
  let pattern = /@gmail(\.com)?/
  const [errorMessage, setErrorMessage] = useState("")
  const verify = () => {
    const listVerif = [formState.email, formState.firstname, formState.lastname]
    if (listVerif.includes("")) {
      setErrorMessage("Veuillez remplir tous les champs")
    } else if (pattern.test(formState?.email)) {
      setErrorMessage("vous n'avez pas un domaine autorisé (@gmail)")
    } else {
      setFormState({ ...formState, activeIndex: 0, steps: 2 })
    }
  }

  const handleChangeActive = (newActiveIndex: any, type: any) => {
    const oldType = questionsList.answers[formState.activeIndex].type
    setFormState({
      ...formState,
      [oldType]: formState[oldType] !== 0 ? formState[oldType] - 1 : 0,
      [type]: formState[type] + 1,
      activeIndex: newActiveIndex
    })
  }

  return (
    <Fragment>
      <div className="flex justify-center">
        <LogoColor size={150} />
      </div>
      <div>
        <h3 className="uppercase text-black font-bold text-xl">
          Veuillez renseigner votre :
        </h3>
        <div className="flex flex-col gap-y-5">
          <p className="text-red-500">{errorMessage}</p>
          <input
            className="bg-[#ECF3F2] w-full rounded px-2 py-3"
            type="text"
            placeholder="Nom"
            onChange={(e) =>
              setFormState({ ...formState, lastname: e.target.value })
            }
          />
          <input
            className="bg-[#ECF3F2] w-full rounded px-2 py-3"
            type="text"
            placeholder="Prénom"
            onChange={(e) =>
              setFormState({ ...formState, firstname: e.target.value })
            }
          />
          <input
            className="bg-[#ECF3F2] w-full rounded px-2 py-3"
            type="email"
            placeholder="Email professionnel"
            onChange={(e) =>
              setFormState({ ...formState, email: e.target.value })
            }
          />
        </div>
      </div>
      <p className="mt-16 uppercase text-black font-poppins font-bold text-xl">
        {questionsList.question}
      </p>
      <div className="flex flex-col gap-5 mt-5">
        {questionsList.answers.map((answer: any, index: number) => (
          <button
            key={index}
            onClick={() => handleChangeActive(index, answer.type)}
            className={`flex text-start rounded w-full px-2 py-3 hover:cursor-pointer hover:bg-[#448B7B] hover:text-white ${
              index === formState.activeIndex
                ? "cursor-pointer bg-[#448B7B] text-white"
                : "bg-[#ECF3F2]"
            }`}
          >
            {answer.text}
          </button>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          className="text-xl rounded text-white m-10 py-3 px-[20vh] hover:cursor-pointer hover:bg-[#448B7B] hover:text-white bg-[#186E7A]"
          onClick={() => verify()}
        >
          SUIVANT
        </button>
      </div>
    </Fragment>
  )
}

export default First
