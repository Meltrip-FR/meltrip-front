import { convertDate } from "@/components/utils/convertDate";
import Link from "next/link";

const FinishCard = ({ seminarData }: any) => {
  return (
    <div className="flex flex-wrap">
      {seminarData?.map((seminar: any, index: any) => {
        console.log({ seminar });
        return (
          <Link
            href={`/user/seminar/infos/${seminar.id}`}
            className="w-1/4 ml-2"
            key={index}
            passHref
          >
            <div className="bg-blue-50 p-5">
              <h1>Nombre de membre: {seminar.adultNumber}</h1>
              <h3 className="text-xl  font-bold">
                {seminar?.startDate
                  ? convertDate(seminar?.startDate)
                  : seminar?.departurePeriod}{" "}
                &{" "}
                {seminar?.endDate
                  ? convertDate(seminar?.endDate)
                  : seminar?.approximateDuration}
              </h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default FinishCard;
