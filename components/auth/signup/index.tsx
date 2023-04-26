import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { getOrganizationBySiret, postOrganization } from "@/lib/organizations";
import { signup } from "@/lib/auth";
import { FormItem } from "@/components/utils/formItem";
import UsersLock from "@/components/assets/icons/usersLock";
import {
  containsCapital,
  containsSpecialChar,
  detectLowerCase,
} from "@/components/utils/functions";

const verifyField = (formState: any) => {
  let pattern = /@gmail(\.com)?/;
  if (!formState?.terms) {
    return "Vous n'avez pas accepté les conditions d'utilisation.";
  } else if (!formState?.email) {
    return "vous n'avez pas saisie email";
  } else if (pattern.test(formState?.email)) {
    return "vous n'avez pas un domaine autorisé (@gmail)";
  } else if (formState?.siret?.length !== 14) {
    return "Vous n'avez pas saisie de numéro de siret";
  } else if (formState?.password?.length < 8) {
    return "Password: Vous n'avez pas saisie le nombre minimum de charactère demandé";
  } else if (!containsCapital(formState?.password)) {
    return "Password: Vous n'avez pas saisie de majuscule";
  } else if (!detectLowerCase(formState?.password)) {
    return "Password: Vous n'avez pas saisie de minuscule";
  } else if (!containsSpecialChar(formState?.password)) {
    return "Password: Vous n'avez pas saisie de caractère spécial";
  } else if (!formState?.phone) {
    return "Le numéro de téléphone n'est pas valide";
  } else {
    return false;
  }
};

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
    phone: "",
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

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const verify = verifyField(formState);
    if (!verify) {
      const organization: any = await getOrganizationBySiret(formState.siret);
      if (!organization) {
        const createOrganization = await postOrganization(formState.siret);
        const userBuild = {
          ...formState,
          idOrganization: createOrganization.id,
        };
        const createUser = await signup(userBuild);
        if (!createUser) {
          setRequestMessage({ type: true, message: createUser });
          return;
        }
        setRequestMessage({
          type: false,
          message: "",
        });
        router.push("/auth/signin");
      } else {
        if (organization?.id) {
          const userBuild = { ...formState, idOrganization: organization.id };
          const createUser = await signup(userBuild);
          if (!createUser) {
            setRequestMessage({ type: true, message: createUser });
            return;
          }
          router.push("/auth/signin");
        }
      }
    } else {
      setRequestMessage({
        type: false,
        message: verify,
      });
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="flex items-center justify-center w-full gap-x-32">
        <div className="flex flex-col items-center justify-center w-[35%]">
          <UsersLock size={400} />
          <p className="text-center">
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
        <div className="mb-5 flex flex-col w-[40%] mt-5">
          <h2 className="text-gray-900 text-xl text-center font-medium title-font mb-5">
            INSCRIPTION
          </h2>
          <span
            className={`${
              requestMessage.type ? "text-green-400 " : "text-red-400 "
            } mb-2 text-center w-full`}
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
              style="border border-meltrip-primary px-2 py-2"
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
              label="E-mail *"
              style="border border-meltrip-primary px-2 py-2"
              onChange={onFormChange}
              disabled={false}
              required={true}
            />
          </div>
          <div className="relative mb-4">
            <FormItem
              type="password"
              name="password"
              label="Mot de passe"
              value={formState.password}
              style="border border-meltrip-primary px-2 py-2"
              onChange={onFormChange}
              disabled={false}
              required={true}
            />
          </div>
          <div className="relative mb-4">
            <p className="text-[#9F9F9F] mb-3">
              8 caractères 1 Maj , 1 min, 1 lettre, 1 caractère spéciale
            </p>
            <FormItem
              type="siret"
              name="siret"
              value={formState.siret}
              label="siret"
              style="border border-meltrip-primary px-2 py-2"
              onChange={onFormChange}
              disabled={false}
              required={true}
            />
          </div>
          <div className="flex flex-col mb-5">
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
            d’un droit d’accès et de rectification aux données vous concernant,
            et d’opposition à leur traitement.{" "}
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
            Créer mon compte
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
  );
};

export default SignupPage;
