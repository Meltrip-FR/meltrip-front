import { useEffect, useState } from "react";
import Eyes from "@components/assets/icons/eyes";
import LockClose from "@components/assets/icons/lockClose";
import BreadCrumbs from "@components/utils/breadCrumbs";
import { FormItem } from "@components/utils/formItem";
import { useAppSelector } from "@redux/hooks";
import axios from "axios";

const Profil = () => {
  const { auth } = useAppSelector((state) => state);

  //State Status Update
  const [isUpdateEmail, setIsUpdateEmail] = useState<boolean>(false);
  const [isUpdatePhone, setIsUpdatePhone] = useState<boolean>(false);

  const [formState, setFormState] = useState<any>();

  const onFormChange = (e: any) => {
    if (e.target) {
      setFormState({
        ...formState,
        [e.target.name]: e.target.value,
      });
    }
  };

  const getUser = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/user/${auth.user.id}`
    );
    setFormState(res.data);
  };
  useEffect(() => {
    //const getUser  = loadCompany();
    getUser();
  }, []);

  console.log(formState);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-14 mx-auto">
        <div className="flex justify-between mb-4">
          <div className="flex items-center mb-3 mt-3">
            <BreadCrumbs url="/home" name="home" active={false} />
            <BreadCrumbs url="/user/dashboard" name="Compte" active={true} />
            <BreadCrumbs url="/user/profil" name="Profil" active={false} />
          </div>
        </div>
        <div className="flex flex-wrap w-full mb-5 text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Profil
          </h1>
        </div>
        <section className="text-gray-600 body-font">
          <div className="flex w-full flex-wrap items-center">
            <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
              <section className="text-gray-600 body-font">
                <div className="border-b pb-2 mb-2 border-gray-200">
                  <div className="flex flex-wrap justify-between text-left mt-6 sm:mt-0">
                    <div>
                      <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                        Julie Dupont
                      </h2>
                      <p className="leading-relaxed text-base">
                        Responsable chez "startup"
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border-b pb-2 mb-2 border-gray-200">
                  <div className="flex flex-wrap justify-between text-left mt-6 sm:mt-0">
                    <div>
                      <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                        Nombre de séminaires
                      </h2>
                      <p className="leading-relaxed text-base">
                        5 séminaires crée
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border-b pb-2 mb-2 border-gray-200">
                  <div className="flex flex-wrap justify-between text-left mt-6 sm:mt-0">
                    <div>
                      <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                        E-mail
                      </h2>
                      <p className="leading-relaxed text-base">
                        <FormItem
                          type="email"
                          name="email"
                          value={formState?.email}
                          label="email"
                          style="bg-[#ECF3F2] px-2 py-3 w-full"
                          onChange={onFormChange}
                          disabled={false}
                          required={true}
                        />
                      </p>
                    </div>
                    <div className="mt-3 text-black underline inline-flex items-center cursor-pointer">
                      {isUpdateEmail ? (
                        <div className="flex">
                          <button
                            className="mr-5"
                            onClick={() => setIsUpdateEmail(!isUpdateEmail)}
                          >
                            Save
                          </button>
                          <button
                            onClick={() => setIsUpdateEmail(!isUpdateEmail)}
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setIsUpdateEmail(!isUpdateEmail)}
                        >
                          Modifier
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                <div className="border-b pb-2 mb-2 border-gray-200">
                  <div className="flex flex-wrap justify-between text-left mt-6 sm:mt-0">
                    <div>
                      <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                        Numéro de téléphone
                      </h2>
                      <FormItem
                        type="number"
                        name="phone"
                        value={formState?.phone}
                        label="Téléphone"
                        style="bg-[#ECF3F2] px-2 py-3 col-span-2"
                        onChange={onFormChange}
                        disabled={false}
                        required={true}
                      />
                    </div>
                    <div className="mt-3 text-black underline inline-flex items-center cursor-pointer">
                      {isUpdatePhone ? (
                        <div className="flex">
                          <button
                            className="mr-5"
                            onClick={() => setIsUpdatePhone(!isUpdatePhone)}
                          >
                            Save
                          </button>
                          <button
                            onClick={() => setIsUpdatePhone(!isUpdatePhone)}
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setIsUpdatePhone(!isUpdatePhone)}
                        >
                          Modifier
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="lg:w-2/6 md:w-1/2  border-2 rounded-lg p-8 flex flex-col md:ml-auto mt-10 md:mt-0">
              <div className="border-b pb-2 mb-2 ">
                <div className="flex flex-wrap justify-between text-left mt-6 sm:mt-0">
                  <div className="flex">
                    <div className="mt-4 mr-5">
                      <LockClose size={25} />
                    </div>
                    <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
                      Quelles informations peuvent être modifiées ?
                    </h2>
                  </div>
                  <p className="text-xs text-gray-700 mb-3">
                    Les informations utilisées par Meltrip pour vérifier
                    l’identité de votre entreprise ne peuvent être modifiées que
                    par les personnes ayant droit.
                  </p>
                </div>
              </div>
              <div className="pb-2 mb-2 border-gray-200">
                <div className="flex flex-wrap justify-between text-left mt-6 sm:mt-0">
                  <div>
                    <div className="flex">
                      <div className="mt-4 mr-5">
                        <Eyes size={25} />
                      </div>
                      <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
                        Quelles informations sont communiquées à des tiers ?
                      </h2>
                    </div>
                    <p className="text-xs text-gray-700">
                      Meltrip ne communique les coordonnées des personnes
                      participants à un sémiaire que dans le cadre de
                      réservations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Profil;
