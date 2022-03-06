import { useState } from "react";

//Icons
import ChevronDown from "@components/assets/icons/chevronDown";
import Happy from "@components/assets/icons/happy";
import Hello from "@components/assets/icons/hello";
import Humainitarian from "@components/assets/icons/humanitarian";

//Components
import Footer from "./footer";
import Modal from "./modal";

import { Link } from "react-scroll";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="h-screen w-full">
      <div className="h-full flex flex-col">
        <div className="flex flex-row justify-center items-center">
          <div className="p-3">
            <img src="/logo.png" alt="logo" className="h-auto w-32" />
          </div>
        </div>
        <div
          className="flex flex-1 items-center h-auto align-center justify-center bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: "url(/travel.png)",
          }}
        >
          <div className="flex flex-col items-center justify-center align-center mt-96">
            <h1 className="text-white text-center text-5xl mb-5">
              TON VOYAGE SUR MESURE
            </h1>
            <div className="">
              <p className="text-white text-center text-xl mb-10">
                Une personnalisation dynamique et amusante pour un séjour unique
                et écoresponsable !
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
              <Link to="section" spy={true} smooth={true}>
                <ChevronDown size={50} color="white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-lg h-64 overflow-hidden">
        <div className="flex justify-center items-center align-center object-cover object-center">
          <img
            src="/logo2.png"
            alt="logo"
            className="h-auto w-80 mt-10"
            id="section"
          />
        </div>
      </div>

      <p className="text-[#C05E37]  text-center text-4xl font-semibold mt-10 mb-5">
        Partir à l{"'"}aventure avec Meltrip c{"'"}est..
      </p>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <div className="flex justify-center object-cover object-center h-full w-full">
                  <Hello size={300} />
                </div>
              </div>
              <h2 className="text-xl p-5 text-center font-medium title-font text-gray-900 mt-5">
                UN VOYAGE SUR MESURE & UN ACCOMPAGNEMENT PERSONNALISÉ !
              </h2>
              <p className="text-base text-justify leading-relaxed mt-2 p-5">
                Pas de longues recherches ! Un simple questionnaire dynamique et
                amusant à réaliser seul ou avec ton groupe d’amis pour nous
                aider à comprendre ta personnalité et tes envies de voyages !
              </p>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <div className="flex justify-center object-cover object-center h-full w-full">
                  <Humainitarian size={300} />
                </div>
              </div>
              <h2 className="text-xl p-5 text-center font-medium title-font text-gray-900 mt-5">
                UNE ÉCORESPONSABILITÉ & UNE PARTICIPATION À L{"'"}ÉCONOMIE
                LOCALE !
              </h2>
              <p className="text-base text-justify leading-relaxed mt-2 p-5">
                On s’engage ensemble ! 0 frais en + pour toi, 1 don en + pour
                les entreprises locales ! Aide un partenaire que tu rencontreras
                pendant ton séjour ! Tu choisis qui tu souhaites soutenir et on
                lui reverse une petite partie du prix de ton voyage !
              </p>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <div className="flex object-cover justify-center object-center h-full w-full">
                  <Happy size={300} />
                </div>
              </div>
              <h2 className="text-xl p-5 text-center font-medium title-font text-gray-900 mt-5">
                DES PARTENAIRES TESTÉS ET APPROUVÉS !
              </h2>
              <p className="text-base text-justify leading-relaxed mt-9 md:mt-2 p-5">
                De ton logement aux activités réalisées, nous avons sélectionné,
                testés en conditions réelles et validés les meilleurs
                partenaires selon leur qualité, leurs valeurs, leur aspect
                écologique et leur charme exceptionnel !
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center align-items mx-auto mb-32">
        <Modal
          type="seconds"
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </div>
      <Footer />
      <div className="flex items-center justify-center align-center w-full">
        <h6 className=" text-center text-2xl text-gray-600 p-2">
          © 2022 Meltrip.com
        </h6>
      </div>
    </div>
  );
};

export default HomePage;
