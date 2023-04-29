import { useRouter } from "next/router";
import { Fragment, useCallback, useEffect, useState } from "react";
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
import Chill from "@/components/assets/icons/seminar/chill";
import TV from "@/components/assets/icons/seminar/tv";
import { getQuoteById } from "@/lib/quotes";
import { getTemplateQuoteById } from "@/lib/templateQuotes";
import { getPayementBySeminarId } from "@/lib/payements";
import { getMembersByGroupId } from "@/lib/members";
import InviteLink from "@/components/assets/icons/inputLink";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface UserData {
  id: number;
  idGroup: number;
  email: string;
  retour: any;
  infos: any;
  present: boolean;
  resultState: number;
  resultType: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: any;
}

interface UserData {
  id: number;
  idGroup: number;
  email: string;
  retour: any;
  infos: any;
  present: boolean;
  resultState: number;
  resultType: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: any;
}

interface ResultData {
  resultType: string;
  moyenne: number;
}

const calculatePercentageAverages = (moyennes: any, totals: any) => {
  const total = moyennes.reduce(
    (sum: any, moyenne: any) => sum + moyenne.moyenne,
    0
  );

  const moyenneObj: any = {};

  moyennes.map((moyenne: any) => {
    return (moyenneObj[moyenne.resultType] = (
      (moyenne.moyenne / total) *
      totals
    ).toFixed());
  });

  return moyenneObj;
};

const loadStats = (data: UserData[]): ResultData[] => {
  const resultTypeMap: any = new Map<
    string,
    { total: number; count: number }
  >();

  // Calculer la somme et le nombre d'occurrences pour chaque resultType
  data.forEach((item) => {
    if (resultTypeMap.has(item.resultType)) {
      resultTypeMap.get(item.resultType).total += item.resultState;
      resultTypeMap.get(item.resultType).count++;
    } else {
      resultTypeMap.set(item.resultType, { total: item.resultState, count: 1 });
    }
  });

  // Calculer la moyenne pour chaque resultType
  const result: ResultData[] = [];
  resultTypeMap.forEach((value: any, key: any) => {
    result.push({ resultType: key, moyenne: value.total / value.count });
  });

  return result;
};

