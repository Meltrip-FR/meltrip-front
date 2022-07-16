import { useState } from "react";
import Image from "next/image";

//Icons
import ChevronDown from "@components/assets/icons/chevronDown";
import Happy from "@components/assets/icons/happy";
import Hello from "@components/assets/icons/hello";
import Humainitarian from "@components/assets/icons/humanitarian";

//Components
import { Header } from "@components/body/header";
import Footer from "@components/body/footer";
import Modal from "./modal";

import { Link } from "react-scroll";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div className="h-full flex flex-col">
        <div className=" flex items-center justify-center h-screen mb-12 overflow-hidden">
          <div className="z-30 h-full text-2xl text-white  bg-opacity-25 rounded-xl">
            <Header />
            <div className="flex flex-col items-center justify-center align-center mt-56">
              <h1 className="text-white text-center text-5xl mb-5">
                VOTRE SÉMINAIRE SUR MESURE
              </h1>
              <div className="">
                <p className="text-white text-center text-xl mb-10">
                  Une personnalisation dynamique et amusante pour un séjour
                  unique et écoresponsable !
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
                <Link href="#" to="section" spy={true} smooth={true}>
                  <ChevronDown size={50} color="white" />
                </Link>
              </div>
            </div>
          </div>
          <video
            autoPlay
            loop
            muted
            className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="rounded-lg h-64 overflow-hidden">
        <div className="flex justify-center items-center align-center object-cover object-center">
          <Image
            src="/logo2.webp"
            alt="logo secondary"
            width="300"
            height="180"
            className="h-auto w-80 mt-10"
            loading="lazy"
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
        <span className=" text-center text-2xl text-gray-600 p-2">
          © 2022 Meltrip.com
        </span>
      </div>
    </div>
  );
};

export default HomePage;
