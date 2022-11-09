import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout } from "@/redux/slices/auth.slice";

// Icons
import Logo from "@/components/assets/icons/logo";
import { UserBadge } from "./userBadge";
import Menu from "@/components/assets/icons/menu";

const WebHeader = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { auth } = useAppSelector((state) => state);

  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div className="w-full bg-meltrip-primary bg-opacity-[17%] font-body font-poppins">
      <div className="flex px-5 items-center justify-between md:grid md:grid-cols-3">
        <div className="" onClick={() => router.push("/")}>
          <Logo size={100} color={"white"} />
        </div>
        <div className="hidden md:grid md:grid-flow-col md:auto-cols-max md:gap-20 text-base justify-center items-center text-left text-white uppercase">
          <h5 className="cursor-pointer" onClick={() => router.push("/teams")}>
            NOTRE AGENCE
          </h5>
          {auth.login && (
            <h5 className="cursor-pointer" onClick={() => router.push("/")}>
              SÉMINAIRES
            </h5>
          )}
          <h5 className="cursor-pointer" onClick={() => router.push("/blog")}>
            BLOG
          </h5>
          <h5
            className="cursor-pointer"
            onClick={() => router.push("/contact")}
          >
            CONTACT
          </h5>
        </div>
        <div className="hidden md:flex md:items-center md:justify-center text-base text-white uppercase">
          <div className="flex flex-row align-center items-center justify-between w-full">
            <div className="block lg:hidden ml-6" />
            <div className="relative z-20 flex flex-col justify-end h-full px-3 md:w-full">
              <div className="relative p-1 flex items-center w-full space-x-4 justify-end">
                {!auth.login ? (
                  <Fragment>
                    <span
                      className="uppercase cursor-pointer"
                      onClick={() => router.push("/auth/signin")}
                    >
                      Se Connecter
                    </span>
                    <span className="w-1 h-8 pt-1 bg-white" />
                    <span
                      className="uppercase cursor-pointer"
                      onClick={() => router.push("/auth/signup")}
                    >
                      Inscription
                    </span>
                  </Fragment>
                ) : (
                  <UserBadge />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden" onClick={() => setOpenDrawer(!openDrawer)}>
          <Menu size={50} />
        </div>
      </div>
    </div>
  );
};

export default WebHeader;