const SeminarInfos = () => {
  const router = useRouter();
  const { auth } = useAppSelector((state) => state);
  const [seminar, setSeminar] = useState<any>();

  const copiueClipboard = () => {
    window.navigator.clipboard.writeText(
      `https://meltrip.fr/invites/${seminar?.id}`
    );
    toast.success("Copié", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

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
        const quote: any = await getQuoteById(seminar?.idQuote);
        const members: any = await getMembersByGroupId(seminar?.idGroup);
        const payement: any = await getPayementBySeminarId(
          auth?.user?.token,
          seminar?.idPayement
        );
        const loadStat: any = loadStats(members);
        const cal = ((members.length / seminar?.adultNumber) * 100).toFixed();
        const result = calculatePercentageAverages(loadStat, cal);
        console.log({ result });

        const TemplateQuote1: any = await getTemplateQuoteById(
          auth.user.accessToken,
          quote?.idTemplateQuote1
        );
        const TemplateQuote2: any = await getTemplateQuoteById(
          auth.user.accessToken,
          quote?.idTemplateQuote2
        );
        const TemplateQuote3: any = await getTemplateQuoteById(
          auth.user.accessToken,
          quote?.idTemplateQuote3
        );
        setSeminar({
          id: seminar?.id,
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
          denominationUniteLegale: organization?.denominationUniteLegale,
          siretCompany: organization?.siret,
          quote: quote,
          result,
          templateQuotes: {
            TemplateQuote1,
            TemplateQuote2,
            TemplateQuote3,
          },
          payement,
          group,
          members,
          loadStat,
        });
      }
    },
    [auth.user.accessToken, router.query.id]
  );

  useEffect(() => {
    router?.query?.id &&
      getSeminar(router?.query?.id as string).catch((e) => console.error(e));
  }, [getSeminar, router?.query?.id]);

  return (
    <section className="text-gray-600 body-font">
      <ToastContainer />
      <div className="container px-5 py-14 mx-auto">
        <div className="flex justify-between mb-4">
          <div className="flex items-center mb-3 mt-3">
            <BreadCrumbs url="/" name="home" active={false} />
            <BreadCrumbs url="/user/dashboard" name="Compte" active={true} />
            <BreadCrumbs url="/user/seminar" name="Séminaires" active={true} />
            <BreadCrumbs
              url="/user/seminar/"
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
                  {seminar?.members.length} / {seminar?.participNumber}{" "}
                  personnes
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
          <p className="sm:text-xl text-xl mt-12 text-gray-900 mr-5">
            Profil collaborateur rempli à{" "}
            {(
              (seminar?.members.length / seminar?.participNumber) *
              100
            ).toFixed()}
            %
          </p>
          <progress
            className="w-full progress progress-accent mt-12"
            value={(seminar?.members.length / seminar?.participNumber) * 100}
            max="100"
          ></progress>

          {/* Profile Teams */}
          <p className="sm:text-xl text-xl mt-12 text-gray-900 mr-5">
            Profile de votre équipe
          </p>
          <div className="w-full grid grid-cols-3 gap-5 mt-12">
            <div className="items-center align-center flex flex-col">
              <Stair size={250} />
              <span className="text-center">
                {seminar?.result["perseverant"] || 0}% - Persévérent
              </span>
            </div>
            <div className="items-center align-center flex flex-col">
              <Library size={250} />
              <span className="text-center">
                {seminar?.result["perfectionniste"] || 0}% - Perfectionniste
              </span>
            </div>
            <div className="items-center align-center flex flex-col">
              <Working size={250} />
              <span className="text-center">
                {seminar?.result["travailaddict"] || 0}% - Travail addict
              </span>
            </div>
            <div className="items-center align-center flex flex-col">
              <Happy size={250} />
              <span className="text-center">
                {seminar?.result["empathique"] || 0}% - Empathique
              </span>
            </div>
            <div className="items-center align-center flex flex-col">
              <Chill size={250} />
              <span className="text-center">
                {seminar?.result["reveur"] || 0}% - Reveur
              </span>
            </div>
            <div className="items-center align-center flex flex-col">
              <TV size={250} />
              <span className="text-center">
                {seminar?.loadStat["rebelle"] || 0}% - Rebelle
              </span>
            </div>
          </div>
          {!seminar?.templateQuotes?.TemplateQuote1 ? (
            <Fragment>
              <p className="sm:text-xl font-bold text-xl mt-12 text-gray-900 mr-5">
                Relancer mes collaborateurs
              </p>
              <p className="mt-5">
                Afin de mieux personnaliser votre séminaire, voici un quiz de
                personnalité* à envoyer aux participants du séminaire. Les
                réponses permettront à nos Meltrippers d’analyser la
                personnalité de vos collaborateurs ainsi que pour vous si vous y
                participez. <br />
                <br />À noter : nous vous soumettrons nos propositions de
                séminaires lorsque le nombre de participants aura été atteint
                65%.
              </p>
              <div className="mt-12 flex justify-center relative cursor-pointer">
                <div onClick={() => copiueClipboard()}>
                  <InviteLink width={700} />
                </div>
                <div className="absolute font-bold top-[5.5vh] left-[50vh]">
                  <p>{`https://meltrip.fr/invites/${seminar?.id}`}</p>
                </div>
              </div>
            </Fragment>
          ) : (
            parseInt(
              (
                (seminar?.members.length / seminar?.participNumber) *
                100
              ).toFixed()
            ) > 65 && (
              <Fragment>
                {/* Button relance */}
                <p className="sm:text-xl font-bold text-xl mt-24 text-gray-900 mr-5">
                  Vos propositions de séminaire
                </p>
                {/* Devis */}
                <div className="p-5 flex justify-between mt-12">
                  <a
                    href={`/user/seminar/infos/quotes/${seminar?.templateQuotes.TemplateQuote1.id}`}
                    target="blank"
                    className="cursor-default"
                  >
                    <div className="relative ">
                      <img
                        alt="picture"
                        className="hover:opacity-75 cursor-pointer object-cover h-48 w-96"
                        src={seminar?.templateQuotes.TemplateQuote1.urlPicture}
                      />
                      <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-meltrip-secondary opacity-70">
                        <h3 className="text-xl text-white font-bold">
                          {seminar?.templateQuotes.TemplateQuote1.title}
                        </h3>
                      </div>
                    </div>
                  </a>
                  <a
                    href={`/user/seminar/infos/quotes/${seminar?.templateQuotes.TemplateQuote2.id}`}
                    target="blank"
                    className="cursor-default"
                  >
                    <div className="relative ">
                      <img
                        alt="picture"
                        className="hover:opacity-75 cursor-pointer object-cover h-48 w-96"
                        src={seminar?.templateQuotes.TemplateQuote2.urlPicture}
                      />
                      <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-meltrip-secondary opacity-70">
                        <h3 className="text-xl text-white font-bold">
                          {seminar?.templateQuotes.TemplateQuote2.title}
                        </h3>
                      </div>
                    </div>
                  </a>
                  <a
                    href={`/user/seminar/infos/quotes/${seminar?.templateQuotes.TemplateQuote3.id}`}
                    target="blank"
                    className="cursor-default"
                  >
                    <div className="relative">
                      <img
                        alt="picture"
                        className="hover:opacity-75 cursor-pointer object-cover h-48 w-96"
                        src={seminar?.templateQuotes.TemplateQuote3.urlPicture}
                      />
                      <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-meltrip-secondary opacity-70">
                        <h3 className="text-xl text-white font-bold">
                          {seminar?.templateQuotes.TemplateQuote3.title}
                        </h3>
                      </div>
                    </div>
                  </a>
                </div>
              </Fragment>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default SeminarInfos;
