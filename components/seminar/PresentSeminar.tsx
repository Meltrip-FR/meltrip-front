import { useRouter } from "next/router"
import { Fragment } from "react"

const PresentSeminar = ({ setNextPage }: any) => {
  const router = useRouter()

  return (
    <Fragment>
      {/* Header picture */}
      <h1 className="text-4xl font-poppins text-center font-bold">
        Comment ça marche ?
      </h1>
      <p className="mt-[48px] text-[20px] leading-7 font-poppins text-center">
        Nous avons besoin de quelques informations pour vous concocter le
        meilleur séminaire.
      </p>
      <div className="flex justify-center mt-20">
        <iframe
          width="800"
          height="415"
          src="https://www.youtube.com/watch?v=WgKxdeAeh8E"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      {/* Paginate */}
      {/* <div className="w-full flex justify-between items-center mt-10">
        <div
          onClick={() => router.back()}
          className="text-meltrip-primary cursor-pointer mt-[48px] text-[20px] font-semibold leading-7 font-poppins"
        >
          {"< "} Précédent
        </div> */}
      <div className="flex justify-center">
        <p className="font-bold mt-16">Tout est clair ?</p>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => setNextPage(1)}
          className="bg-meltrip-primary p-2 rounded text-white mt-[48px] text-[20px] font-semibold leading-7 font-poppins"
        >
          Étape suivante{" "}
        </button>
        {/* </div> */}
      </div>
    </Fragment>
  )
}

export default PresentSeminar
