import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import AddCircle from "@/components/assets/icons/addCircle";
import BreadCrumbs from "@/components/utils/breadCrumbs";
import { getSeminarByUserId } from "@/lib/seminar";
import { useAppSelector } from "@/redux/hooks";
import FinishCard from "./cards/finish";
import RefuseCard from "./cards/refuse";
import SuccessCard from "./cards/success";
import WaitingCard from "./cards/waiting";
import { getPayementBySeminarId } from "@/lib/payements";
import { updateSeminarById } from "@/lib/seminar";

const SeminarList = () => {
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
        <div className="flex justify-between mb-4">
          <div className="flex items-center mb-3 mt-3">
            <BreadCrumbs url="/" name="home" active={false} />
            <BreadCrumbs url="/user/dashboard" name="Compte" active={true} />
            <BreadCrumbs url="/user/seminar" name="Séminaires" active={true} />
            <BreadCrumbs
              url="/user/seminar/"
              name="Vos Séminaires"
              active={false}
            />
          </div>
        </div>
        <div className="flex flex-wrap w-full mb-5 text-center">
          {/* Vos Séminaires */}
          <div className="flex">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 mr-5">
              Vos Séminaires
            </h1>
            <div className="mt-2 cursor-pointer">
              <Link href="/seminar/create">
                <AddCircle size={25} />
              </Link>
            </div>
          </div>
        </div>
        {/* Historique des Séminaires Confirmé */}
        <div className="flex flex-wrap border-b border-gray-400 w-full mb-5 text-center mt-10">
          <h1 className=" text-2xl font-medium title-font mb-2 text-gray-900 mr-5">
            Confirmer ({arrayFilterbyType("Accepté")?.length})
          </h1>
        </div>
        {arrayFilterbyType("Accepté")?.length <= 0 ? (
          "Aucun séminaire"
        ) : (
          <SuccessCard seminarData={arrayFilterbyType("Accepté")} />
        )}
        {/* Historique des Séminaires Attente */}
        <div className="flex flex-wrap border-b border-gray-400 w-full mb-5 text-center mt-10">
          <h1 className=" text-2xl font-medium title-font mb-2 text-gray-900 mr-5">
            Attente ({arrayFilterbyType("Attente" || "" || null)?.length})
          </h1>
        </div>
        {arrayFilterbyType("Attente" || "" || null)?.length <= 0 ? (
          "Aucun séminaire"
        ) : (
          <WaitingCard
            seminarData={arrayFilterbyType("Attente" || "" || null)}
          />
        )}

        {/* Historique des Séminaires Refusé */}
        <div className="flex flex-wrap border-b border-gray-400 w-full mb-5 text-center mt-10">
          <h1 className=" text-2xl font-medium title-font mb-2 text-gray-900 mr-5">
            Refusé ({arrayFilterbyType("Refusé")?.length})
          </h1>
        </div>
        {arrayFilterbyType("Refusé")?.length <= 0 ? (
          "Aucun séminaire"
        ) : (
          <RefuseCard seminarData={arrayFilterbyType("Refusé")} />
        )}

        {/* Historique des Séminaires */}
        <div className="flex flex-wrap border-b border-gray-400 w-full mb-5 text-center mt-10">
          <h1 className=" text-2xl font-medium title-font mb-2 text-gray-900 mr-5">
            Terminé ({arrayFilterbyType("Terminé")?.length})
          </h1>
        </div>
        {arrayFilterbyType("Terminé")?.length <= 0 ? (
          "Aucun séminaire"
        ) : (
          <FinishCard seminarData={arrayFilterbyType("Terminé")} />
        )}
      </div>
    </section>
  );
};

export default SeminarList;
