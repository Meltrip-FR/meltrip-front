import { Fragment } from "react"
import Amico from "@/components/assets/icons/amico"
import LogoColor from "@/components/assets/icons/logoColor"

const Present = ({ setFormState, formState }: any) => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="flex justify-center">
        <LogoColor size={150} />
      </div>
      <p className="text-center text-sm w-[90vh]">
        Bienvenue à notre quiz de personnalité* ! Ce test est conçu pour vous
        aider à évaluer votre personnalité au travail. Il comprend une série de
        10 questions à choix multiple et vous aurez la possibilité de voir vos
        résultats à la fin. C{"'"}est un moyen amusant et interactif d{"'"}
        apprendre de nouvelles choses. Alors, prêt.e à relever le défi ?
        Commençons !
      </p>
      <div className="flex justify-center mt-10">
        <Amico size={300} />
      </div>
      <p className="text-justify text-sm mb-5 mt-5 w-[90vh]">
        *À noter, ce test a été conçu à l’aide de psychologue de travail et se
        base sur des études de psychologie. Cependant, il n’a pas de portée
        scientifique. Les résultats sont donc indicatifs. Il est également
        important de noter que les résultats de ce quiz ne doivent pas être
        utilisés pour des décisions professionnelles importantes.
      </p>
      <div className="flex justify-center">
        <button
          onClick={() => setFormState({ ...formState, steps: 1 })}
          className="bg-meltrip-primary text-white font-bold py-5 px-[20vh] rounded"
        >
          Commencer le quiz
        </button>
      </div>
    </div>
  )
}

export default Present
