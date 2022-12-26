import Link from "next/link";
import LogoColor from "../assets/icons/logoColor";
import Love from "../assets/icons/love";

const SuccessCard = () => {
  return (
    <div className="bg-base-100">
      <div className="justify-center flex">
        <LogoColor size={100} />
      </div>
      <p className="text-[#263238] text-justify px-12">
        Nous avons toutes les infos dont nous avons besoins pour vous concocter
        votre escapade.
      </p>
      <p className="text-[#263238] text-justify px-12">
        Merci pour votre demande de séminaires nous vous recontactons dans 72
        heures.
      </p>
      <div className="justify-center flex">
        <Love size={500} />
      </div>

      <div className="card-body items-center text-center">
        <h2 className="card-title text-[#CE5729]">À bientôt !</h2>
        <p className="card-title text-[#263238]">L’équipe Meltrip</p>
        <div className="card-actions mt-5">
          <Link
            href="/user/seminar/list"
            className="p-2 rounded text-white bg-meltrip-primary hover:bg-meltrip-ternary"
          >
            Mes séminaires
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessCard;
