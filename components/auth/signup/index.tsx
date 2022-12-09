import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

// Components
import { FormItem } from "@/components/utils/formItem";

// Icons
import UsersLock from "@/components/assets/icons/usersLock";

const SignupPage = () => {
  const router = useRouter();
  const [requestMessage, setRequestMessage] = useState<any>({
    type: null,
    message: "",
  });
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
    siret: "",
    civility: "",
    terms: false, // no add
    newsletter: false, // no add
    roles: ["user"],
  });

  const onFormChange = (e: any) => {
    if (e.target) {
      setFormState({
        ...formState,
        [e.target.name]: e.target.value,
      });
    }
  };

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    if (formState.terms && formState.email) {
      if (formState.siret) {
        axios
          .post(`${process.env.NEXT_PUBLIC_API_URL}/organization/`, {
            siret: formState.siret.replaceAll(" ", ""),
          })
          .then((_data) => {
            setRequestMessage({
              type: true,
              message: "company create",
            });
          })
          .catch((error) => {
            console.log(error);
            setRequestMessage({
              type: false,
              message: error.response?.data?.message,
            });
          });
        axios
          .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, formState)
          .then(({ data }) => {
            setRequestMessage({ type: null, message: "" });
            setRequestMessage({ type: true, message: data.message });
            router.push("/signin");
          })
          .catch((error) => {
            setRequestMessage({ type: null, message: "" });
            setRequestMessage({
              type: false,
              message: error.response?.data?.message,
            });
          });
      } else {
        setRequestMessage({ type: null, message: "" });
        setRequestMessage({
          type: false,
          message: "Ajouter un numéro de siret",
        });
      }
    } else {
      setRequestMessage({
        type: false,
        message: "Vous devez remplir le champ email",
      });
    }
  }
  return (
    <div className="h-screen">
      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <UsersLock size={400} />
            <p className="text-left w-1/2">
              En créant un compte, vous acceptez{" "}
              <span
                className="underline cursor-pointer"
                onClick={() => window.open("/help", "_blank")}
              >
                les conditions générales de vente et d’utilisation
              </span>{" "}
              de Meltrip.
            </p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-4xl text-center font-medium title-font mb-10">
              INSCRIPTION
            </h2>
            <span
              className={`${
                requestMessage.type ? "text-green-400 " : "text-red-400 "
              }mb-2 text-center`}
            >
              {requestMessage.message}
            </span>
            <div className="mb-5">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="accountType"
                  value="Mme"
                  onChange={(_e) =>
                    setFormState({
                      ...formState,
                      civility: "Mme",
                    })
                  }
                />
                <span className="ml-2">Mme</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  className="form-radio"
                  name="accountType"
                  value="M."
                  onChange={(_e) =>
                    setFormState({
                      ...formState,
                      civility: "M.",
                    })
                  }
                />
                <span className="ml-2">M.</span>
              </label>
            </div>
            <div className="relative mb-4">
              <FormItem
                name="username"
                label="Nom Prénom de l'organisateur"
                value={formState.username}
                style="bg-[#ECF3F2] px-2 py-2"
                onChange={onFormChange}
                disabled={false}
                required={true}
              />
            </div>
            <div className="relative mb-4">
              <FormItem
                type="email"
                name="email"
                value={formState.email}
                label="email *"
                style="bg-[#ECF3F2] px-2 py-2"
                onChange={onFormChange}
                disabled={false}
                required={true}
              />
            </div>
            <div className="relative mb-4">
              <FormItem
                type="password"
                name="password"
                label="password"
                value={formState.password}
                style="bg-[#ECF3F2] px-2 py-2"
                onChange={onFormChange}
                disabled={false}
                required={true}
              />
            </div>
            <div className="relative mb-4">
              <FormItem
                type="siret"
                name="siret"
                value={formState.siret}
                label="siret"
                style="bg-[#ECF3F2] px-2 py-2"
                onChange={onFormChange}
                disabled={false}
                required={true}
              />
            </div>
            <div className="mb-5">
              <label className="inline-flex items-center">
                <input
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
                <span className="ml-2">
                  Je souhaite également recevoir les newsletters et actualités
                  Meltrip
                </span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-radio"
                  id="terms"
                  name="isterms"
                  onChange={(_e) =>
                    setFormState({
                      ...formState,
                      terms: !formState.terms,
                    })
                  }
                />
                <span className="ml-2">J{"'"}accepte les CGV & CGU</span>
              </label>
            </div>
            <span className="mb-5">
              Conformément à la loi {"Informatique et Libertés"}, vous disposez
              d’un droit d’accès et de rectification aux données vous
              concernant, et d’opposition à leur traitement.{" "}
              <Link
                href="/help/"
                target="_blank"
                className="underline text-meltrip-primary"
              >
                En savoir plus
              </Link>
            </span>
            <button
              className="text-white bg-[#186E7A] border-0 py-2 px-8 focus:outline-none rounded text-lg"
              onClick={(e) => handleSubmit(e)}
            >
              Rejoindre
            </button>
            <p className="text-md text-gray-500 mt-3 text-center">
              Déjà un compte ?{" "}
              <Link
                href="/auth/signin"
                className="text-meltrip-secondary hover:underline "
              >
                Identifiez-vous
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignupPage;
