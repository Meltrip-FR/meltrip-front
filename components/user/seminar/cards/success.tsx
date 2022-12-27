import Link from "next/link";

const SuccessCard = ({ seminarData }: any) => {
  return seminarData?.map((seminar: any, index: any) => {
    return (
      <Link href={`/user/seminar/infos/${seminar.id}`} key={index} passHref>
        <h1>lalala {seminar.id}</h1>
      </Link>
    );
  });
};

export default SuccessCard;
