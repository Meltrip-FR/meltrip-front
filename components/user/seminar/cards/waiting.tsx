import { convertDate } from "@/components/utils/convertDate";
import Link from "next/link";

const WaitingCard = ({ seminarData }: any) => {
  return (
    <div className="flex flex-wrap">
      {seminarData?.map((seminar: any, index: any) => (
        <Link
          href={`/user/seminar/infos/${seminar.id}`}
          className="w-1/4 ml-2"
          key={index}
          passHref
        >
          <div className="bg-yellow-50 p-5">
            <h1>Nombre de membre: {seminar.adultNumber}</h1>
            <h3 className="text-xl  font-bold">
              {convertDate(seminar?.startDate)} &{" "}
              {convertDate(seminar?.endDate)}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default WaitingCard;
