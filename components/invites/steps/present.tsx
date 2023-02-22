import Amico from "@/components/assets/icons/amico";
import LogoColor from "@/components/assets/icons/logoColor";
import { Fragment } from "react";

const Present = ({ setFormState, formState }: any) => {
  return (
    <Fragment>
      <div className="flex justify-center mb-10">
        <LogoColor size={100} />
      </div>
      <p className="font-bold text-center text-sm">
        Bienvenue à notre quiz de personnalité* ! Ce test est conçu pour vous
        aider à évaluer votre personnalité au travail. Il comprend une série de
        10 questions à choix multiple et vous aurez la possibilité de voir vos
        résultats à la fin. C{"'"}est un moyen amusant et interactif d{"'"}
        apprendre de nouvelles choses. Alors, prêt.e à relever le défi ?
        Commençons !
      </p>
      <div className="flex justify-center mt-10">
        <Amico size={400} />
      </div>
      <p className="font-bold text-center text-sm mb-10">
        *À noter, ce test a été conçu à l’aide de psychologue de travail et se
        base sur des études de psychologie. Cependant, il n’a pas de portée
        scientifique. Les résultats sont donc indicatifs. Il est également
        important de noter que les résultats de ce quiz ne doivent pas être
        utilisés pour des décisions professionnelles importantes.
      </p>
      <div className="flex justify-center mb-10">
        <button
          onClick={() => setFormState({ ...formState, steps: 1 })}
          className="bg-meltrip-primary text-white font-bold py-2 px-4 rounded"
        >
          Commencer le quiz
        </button>
      </div>
    </Fragment>
  );
};

export default Present;
