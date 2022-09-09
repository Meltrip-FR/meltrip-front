import { useState } from "react";
import axios from "axios";

// Components
import { FormItem } from "@components/utils/formItem";

// Icons
import SigninIcon from "@components/assets/icons/auth/signin";

const SignupPage = () => {
  const [requestMessage, setRequestMessage] = useState<any>({
    type: null,
    message: "",
  });
  const [formState, setFormState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    city: "",
    zip: 0,
    terms: true, // no add
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
    console.log(formState);
    if (formState.terms && formState.email && formState.password) {
      axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, formState)
        .then(({ data }) => {
          setRequestMessage({ type: null, message: "" });
          setRequestMessage({ type: true, message: data.message });
        })
        .catch((error) => {
          setRequestMessage({ type: null, message: "" });
          setRequestMessage({
            type: false,
            message: error.response.data.message,
          });
        });
    } else {
      setRequestMessage({
        type: false,
        message: "Vous devez remplir les champs email et password",
      });
    }
  }
  return (
    <div className="h-screen">
      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <SigninIcon size={400} />
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
            <div className="relative mb-4">
              <FormItem
                name="firstname"
                label="firstname"
                value={formState.firstname}
                style="bg-[#ECF3F2] px-2 py-2"
                onChange={onFormChange}
                disabled={false}
                required={true}
              />
            </div>
            <div className="relative mb-4">
              <FormItem
                name="lastname"
                label="lastname"
                value={formState.lastname}
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
                type="phone"
                name="phone"
                value={formState.phone}
                label="phone"
                style="bg-[#ECF3F2] px-2 py-2"
                onChange={onFormChange}
                disabled={false}
                required={true}
              />
            </div>
            <div className="relative mb-4">
              <FormItem
                type="address"
                name="address"
                value={formState.address}
                label="address"
                style="bg-[#ECF3F2] px-2 py-2"
                onChange={onFormChange}
                disabled={false}
                required={true}
              />
            </div>
            <div className="relative mb-4">
              <FormItem
                type="city"
                name="city"
                value={formState.city}
                label="city"
                style="bg-[#ECF3F2] px-2 py-2"
                onChange={onFormChange}
                disabled={false}
                required={true}
              />
            </div>
            <div className="relative mb-4">
              <FormItem
                type="zip"
                name="zip"
                value={formState.zip}
                label="zip"
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
                label="password *"
                value={formState.password}
                style="bg-[#ECF3F2] px-2 py-2"
                onChange={onFormChange}
                disabled={false}
                required={true}
              />
            </div>
            <button
              className="text-white bg-[#186E7A] border-0 py-2 px-8 focus:outline-none rounded text-lg"
              onClick={(e) => handleSubmit(e)}
            >
              Passer à la deuxième étape
            </button>
            <p className="text-md text-gray-500 mt-3 text-center">
              Déjà un compte ?{" "}
              <a
                href="/auth/signin"
                className="text-meltrip-secondary hover:underline "
              >
                Identifiez-vous
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignupPage;
