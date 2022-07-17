import Image from "next/image";

const Cards = ({
  img,
  title,
  describe,
  text,
  check,
  setCheck,
}: {
  img: string;
  title: string;
  describe: string;
  text: string;
  check: any;
  setCheck: any;
}) => {
  return (
    <div className="bg-gray-100 flex flex-col align-center items-center p-5 ">
      <Image src={img} alt="picture" className="h-auto w-32" />
      <h1 className="text-xl text-left">{title}</h1>
      <p className="text-lg text-left">{describe}</p>
      <p className="text-sm text-justify">{text}</p>
      <div
        className={`rounded-full w-5 h-5 mt-10 ${
          check ? "bg-[#154c53]" : "bg-white border-2 border-[#154c53]"
        } hover:bg-[#154c53]`}
        onClick={() => setCheck(!check)}
      />
    </div>
  );
};

export default Cards;
