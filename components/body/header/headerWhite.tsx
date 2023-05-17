import { useRouter } from "next/router"
import { Fragment, useState } from "react"
import { UserBadge } from "./userBadge"
import { useAppSelector } from "@/redux/hooks"
// Icons
import LogoColor from "@/components/assets/icons/logoColor"

const Header = () => {
  const router = useRouter()
  const { auth } = useAppSelector((state) => state)

  return (
    <div className="w-full font-body font-poppins">
      <div className="flex items-center justify-between">
        <div className="pl-5" onClick={() => router.push("/")}>
          <LogoColor size={100} color={"white"} />
        </div>
        <div className="grid grid-flow-col auto-cols-max gap-20 text-base justify-center items-center text-left uppercase">
          <h5 className="cursor-pointer" onClick={() => router.push("/")}>
            ACCUEIL
          </h5>
          <h5 className="cursor-pointer" onClick={() => router.push("/teams")}>
            NOTRE AGENCE
          </h5>
          <h5
            className="cursor-pointer"
            onClick={() => router.push("/templates")}
          >
            Séminaire prêt à l{"'"}emploi
          </h5>
          {auth.login && (
            <h5
              className="cursor-pointer"
              onClick={() => router.push("/user/seminar")}
            >
              SÉMINAIRES
            </h5>
          )}
          <h5 className="cursor-pointer" onClick={() => router.push("/blog")}>
            BLOG
          </h5>
          <h5 className="cursor-pointer" onClick={() => router.push("/faq")}>
            FAQ
          </h5>
          <h5
            className="cursor-pointer"
            onClick={() => router.push("/contact")}
          >
            CONTACT
          </h5>
        </div>
        <div className="flex items-center justify-center text-base uppercase">
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
                    <span className="w-1 h-8 pt-1 bg-black" />
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
      </div>
    </div>
  )
}

export default Header
