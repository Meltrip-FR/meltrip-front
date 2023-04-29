import BreadCrumbs from "@/components/utils/breadCrumbs";
import Like from "@/components/assets/seminar/like.png";
import Ananas from "@/components/assets/seminar/ananas.png";
import Heart from "@/components/assets/seminar/heart.png";
import { Fragment, useCallback, useEffect, useState } from "react";
import { getSeminarByUserId, updateSeminarById } from "@/lib/seminar";
import { getPayementBySeminarId } from "@/lib/payements";
import { useAppSelector } from "@/redux/hooks";
import { convertDate } from "@/components/utils/convertDate";
import { useRouter } from "next/router";

const Seminar = () => {
  const router = useRouter();
  const { auth } = useAppSelector((state) => state);
  const [seminarList, setListSeminar] = useState<any>();

  const arrayFilterbyType = (type: string): any => {
    return seminarList?.filter((item: any) => item.status === type);
  };

  const getSeminar = useCallback(async () => {
    const seminar: any = await getSeminarByUserId(
      auth.user.accessToken,
      auth.user.id
    );

    setListSeminar(seminar);
  }, [auth.user.accessToken, auth.user.id]);

  useEffect(() => {
    getSeminar().catch((e) => console.error(e));
    seminarList
      ?.filter((item: any) => item.status === "Accepté")
      .map(async (item: any) => {
        const payement = await getPayementBySeminarId(
          auth.user.accessToken,
          item?.idPayement
        );
        if (payement.status === "Terminé") {
          await updateSeminarById(auth.user.accessToken, item.id, {
            status: "Terminé",
          });
        }
      });
  }, [getSeminar]);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-14 mx-auto">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center mb-3 mt-3">
            <BreadCrumbs url="/" name="home" active={false} />
            <BreadCrumbs url="/user/dashboard" name="Compte" active={true} />
            <BreadCrumbs url="/user/seminar" name="Séminaires" active={true} />
          </div>
        </div>
        <div className="flex justify-between items-center border-b border-black py-5 mb-12">
          <h1 className="text-4xl text-black">Vos séminaires</h1>
          <button
            className="px-10 py-2 bg-meltrip-primary rounded text-white shadow"
            onClick={() => router.push("/seminar/create")}
          >
            Créer un nouveau séminaires
          </button>
        </div>
        {/* First list */}
        <div className="flex gap-x-5">
          <div
            className="relative w-1/3 cursor-pointer"
            onClick={() => router.push("seminar/waiting")}
          >
            <img alt="picture" className="rounded-b-lg" src={Ananas.src} />
            <div className="absolute bottom-0 left-0 right-0 px-4 rounded-b-lg py-2 bg-[#448B7B] opacity-70">
              <h3 className="text-xl text-white font-bold">
                Séminaire en cours de création...
              </h3>
            </div>
          </div>
          <div
            className="relative w-1/3 cursor-pointer"
            onClick={() => router.push("seminar/success")}
          >
            <img alt="picture" className="rounded-b-lg" src={Like.src} />
            <div className="absolute bottom-0 left-0 right-0 px-4 rounded-b-lg py-2 bg-[#186E7A] opacity-70">
              <h3 className="text-xl text-white font-bold">
                Mes séminaires validés
              </h3>
            </div>
          </div>
          <div
            className="relative w-1/3 cursor-pointer"
            onClick={() => router.push("seminar/template")}
          >
            <img alt="picture" className="h-full" src={Heart.src} />
            <div className="absolute bottom-0 left-0 right-0 rounded-b-lg px-4 py-2 bg-meltrip-secondary opacity-70">
              <h3 className="text-xl text-white font-bold">
                Vos séminaires prêt à l’emploi préférée
              </h3>
            </div>
          </div>
        </div>
        {/* Second List */}
        {arrayFilterbyType("Terminé")?.length > 0 && (
          <Fragment>
            <div className="flex justify-between items-center border-b mt-12 border-black py-5 mb-12">
              <h1 className="text-xl text-black">
                Historiques de vos séminaires (
                {arrayFilterbyType("Terminé")?.length || 0})
              </h1>
            </div>
            <div className="flex gap-x-5">
              {arrayFilterbyType("Terminé")?.map((seminar: any, index: any) => (
                <div key={index} className="relative w-1/3">
                  <img alt="picture" className="rounded-b-lg" src={Heart.src} />
                  <div className="absolute bottom-0 left-0 right-0 rounded-b-lg px-4 py-2 bg-[#5F5E5E] opacity-70">
                    <h3 className="text-xl text-white font-bold">
                      Séminaire du{" "}
                      {seminar?.startDate
                        ? convertDate(seminar?.startDate)
                        : seminar?.departurePeriod}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </Fragment>
        )}
      </div>
    </section>
  );
};

export default Seminar;
