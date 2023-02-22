import LogoColor from "@/components/assets/icons/logoColor";
import { Fragment } from "react";
import { questions } from "../data/questions";

const First = ({ setFormState, formState }: any) => {
  const questionsList: any = questions[0];

  const handleChangeActive = (newActiveIndex: any, type: any) => {
    const oldType = questionsList.answers[formState.activeIndex].type;
    setFormState({
      ...formState,
      [oldType]: formState[oldType] !== 0 ? formState[oldType] - 1 : 0,
      [type]: formState[type] + 1,
      activeIndex: newActiveIndex,
    });
  };

  console.log({ formState });
  return (
    <Fragment>
      <div className="flex justify-center mb-5">
        <LogoColor size={100} />
      </div>
      <div>
        <h3 className="uppercase text-black font-poppins font-bold text-4xl">
          Veuillez renseigner votre :
        </h3>
        <div className="flex flex-col gap-5 mt-5">
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

      <p className="mt-5 uppercase text-black font-poppins font-bold text-4xl">
        {questionsList.question}
      </p>
      <div className="flex flex-col gap-5 mt-5">
        {questionsList.answers.map((answer: any, index: number) => (
          <button
            key={index}
            onClick={() => handleChangeActive(index, answer.type)}
            className={`flex text-start rounded bg-[#ECF3F2] w-full px-2 py-3 hover:cursor-pointer hover:bg-[#448B7B] hover:text-white ${
              index === formState.activeIndex &&
              "cursor-pointer bg-[#448B7B] text-white"
            }`}
          >
            {answer.text}
          </button>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          className="text-xl rounded text-white m-10 py-3 px-5 hover:cursor-pointer hover:bg-[#448B7B] hover:text-white bg-[#186E7A]"
          onClick={() => setFormState({ steps: 2 })}
        >
          SUIVANT
        </button>
      </div>
    </Fragment>
  );
};

export default First;
