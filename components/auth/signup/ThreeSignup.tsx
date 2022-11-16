import { useRouter } from "next/router";
import { Fragment } from "react";

const ThreeSignup = ({
  formState,
  onFormChange,
  setFormState,
  handSubmit,
}: any) => {
  const router = useRouter();
  return (
    <Fragment>
      {/* Header picture */}
      <h1 className="text-4xl font-poppins">Création de l’espace personnel</h1>
      <p className="mt-[48px] text-[20px] font-semibold leading-7 font-poppins">
        Pour traiter vos informations, créez votre espace personnel ou
        connectez-vous
      </p>
      {/* Civility */}
      <p className="mt-[48px] text-[20px] font-semibold leading-7 font-poppins">
        Civilité
      </p>
      <div className="flex flex-col mt-5">
        <div>
          <input
            className="accent-meltrip-primary"
            type="radio"
            id="mme"
            name="civility"
            value="mme"
            onChange={(_e) =>
              setFormState({
                ...formState,
                civility: "mme",
              })
            }
          />
          <label className="ml-3" htmlFor="mme">
            <span className="mt-[48px] text-[20px]">Mme</span>
          </label>
        </div>
        <div>
          <input
            className="accent-meltrip-primary"
            type="radio"
            id="m"
            name="civility"
            value="m"
            onChange={(_e) =>
              setFormState({
                ...formState,
                civility: "m",
              })
            }
          />
          <label className="ml-3" htmlFor="m">
            <span className="mt-[48px] text-[20px]">M.</span>
          </label>
        </div>
      </div>
      {/* Manager Name */}
      <p className="mt-[48px] text-[20px] font-semibold leading-7 font-poppins">
        Nom, Prénom du manager
      </p>
      <input
        type="text"
        className="py-3 px-4 pl-9 pr-16 block w-full shadow-sm text-sm focus:z-10 border-gray-500 border mt-5"
        name="nameManager"
        value={formState.nameManager}
        onChange={onFormChange}
      />
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
      {/* Siret */}
      <p className="mt-[40px] text-[20px] font-semibold leading-7 font-poppins">
        SIRET de l’entreprise
      </p>
      <input
        type="text"
        name="siretCompany"
        className="py-3 px-4 pl-9 pr-16 block w-full shadow-sm text-sm focus:z-10 border-gray-500 border mt-5"
        value={formState.siretCompany}
        onChange={(e) =>
          setFormState({
            ...formState,
            siretCompany: e.target.value,
          })
        }
      />
      {/* Newsletter */}
      <div className="mt-5">
        <input
          className="accent-meltrip-primary"
          type="checkbox"
          id="newsletter"
          name="isNewsletter"
          onChange={(_e) =>
            setFormState({
              ...formState,
              newsletter: !formState.newsletter,
            })
          }
        />
        <label className="ml-3">
          <span className="mt-[48px] text-[20px]">
            Je souhaite également recevoir les newsletters et actualités Evaneos
          </span>
        </label>
      </div>
      {/* Terms */}
      <div className="mt-3 mb-3">
        <input
          className="accent-meltrip-primary"
          type="checkbox"
          id="terms"
          name="isTerms"
          onChange={(_e) =>
            setFormState({
              ...formState,
              terms: !formState.terms,
            })
          }
        />
        <label className="ml-3">
          <span className="mt-[48px] text-[20px]">J'accepte les CGU & CGV</span>
        </label>
      </div>
      <p>
        Conformément à la loi "Informatique et Libertés", vous disposez d’un
        droit d’accès et de rectification aux données vous concernant, et
        d’opposition à leur traitement.{" "}
        <span className="text-meltrip-primary underline cursor-pointer">
          En savoir plus
        </span>
      </p>
      <div className="w-full flex justify-between items-center mt-10">
        <div
          onClick={() => router.back()}
          className="text-meltrip-primary cursor-pointer mt-[48px] text-[20px] font-semibold leading-7 font-poppins"
        >
          {"< "} Précédent
        </div>
        <div>
          <button
            onClick={() => handSubmit()}
            className="bg-meltrip-primary p-2 rounded text-white mt-[48px] text-[20px] font-semibold leading-7 font-poppins"
          >
            Créez un compte et envoyez votre projet
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default ThreeSignup;
