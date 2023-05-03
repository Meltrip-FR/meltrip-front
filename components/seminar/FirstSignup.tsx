import { Fragment, useState } from "react"
import { monthArray } from "./months"
import Arrow from "@/components/assets/icons/arrow"

const FirstSignup = ({ formState, setFormState, setNextPage }: any) => {
  const date = new Date()
  // const today = new Date().toISOString().substring(0, 10); // Récupère la date actuelle
  const sevenDays = new Date(date.setDate(date.getDate() + 7))
    .toISOString()
    .substring(0, 10) // Récupère la date actuelle + 7 jours

  const [errorMessage, setErrorMessage] = useState<any>({
    type: "",
    message: ""
  })

  const verifyNextPage = () => {
    if (formState?.participNumber <= 0) {
      setErrorMessage({
        type: "participNumber",
        message: "Il doit au moins y avoir 1 participant."
      })
      setNextPage(1)
    } else if (
      formState?.knowDate === false &&
      (formState?.departurePeriod === "" ||
        formState?.approximateDuratione === "")
    ) {
      setErrorMessage({
        type: "knowDate",
        message:
          " Vous n'avez pas sélectionné de période ou une durée approximative."
      })
      setNextPage(1)
    } else if (
      formState?.knowDate === true &&
      (formState?.startDate === null || formState?.endDate === null)
    ) {
      setErrorMessage({
        type: "knowDate",
        message:
          " Vous n'avez pas sélectionné de date départ ou une date de retour."
      })
      setNextPage(1)
    } else {
      setErrorMessage({
        type: "",
        message: ""
      })
      setNextPage(2)
    }
  }

  return (
    <Fragment>
      {/* Header picture */}
      <h1 className="text-4xl text-black font-poppins font-bold">
        Etape 1 sur 2: Pour commencer
      </h1>
      <p className="mt-[48px] text-[20px] leading-7 text-justify">
        Nous avons besoin de quelques informations pour vous concocter le
        meilleur séminaire, pour ce faire nous avons besoins que vous
        remplissiez ce formulaire en 4 étapes qui nous permettra de vous créer
        une expérience incroyable.
      </p>
      {/* Number Inputs */}
      <p className="mt-[48px] text-[20px] leading-7 font-poppins font-bold">
        Nombre de personnes, veuillez vous inclure si vous y participez
      </p>
      <div className="md:grid md:grid-cols-2 md:w-[50%] md:gap-5 mt-5">
        <div className="md:col-span-1 py-1">
          <span className="mt-[48px] text-[20px] leading-7 font-poppins">
            Participant.e.s{" "}
          </span>{" "}
          <br />
          <span className="text-red-500">
            {errorMessage.type === "participNumber" && errorMessage.message}
          </span>
          <div className="md:grid md:grid-cols-2 items-center mt-5 border border-black rounded-lg">
            <div className="md:col-span-1 py-1 ml-1">
              <input
                className="w-full px-3 py-3  border-none"
                type="number"
                value={formState.participNumber}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    participNumber: parseInt(e.target.value)
                  })
                }
              />
            </div>
            <div className="hidden col-span-1 py-1 md:flex ml-4">
              <div
                className={`${
                  formState.participNumber > 0
                    ? "cursor-pointer"
                    : "cursor-not-allowed"
                } rounded-full flex flex-center items-center border border-meltrip-primary py-1 px-3`}
                onClick={() =>
                  formState.participNumber > 0 &&
                  setFormState({
                    ...formState,
                    participNumber: formState.participNumber - 1
                  })
                }
              >
                -
              </div>
              <div
                className="cursor-pointer rounded-full border border-meltrip-primary py-1 px-3 ml-3"
                onClick={() =>
                  setFormState({
                    ...formState,
                    participNumber: formState.participNumber + 1
                  })
                }
              >
                +
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Radio Inputs */}
      <p className="mt-10">
        <p className="mt-[48px] text-[20px] leading-7 font-poppins">
          Connaissez-vous les dates précises de votre voyage ?
          <span className="text-red-500">
            {errorMessage.type === "knowDate" && errorMessage.message}
          </span>
        </p>
      </p>
      <div className="flex flex-col mt-5">
        <div>
          <input
            className="accent-meltrip-primary"
            type="radio"
            id="yes"
            name="specificDates"
            value="yes"
            onChange={(_e) =>
              setFormState({
                ...formState,
                departurePeriod: "",
                approximateDuration: "",
                knowDate: true
              })
            }
            checked={formState.knowDate}
          />
          <label className="ml-3" htmlFor="yes">
            <span className="mt-[48px] text-[20px]">Oui</span>
          </label>
        </div>
        <div>
          <input
            className="accent-meltrip-primary"
            type="radio"
            id="no"
            name="specificDates"
            onChange={(_e) => setFormState({ ...formState, knowDate: false })}
            checked={!formState.knowDate}
          />
          <label className="ml-3" htmlFor="no">
            <span className="mt-[48px] text-[20px]">Non</span>
          </label>
          {!formState.knowDate ? (
            <div className="mt-5 grid grid-cols-2 gap-12">
              <div className="col-span-1 bg-[#E4E1E6] p-3">
                <p className="text-[18px] font-bold text-[#A5A2A7] leading-7 font-poppins border-b-2 border-meltrip-primary mx-10">
                  Période de départ
                </p>
                <div className="overflow-auto">
                  <ul className="mt-2 mx-10 overflow-y-auto h-32">
                    {monthArray.map((month, index) => (
                      <li
                        key={index}
                        className={`p-1 cursor-pointer hover:text-slate-500 ${
                          formState.departurePeriod ===
                            month.name + " " + date.getFullYear() &&
                          "text-meltrip-primary"
                        }`}
                        onClick={() =>
                          setFormState({
                            ...formState,
                            departurePeriod:
                              month.name + " " + date.getFullYear()
                          })
                        }
                      >
                        {month.name + " " + date.getFullYear()}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-span-1 bg-[#E4E1E6] py-3">
                <p className="text-[18px] font-bold text-[#A5A2A7] leading-7 font-poppins border-b-2 border-meltrip-primary mx-10">
                  Durée approximative
                </p>
                <ul className="mt-2 mx-10">
                  <li
                    className={`${
                      formState.approximateDuration === "Conseillez moi" &&
                      "text-meltrip-primary"
                    } p-1 cursor-pointer hover:text-slate-500`}
                    onClick={() =>
                      setFormState({
                        ...formState,
                        approximateDuration: "Conseillez moi"
                      })
                    }
                  >
                    Conseillez moi
                  </li>
                  <li
                    className={`${
                      formState.approximateDuration === "Moins d'une semaine" &&
                      "text-meltrip-primary"
                    } p-1 cursor-pointer hover:text-slate-500`}
                    onClick={() =>
                      setFormState({
                        ...formState,
                        approximateDuration: "Moins d'une semaine"
                      })
                    }
                  >
                    Moins d{"'"}une semaine
                  </li>
                  <li
                    className={`${
                      formState.approximateDuration === "1 semaine" &&
                      "text-meltrip-primary"
                    } p-1 cursor-pointer hover:text-slate-500`}
                    onClick={() =>
                      setFormState({
                        ...formState,
                        approximateDuration: "1 semaine"
                      })
                    }
                  >
                    1 semaine
                  </li>
                  <li
                    className={`${
                      formState.approximateDuration === "2 semaines" &&
                      "text-meltrip-primary"
                    } p-1 cursor-pointer hover:text-slate-500`}
                    onClick={() =>
                      setFormState({
                        ...formState,
                        approximateDuration: "2 semaines"
                      })
                    }
                  >
                    2 semaines
                  </li>
                  <li
                    className={`${
                      formState.approximateDuration === "Plus de 2 semaines" &&
                      "text-meltrip-primary"
                    } p-1 cursor-pointer hover:text-slate-500`}
                    onClick={() =>
                      setFormState({
                        ...formState,
                        approximateDuration: "Plus de 2 semaines"
                      })
                    }
                  >
                    Plus de 2 semaines
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex mt-10 w-full items-center">
              <div>
                <span className="mt-[48px] font-bold text-[20px] leading-7 font-poppins">
                  Date de départ
                </span>
                <input
                  name="start"
                  type="date"
                  className="bg-gray-50 border w-[25vh] border-gray-300 text-gray-900 sm:text-sm rounded-lg block mt-2 p-2.5"
                  placeholder="Select date start"
                  value={formState.startDate}
                  min={sevenDays}
                  onChange={(e) =>
                    setFormState({ ...formState, startDate: e.target.value })
                  }
                />
              </div>
              <div className="mx-4 mt-8 text-black">
                <Arrow size={25} />
              </div>
              <div>
                <span className="mt-[48px] font-bold text-[20px] leading-7 font-poppins">
                  Date de retour
                </span>
                <input
                  name="end"
                  type="date"
                  className="bg-gray-50 border w-[25vh] border-gray-300 text-gray-900 sm:text-sm rounded-lg block mt-2 p-2.5"
                  placeholder="Select date end"
                  min={sevenDays}
                  value={formState.endDate}
                  onChange={(e) =>
                    setFormState({ ...formState, endDate: e.target.value })
                  }
                />
              </div>
            </div>
          )}
        </div>
        {formState.knowDate && (
          <div className="flex flex-row items-center mt-16 gap-x-12">
            <p className="text-base text-black w-[60%]">
              ⭐️ Si vous souhaitez organiser un séminaire dans moins d’une
              semaine, Nous vous proposons nos séminaire Meltrip Now (des
              séminaires près à l’usage)
            </p>
            <p>
              <a
                href="https://meltrip.fr/"
                target="_blank text-meltrip-secondary"
                className="text-meltrip-secondary text-base underline"
              >
                Voir le catalogue Meltrip Now
              </a>
            </p>
          </div>
        )}
      </div>
      {/* Paginate */}
      <div className="w-full flex justify-between items-center mt-5">
        <div
          onClick={() => setNextPage(0)}
          className="text-meltrip-primary cursor-pointer mt-[48px] text-[20px] leading-7 font-poppins"
        >
          {"< "} Précédent
        </div>
        <div>
          <button
            onClick={() => verifyNextPage()}
            className="bg-meltrip-primary px-8 py-2 rounded text-white mt-[48px] text-[20px] leading-7 font-poppins"
          >
            Étape suivante{" "}
          </button>
        </div>
      </div>
    </Fragment>
  )
}

export default FirstSignup
