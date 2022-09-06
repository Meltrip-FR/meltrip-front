import { useState } from "react";
import axios from "axios";

//Components
import { FormItem } from "@components/utils/formItem";

// Icons
import ContactIcon from "@components/assets/icons/contact/contactIcon";

const ContactPage = () => {
  //const router = useRouter();
  const [requestMessage, setRequestMessage] = useState<any>({
    type: null,
    message: "",
  });
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    title: "",
    describe: "",
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
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/contact`, formState, user.accessToken)
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
  }
  return (
    <div className="h-screen">
      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto flex flex-wrap justify-between items-center">
          <div className="lg:w-2/6 md:w-1/2 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-4xl text-center font-medium title-font mb-10">
              CONTACT
            </h2>
            <span
              className={`${
                requestMessage.type ? "text-green-400 " : "text-red-400 "
              }mb-2 text-center`}
            >
              {requestMessage.message}
            </span>
            <form onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <FormItem
                  name="username"
                  label="Nom - Prénom"
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
                  label="Email"
                  style="bg-[#ECF3F2] px-2 py-2"
                  onChange={onFormChange}
                  disabled={false}
                  required={true}
                />
              </div>
              <div className="relative mb-4">
                <FormItem
                  type="title"
                  name="title"
                  value={formState.title}
                  label="Titre"
                  style="bg-[#ECF3F2] px-2 py-2"
                  onChange={onFormChange}
                  disabled={false}
                  required={true}
                />
              </div>
              <div className="relative mb-4">
                <textarea
                  className="bg-[#ECF3F2] px-2 py-2 rounded w-full"
                  name="describe"
                  placeholder="Votre Texte"
                  value={formState.describe}
                  onChange={(e) => onFormChange(e)}
                  disabled={false}
                  required={true}
                />
              </div>
              <button
                className="text-white bg-[#186E7A] w-full border-none py-2 px-8 focus:outline-none rounded text-lg"
                type="submit"
              >
                ENVOYER
              </button>
            </form>
          </div>
          <div className="w-1/2 items-center align-center flex flex-col md:pl-16 lg:pl-0 pl-0">
            <ContactIcon size={400} />
            <p className="text-justify w-1/2 ">
              Une question, un problème, où juste pour nous envoyer un petit mot
              doux, contactez-nous. Nous vous répondrons sous 72h maximum.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
