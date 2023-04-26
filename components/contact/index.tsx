import { useState } from "react";
import axios from "axios";
import { FormItem } from "@/components/utils/formItem";
import ContactIcon from "@/components/assets/icons/contact/contactIcon";

const ContactPage = () => {
  const [requestMessage, setRequestMessage] = useState<any>({
    type: false,
    message: "Contact was add successfully!",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formState, setFormState] = useState<any>();

  const onFormChange = (e: any) => {
    if (e.target) {
      setFormState({
        ...formState,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);
    const data = {
      ...formState,
      username: formState.lastname + " " + formState.firstname,
    };

    delete data.firstname;
    delete data.lastname;

    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/contact`, data)
      .then(({ data }) => {
        setIsLoading(false);
        setRequestMessage({ type: true, message: data.message });
      })
      .catch((error) => {
        setIsLoading(false);
        setRequestMessage({ type: null, message: "" });
        setRequestMessage({
          type: false,
          message: error?.response?.data?.message,
        });
      });
  };

  return (
    <section className="text-gray-600 body-font mb-24">
      <div className="flex flex-wrap justify-center items-center w-full gap-x-32">
        <div className="mt-10 p-5">
          <h2 className="text-gray-900 text-xl text-center font-medium title-font mb-10">
            CONTACTER MELTRIP
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4 w-96">
              <FormItem
                name="firstname"
                label="Prénom"
                value={formState?.firstname}
                style="border border-meltrip-primary px-2 py-2"
                onChange={onFormChange}
                disabled={false}
                required={true}
              />
            </div>
            <div className="relative mb-4 w-96">
              <FormItem
                name="lastname"
                label="Nom"
                value={formState?.lastname}
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
                value={formState?.email}
                label="Email"
                style="border border-meltrip-primary px-2 py-2"
                onChange={onFormChange}
                disabled={false}
                required={true}
              />
            </div>
            <div className="relative mb-4">
              <FormItem
                type="title"
                name="title"
                value={formState?.title}
                label="Motif"
                style="border border-meltrip-primary px-2 py-2"
                onChange={onFormChange}
                disabled={false}
                required={true}
              />
            </div>
            <div className="relative mb-4">
              <textarea
                className="border border-meltrip-primary px-2 py-2 h-32 rounded w-full"
                name="describe"
                placeholder="Description"
                value={formState?.describe}
                onChange={(e) => onFormChange(e)}
                disabled={false}
                required={true}
              />
            </div>
            <input
              className="text-white uppercase font-bold bg-[#186E7A] hover:bg-[#1d6a75] cursor-pointer w-full border-none py-2 px-8 focus:outline-none rounded text-lg"
              type="submit"
              value={isLoading ? "Loading" : "Envoyer"}
            />
          </form>
        </div>
        <div className="items-center align-center flex flex-col pl-0">
          <ContactIcon size={400} />
          <p className="text-justify">
            Une question, un problème, où juste pour nous
          </p>
          <p className="text-justify">
            envoyer un petit mot doux, contactez-nous.
          </p>
          <p className="text-justify">Nous vous répondrons sous 72h maximum.</p>
          {requestMessage.type === "success" ? (
            <div className="flex justify-between bg-meltrip-primary mt-5 p-4 w-1/2 rounded">
              <div className="">
                <span className={`text-white mb-2 text-center`}>
                  {requestMessage.message}
                </span>
              </div>
              <div
                className="cursor-pointer text-white"
                onClick={() => setRequestMessage({ type: null, message: "" })}
              >
                X
              </div>
            </div>
          ) : (
            requestMessage.type === true && (
              <div className="flex justify-between w-full bg-[#448B7B] mt-5 p-2 rounded">
                <div className="text-white text-center">
                  {requestMessage.message}
                </div>
                <div
                  className="cursor-pointer text-white"
                  onClick={() => setRequestMessage({ type: null, message: "" })}
                >
                  X
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
