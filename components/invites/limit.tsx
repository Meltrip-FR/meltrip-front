import Link from "next/link";
import LogoColor from "../assets/icons/logoColor";
import Love from "../assets/icons/love";

const LimitCard = () => {
  return (
    <div className="bg-base-100 flex flex-col justify-center">
      <div className="justify-center flex">
        <LogoColor size={100} />
      </div>
      <p className="text-[#263238] text-justify flex justify-center px-12">
        Votre entreprise à atteint la limite d{"'"}inscription pour le séminaire
      </p>
      <p className="text-[#263238] text-justify flex justify-center px-12">
        Merci de vous redirigez vers le membre qui organise le séminaire.
      </p>
      <div className="justify-center flex">
        <Love size={500} />
      </div>

      <div className="card-body items-center text-center">
        <h2 className="card-title text-[#CE5729]">À bientôt !</h2>
        <p className="card-title text-[#263238]">L’équipe Meltrip</p>
        <div className="card-actions mt-5">
          <Link
            href="/"
            className="p-2 rounded text-white bg-meltrip-primary hover:bg-meltrip-ternary"
          >
            Retour
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LimitCard;
