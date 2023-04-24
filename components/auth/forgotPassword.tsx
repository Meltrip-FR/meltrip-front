import axios from "axios";
import { Fragment, useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("");
  const [requestMessage, setRequestMessage] = useState<string>("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/forgotpassword/${email}`
    );
    setRequestMessage(
      "Un email contenant les instructions pour créer un nouveau mot de passe vous a été envoyé."
    );
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-5">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-xl text-meltrip-primary font-semibold">
            Forgot Password {requestMessage && <span>{requestMessage}</span>}
          </div>
          <p className="mt-2 text-gray-500">
            Saisissez votre adresse électronique et nous vous enverrons un lien
            pour réinitialiser votre mot de passe. mot de passe.
          </p>
          <form className="mt-4">
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-8">
              <button
                className="bg-meltrip-primary text-white py-2 px-4 rounded-full hover:bg-meltrip-secondary focus:outline-none focus:shadow-outline"
                type="submit"
                onClick={(e) => handleSubmit(e)}
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
