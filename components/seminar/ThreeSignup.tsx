import { Fragment, useState } from "react";

const containsCapital = (word: string) => {
  for (let i = 0; i < word?.length; i++) {
    if (word[i] === word[i]?.toUpperCase()) {
      return true;
    }
  }
  return false;
};

const detectLowerCase = (word: string) => {
  for (let i = 0; i < word?.length; i++) {
    if (word[i] === word[i]?.toLowerCase()) {
      return true;
    }
  }
  return false;
};

const containsSpecialChar = (word: string) => {
  let specialChars = "!@#$%^&*()_+-=[]{}|;':<>,.?/";
  for (var i = 0; i < word.length; i++) {
    if (specialChars.indexOf(word[i]) !== -1) {
      return true;
    }
  }
  return false;
};

const ThreeSignup = ({
  formState,
  onFormChange,
  setFormState,
  handSubmit,
  setNextPage,
}: any) => {
  const [errorMessage, setErrorMessage] = useState<any>({
    type: "",
    message: "",
  });

  const verifyNextPage = () => {
    console.log(formState);
    if (!formState?.civility) {
      setErrorMessage({
        type: "civility",
        message: " Vous n'avez pas sélectionné de civilité",
      });
      setNextPage(3);
    } else if (!formState?.nameManager) {
      setErrorMessage({
        type: "nameManager",
        message: " Vous n'avez pas saisie votre nom et prénom",
      });
      setNextPage(3);
    } else if (!formState?.emailManager) {
      setErrorMessage({
        type: "emailManager",
        message: " Vous n'avez pas saisie votre email",
      });
      setNextPage(3);
    } else if (!formState?.password) {
      setErrorMessage({
        type: "password",
        message: " Vous n'avez pas saisie votre mot de passe",
      });
      setNextPage(3);
    } else if (
      formState?.billingManager === false &&
      !formState?.emailFinancial
    ) {
      setErrorMessage({
        type: "emailFinancial",
        message: " Vous n'avez pas saisie l'email du responsable financier",
      });
      setNextPage(3);
    } else if (
      formState?.billingManager === false &&
      !formState?.numberFinancial
    ) {
      setErrorMessage({
        type: "numberFinancial",
        message:
          " Vous n'avez pas saisie le numéro de téléphone du responsable financier",
      });
      setNextPage(3);
    } else if (!formState?.siretCompany) {
      setErrorMessage({
        type: "siretCompany",
        message:
          " Vous n'avez pas saisie le siret de votre entreprise ou il est faux",
      });
      setNextPage(3);
    } else if (formState?.password) {
      if (formState?.paswword < 8) {
        setErrorMessage({
          type: "password",
          message:
            "Vous n'avez pas saisie le nombre minimum de charactère demandé",
        });
      } else if (!containsCapital(formState?.paswword)) {
        setErrorMessage({
          type: "password",
          message: "Vous n'avez pas saisie de majuscule",
        });
      } else if (!detectLowerCase(formState?.paswword)) {
        setErrorMessage({
          type: "password",
          message: "Vous n'avez pas saisie de minuscule",
        });
      } else if (!containsSpecialChar(formState?.paswword)) {
        setErrorMessage({
          type: "password",
          message: "Vous n'avez pas saisie de caractère spécial",
        });
      }
      setNextPage(3);
    } else if (!formState?.terms) {
      setErrorMessage({
        type: "terms",
        message: " Vous n'avez pas accepté les CGU & CGV",
      });
      setNextPage(3);
    }
    {
      setErrorMessage({
        type: "",
        message: "",
      });
      handSubmit();
    }
  };

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
        Civilité{" "}
        <span className="text-red-500">
          {errorMessage.type === "civility" && errorMessage.message}
        </span>
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
                civility: "Mme",
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
                civility: "M.",
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
        Nom, Prénom{" "}
        <span className="text-red-500">
          {errorMessage.type === "nameManager" && errorMessage.message}
        </span>
      </p>
      <input
        type="text"
        className="py-3 px-4 pl-9 pr-16 block w-full shadow-sm text-sm focus:z-10 border-gray-500 border mt-5"
        name="nameManager"
        value={formState.nameManager}
        onChange={onFormChange}
      />
      {/* EMAIL */}
      <p className="mt-[48px] text-[20px] font-semibold leading-7 font-poppins">
        Email{" "}
        <span className="text-red-500">
          {errorMessage.type === "emailManager" && errorMessage.message}
        </span>
      </p>
      <input
        type="text"
        className="py-3 px-4 pl-9 pr-16 block w-full shadow-sm text-sm focus:z-10 border-gray-500 border mt-5"
        name="emailManager"
        value={formState.emailManager}
        onChange={onFormChange}
      />
      {/* Password */}
      <p className="mt-[48px] text-[20px] font-semibold leading-7 font-poppins">
        Mot de passe{" "}
        <span className="text-gray-400">
          (( 8 caractères 1 Maj , 1 min, 1 lettre, 1 caractère spéciale))
        </span>{" "}
        <span className="text-red-500">
          {errorMessage.type === "password" && errorMessage.message}
        </span>
      </p>
      <input
        type="password"
        className="py-3 px-4 pl-9 pr-16 block w-full shadow-sm text-sm focus:z-10 border-gray-500 border mt-5"
        name="password"
        value={formState.password}
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
                Saississez l’e-mail du responsable financier{" "}
                <span className="text-red-500">
                  {errorMessage.type === "emailFinancial" &&
                    errorMessage.message}
                </span>
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
                Saississez le numero du responsable financier{" "}
                <span className="text-red-500">
                  {errorMessage.type === "phoneFinancial" &&
                    errorMessage.message}
                </span>
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
        SIRET de l’entreprise{" "}
        <span className="text-red-500">
          {errorMessage.type === "siretCompany" && errorMessage.message}
        </span>
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
          <span className="mt-[48px] text-[20px]">
            J{"'"}accepte les CGU & CGV
          </span>
        </label>
      </div>
      <p>
        Conformément à la loi {"'"}Informatique et Libertés{"'"}, vous disposez
        d’un droit d’accès et de rectification aux données vous concernant, et
        d’opposition à leur traitement.{" "}
        <span className="text-meltrip-primary underline cursor-pointer">
          En savoir plus
        </span>
      </p>
      <div className="w-full flex justify-between items-center mt-10">
        <div
          onClick={() => setNextPage(2)}
          className="text-meltrip-primary cursor-pointer mt-[48px] text-[20px] font-semibold leading-7 font-poppins"
        >
          {"< "} Précédent
        </div>
        <div>
          <button
            onClick={() => verifyNextPage()}
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
