import Arrow from "@/components/assets/icons/arrow";
import { Router, useRouter } from "next/router";
import { Fragment } from "react";
import { monthArray } from "./months";

const FirstSignup = ({ formState, setFormState, setNextPage }: any) => {
  const date = new Date();
  const router = useRouter();
  return (
    <Fragment>
      {/* Header picture */}
      <h1 className="text-4xl font-poppins">Pour commencer</h1>
      <p className="mt-[48px] text-[20px] font-semibold leading-7 font-poppins">
        Nous avons besoin de quelques informations pour vous concocter le
        meilleur séminaire, pour ce faire nous avons besoins que vous
        remplissiez ce formulaire en 4 étapes qui nous permettra de vous créer
        une expérience incroyable.
      </p>
      {/* Number Inputs */}
      <p className="mt-[48px] text-[20px] font-semibold leading-7 font-poppins">
        Nombre de personnes, veuillez vous inclure si vous y participez
      </p>
      <div className="md:grid md:grid-cols-2 md:w-[50%] md:gap-5 mt-5">
        <div className="md:col-span-1 py-3">
          <span className="mt-[48px] text-[20px] font-semibold leading-7 font-poppins">
            Adultes
          </span>
          <div className="md:grid md:grid-cols-2 items-center mt-5 border border-gray-500">
            <div className="md:col-span-1 py-1 ml-1">
              <input
                className="w-full p-1 border-none"
                type="number"
                value={formState.adulteNumber}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    adulteNumber: parseInt(e.target.value),
                  })
                }
              />
            </div>
            <div className="hidden col-span-1 py-1 md:flex ml-4">
              <div
                className={` ${
                  formState.adulteNumber > 0
                    ? "cursor-pointer"
                    : "cursor-not-allowed"
                } rounded-full border border-meltrip-primary py-1 px-3`}
                onClick={() =>
                  formState.adulteNumber > 0 &&
                  setFormState({
                    ...formState,
                    adulteNumber: formState.adulteNumber - 1,
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
                    adulteNumber: formState.adulteNumber + 1,
                  })
                }
              >
                +
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-1 py-3">
          <span className="mt-[48px] text-[20px] font-semibold leading-7 font-poppins">
            Ados<span className="text-gray-400">{" <"} 16</span>
          </span>
          <div className="md:grid md:grid-cols-2 items-center mt-5 border border-gray-500">
            <div className="md:col-span-1 py-1 ml-1">
              <input
                className="w-full p-1 border-none"
                type="number"
                value={formState.adosNumber}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    adosNumber: parseInt(e.target.value),
                  })
                }
              />
            </div>
            <div className="hidden col-span-1 py-1 md:flex ml-4">
              <div
                className={` ${
                  formState.adosNumber > 0
                    ? "cursor-pointer"
                    : "cursor-not-allowed"
                } rounded-full border border-meltrip-primary py-1 px-3`}
                onClick={() =>
                  formState.adosNumber > 0 &&
                  setFormState({
                    ...formState,
                    adosNumber: formState.adosNumber - 1,
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
                    adosNumber: formState.adosNumber + 1,
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
        <p className="mt-[48px] text-[20px] font-semibold leading-7 font-poppins">
          Connaissez-vous les dates précises de votre voyage ?
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
                knowDate: true,
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
          {!formState.knowDate && (
            <div className="mt-5 grid grid-cols-2 gap-12">
              <div className="col-span-1 bg-[#E4E1E6] p-3">
                <p className="text-[18px] text-[#A5A2A7] font-semibold leading-7 font-poppins border-b-2 border-meltrip-primary mx-10">
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
                              month.name + " " + date.getFullYear(),
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
                <p className="text-[18px] text-[#A5A2A7] font-semibold leading-7 font-poppins border-b-2 border-meltrip-primary mx-10">
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
                        approximateDuration: "Conseillez moi",
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
                        approximateDuration: "Moins d'une semaine",
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
                        approximateDuration: "1 semaine",
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
                        approximateDuration: "2 semaines",
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
                        approximateDuration: "Plus de 2 semaines",
                      })
                    }
                  >
                    Plus de 2 semaines
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Date Picker */}
      <div className="flex mt-10 w-full items-center">
        <div className="w-full">
          <span className="mt-[48px] text-[20px] font-semibold leading-7 font-poppins">
            Date de départ
          </span>
          <input
            name="start"
            type="date"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block mt-2 w-full p-2.5"
            placeholder="Select date start"
            value={formState.startDate}
            onChange={(e) =>
              setFormState({ ...formState, startDate: e.target.value })
            }
          />
        </div>
        <div className="mx-4 mt-8 text-gray-500">
          <Arrow size={25} />
        </div>
        <div className="w-full">
          <span className="mt-[48px] text-[20px] font-semibold leading-7 font-poppins">
            Date de retour
          </span>
          <input
            name="end"
            type="date"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block mt-2 w-full p-2.5"
            placeholder="Select date end"
            value={formState.endDate}
            onChange={(e) =>
              setFormState({ ...formState, endDate: e.target.value })
            }
          />
        </div>
      </div>
      <div className="w-full flex justify-between items-center mt-10">
        <div
          onClick={() => router.back()}
          className="text-meltrip-primary cursor-pointer mt-[48px] text-[20px] font-semibold leading-7 font-poppins"
        >
          {"< "} Précédent
        </div>
        <div>
          <button
            onClick={() => setNextPage(1)}
            className="bg-meltrip-primary p-2 rounded text-white mt-[48px] text-[20px] font-semibold leading-7 font-poppins"
          >
            Étape suivante{" "}
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default FirstSignup;
