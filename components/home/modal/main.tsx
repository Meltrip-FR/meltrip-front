import Wave from "@components/assets/icons/wave";

const Main = ({ setStep }: any) => {
  return (
    <div>
      <div className=" absolute top-0 left-0">
        <Wave size={300} />
      </div>
      <div className="relative container flex flex-col items-center align-center">
        <h1 className="text-[#1D6E7B] text-3xl mb-5 font-semiBold">
          Créons ton voyage !
        </h1>
        <div className=" w-96">
          <p className="mb-3 font-light  text-lg text-center ">
            Pour réussir à trouver le voyage le plus adapté à ta personnalité et
            à tes envies, nous avons besoin de te connaître davantage 🔥
          </p>
          <p className=" font-light text-center text-lg">
            Pas de panique, cela ne te prendra que quelques minutes.
          </p>

          <ul className="list-none">
            <li className="mt-10 text-lg w-full text-[#1D6E7B]">
              <div className="flex flex-row align-items items-center">
                <p className="mr-5 font-black text-[#CE5729]">1</p>
                <p className="font-semibold"> CHOISIS TON PROFIL VOYAGEUR</p>
              </div>
            </li>
            <li className="mt-5 text-lg w-full text-[#1D6E7B]">
              <div className="flex flex-row align-items items-center">
                <p className="mr-5 font-black text-[#CE5729]">2</p>
                <p className="font-semibold">
                  PARLE-NOUS DE TES ENVIES DE VOYAGE
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center align-center p-6 mt-5">
        <button
          onClick={() => setStep(1)}
          className="bg-[#CE5729] text-white active:bg-[#CE5729] font-bold uppercase text-sm px-10 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          Lets{"'"}s go !
        </button>
      </div>
    </div>
  );
};

export default Main;
