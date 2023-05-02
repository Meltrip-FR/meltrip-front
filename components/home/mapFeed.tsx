import { useRef } from "react";
import Feed1 from "@/components/assets/mapfeed/feed1.png";
import Feed2 from "@/components/assets/mapfeed/feed2.png";
import Feed3 from "@/components/assets/mapfeed/feed3.png";
import Feed4 from "@/components/assets/mapfeed/feed4.png";
import Feed5 from "@/components/assets/mapfeed/feed5.png";
import Feed6 from "@/components/assets/mapfeed/feed6.png";
import Feed7 from "@/components/assets/mapfeed/feed7.png";

let feeds = [
  {
    side: "LEFT",
    image: Feed1.src,
    title: "Réaliser une demande d’organisation de séminaire",
    description:
      "Pour cela, il vous suffit de remplir les informations nécessaires (type de séminaire et de lieu, nombre de participants, etc.) et nous laisser un commentaire si vous avez une envie particulière",
  },
  {
    side: "LEFT",
    image: Feed2.src,
    title: "Réaliser un mini Quiz de personnalité",
    description:
      "Une fois votre demande effectué, il reste le test de personnalité à effectuer. Pour cela, vous n’aurez plus qu’à nous donner les adresses mails des participants et nous enverrons à tous les participants un test qu’ils/elles devront remplir. Ne vous inquiétez pas si vous êtes participants, il vous suffira de rentrer aussi votre adresse mail !",
  },
  {
    side: "RIGHT",
    image: Feed3.src,
    title: "Recevez un appel de votre interlocuteur.rice dédié.e",
    description:
      "Pour s’assurer que votre demande sera retranscrite à la perfection en séminaire, votre interlocuteur.rice (qui vous accompagnera de l’organisation à la fin du séminaire) vous appellera dans les 72h.",
  },
  {
    side: "RIGHT",
    image: Feed4.src,
    title: "Recevoir 2-3 propositions de séminaire",
    description:
      "Pour que votre séminaire soit une réussite, nous rechercherons les meilleurs logements, transports et activités qui permettront à tous les types de personnalités de profiter pleinement du séminaire tout en veillant à ce que tous les aspects de votre séminaire soient éco-responsables. Vous recevrez alors 2 à 3 propositions et vous n’aurez plus qu’à valider celle qui vous convient le mieux !",
  },
  {
    side: "LEFT",
    image: Feed5.src,
    title:
      "Recevez tous les éléments qui vous seront nécessaires pour votre séminaire",
    description:
      "De la check list de votre valise, à vos itinéraires, vous recevrez tous les éléments nécessaires à la réalisation.",
  },
  {
    side: "LEFT",
    image: Feed6.src,
    title: "Profitez de votre séminaire",
    description:
      "Pour cette étape, il vous reste jusqu’à suivre votre itinéraire, emporter vos billets de transport et à vivre le moment présent",
  },
  {
    side: "END",
    image: Feed7.src,
    title:
      "consultez les émissions carbones de vos séminaires et découvrez comment meltrip vous aide à les compenser grâce à ses partenaires",
    description:
      "Conscients de notre impact, nous voulons aussi vous aider en vous informant des émissions carbones que vous avez réalisées pendant ce séminaire. Pour que vous puissiez vous aussi agir, nous vous proposons notre partenaire qui vous permettront de les compenser en investissant dans la structure agricole d’un agriculteur (reconnu par l’État), tout en bénéficiant de récolte de ceux-ci.",
  },
];

const imageFeed = (image: any, index: number) => {
  return (
    <div className=" bg-no-repeat bg-center bg-cover relative">
      <img
        className="w-[50vw] md:w-[40vw] xl:w-[25vw]"
        alt="image"
        src={image}
      />
      <div className="absolute flex justify-center items-center rounded-full bg-[#448B7B] h-[50px] w-[50px]  top-[-20px] left-7 ">
        <p className="font-bold text-white text-[30px]">{index + 1}</p>
      </div>
    </div>
  );
};

const MapFeed = (): any => {
  const fadeRef = useRef<any>(null);
  let title = "font-bold text-2xl";
  let desc = "font-medium text-xl text-[#757575] ";

  const left = (feed: any, index: number) => {
    return (
      <div
        className="flex flex-col gap-[2vh] justify-end xl:flex-row"
        ref={fadeRef}
      >
        {imageFeed(feed.image, index)}
        <div className="flex flex-col gap-5 w-full xl:w-[30vw]">
          <p className={title}>{feed.title.toUpperCase()}</p>
          <p className={desc}>{feed.description}</p>
        </div>
      </div>
    );
  };
  const right = (feed: any, index: number) => {
    return (
      <div
        className="flex flex-col-reverse gap-[2vh] justify-start xl:flex-row"
        ref={fadeRef}
      >
        <div className="flex flex-col gap-5 w-full xl:w-[30vw]">
          <p className={title}>{feed.title.toUpperCase()}</p>
          <p className={desc}>{feed.description}</p>
        </div>
        {imageFeed(feed.image, index)}
      </div>
    );
  };
  const end = (feed: any, index: number) => {
    return (
      <div className="relative">
        <div className="flex flex-col-reverse gap-[2vh] justify-center xl:flex-row xl:pt-[10vh] ">
          <div className="flex flex-col gap-5 w-full xl:w-[30vw]">
            <p className={title}>{feed.title.toUpperCase()}</p>
            <p className={desc}>{feed.description}</p>
          </div>
          {imageFeed(feed.image, index)}
        </div>
      </div>
    );
  };

  return feeds.map((feed: any, index: number) => {
    switch (feed.side) {
      case "LEFT":
        return left(feed, index);
      case "RIGHT":
        return right(feed, index);
      case "END":
        return end(feed, index);
      default:
        break;
    }
  });
};

export default MapFeed;
