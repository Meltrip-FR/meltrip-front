import { useRouter } from "next/router"
import { AiOutlineArrowRight } from "react-icons/ai"
import Grid1 from "@/components/assets/mapfeed/grid1.png"
import Grid2 from "@/components/assets/mapfeed/grid2.png"
import Grid3 from "@/components/assets/mapfeed/grid3.png"
import Grid4 from "@/components/assets/mapfeed/grid4.png"
import Grid5 from "@/components/assets/mapfeed/grid5.png"
import Grid6 from "@/components/assets/mapfeed/grid6.png"
import Grid7 from "@/components/assets/mapfeed/grid7.png"

let grids = [
  {
    type: "PHOTO",
    title: "UN ROADTRIP À BORDEAUX",
    image: Grid1.src
  },

  {
    type: "PHOTO",
    title: "un roadtrip à ANGERS",
    image: Grid2.src
  },
  {
    type: "PHOTO",
    title: "un Tour à NICE",
    image: Grid3.src
  },
  {
    type: "PHOTO",
    title: "un Passage à LILLE",
    image: Grid4.src
  },

  {
    type: "PHOTO",
    title: "un Séjour à PARIS",
    image: Grid5.src
  },
  {
    type: "PHOTO",
    title: "un roadtrip à bordeaux",
    image: Grid6.src
  },
  {
    type: "PHOTO",
    title: "un roadtrip à TOULOUSE",
    image: Grid7.src
  }
]

const returnImage = (pos: number) => {
  return (
    <div className="w-full 2xl:w-[200px] xl:w-[300px]  relative">
      <img className="w-full" alt={grids[pos].title} src={grids[pos].image} />
      <div className="flex w-full justify-between items-center px-3 2xl:w-[250px] xl:w-[300px] absolute bottom-5 left-0">
        <p className="font-bold w-full text-[3vw] text-white xl:text-[1vw] ">
          {grids[pos].title.toUpperCase()}
        </p>
        <AiOutlineArrowRight className="border-2 border-white rounded-full text-white  w-[3vw] h-[5vh]" />
      </div>
    </div>
  )
}

const SeminarStatic = () => {
  const router = useRouter()

  return (
    <div className="flex mt-32 mb-64 items-center gap-10 w-full relative xl:flex-col xl:h-[900px]  ">
      <div className="flex items-start px-5 xl:px-0 gap-[5vw] xl:flex-row xl:justify-between xl:gap-5">
        {returnImage(0)}
        <div className="flex flex-col justify-start gap-[40px] w-full xl:w-[600px]">
          <p className="font-bold text-[5vw] text-[#CE5729] xl:text-left xl:text-[40px] 2xl:text-[35px]">
            Vous voulez un séminaire prêt à l’emploi ?
          </p>
          <p className="font-medium text-[3vw] text-[#757575] xl:text-[20px] 2xl:text-[15px] ">
            Êtes-vous pressé(e) de réaliser votre séminaire ou souhaitez-vous
            simplement faire des économies ? Pas de panique ! Chez Meltrip, nous
            avons la solution parfaite pour vous : les séminaires pré-conçus
            {'"'}Meltrip Now{'"'}. Plus besoin d{"'"}attendre, en moins de 72
            heures, vous disposerez de tous les éléments nécessaires pour
            organiser votre séminaire.
          </p>
          <button
            onClick={() => {
              router.push("/templates")
            }}
            className="flex underline underline-offset-1 text-left text-medium text-[3vw] text-[#448B7B] xl:text-[19px] 2xl:text-[14px] xl:z-10  "
          >
            Voir plus de Meltrip Now
          </button>
        </div>
        <div className="hidden xl:block">{returnImage(1)}</div>
      </div>
      <div className="hidden xl:flex gap-3 items-center absolute xl:pt-[400px] 2xl:pt-[350px] 3xl:[0vh]">
        {returnImage(2)}
        <div className="flex flex-col gap-10">
          {returnImage(3)}
          {returnImage(6)}
        </div>
        {returnImage(4)}
        {returnImage(5)}
      </div>
    </div>
  )
}

export default SeminarStatic
