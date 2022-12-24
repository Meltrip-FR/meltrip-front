import { useState } from "react";
import axios from "axios";

// Redux
import { useAppDispatch } from "@/redux/hooks";
import { login } from "@/redux/slices/auth.slice";

// Components
import { FormItem } from "@/components/utils/formItem";
import { useRouter } from "next/router";
import SigninIcon from "@/components/assets/icons/auth/signin";
import Link from "next/link";

const SigninPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [requestMessage, setRequestMessage] = useState<string>("");
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const onFormChange = (e: any) => {
    if (e.target) {
      setFormState({
        ...formState,
        [e.target.name]: e.target.value,
      });
    }
  };

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/signin`, formState)
      .then(({ data }) => {
        const user = data?.dataValues;
        const { payload }: any = dispatch(
          login({
            login: true,
            user: {
              id: user.id,
              username: user?.username,
              civility: user?.civility,
              email: user?.email,
              phone: user?.phone,
              terms: true,
              newsletter: user?.newsletter === 0 ? false : true,
              roles: user?.roles,
              accessToken: data?.accessToken,
              confirmEmail: user?.confirmEmail,
              idOrganization: user?.idOrganization,
            },
          })
        );
        if (payload.login) {
          router.push("/user/dashboard");
        }
      })
      .catch((error) => {
        console.log({ error });
        setRequestMessage("error.response?.data?.message");
      });
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <SigninIcon size={400} />
        </div>
        <div className="lg:w-2/6 md:w-1/2 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-4xl text-center font-medium title-font mb-20">
            CONNEXION
          </h2>
          <span className="text-red-400 mb-2">{requestMessage}</span>
          <div className="relative mb-4">
            <FormItem
              type="email"
              name="email"
              value={formState.email}
              label="email"
              style="bg-[#ECF3F2] px-2 py-3"
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
              style="bg-[#ECF3F2] px-2 py-3"
              value={formState.password}
              onChange={onFormChange}
              disabled={false}
              required={true}
            />
          </div>
          <p className="text-xs text-right mb-4 text-gray-500">
            <Link className="hover:underline" href="/auth/forgotpassword">
              Mot de passe oublié ?
            </Link>
          </p>
          <button
            className="text-white bg-[#186E7A] border-0 py-2 px-8 focus:outline-none rounded text-lg"
            onClick={(e) => handleSubmit(e)}
          >
            Se connecter
          </button>
          <p className="text-md text-center text-gray-500 mt-3">
            Nouveau sur Meltrip ?{" "}
            <Link
              href="/auth/signup"
              className="text-meltrip-secondary hover:underline"
            >
              Créer votre compte
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SigninPage;
