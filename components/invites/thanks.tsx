import Link from "next/link"
import LogoColor from "../assets/icons/logoColor"
import Love from "../assets/icons/love"

const ThanksCard = () => {
  return (
    <div className="bg-base-100 flex flex-col justify-center">
      <div className="justify-center flex">
        <LogoColor size={100} />
      </div>
      <p className="text-[#263238] text-justify flex justify-center px-12">
        Félicitations! Vous étes bien inscrit au séminaire.
      </p>
      <div className="justify-center flex">
        <Love size={400} />
      </div>

      <div className="card-body items-center text-center">
        <h2 className="card-title text-[#CE5729]">À bientôt !</h2>
        <p className="card-title text-[#263238]">L’équipe Meltrip</p>
        <div className="card-actions mt-5">
          <Link
            href="/"
            className="p-2 rounded text-white bg-meltrip-primary hover:bg-meltrip-ternary"
          >
            Au revoir
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ThanksCard
