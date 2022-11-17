import { useRouter } from "next/router";
import { Fragment } from "react";

const SecondSignup = ({
  formState,
  onFormChange,
  setFormState,
  setNextPage,
}: any) => {
  const router = useRouter();
  const formListSleep = [
    {
      key: 1,
      value: "Chez l'habitant, guest-house, etc.",
    },
    {
      key: 2,
      value: "Hôtels simples (propres et peu chers)",
    },
    {
      key: 3,
      value: "Hôtels confortables (équivalent 3 étoiles)",
    },
    {
      key: 4,
      value: "Hôtels charme et luxe (équivalent 4 étoiles ou plus",
    },
    {
      key: 5,
      value: "Hébergements d'Exception, Lodges Haut de gamme",
    },
  ];
  const formAccompanied = [
    { key: 1, value: "Accompagné(e) d'un chauffeur-guide" },
    { key: 2, value: "Sans accompagnement" },
    { key: 3, value: "Rejoindre un petit groupe déjà constitué" },
  ];

  return (
    <Fragment>
      {/* Header picture */}
      <h1 className="text-4xl font-poppins">Décrivez-nous votre projet</h1>
      <p className="mt-[48px] text-[20px] font-semibold leading-7 font-poppins">
        Pour traiter vos informations, créez votre espace personnel ou
        connectez-vous.
      </p>
      <p className="mt-[48px] text-[20px] font-semibold leading-7 font-poppins">
        Quel type de séminaire voulez vous organiser ?
      </p>
      {/* Fragment picture partie */}
      {/* Budget par personne */}
      <p className="mt-[48px] text-[20px] font-semibold leading-7 font-poppins">
        Quel est votre budget par personne ?{" "}
        <span className="text-gray-400">(facultatif)</span>
      </p>
      <div className="md:w-[40%]">
        <div className="relative">
          <input
            type="number"
            className="py-3 px-4 pl-9 pr-16 block w-full shadow-sm text-sm focus:z-10"
            placeholder="0.00"
            name="budgetPerPerson"
            value={formState.budgetPerPerson}
            onChange={onFormChange}
          />
          <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
            <span className="text-gray-500">€</span>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none z-20 pr-4">
            <span className="text-gray-500">EUR</span>
          </div>
        </div>
      </div>
      {/* Sleeping */}
      <p className="mt-[48px] text-[20px] font-semibold leading-7 font-poppins">
        Quel est votre budget par personne ?
        <span className="text-gray-400">(facultatif)</span>
      </p>
      <div className="flex flex-col mt-5">
        {formListSleep.map((sleepSuggest) => {
          return (
            <div>
              <input
                className="accent-meltrip-primary"
                type="radio"
                id={sleepSuggest.value}
                name="sleepSuggest"
                onChange={(_e) =>
                  setFormState({
                    ...formState,
                    sleepSuggest: sleepSuggest.value,
                  })
                }
              />
              <label className="ml-3" htmlFor={sleepSuggest.value}>
                <span className="mt-[48px] text-[20px]">
                  {sleepSuggest.value}
                </span>
              </label>
            </div>
          );
        })}
      </div>
      {/* Describe Project */}
      <p className="mt-[48px] text-[20px] font-semibold leading-7 font-poppins">
        Décrivez votre projet
      </p>
      <textarea
        name="describeProject"
        className="resize-y rounded-md w-full h-64 mt-5 border border-b-gray-100"
        onChange={onFormChange}
        value={formState.describeProject}
      />
      {/* Accompanied List */}
      <p className="mt-[48px] text-[20px] font-semibold leading-7 font-poppins">
        Comment voulez-vous être accompagné ?
      </p>
      <div className="mt-5">
        {formAccompanied.map((element) => {
          return (
            <div>
              <input
                className="accent-meltrip-primary"
                type="radio"
                id={element.value}
                name="accompaniedSuggest"
                onChange={(_e) =>
                  setFormState({
                    ...formState,
                    accompaniedSuggest: element.value,
                  })
                }
              />
              <label className="ml-3" htmlFor={element.value}>
                <span className="mt-[48px] text-[20px]">{element.value}</span>
              </label>
            </div>
          );
        })}
      </div>
      <div className="w-full flex justify-between items-center mt-10">
        <div
          onClick={() => setNextPage(0)}
          className="text-meltrip-primary cursor-pointer mt-[48px] text-[20px] font-semibold leading-7 font-poppins"
        >
          {"< "} Précédent
        </div>
        <div>
          <button
            onClick={() => setNextPage(2)}
            className="bg-meltrip-primary p-2 rounded text-white mt-[48px] text-[20px] font-semibold leading-7 font-poppins"
          >
            Étape suivante{" "}
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default SecondSignup;
