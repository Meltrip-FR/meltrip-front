import Q8 from "@components/assets/icons/questions/q8";
import { addAnswer } from "database/data/auth";
import { useEffect, useState } from "react";
import { questions } from "./data";

import emailjs, { init } from "@emailjs/browser";
import Love from "components/assets/icons/love";
init("eZDvS3yBUPbn83R1T");

const Preferences = ({ setShowModal, setStep, userUid }: any) => {
  const [currentQuestion, setCurrentQuestion] = useState(questions[1]);
  const [currentAnswer, setCurrentAnswer] = useState<any>({});
  const [answers, setAnswers] = useState<any>([]);

  const [nextQuestion, setNextQuestion] = useState();

  const handleSubmit = async (e: any) => {
    const addForm = await addAnswer({ uid: userUid, data: answers });
    if (addForm) {
      setStep(0);
      setShowModal(false);
    }
  };

  const sendEmail = (e: any) => {
    e.preventDefault();
    var templateParams = {
      to_name: "",
    };

    emailjs.send("service_i73b7wl", "template_lo3xijq", templateParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  };

  return (
    <div className="relative container flex flex-col items-center align-center">
      <h1 className="text-[#1D6E7B] text-2xl mb-5">
        {currentQuestion.type === "final" ? (
          <span className="text-[#186E7A] font-semibold">Merci !</span>
        ) : currentQuestion.order !== "none" ? (
          `Question ${currentQuestion.order}`
        ) : (
          <span>{currentQuestion.title}</span>
        )}
      </h1>
      <span>{currentQuestion.content}</span>
      {currentQuestion.type === "mcq" && (
        <Mcq
          currentQuestion={currentQuestion}
          setCurrentAnswer={setCurrentAnswer}
          setNextQuestion={setNextQuestion}
        />
      )}
      {currentQuestion.type === "mcqOption" && (
        <McqOption
          currentQuestion={currentQuestion}
          setCurrentAnswer={setCurrentAnswer}
          setNextQuestion={setNextQuestion}
        />
      )}
      {currentQuestion.type === "form" && (
        <Form
          currentQuestion={currentQuestion}
          setCurrentAnswer={setCurrentAnswer}
          setNextQuestion={setNextQuestion}
        />
      )}
      {currentQuestion.type === "listMcq" && (
        <ListMcq
          currentQuestion={currentQuestion}
          setCurrentAnswer={setCurrentAnswer}
          setNextQuestion={setNextQuestion}
        />
      )}
      {currentQuestion.type === "final" && (
        <Final
          currentQuestion={currentQuestion}
          answers={answers}
          setStep={setStep}
        />
      )}
      <div className="flex items-center justify-center align-center p-6">
        <button
          disabled={!nextQuestion}
          type="button"
          className={`${
            !nextQuestion && currentQuestion.type != "final"
              ? "bg-gray-500 text-white active:bg-gray-500 cursor-not-allowed"
              : "bg-[#CE5729] text-white active:bg-[#CE5729] hover:shadow-lg cursor-pointer"
          } font-bold uppercase text-sm px-10 py-3 rounded shadow outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
          onClick={() => {
            if (nextQuestion && nextQuestion in questions) {
              setAnswers([...answers, currentAnswer]);
              setCurrentQuestion(questions[nextQuestion]);
              setNextQuestion(undefined);
            }
          }}
        >
          {currentQuestion.type === "final" ? (
            <span
              onClick={(e) => {
                sendEmail(e);
                handleSubmit(answers);
              }}
            >
              TERMINUS
            </span>
          ) : (
            "Suivant"
          )}
        </button>
      </div>
    </div>
  );
};

export const McqOption = ({
  currentQuestion,
  setCurrentAnswer,
  setNextQuestion,
}: any) => {
  const [selectedAnswers, setSelectedAnswers] = useState<any>(null);

  useEffect(() => {
    setSelectedAnswers(null);
  }, [currentQuestion]);

  return (
    <div className="flex items-center justify-center align-center w-full">
      <div className="flex flex-row justify-between p-5">
        <div
          onClick={() => {
            setSelectedAnswers(0);
            setCurrentAnswer({
              [currentQuestion.content]: currentQuestion.answers[0].content,
            });
            setNextQuestion(currentQuestion.answers[0].nextQuestion);
          }}
          className={`${
            selectedAnswers !== 0
              ? "bg-gray-200 hover:bg-gray-400"
              : "bg-[#c47251] hover:bg-[#C05E37] text-white"
          } w-60 rounded m-3 pb-10`}
        >
          <div className="flex items-center justify-center mt-3">
            {currentQuestion.answers[0].image}
          </div>
          <div>
            <span className="flex justify-center mt-10">
              {currentQuestion.answers[0].content}
            </span>
            <p className="flex justify-center text-xs font-medium text-center m-3">
              {currentQuestion.answers[0].smallTitle}
            </p>
            <p className="flex font-light text-center m-3 text-xs justify-center mt-5">
              {currentQuestion.answers[0].describe}
            </p>
          </div>
        </div>
        <div
          onClick={() => {
            setSelectedAnswers(1);
            setCurrentAnswer({
              [currentQuestion.content]: currentQuestion.answers[1].content,
            });
            setNextQuestion(currentQuestion.answers[1].nextQuestion);
          }}
          className={`${
            selectedAnswers !== 1
              ? "bg-gray-200 hover:bg-gray-400"
              : "bg-[#c47251] hover:bg-[#C05E37] text-white"
          } w-60 rounded m-3 pb-10`}
        >
          <div className="flex items-center justify-center mt-3">
            {currentQuestion.answers[1].image}
          </div>
          <div>
            <span className="flex justify-center mt-10">
              {currentQuestion.answers[1].content}
            </span>
            <p className="flex justify-center text-xs font-medium text-center m-3">
              {currentQuestion.answers[1].smallTitle}
            </p>
            <p className="flex font-light text-center m-3 text-xs justify-center mt-5">
              {currentQuestion.answers[1].describe}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Mcq = ({
  currentQuestion,
  setCurrentAnswer,
  setNextQuestion,
}: any) => {
  const [selectedAnswers, setSelectedAnswers] = useState<any>(null);

  useEffect(() => {
    setSelectedAnswers(null);
  }, [currentQuestion]);

  return (
    <div className="flex items-center justify-center align-center w-full">
      <div className="flex flex-row justify-between p-5">
        <div
          onClick={() => {
            setSelectedAnswers(0);
            setCurrentAnswer({
              [currentQuestion.content]: currentQuestion.answers[0].content,
            });
            setNextQuestion(currentQuestion.answers[0].nextQuestion);
          }}
          className={`${
            selectedAnswers !== 0
              ? "bg-gray-200 hover:bg-gray-400"
              : "bg-[#c47251] hover:bg-[#C05E37] text-white"
          } w-60 rounded m-3 pb-10`}
        >
          <div className="flex items-center justify-center mt-3">
            {currentQuestion.answers[0].image}
          </div>
          <div>
            <span className="flex justify-center mt-10">
              {currentQuestion.answers[0].content}
            </span>
          </div>
        </div>
        <div
          onClick={() => {
            setSelectedAnswers(1);
            setCurrentAnswer({
              [currentQuestion.content]: currentQuestion.answers[1].content,
            });
            setNextQuestion(currentQuestion.answers[1].nextQuestion);
          }}
          className={`${
            selectedAnswers !== 1
              ? "bg-gray-200 hover:bg-gray-400"
              : "bg-[#c47251] hover:bg-[#C05E37] text-white"
          } w-60 rounded m-3 pb-10`}
        >
          <div className="flex items-center justify-center mt-3">
            {currentQuestion.answers[1].image}
          </div>
          <div>
            <span className="flex justify-center mt-10">
              {currentQuestion.answers[1].content}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Form = ({ currentQuestion, setCurrentAnswer, setNextQuestion }: any) => {
  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    setCurrentAnswer(formData);
  }, [formData]);

  useEffect((): any => {
    setFormData({});
    setNextQuestion(currentQuestion.nextQuestion);
  }, [currentQuestion]);

  return (
    <div className="flex flex-col mt-3 h-72 w-80">
      {currentQuestion.answers.map((answer: any) => {
        return (
          <>
            {(answer.type === "text" ||
              answer.type === "date" ||
              answer.type === "number") && (
              <input
                key={answer.content}
                required={true}
                type={answer.type}
                name={answer.content}
                placeholder={answer.content}
                value={formData[answer.content] ? formData[answer.content] : ""}
                onChange={(e) =>
                  setFormData({ ...formData, [answer.content]: e.target.value })
                }
                className="block border border-grey-light w-full p-1 m-2 rounded"
              />
            )}
            {answer.type === "textarea" && (
              <textarea
                key={answer.content}
                required={true}
                name={answer.content}
                placeholder={answer.content}
                value={formData[answer.content] ? formData[answer.content] : ""}
                onChange={(e) =>
                  setFormData({ ...formData, [answer.content]: e.target.value })
                }
                className="block w-full border border-grey-light resize-none h-32 p-3 m-2 rounded"
              />
            )}
          </>
        );
      })}
    </div>
  );
};

export const ListMcq = ({
  currentQuestion,
  setCurrentAnswer,
  setNextQuestion,
}: any) => {
  const [selectedAnswers, setSelectedAnswers] = useState<any>(null);

  useEffect(() => {
    setSelectedAnswers(null);
    setNextQuestion(currentQuestion.nextQuestion);
  }, [currentQuestion]);

  return (
    <div className="flex flex-row items-center justify-center align-center mt-5 w-full ">
      <div className="w-[80%] mt-5 flex flex-row items-center p-16 align-center justify-between bg-[#ECF3F4]">
        <div className="mx-auto">
          <Q8 size={200} />
        </div>
        <div className="flex flex-col p-10">
          <div>
            {currentQuestion.answers.map((answer: any, i: number) => (
              <>
                <div
                  onClick={() => {
                    setSelectedAnswers(i);
                    setCurrentAnswer({
                      [currentQuestion.content]: answer.content,
                    });
                  }}
                  className={`${
                    selectedAnswers !== i
                      ? "bg-gray-200 hover:bg-gray-400"
                      : "bg-[#c47251] hover:bg-[#C05E37] text-white"
                  } w-60 rounded m-3 p-2`}
                >
                  <div>
                    <span className="flex justify-center">
                      {answer.content}
                    </span>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Final = ({ currentQuestion, answers }: any) => {
  return (
    <div className="h-96 w-full">
      <div className="flex flex-col text-gray-500 items-center align-center justify-center">
        <div className="w-96">
          <p className="text-base font-light text-center">
            Nous avons toutes les infos dont nous avons besoins pour te
            concocter ton escapade.
          </p>
          <p className="text-base font-light text-center mt-1">
            Un mail de confirmation t’a été envoyé pour confirmer ta demande.
          </p>
          <p className="text-base font-light text-center mt-1">
            Nous t’enverrons une proposition dans un délai de 5 jours ouvrés.
          </p>
        </div>
        <Love size={200} />

        <div className="-m-3">
          <p className="text-lg font-medium text-center text-[#C05E37]">
            À bientôt !
          </p>
          <p className="font-light text-lg text-center">L{"'"}équipe Meltrip</p>
        </div>
      </div>
    </div>
  );
};

export default Preferences;
