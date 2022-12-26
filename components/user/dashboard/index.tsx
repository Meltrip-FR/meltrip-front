import { useRouter } from "next/router";

// Redux
import { logout } from "@/redux/slices/auth.slice";
import { useAppDispatch } from "@/redux/hooks";

import { CardInfosList } from "./infosList";

const Dashboard = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const createSeminar = () => {
    router.push("/seminar/create");
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-14 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Bienvenue dans votre espace
          </h1>
          <button
            className="flex mx-auto mt-16 text-white bg-meltrip-secondary border-0 py-2 px-8 focus:outline-none rounded text-lg"
            onClick={() => createSeminar()}
          >
            Créer un séminaire
          </button>
        </div>
        <div className="flex flex-wrap -m-4">
          {CardInfosList.map((item, index) => (
            <div
              key={index}
              className="flex items-stretch xl:w-1/3 md:w-1/2 p-4"
              onClick={() => router.push(item.url)}
            >
              <div className="border border-gray-200 p-6 rounded-lg shadow-xl cursor-pointer hover:bg-red-100">
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  {item.title}
                </h2>
                <p className="leading-relaxed text-base">{item.describe}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
