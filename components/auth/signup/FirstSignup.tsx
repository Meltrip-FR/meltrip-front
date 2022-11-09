import Arrow from "@/components/assets/icons/arrow";

const FirstSignup = ({ formState, setFormState, onFormChange }: any) => {
  return (
    <div>
      <div className="w-full bg-gray-100">
        <div className="relative">
          <div className="">
            <img
              className="object-none w-full h-64"
              src="https://www.naturepaysage.photo/wp-content/uploads/Nature-Paysage-portfolio-17-novembre-2019-0017-3.jpg"
              alt="picture"
            />
          </div>
          <div className="absolute top-3 ml-[35%] mt-[5%]">
            <h1 className="text-white text-5xl ">créons votre séminaire</h1>
          </div>
        </div>
        <div className="mx-auto max-w-7xl w-[75%] sm:px-6 lg:px-8">
          <div className="p-14 bg-white">
            <h1 className="text-2xl">Pour commencer</h1>
            <p className="text-justify mt-5">
              Nous avons besoin de quelques informations pour vous concocter le
              meilleur séminaire, pour ce faire nous avons besoins que vous
              remplissiez ce formulaire en 4 étapes qui nous permettra de vous
              créer une expérience incroyable.
            </p>
            {/* Number Inputs */}
            <p className="mt-10">
              <b>
                Nombre de personnes, veuillez vous inclure si vous y participez
              </b>
            </p>
            <div className="md:grid md:grid-cols-2 md:w-[50%] md:gap-5 mt-5">
              <div className="md:col-span-1 py-3">
                <span>Adultes</span>
                <div className="md:grid md:grid-cols-2 items-center mt-5 border border-gray-500">
                  <div className="md:col-span-1 py-1 ml-1">
                    <input
                      className="w-full p-1 border-none"
                      type="number"
                      value="0"
                    />
                  </div>
                  <div className="hidden col-span-1 py-1 md:grid md:grid-cols-2 gap-1 md:ml-4">
                    <div className="col-span-1 rounded-full border border-meltrip-primary p-1 h-3 w-3">
                      <span> - </span>
                    </div>
                    <div className="col-span-1 rounded-full border border-meltrip-primary py-1 px-3">
                      +
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1 py-3">
                <span>
                  Ados<span className="text-gray-50">{" <"} 16</span>
                  <div className="md:grid md:grid-cols-2 items-center mt-5 border border-gray-500">
                    <div className="md:col-span-1 py-1 ml-1">
                      <input
                        className="w-full p-1 border-none"
                        type="number"
                        value="0"
                      />
                    </div>
                    <div className="hidden col-span-1 py-1 md:flex ml-4">
                      <div className="rounded-full border border-meltrip-primary py-1 px-3">
                        -
                      </div>
                      <div className="rounded-full border border-meltrip-primary py-1 px-3 ml-3">
                        +
                      </div>
                    </div>
                  </div>
                </span>
              </div>
            </div>
            {/* Radio Inputs */}
            <p className="mt-10">
              <b>Connaissez-vous les dates précises de votre voyage ?</b>
            </p>
            <div className="flex flex-col mt-5">
              <div>
                <input
                  className="accent-meltrip-primary"
                  type="radio"
                  id="yes"
                  name="specificDates"
                  value="yes"
                  checked
                />
                <label className="ml-3" htmlFor="yes">
                  Oui
                </label>
              </div>
              <div>
                <input
                  className="accent-meltrip-primary"
                  type="radio"
                  id="no"
                  name="specificDates"
                  value="no"
                />
                <label className="ml-3" htmlFor="no">
                  Non
                </label>
              </div>
            </div>
            {/* Date Picker */}
            <div className="flex mt-10 w-full items-center">
              <div className="w-full">
                <span>Date de départ</span>
                <input
                  name="start"
                  type="date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block mt-2 w-full p-2.5"
                  placeholder="Select date start"
                />
              </div>
              <div className="mx-4 mt-8 text-gray-500">
                <Arrow size={25} />
              </div>
              <div className="w-full">
                <span>Date de retour</span>
                <input
                  name="end"
                  type="date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block mt-2 w-full p-2.5"
                  placeholder="Select date end"
                />
              </div>
            </div>
            <div className="w-full flex justify-between items-center mt-10">
              <div className="text-meltrip-primary text-xl">
                {"< "} Précédent
              </div>
              <div>
                <button className="bg-meltrip-primary text-xl p-2 rounded text-white">
                  Étape suivante{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSignup;
