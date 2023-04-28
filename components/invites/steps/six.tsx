import LogoColor from "@/components/assets/icons/logoColor";
import { Fragment } from "react";
import { questions } from "../data/questions";

const Six = ({ setFormState, formState }: any) => {
  const questionsList: any = questions[5];

  const handleChangeActive = (newActiveIndex: any, type: any) => {
    const oldType = questionsList.answers[formState.activeIndex].type;
    setFormState({
      ...formState,
      [oldType]: formState[oldType] !== 0 ? formState[oldType] - 1 : 0,
      [type]: formState[type] + 1,
      activeIndex: newActiveIndex,
    });
  };

  return (
    <Fragment>
      <div className="flex justify-center mb-5">
        <LogoColor size={150} />
      </div>

      <p className="mt-5 uppercase text-black font-poppins font-bold text-xl">
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
          onClick={() =>
            setFormState({ ...formState, activeIndex: 0, steps: 7 })
          }
        >
          SUIVANT
        </button>
      </div>
    </Fragment>
  );
};

export default Six;
