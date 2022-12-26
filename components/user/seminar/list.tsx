import AddCircle from "@/components/assets/icons/addCircle";
import BreadCrumbs from "@/components/utils/breadCrumbs";
import { useAppSelector } from "@/redux/hooks";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const SeminarList = () => {
  const { auth } = useAppSelector((state) => state);
  const [seminarList, setListSeminar] = useState<any>();
  const getSeminar = useCallback(async () => {
    const seminar = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/seminars/${auth.user.id}`,
      {
        headers: {
          "x-access-token": auth.user.accessToken,
        },
      }
    );
    const seminarList = seminar.data;
    setListSeminar(seminarList);
  }, [auth.user.accessToken, auth.user.id]);

  useEffect(() => {
    //const getUser  = loadCompany();
    getSeminar().catch((e) => console.error(e));
  }, [getSeminar]);

  console.log(seminarList);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-14 mx-auto">
        <div className="flex justify-between mb-4">
          <div className="flex items-center mb-3 mt-3">
            <BreadCrumbs url="/" name="home" active={false} />
            <BreadCrumbs url="/user/dashboard" name="Compte" active={true} />
            <BreadCrumbs url="/user/seminar" name="Séminaires" active={true} />
            <BreadCrumbs
              url="/user/seminar/list"
              name="Vos Séminaires"
              active={false}
            />
          </div>
        </div>
        <div className="flex flex-wrap w-full mb-5 text-center">
          <div className="flex">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 mr-5">
              Séminaires
            </h1>
            <div className="mt-2">
              <AddCircle size={25} />
            </div>
          </div>
        </div>
        <div className="relative w-1/3">
          <img
            alt="picture"
            src="https://www.kindacode.com/wp-content/uploads/2022/06/night-sky.jpeg"
          />
          <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-meltrip-secondary opacity-70">
            <h3 className="text-xl text-white font-bold">
              Séminaire en cours de création...
            </h3>
          </div>
        </div>
        <div className="flex flex-wrap border-b border-gray-400 w-full mb-5 text-center mt-10">
          <h1 className=" text-2xl font-medium title-font mb-2 text-gray-900 mr-5">
            Historique de vos séminaires (1)
          </h1>
        </div>
        <div className="relative w-1/5">
          <img
            alt="picture"
            src="https://www.kindacode.com/wp-content/uploads/2022/06/night-sky.jpeg"
          />
          <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-meltrip-secondary opacity-70">
            <h3 className="text-xl text-white font-bold">
              Séminaire du 12/03/2021
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeminarList;
