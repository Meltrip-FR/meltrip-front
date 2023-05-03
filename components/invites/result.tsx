import { useRouter } from "next/router"
import { Fragment, useEffect, useState } from "react"
import Empathique from "../assets/icons/invites/empathique"
import Perfectionniste from "../assets/icons/invites/perfectionniste"
import Perseverant from "../assets/icons/invites/perseverant"
import Reveur from "../assets/icons/invites/reveur"
import TravailAddict from "../assets/icons/invites/travailaddict"
import LogoColor from "../assets/icons/logoColor"
import { updateMembers } from "@/lib/members"

const listSection = [
  {
    type: {
      title: "WORK ADDICT",
      name: "travailaddict",
      describe:
        "Accro au travail, le travail addict trouve toujours une mission à faire. C’est une personne pragmatique et présente pour ses collègues.",
      picture: <TravailAddict height={450} width={500} />
    },
    section: [
      {
        title: "Point forts",
        list: ["Travailleur.se", "Efficace", "Responsable et organisé.e"]
      },
      {
        title: "Point faibles",
        list: ["Surréaliste", "Pointilleux", "Susceptible"]
      },
      {
        title: "Environnement de travail",
        list: ["Fonctionnel et ordonné", " Travail en petit groupe"]
      }
    ]
  },
  {
    type: {
      title: "PERFECTIONNISTE",
      name: "perfectionniste",
      describe:
        "Élégant et manique, le.la perfectionniste est toujours concentré.e et ne lâche rien avant d’être sur que tout soit parfait.",
      picture: <Perfectionniste height={450} width={500} />
    },
    section: [
      {
        title: "Point forts",
        list: ["Méticuleux.se", "Fiable", "Impliqué.e"]
      },
      { title: "Point faibles", list: ["Exigeant.e", "Craintif.ve"] },
      {
        title: "Environnement de travail",
        list: ["Calme et rangé", "Travail seul.e ou avec peu de collègues"]
      }
    ]
  },
  {
    type: {
      title: "PERSÉVÉRANT.E",
      name: "perseverant",
      describe:
        "Engagé.e, le.la persévérant.e est une personne de parole, qui sait convaincre son audience.",
      picture: <Perseverant height={450} width={500} />
    },
    section: [
      {
        title: "Point forts",
        list: ["Déterminé.e", "Observateur.rice", "Dévoué.e"]
      },
      {
        title: "Point faibles",
        list: ["Besoin de reconnaissance", "Sûr.e de soi"]
      },
      {
        title: "Environnement de travail",
        list: ["Sérieux et traditionnel", "Travail en groupe"]
      }
    ]
  },
  {
    type: {
      title: "REBELLE",
      name: "rebelle",
      describe:
        "Spontanée, le.la rebelle est un.e collègue qui aime le contact et le travail d’équipe. C’est une personne contestataire mais leader pour ses collègues.",
      picture: <Perseverant height={450} width={500} />
    },
    section: [
      {
        title: "Point forts",
        list: ["Enthousiaste", "Jovial.e", "Extroverti.e"]
      },
      {
        title: "Point faibles",
        list: ["Contestataire", "Stressé.e", "Têtu.e"]
      },
      {
        title: "Environnement de travail",
        list: ["Stimulant et ludique", "Travail en équipe"]
      }
    ]
  },
  {
    type: {
      title: "RÊVEUR.SE",
      name: "reveur",
      describe:
        "Calme et réservé.e, le.la rêveur.se est attentif à son environnement et déborde de créativité.",
      picture: <Reveur height={450} width={500} />
    },
    section: [
      {
        title: "Point forts",
        list: ["Imaginatif.ve", "Réfléchi.e", "Calme", " Neutre"]
      },
      {
        title: "Point faibles",
        list: ["Solitaire", "Sensible", "Taciturne"]
      },
      {
        title: "Environnement de travail",
        list: ["Espace de travail discret", "Travail seul.e"]
      }
    ]
  },
  {
    type: {
      title: "EMPATHIQUE",
      name: "empathique",
      describe:
        "Aidant mais surtout attentif, l’empathique déborde d’énergie et donne toujours le meilleur de lui-même.",
      picture: <Empathique size={300} />
    },
    section: [
      {
        title: "Point forts",
        list: ["Altruiste", "Extraverti", "Inventif.ve"]
      },
      {
        title: "Point faibles",
        list: ["Naïf.ve", "Étourdi.e", "Sensible"]
      },
      {
        title: "Environnement de travail",
        list: ["Confortable et accueillant", "Travail en équipe"]
      }
    ]
  }
]

