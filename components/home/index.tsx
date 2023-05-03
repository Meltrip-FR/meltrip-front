import MapFeed from "./mapFeed"
import Modal from "./modal"
import SeminarStatic from "./seminarStatic"
import HeaderPicture from "@/components/assets/home/headerPage.png"
import ChevronDown from "@/components/assets/icons/chevronDown"
import Happy from "@/components/assets/icons/happy"
import Hello from "@/components/assets/icons/hello"
import Humainitarian from "@/components/assets/icons/humanitarian"
import PayementList from "@/components/assets/icons/payements"
import Space from "@/components/assets/icons/space"
import Stars from "@/components/assets/icons/stars"
import Steps from "@/components/assets/icons/steps"
import BackFigL from "@/components/assets/mapfeed/backFigL.png"
import BackFigR from "@/components/assets/mapfeed/backFigR.png"
import Footer from "@/components/body/footer"
import Header from "@/components/body/header"

const InputLetter = () => {
  return (
    <div className="flex w-full xl:w-[90vw] xl:full xl:flex justify-between items-center bg-white rounded-full p-3 ml-5 gap-10 ">
      <input
        type="text"
        placeholder="Entrez votre adresse email"
        className="text-[3vw] xl:text-[1vw]"
      />
      <button className="bg-[#CE5729] rounded-full p-2 text-white text-[3vw] xl:p-3 xl:px-6 xl:text-[1vw]">
        S{"'"}abonner
      </button>
    </div>
  )
}

const HomePage = () => {
  return (
    <div>
      <div className="h-full flex flex-col">
        <div className="relative min-h-[600px] h-screen overflow-hidden">
          <div className="z-30 w-full text-2xl text-white bg-opacity-25 rounded-xl">
            <Header />
            <div className="flex flex-col items-center justify-center align-center mt-[45vh]">
              <h1 className="text-white font-bold text-center text-6xl mb-5">
                VOTRE SÉMINAIRE SUR MESURE
              </h1>
              <div>
                <p className="text-white font-bold text-center text-xl">
                  Soyez vous, jusqu’au bout !
                </p>
              </div>
              <div className="mt-[5vh] mb-10">
                <Modal type="first" />
              </div>
              <div className="animate-bounce cursor-pointer">
                <ChevronDown size={50} color="white" />
              </div>
            </div>
          </div>
          <img
            src={HeaderPicture.src}
            alt="header"
            className="absolute top-0 z-[-1] object-cover w-screen h-full object-top"
          />
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
      <p className="text-meltrip-secondary font-bold text-center text-4xl mt-10 mb-5">
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
                Un événement d’entreprise conçu <br /> pour répondre aux enjeux
                sociétaux actuels
              </h2>
              <p className="text-base text-justify leading-relaxed  mt-2 p-5">
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
          <p className="text-meltrip-secondary font-bold text-center text-4xl mt-24 mb-5 pt-[6vh] xl:text-[2vw]">
            Comment ça marche ?
          </p>
          <div className="flex flex-col gap-[10vh] ">
            <div className="hidden xl:inline">
              <img
                alt="backFigL"
                className=" absolute w-[20vw] left-[0vw] top-[240vh] "
                src={BackFigL.src}
              />
              <img
                alt="backFigR"
                className=" absolute w-[15vw] right-[0vw] top-[330vh]  "
                src={BackFigR.src}
              />
              <img
                alt="backFigL"
                className=" absolute w-[20vw]  left-[0vw] top-[430vh] z-10"
                src={BackFigL.src}
              />
            </div>
            <MapFeed />
          </div>

          <div className="flex flex-row justify-center items-center gap-[70px] mt-24">
            <Space size={100} />
          </div>
          <SeminarStatic />
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
              <p className="text-center mt-5">Paiement sécurisé</p>
            </div>
          </div>
          <p className="text-center text-4xl font-semibold mt-24 mb-5">
            Envie d’en savoir plus et d’être au courant des nouveautés ?
          </p>
        </div>
      </section>
      <div className="flex justify-center mb-12 w-full  xl:px-[20vw]  relative">
        <div className=" flex flex-col justify-center items-start w-[90vw] bg-[#CE5729]  h-[30vh] xl:h-fit xl:w-[55vw] p-5 md:p-10 xl:p-10 rounded-[30px] md:rounded-[40px] xl:rounded-[60px] z-10 gap-4">
          <p className="font-bold text-[2vw] text-white xl:text-[1.4vw] xl:w-[25vw]">
            Abonnez-vous à notre Newsletter
          </p>
          <p className="font-medium text-[1vw] text-white xl:text-[1vw] xl:w-[23vw]">
            En m’abonnant, j’accepte de recevoir cette newsletter et je
            comprends que je peux me désabonner facilement à tout moment.
          </p>
          <div className="block w-full xl:hidden">
            <InputLetter />
          </div>
        </div>
        <div className="hidden xl:flex bg-[#186E7A] h-[25vh] absolute w-[28vw] right-[24vw] justify-center items-center rounded-full pr-20 z-30 xl:h-full">
          <InputLetter />
        </div>
        <div className="hidden xl:block bg-[#186E7A] h-[25vh]  absolute w-[11vw] right-[22vw]  rounded-r-[60px] z-20 xl:h-full" />
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
