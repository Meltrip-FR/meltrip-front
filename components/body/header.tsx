// import { Fragment, useState } from "react";

// import ChevronDown from "@components/assets/icons/chevronDown";
// import ChevronUp from "@components/assets/icons/chevronUp";
import Logo from "@components/assets/icons/logo";

export const Header = () => {
  //const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <div className="w-full bg-meltrip-primary bg-opacity-[17%] font-body font-poppins">
      <div className="grid grid-cols-3">
        <div className="pl-5">
          <Logo size={100} color={"white"} />
        </div>
        <div className="grid grid-flow-col auto-cols-max gap-20 text-base justify-center items-center text-left text-meltrip-textW uppercase">
          <h5 className="cursor-pointer">NOTRE AGENCE</h5>
          <h5 className="cursor-pointer">SÉMINAIRES</h5>
          <h5 className="cursor-pointer">BLOG</h5>
          <h5 className="cursor-pointer">CONTACT</h5>
        </div>
        <div className="flex items-center justify-center text-base text-meltrip-textW uppercase">
          <div className="flex flex-row align-center items-center justify-between w-full">
            <div className="block lg:hidden ml-6" />
            <div className="relative z-20 flex flex-col justify-end h-full px-3 md:w-full">
              <div className="relative p-1 flex items-center w-full space-x-4 justify-end">
                <span className="uppercase">connexion</span>
                <span className="w-1 h-8 pt-1 bg-white" />
                {/*<div className="block relative">
                  <img
                    referrerPolicy="no-referrer"
                    alt="profil"
                    src={
                      "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm"
                    }
                    className="mx-auto object-cover rounded-full h-10 w-10 "
                  />
                </div>
                <div className="relative inline-block text-left">
                  <button
                    className="flex items-center text-white text-lg tracking-wider pr-5 uppercase"
                    //onClick={() => setOpenMenu(!openMenu)}
                  >
                    <span>Mathieu</span>
                     {openMenu ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )} 
                  </button>
                </div> */}
                <span className="uppercase">inscription</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
