import { useState } from "react";

//Firestore
import { addContact } from "database/data/contact";

//Library && css
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Icons
import FooterIcon from "@components/assets/icons/footer";

const Footer = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (firstName && lastName && email && message) {
      const res = await addContact(firstName, lastName, email, message);
      if (res) {
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
        toast.success(
          "Message bien envoyé, nos équipes vous recontacteront au plus vite !",
          {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          }
        );
      } else {
        setMessage("");
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
      toast.error("Vous devez remplir tous les champs !", {
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
    <section className="text-gray-600 bg-[#186E7A] body-font">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap align-items justify-between sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <h2 className="text-4xl p-5 text-center font-medium title-font text-white">
              CONTACT
            </h2>
            <div className="flex flex-row mb-2">
              <input
                required={true}
                type="text"
                name="lastname"
                placeholder="Nom"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="block w-full p-3  mr-2 rounded"
              />
              <input
                required={true}
                type="text"
                name="firstname"
                placeholder="Prénom"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="block w-full p-3 ml-2 rounded"
              />
            </div>
            <input
              required={true}
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full p-3 mb-2 rounded"
            />
            <textarea
              required={true}
              name="name"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="block w-full resize-none h-32 p-3  rounded"
            />
            <button
              onClick={handleSubmit}
              className="bg-[#C05E37] w-full mt-5 text-white hover:bg-orange-900 font-bold uppercase text-sm px-8 py-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              ENVOYER
            </button>
          </div>
          <div className="p-4 md:w-1/5 sm:mb-0 mb-6 mt-12">
            <div className="rounded-lg w-80 overflow-hidden">
              <div className="object-cover object-center h-full w-full">
                <FooterIcon height={300} width={310} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
