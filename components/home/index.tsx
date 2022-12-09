import { useState } from "react";
import Modal from "./modal";

//Components
import Header from "@/components/body/header";
import Footer from "@/components/body/footer";

//Iconsclear
import ChevronDown from "@/components/assets/icons/chevronDown";
import Happy from "@/components/assets/icons/happy";
import Hello from "@/components/assets/icons/hello";
import Humainitarian from "@/components/assets/icons/humanitarian";
import BackgroundNewsletter from "@/components/assets/icons/backgroundNewsletter";

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
      <div className="mt-16 rounded-lg h-64 overflow-hidden">
        <div className="flex justify-center items-center align-center object-cover object-center">
          <img
            src="/logo2.webp"
            alt="logo secondary"
            width="300"
            height="180"
            className="h-auto w-80 mt-10"
            loading="lazy"
          />
        </div>
      </div>
      <p className="text-meltrip-secondary text-center text-4xl font-semibold mt-10 mb-5">
        Partir à séminaire avec Meltrip c{"'"}est..
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
                Un séminaire sur mesure & un accompagnement personnalisé !
              </h2>
              <p className="text-base text-justify leading-relaxed mt-2 p-5">
                Pour s’assurer de la réussite de votre séminaire, que cela soit
                son objectif ou son succès auprès des participants, Meltrip
                étudie la personnalité de vos collaborateurs pour vous proposer
                3 séminaires uniques. Il ne vous reste plus qu’à choisir !
              </p>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <div className="flex justify-center object-cover object-center h-full w-full">
                  <Happy size={300} />
                </div>
              </div>
              <h2 className="text-xl p-5 text-center font-medium title-font text-gray-900 mt-5">
                Un.e interlocuteur.rice unique et dédié.e à votre entreprise
              </h2>
              <p className="text-base text-justify leading-relaxed mt-2 p-5">
                Pour vous assurer un service de qualité et surtout vous proposer
                des séminaires uniques basés sur la personnalité de votre
                entreprise et de vos collaborateurs, Meltrip met à disposition
                un interlocuteur.rice qui sera à votre disposition pour créer et
                vivre votre séminaire !
              </p>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <div className="flex object-cover justify-center object-center h-full w-full">
                  <Humainitarian size={300} />
                </div>
              </div>
              <h2 className="text-xl p-5 text-center font-medium title-font text-gray-900 mt-5">
                une Ecoresponsabilité & une participation à l’économie locale !
              </h2>
              <p className="text-base text-justify leading-relaxed mt-9 md:mt-2 p-5">
                Soucieux de notre impact environnemental, on s’engage à reverser
                une partie du prix de votre séminaire à un acteur.rice local.e !
                Pas de frais en plus pour vous et c’est vous qui choissirez
                cette acteur.rice, que vous aurez rencontré.e durant votre
                séminaire !
              </p>
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
