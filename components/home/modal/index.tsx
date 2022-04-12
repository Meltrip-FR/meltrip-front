import { useState } from "react";
import Preferences from "./preferences";
import Image from "next/image";

// import Cards from "./items/card";
import Main from "./main";
import Auth from "./auth";
const Modal = ({ type, showModal, setShowModal }: any) => {
  const [userUid, setUserUid] = useState("");
  const [step, setStep] = useState(0);

  return (
    <>
      {type === "first" ? (
        <button
          className="bg-[#C05E37] text-white hover:bg-[#9e573b] font-bold uppercase text-sm px-8 py-4 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          CRÉONS TON VOYAGE
        </button>
      ) : (
        <button
          onClick={() => setShowModal(true)}
          className="bg-[#186E7A] text-white hover:bg-[#154c53] font-bold uppercase text-sm px-20 py-4 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          ON EST PARTI ?
        </button>
      )}

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative min-w-[50%] w-[50%] max-w-3xl">
              <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-center align-center pl-[41.5%] p-5">
                  <Image
                    src="/logo.webp"
                    alt="logo"
                    width="128px"
                    height="73"
                  />
                  <div
                    className="cursor-pointer ml-auto bg-transparent border-0 text-[#1D6E7B] float-right leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-[#1D6E7B] h-10 w-10 mt-2 text-3xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </div>
                </div>

                {step === 0 ? (
                  <Main setStep={setStep} />
                ) : step === 1 ? (
                  <Auth setStep={setStep} setUserUid={setUserUid} />
                ) : (
                  <Preferences
                    setStep={setStep}
                    setShowModal={setShowModal}
                    userUid={userUid}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
