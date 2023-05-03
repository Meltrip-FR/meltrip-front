import { useRouter } from "next/router"
import { Fragment, useState } from "react"
import { UserBadge } from "./userBadge"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { logout } from "@/redux/slices/auth.slice"
import ArrowOut from "@/components/assets/icons/arrowOut"
// Icons
import ChevronDown from "@/components/assets/icons/chevronDown"
import ChevronUp from "@/components/assets/icons/chevronUp"
import Logo from "@/components/assets/icons/logo"

const WebHeader = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const { auth } = useAppSelector((state) => state)

  const signOut = () => {
    dispatch(logout())
    router.push("/")
  }

  return (
    <div className="bg-meltrip-primary bg-opacity-[17%] font-body font-poppins">
      <div className="grid grid-cols-3">
        <div className="md:pl-5" onClick={() => router.push("/")}>
          <Logo size={100} color={"white"} />
        </div>
        <div className="grid grid-flow-col auto-cols-max gap-20 text-base justify-center items-center text-left text-white uppercase">
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
        <div className="flex items-center justify-center text-base text-meltrip-textW uppercase">
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
      </div>
    </div>
  )
}

export default WebHeader
