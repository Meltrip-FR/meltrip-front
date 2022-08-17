import { useState } from "react";

//Library && css
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Auth = ({ setStep, setUserUid }: any) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (firstName && lastName && email && password) {
      let res = true;
      if (res) {
        setUserUid(res);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        toast.success("Inscription réussi!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        setStep(2);
      } else {
        setPassword("");
        toast.error("Une erreur est survenue lors de l'envoi !", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      }
    } else {
      toast.error("Vous devez remplir tous les champs!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <div className="relative h-full container flex flex-col p-10 items-center align-center ">
        <h1 className="text-[#1D6E7B] text-center text-2xl mb-5">
          Inscrit toi ! Pour commencer de nouvelles aventures !
        </h1>
        <div className="flex flex-col items-center align-center w-96 mt-5">
          <div className="flex flex-row w-full">
            <input
              required={true}
              type="text"
              name="lastname"
              placeholder="Nom"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="block border w-full p-3 mr-2 rounded"
            />
            <input
              required={true}
              type="text"
              name="firstname"
              placeholder="Prénom"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="block border w-full p-3 ml-2 rounded"
            />
          </div>
          <input
            required={true}
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block border w-full p-3 m-2 rounded"
          />
          <input
            required={true}
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block border w-full p-3 m-2 rounded"
          />
          <button
            onClick={handleSubmit}
            className="bg-[#C05E37] mb-10 w-full mt-5 text-white hover:bg-orange-900 font-bold uppercase text-sm px-8 py-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
            type="button"
          >
            M{"'"}inscrire
          </button>
        </div>
      </div>
    </>
  );
};

export default Auth;
