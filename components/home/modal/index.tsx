import { useRouter } from "next/router";
import { useAppSelector } from "@/redux/hooks";

const Modal = ({ type }: any) => {
  const router = useRouter();
  const { auth } = useAppSelector((state) => state);

  return (
    <>
      {type === "first" ? (
        <button
          className="bg-meltrip-secondary text-white hover:bg-meltrip-secondary text-xl font-bold uppercase px-14 py-5 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() =>
            !auth.login
              ? router.push("/auth/seminar/signup")
              : router.push("/seminar/create")
          }
        >
          CRÉONS VOTRE SÉMINAIRE
        </button>
      ) : (
        <button
          className="bg-meltrip-primary text-white hover:bg-[#154c53] font-bold uppercase text-sm px-20 py-4 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() =>
            !auth.login
              ? router.push("/auth/seminar/signup")
              : router.push("/seminar/create")
          }
        >
          ON EST PARTI ?
        </button>
      )}
    </>
  );
};

export default Modal;
