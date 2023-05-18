import Audrey from "../assets/pictures/audrey.jpeg"
import Eleonor from "../assets/pictures/eleonor.jpg"
import Kelly from "../assets/pictures/kelly.jpg"
// Pictures
import Louise from "../assets/pictures/louise.png"
import Mathieu from "../assets/pictures/mathieu.png"
import CardTeams from "./card"
import Crouch from "@/components/assets/icons/crouch"
import HappyGroup from "@/components/assets/icons/happyGroup"

const Teams = () => {
  return (
    <section className="text-black body-font">
      <div className="container px-5 py-14 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col">
          <div className="grid grid-cols-2 mt-10 items-center justify-center">
            <div className="flex">
              <HappyGroup height={500} width={900} />
            </div>
            <div>
              {/* <h1 className="mb-16 text-center text-4xl font-bold"> */}
              <h1 className="mb-5 text-xl font-bold text-black uppercase">
                Qui sommes nous ?
              </h1>
              <p className="mb-3">
                Étudiant.e.s en MBA, nous avons décidé dé creer Meltrip dans le
                cadre de notre grand projet.
              </p>
              <p className="mb-3">
                Imaginé à partir de notre passion: le voyage et le partage de la
                culture, nous avons souhaité offrir aux entreprise un service de
                création de séminaire unique et personnalisé pour que
                l’organisation de celui-ci ne soit plus un problème.
              </p>
              <p>
                Vous êtes intrigé.e ? N’attendez plus et venez tester notre
                solution !
              </p>
              <div className="col-span-2 mt-12">
                <h1 className="mb-5 text-xl font-bold text-black uppercase">
                  Notre objectif
                </h1>
                <p className="mb-3">
                  Soucieux de la qualité de vie et de l{"'"}expérience en
                  séminaire, nous réalisons des sémainaires basés sur l’objectif
                  (ex: team building) et sur la personnalités des
                  collaborateurs. Cette volonté se base sur le souhait de mettre
                  le potentiel de chacun à la base de toute activité.
                </p>
                <p className="mb-3">
                  Au delà de ça, nous souhaitons partager nos valeurs:
                  l’excellence, la bienveillance, la rigueur et le partage des
                  cultures.
                </p>
                <p>
                  Entant que jeune organisation, l’intégration des principes de
                  développement durable est importante et fait partie intégrante
                  de notre mode de fonctionnement pour contribuer à la
                  réalisation d’un monde plus sain et plus sûr.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="w-full mb-20 flex-col">
          <div className="col-span-2">
            <h1 className="mb-5 text-xl font-bold text-black uppercase">
              Notre objectif
            </h1>
            <p className="mb-3">
              Soucieux de la qualité de vie et de l{"'"}expérience en séminaire,
              nous réalisons des sémainaires basés sur l’objectif (ex: team
              building) et sur la personnalités des collaborateurs. Cette
              volonté se base sur le souhait de mettre le potentiel de chacun à
              la base de toute activité.
            </p>
            <p className="mb-3">
              Au delà de ça, nous souhaitons partager nos valeurs: l’excellence,
              la bienveillance, la rigueur et le partage des cultures.
            </p>
            <p>
              Entant que jeune organisation, l’intégration des principes de
              développement durable est importante et fait partie intégrante de
              notre mode de fonctionnement pour contribuer à la réalisation d’un
              monde plus sain et plus sûr.
            </p>
          </div>
        </div> */}
        <h1 className="text-center text-black font-bold text-5xl my-32">
          Meltrip Team
        </h1>
        <section className="text-gray-600 body-font">
          <div className="container px-5">
            <div className="flex flex-wrap justify-center align-center items-center -m-4">
              <CardTeams
                name="Louise Landemaine"
                pictureURL={Louise.src}
                status=" "
                post="CEO & Fondatrice"
              />
              <CardTeams
                name="Audrey Blouin"
                pictureURL={Audrey.src}
                status="Co-fondatrice"
                post="Responsable marketing"
              />
              <CardTeams
                name="Eleonor Morais"
                pictureURL={Eleonor.src}
                status="Co-fondatrice"
                post="Responsable marketing"
              />
            </div>
            <div className="mt-16 flex flex-wrap justify-center align-center items-center -m-4">
              <CardTeams
                name="Mathieu Drapala"
                pictureURL={Mathieu.src}
                status="Co-fondateur"
                post="Responsable développement web"
              />
              <CardTeams
                name="Kelly Darabor"
                pictureURL={Kelly.src}
                status="Co-fondateur"
                post="Responsable UX - UI design"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-32">
            <h1 className="text-center text-black font-bold text-5xl mb-10">
              Rejoindre notre équipe
            </h1>
            <p className="text-center text-base w-[50%] mb-16">
              Bienveillance, échange de connaissances, partage de bons moments,
              etc. <br />
              Meltrip est toujours à la recherche de sa prochaine pépite ! Alors
              n’attendez plus et postulez.
            </p>
            <div
              onClick={() =>
                alert(
                  `Merci pour l${"'"}intérêt que vous nous portez, mais nous ne sommes malheureusement pas en phase de recrutement actuellement, cette option sera disponible sous peu.`
                )
              }
              className="py-4 bg-meltrip-primary font-bold uppercase rounded-md text-white w-[40%] text-center"
            >
              Rejoindre
            </div>
          </div>
        </section>
        <div className="mt-24 flex justify-center">
          <Crouch height={400} width={1300} />
        </div>
      </div>
    </section>
  )
}

export default Teams
