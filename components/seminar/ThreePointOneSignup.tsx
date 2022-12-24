import { Fragment } from "react";

const ThreePointOneSignup = ({
  formState,
  onFormChange,
  setFormState,
  handSubmit,
  setNextPage,
}: any) => {
  return (
    <Fragment>
      {/* Header picture */}
      <h1 className="text-4xl font-poppins">Facturation</h1>
      <p className="mt-[48px] text-[20px] font-semibold leading-7 font-poppins">
        Pour traiter vos informations, merci de nous informer sur le responsable
        de facturation
      </p>
      {/* billingManager */}
      <p className="mt-[48px] text-[20px] font-semibold leading-7 font-poppins">
        Êtes-vous le responsable de facturation ?
      </p>
      <div className="flex flex-col mt-5">
        <div>
          <input
            className="accent-meltrip-primary"
            type="radio"
            id="yes"
            name="billingManager"
            onChange={(_e) =>
              setFormState({
                ...formState,
                billingManager: true,
              })
            }
            checked={formState.billingManager}
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
            name="billingManager"
            onChange={(_e) =>
              setFormState({
                ...formState,
                billingManager: false,
              })
            }
            checked={!formState.billingManager}
          />
          <label className="ml-3" htmlFor="no">
            <span className="mt-[48px] text-[20px]">Non</span>
          </label>
          {!formState.billingManager && (
            <Fragment>
              <p className="mt-[48px] text-[20px] font-semibold leading-7 font-poppins">
                Saississez l’e-mail du responsable financier
              </p>
              <input
                type="email"
                placeholder="meltrip@meltrip.fr"
                name="emailFinancial"
                className="py-3 px-4 pl-9 pr-16 block w-full shadow-sm text-sm focus:z-10 border-gray-500 border mt-5"
                value={formState.emailFinancial}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    emailFinancial: e.target.value,
                  })
                }
              />
              <p className="mt-[48px] text-[20px] font-semibold leading-7 font-poppins">
                Saississez le numero du responsable financier
              </p>
              <input
                type="text"
                name="numberFinancial"
                className="py-3 px-4 pl-9 pr-16 block w-full shadow-sm text-sm focus:z-10 border-gray-500 border mt-5"
                value={formState.numberFinancial}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    numberFinancial: e.target.value,
                  })
                }
              />
            </Fragment>
          )}
        </div>
      </div>

      <div className="w-full flex justify-between items-center mt-10">
        <div
          onClick={() => setNextPage(2)}
          className="text-meltrip-primary cursor-pointer mt-[48px] text-[20px] font-semibold leading-7 font-poppins"
        >
          {"< "} Précédent
        </div>
        <div>
          <button
            onClick={() => handSubmit()}
            className="bg-meltrip-primary p-2 rounded text-white mt-[48px] text-[20px] font-semibold leading-7 font-poppins"
          >
            Créez le séminaire
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default ThreePointOneSignup;