const ResultCard = ({ formState }: any) => {
  const router = useRouter()
  const [formUpdateState, setFormUpdateState] = useState<any>()

  const handleUpdateMembers = async () => {
    if (!formUpdateState.infos || !formUpdateState.retour) {
      return router.push("/invites/thanks")
    }
    const data = {
      infos: formUpdateState.infos,
      retour: formUpdateState.retour
    }
    const update = await updateMembers(formState.id.toString(), data)
    if (update) {
      router.push("/invites/thanks")
    }
  }

  // useEffect(() => {
  //   if (!formState) router.push("/");
  // }, [formState]);

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex justify-center">
          <LogoColor size={150} />
        </div>
        <div className="flex flex-col items-center w-full">
          {listSection.map(
            (section: any, indexF: number) =>
              section.type.name === formState?.resultType && (
                <div key={indexF} className="flex justify-between mt-4 w-full">
                  <div>
                    <h1 className="text-4xl font-bold mb-5">
                      Vous êtes{" "}
                      <span className="text-meltrip-secondary">
                        {section.type.title}
                      </span>
                    </h1>
                    <p className="w-[80vh] text-xl">{section.type.describe}</p>
                    <span className="flex justify-center items-cent w-full">
                      {section.type.picture}
                    </span>
                  </div>
                  <div>
                    {section.section.map((item: any, index: number) => (
                      <ul key={index} className="mb-5">
                        <h1 className="text-4xl uppercase font-bold mx-5 mb-5">
                          {item.title}
                        </h1>
                        {item.list.map((subitem: any, index: any) => (
                          <li
                            key={index}
                            className="ml-5 mt-2 text-xl font-light list-disc"
                          >
                            {subitem}
                          </li>
                        ))}
                      </ul>
                    ))}
                  </div>
                </div>
              )
          )}
        </div>
      </div>
      <div>
        <p className="text-xl mt-5">
          Vous nêtes pas d’accord avec votre résultat, dites-nous ce que qui
          vous chagrine !
        </p>
        <textarea
          className="bg-[#448B7B1A] mt-10 px-2 py-2 h-72 rounded w-full"
          name="retour"
          onChange={(e) =>
            setFormUpdateState({ ...formUpdateState, retour: e.target.value })
          }
          disabled={false}
          required={true}
        />
        <p className="text-xl mt-5">
          Si vous avez des informations en plus à nous donner, n’hésitez pas
          (ex: régime alimentaire, votre attrait pour le sport ou encore le
          prénom de votre animal de compagnie ....)
        </p>
        <textarea
          className="bg-[#448B7B1A] mt-10 px-2 py-2 h-72 rounded w-full"
          name="describe"
          onChange={(e) =>
            setFormUpdateState({ ...formUpdateState, infos: e.target.value })
          }
          disabled={false}
          required={true}
        />
      </div>
      <div className="flex justify-center">
        <button
          className="text-xl rounded text-white m-10 py-3 px-[20vh] hover:cursor-pointer hover:bg-[#448B7B] hover:text-white bg-[#186E7A]"
          onClick={() => handleUpdateMembers()}
        >
          ENVOYER À MELTRIP
        </button>
      </div>
    </div>
  )
}

export default ResultCard
