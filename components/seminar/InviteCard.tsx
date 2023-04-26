import InviteLink from "../assets/icons/inputLink";

const InviteCard = () => {
  return (
    <div className="flex flex-col">
      <p className="text-justify">
        Merci pour ces informations, nos Meltrippers sont en train de vous
        concocté le séminaire qui vous convient.
      </p>
      <br />
      <p className="text-justify">
        Vous recevrez un mail de confirmation de votre inscription
      </p>
      <h5 className="font-bold text-xl my-5">Test de personnalité</h5>
      <p className="text-justify">
        Afin de mieux personnaliser votre séminaire, voici{" "}
        <b>un quiz de personnalité*</b> à envoyé aux participants du séminaire.
        <br /> Les réponses permettront à nos Meltrippers d’analyser la
        personnalité de vos collaborateurs, inclu vous-même si vous y
        participez.
        <br /> <br /> <span className="underline">À noter :</span> nous vous
        soumettrons nos propositions de séminaires lorsque le nombre de
        participants aura été atteint <b>65%</b>.
      </p>
      <div className="mt-16 relative cursor-pointer">
        <div className="">
          <InviteLink width={700} />
        </div>
        <div className="absolute top-[5.5vh] left-[20vh]">
          <p>lala</p>
        </div>
      </div>
      <p className="font-bold text-xl text-center mt-16">
        *vous pouvez retrouvez le lien dans votre espace
      </p>
      <div className="flex justify-center w-full mt-16">
        <a
          href=""
          className="px-6 py-2 text-center text-white rounded bg-meltrip-primary"
        >
          Allez dans mon espace
        </a>
      </div>
    </div>
  );
};

export default InviteCard;
