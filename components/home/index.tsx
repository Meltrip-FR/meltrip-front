import { useState } from "react";
import Modal from "./modal";
import Header from "@/components/body/header";
import Footer from "@/components/body/footer";
import ChevronDown from "@/components/assets/icons/chevronDown";
import Happy from "@/components/assets/icons/happy";
import Hello from "@/components/assets/icons/hello";
import Humainitarian from "@/components/assets/icons/humanitarian";
import BackgroundNewsletter from "@/components/assets/icons/backgroundNewsletter";
import First from "@/components/assets/home/first.png";
import Two from "@/components/assets/home/two.png";
import Three from "@/components/assets/home/three.png";
import Four from "@/components/assets/home/four.png";
import Five from "@/components/assets/home/five.png";
import Six from "@/components/assets/home/six.png";
import Seven from "@/components/assets/home/seven.png";
import Space from "../assets/icons/space";
import Stars from "../assets/icons/stars";
import Steps from "../assets/icons/steps";
import PayementList from "../assets/icons/payements";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div className="h-full flex flex-col">
        <div className="relative min-h-[600px] h-screen overflow-hidden">
          <div className="z-30 w-full text-2xl text-white bg-opacity-25 rounded-xl">
            <Header />
            <div className="flex flex-col items-center justify-center align-center mt-56">
              <h1 className="text-white text-center text-5xl mb-5">
                VOTRE SÉMINAIRE SUR MESURE
              </h1>
              <div className="">
                <p className="text-white text-center text-xl mb-10">
                  Soyez vous, jusqu’au bout !
                </p>
              </div>
              <div className="mb-16">
                <Modal
                  type="first"
                  showModal={showModal}
                  setShowModal={setShowModal}
                />
              </div>
              <div className="animate-bounce cursor-pointer">
                <ChevronDown size={50} color="white" />
              </div>
            </div>
          </div>
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 z-[-1] object-cover w-screen h-full object-top"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="mt-10 rounded-lg h-64 overflow-hidden">
        <div className="flex justify-center items-center align-center object-cover object-center">
          <img
            src="/logo2.webp"
            alt="logo secondary"
            width="300"
            height="180"
            className="h-auto w-80"
            loading="lazy"
          />
        </div>
      </div>
      <p className="text-meltrip-secondary text-center text-4xl font-semibold mt-10 mb-5">
        Un séminaire avec Meltrip c’est...
      </p>
      <section className="text-gray-600 body-font">
        <div className="container  py-24 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <div className="flex justify-center object-cover object-center h-full w-full">
                  <Hello size={300} />
                </div>
              </div>
              <h2 className="text-xl p-5 text-center font-medium title-font text-gray-900 mt-5">
                Une expérience sur mesure basé sur vos besoins et sur la
                personnalité des participant.e.s
              </h2>
              <p className="text-base text-justify leading-relaxed mt-2 p-5">
                Pour répondre à vos besoins, Meltrip vous demande de remplir un
                questionnaire pour obtenir les informations essentielles. Nous
                étudions également la personnalité de vos collaborateurs pour
                vous proposer 3 séminaires uniques et originaux, favorisant
                ainsi leur bien-être. Il ne vous reste plus qu{"'"}à faire votre
                choix parmi nos propositions.
              </p>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <div className="flex justify-center object-cover object-center h-full w-full">
                  <Humainitarian size={300} />
                </div>
              </div>
              <h2 className="text-xl p-5 text-center font-medium title-font text-gray-900 mt-5">
                Un événement d’entreprise conçu pour répondre aux enjeux
                sociétaux actuels
              </h2>
              <p className="text-base text-justify leading-relaxed mt-9 p-5">
                Meltrip organise des séminaires écoresponsables en sélectionnant
                des acteurs selon des critères rigoureux. Cette démarche permet
                de réduire l{"'"}impact environnemental et de sensibiliser les
                participants à de nouvelles façons de consommer. Meltrip intègre
                également des activités écoresponsables pour offrir une
                expérience unique alliant qualité et responsabilité
                environnementale.
              </p>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <div className="flex object-cover justify-center object-center h-full w-full">
                  <Happy size={300} />
                </div>
              </div>
              <h2 className="text-xl p-5 text-center font-medium title-font text-gray-900 mt-5">
                Un.e interlocuteur.rice unique et dédié.e à votre entreprise
                pour assurer un séminaire qualitatif
              </h2>
              <p className="text-base text-justify leading-relaxed mt-9 md:mt-2 p-5">
                Parce que la qualité de nos séminaires passe aussi par
                l’accompagnement, Meltrip vous assigne un interlocuteur.rice qui
                vous accompagnera durant toutes les étapes de construction de
                votre séminaire mais aussi pendant. Un doute ou une question
                n’hésitez pas à l’appeler ou lui envoyer un mail, il/elle vous
                répondra !
              </p>
            </div>
          </div>
          <p className="text-meltrip-secondary text-center text-4xl font-semibold mt-24 mb-5">
            Comment ça marche ?
          </p>
          <div className="flex flex-row justify-end items-center  gap-[70px] mt-24">
            <img src={First.src} className="w-[316px]  rounded-[7px] " />
            <div className="flex flex-col flex-grow-0 flex-shrink-0 gap-[15px]">
              <p className="flex-grow-0 flex-shrink-0 w-[509px] text-2xl font-bold text-left uppercase text-black">
                Réaliser une demande d’organisation de séminaire
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-[541px] text-xl font-medium text-left text-[#757575]">
                Pour cela, il vous suffit de remplir les informations
                nécessaires (type de séminaire et de lieu, nombre de
                participants, etc.) et nous laisser un commentaire si vous avez
                une envie particulière
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-start items-center  gap-[70px] mt-24">
            <img src={Two.src} className="w-[316px]  rounded-[7px] " />
            <div className="flex flex-col flex-grow-0 flex-shrink-0 gap-[15px]">
              <p className="flex-grow-0 flex-shrink-0 w-[509px] text-2xl font-bold text-left uppercase text-black">
                Réaliser un mini Quiz de personnalité
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-[541px] text-xl font-medium text-left text-[#757575]">
                Une fois votre demande effectué, il reste le test de
                personnalité à effectuer. Pour cela, vous n’aurez plus qu’à nous
                donner les adresses mails des participants et nous enverrons à
                tous les participants un test qu’ils/elles devront remplir. Ne
                vous inquiétez pas si vous êtes participants, il vous suffira de
                rentrer aussi votre adresse mail !
              </p>
            </div>
          </div>
          {/* partie 3 */}
          <div className="flex flex-row justify-end items-center  gap-[70px] mt-24">
            <img src={Three.src} className="w-[316px]  rounded-[7px] " />
            <div className="flex flex-col flex-grow-0 flex-shrink-0 gap-[15px]">
              <p className="flex-grow-0 flex-shrink-0 w-[509px] text-2xl font-bold text-left uppercase text-black">
                Recevez un appel de votre interlocuteur.rice dédié.e
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-[541px] text-xl font-medium text-left text-[#757575]">
                Pour s’assurer que votre demande sera retranscrite à la
                perfection en séminaire, votre interlocuteur.rice (qui vous
                accompagnera de l’organisation à la fin du séminaire) vous
                appellera dans les 72h.
              </p>
            </div>
          </div>
          {/* partie 4 */}
          <div className="flex flex-row justify-start items-center  gap-[70px] mt-24">
            <img src={Four.src} className="w-[316px]  rounded-[7px] " />
            <div className="flex flex-col flex-grow-0 flex-shrink-0 gap-[15px]">
              <p className="flex-grow-0 flex-shrink-0 w-[509px] text-2xl font-bold text-left uppercase text-black">
                Recevoir 2-3 propositions de séminaire
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-[541px] text-xl font-medium text-left text-[#757575]">
                Pour que votre séminaire soit une réussite, nous rechercherons
                les meilleurs logements, transports et activités qui permettront
                à tous les types de personnalités de profiter pleinement du
                séminaire tout en veillant à ce que tous les aspects de votre
                séminaire soient éco-responsables. Vous recevrez alors 2 à 3
                propositions et vous n’aurez plus qu’à valider celle qui vous
                convient le mieux !
              </p>
            </div>
          </div>
          {/* partie 5 */}
          <div className="flex flex-row justify-end items-center  gap-[70px] mt-24">
            <img src={Five.src} className="w-[316px]  rounded-[7px] " />
            <div className="flex flex-col flex-grow-0 flex-shrink-0 gap-[15px]">
              <p className="flex-grow-0 flex-shrink-0 w-[509px] text-2xl font-bold text-left uppercase text-black">
                Recevez tous les éléments qui vous seront nécessaires pour votre
                séminaire
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-[541px] text-xl font-medium text-left text-[#757575]">
                De la check list de votre valise, à vos itinéraires, vous
                recevrez tous les éléments nécessaires à la réalisation.
              </p>
            </div>
          </div>
          {/* partie 6 */}
          <div className="flex flex-row justify-start items-center  gap-[70px] mt-24">
            <img src={Six.src} className="w-[316px]  rounded-[7px] " />
            <div className="flex flex-col flex-grow-0 flex-shrink-0 gap-[15px]">
              <p className="flex-grow-0 flex-shrink-0 w-[509px] text-2xl font-bold text-left uppercase text-black">
                Profitez de votre séminaire
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-[541px] text-xl font-medium text-left text-[#757575]">
                Pour cette étape, il vous reste jusqu’à suivre votre itinéraire,
                emporter vos billets de transport et à vivre le moment présent
              </p>
            </div>
          </div>
          {/* partie 7 */}
          <div className="flex flex-row justify-center items-center gap-[70px] mt-24">
            <div className="flex flex-col flex-grow-0 flex-shrink-0 gap-[15px]">
              <p className="flex-grow-0 flex-shrink-0 w-[509px] text-2xl font-bold text-left uppercase text-black">
                consultez les émissions carbones de vos séminaires et découvrez
                comment meltrip vous aide à les compenser grâce à ses
                partenaires
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-[541px] text-xl font-medium text-left text-[#757575]">
                Conscients de notre impact, nous voulons aussi vous aider en
                vous informant des émissions carbones que vous avez réalisées
                pendant ce séminaire. Pour que vous puissiez vous aussi agir,
                nous vous proposons notre partenaire qui vous permettront de les
                compenser en investissant dans la structure agricole d’un
                agriculteur (reconnu par l’État), tout en bénéficiant de récolte
                de ceux-ci.
              </p>
            </div>
            <img src={Seven.src} className="w-[516px]  rounded-[7px] " />
          </div>
          <div className="flex flex-row justify-center items-center gap-[70px] mt-24">
            <Space size={100} />
          </div>
          {/* Menu Image */}
          {/* ListPayement */}
          <h1 className="text-meltrip-secondary text-center text-4xl font-semibold mt-10 mb-5">
            NOS GARANTIES
          </h1>
          <div className="flex justify-center items-center w-full mt-10">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6 text-justify flex justify-center flex-col">
              <div className="flex justify-center items-center">
                <Stars size={50} />
              </div>
              <p className="text-center mt-16">Des séminaires sur mésure</p>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6 text-justify flex justify-center flex-col">
              <div className="flex justify-center items-center">
                <Steps size={50} />
              </div>
              <p className="text-center mt-16">
                Calcul de votre empreinte carbone et sélection d’un de nos
                partenaires pour vous aider à les compenser
              </p>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6 text-justify flex justify-center flex-col">
              <div className="flex justify-center items-center">
                <PayementList height={100} width={200} />
              </div>
              <p className="text-center mt-10">Paiement sécurisé</p>
            </div>
          </div>

          <p className="text-center text-4xl font-semibold mt-24 mb-5">
            Envie d’en savoir plus et d’être au courant des nouveautés ?
          </p>
        </div>
      </section>
      <div className="relative justify-center items-center flex">
        <div className="absolute grid grid-cols-2 gap-5 items-center justify-center p-80 ">
          <div>
            <h5 className="text-2xl text-meltrip-textW tracking-widest mb-5">
              Abonnez-vous à notre Newsletter
            </h5>
            <p className="text-sm text-meltrip-textW">
              En m’abonnant, j’accepte de recevoir cette newsletter et je
              comprends que je peux me désabonner facilement à tout moment.
            </p>
          </div>
          <form
            onSubmit={() => null}
            className="bg-meltrip-textW rounded-full p-3 flex gap-4"
          >
            <input
              type="email"
              className="outline-0 text-sm w-80 pl-2"
              placeholder="Entrez votre adresse email"
              required
            />
            <button
              type="submit"
              className="bg-meltrip-secondary text-meltrip-textW rounded-full px-3 py-1"
            >
              S{"'"}abonner
            </button>
          </form>
        </div>
        <BackgroundNewsletter width={1000} height={300} />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
