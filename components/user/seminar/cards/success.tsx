import Link from "next/link"
import { convertDate } from "@/components/utils/convertDate"

const SuccessCard = ({ seminarData }: any) => {
  console.log(seminarData)
  return (
    <div className="flex flex-wrap">
      {seminarData?.map((seminar: any, index: any) => (
        <Link
          href={`/user/seminar/infos/${seminar.id}`}
          className="w-1/4 ml-2"
          key={index}
          passHref
        >
          <div className="bg-meltrip-primary text-white rounded p-5">
            <h1 className="text-3xl">
              {seminar?.startDate
                ? convertDate(seminar?.startDate)
                : seminar?.departurePeriod}{" "}
              &{" "}
              {seminar?.endDate
                ? convertDate(seminar?.endDate)
                : seminar?.approximateDuration}
            </h1>
            <h1 className="text-xl ">
              {seminar.budgetPerPerson}€ par personne(s)
            </h1>
            <h3 className=" font-bold">
              Direction: {seminar?.destinationType}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default SuccessCard
