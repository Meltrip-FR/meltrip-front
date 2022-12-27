import Happy from "@/components/assets/icons/seminar/happy";
import AirCraft from "@/components/assets/icons/seminar/aircraft";
import Euro from "@/components/assets/icons/seminar/euro";
import Library from "@/components/assets/icons/seminar/library";
import Stair from "@/components/assets/icons/seminar/stair";
import UserGroup from "@/components/assets/icons/seminar/userGroup";
import Working from "@/components/assets/icons/seminar/working";
import BreadCrumbs from "@/components/utils/breadCrumbs";
import { getGroupById } from "@/lib/groups";
import { getOrganizationById } from "@/lib/organizations";
import { getSeminarById } from "@/lib/seminar";
import { getUserById } from "@/lib/users";
import { useAppSelector } from "@/redux/hooks";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import Chill from "@/components/assets/icons/seminar/chill";
import TV from "@/components/assets/icons/seminar/tv";

const SeminarInfos = () => {
  const router = useRouter();
  const { auth } = useAppSelector((state) => state);
  const [seminar, setSeminar] = useState<any>();

  const getSeminar = useCallback(
    async (idSeminar: string) => {
      const seminar: any = await getSeminarById(
        auth.user.accessToken,
        idSeminar
      );
      if (seminar) {
        const user: any = await getUserById(
          auth.user.accessToken,
          seminar?.idUser
        );
        const organization: any = await getOrganizationById(
          seminar?.idOrganization
        );

        const group: any = await getGroupById(seminar?.idGroup);

        setSeminar({
          participNumber: seminar?.adultNumber,
          knowDate: seminar?.knowDate === 0 ? false : true,
          departurePeriod: seminar?.departurePeriod,
          approximateDuration: seminar?.approximateDuration,
          startDate: seminar?.startDate || undefined,
          endDate: seminar?.endDate || undefined,
          budgetPerPerson: seminar?.budgetPerPerson,
          typeSeminar: seminar?.typeSeminar,
          destinationType: seminar?.destinationType,
          describeProject: seminar?.describeProject,
          sleepSuggest: seminar?.sleepSuggest,
          accompaniedSuggest: seminar?.accompaniedSuggest,
          civility: user?.civility,
          nameManager: user?.username,
          emailManager: user?.email,
          phoneManager: user?.phone,
          emailFinancial: group?.financialEmail,
          numberFinancial: group?.financialPhone,
          denominationUniteLegale: organization?.denominationUniteLegale,
          siretCompany: organization?.siret,
        });
      }
    },
    [auth.user.accessToken, auth.user.id]
  );

  useEffect(() => {
    getSeminar(router?.query?.id as string).catch((e) => console.error(e));
  }, [getSeminar, router?.query?.id]);

  console.log({ seminar });

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
              active={true}
            />
            <BreadCrumbs
              url="/user/seminar/infos/"
              name="Séminaire en cours de création"
              active={false}
            />
          </div>
        </div>
        <div className="flex flex-wrap flex-col w-full mt-12">
          {/* Séminaire en cours de création */}
          <div className="flex">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mt-5 text-gray-900 my-5">
              Séminaire en cours de création
            </h1>
          </div>
          {/* Résumé de votre demande */}
          <p className="sm:text-xl text-xl mb-2 text-gray-900 mr-5">
            Résumé de votre demande
          </p>
          <div className="flex flex-col mt-5">
            <div className="flex my-3 items-center">
              <AirCraft size={35} />
              <div className="ml-5">
                Type de lieu:
                <span className="font-bold"> {seminar?.destinationType}</span>
              </div>
            </div>
            <div className="flex my-3 items-center">
              <UserGroup size={35} />
              <div className="ml-5">
                Nombre de participants:{" "}
                <span className="font-bold">
                  {seminar?.participNumber} personnes
                </span>
              </div>
            </div>
            <div className="flex my-3 items-center">
              <Euro size={35} />
              <div className="ml-5">
                Budget par participant:{" "}
                <span className="font-bold"> {seminar?.budgetPerPerson}€</span>
              </div>
            </div>
          </div>
          {/* Stats Profile Séminar */}
          <p className="sm:text-xl font-bold text-xl mt-12 text-gray-900 mr-5">
            Profile rempli à 0%
          </p>
          <progress
            className="w-full progress progress-accent mt-12"
            value="10"
            max="100"
          ></progress>
          {/* Profile Teams */}
          <p className="sm:text-xl font-bold text-xl mt-12 text-gray-900 mr-5">
            Profile de votre équipe
          </p>
          <div className="w-full grid grid-cols-3 gap-5 mt-12">
            <div className="items-center align-center flex flex-col">
              <Stair size={250} />
              <span className="text-center">Persévérent 0%</span>
            </div>
            <div className="items-center align-center flex flex-col">
              <Library size={250} />
              <span className="text-center">Perfectionniste 0%</span>
            </div>
            <div className="items-center align-center flex flex-col">
              <Working size={250} />
              <span className="text-center">Travail addict 0%</span>
            </div>
            <div className="items-center align-center flex flex-col">
              <Happy size={250} />
              <span className="text-center">Empathique 0%</span>
            </div>
            <div className="items-center align-center flex flex-col">
              <Chill size={250} />
              <span className="text-center">Reveur 0%</span>
            </div>
            <div className="items-center align-center flex flex-col">
              <TV size={250} />
              <span className="text-center">
                Les membres qui n{"'"}ont pas remplie le formulaire
              </span>
            </div>
          </div>
          {/* Button relance */}
          {/* <p className="sm:text-xl font-bold text-xl mt-12 text-gray-900 mr-5">
            Relancer mes collaborateurs
          </p> */}
          {/* Devis */}

          {/* {listQuotes?.map(() => (
            <div>

            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default SeminarInfos;
