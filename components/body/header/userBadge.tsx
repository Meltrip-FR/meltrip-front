import { Fragment, useState } from "react";
import { useRouter } from "next/router";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout } from "@/redux/slices/auth.slice";

import ArrowOut from "@/components/assets/icons/arrowOut";
import ChevronUp from "@/components/assets/icons/chevronUp";
import ChevronDown from "@/components/assets/icons/chevronDown";

export const UserBadge = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const { auth } = useAppSelector((state) => state);

  const signOut = () => {
    dispatch(logout());
    router.push("/");
  };

  return (
    <Fragment>
      <div className="block relative">
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
          className="flex items-center text-meltrip-primary text-lg tracking-wider pr-5 uppercase"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <span>{auth.user.firstname + " " + auth.user.lastname}</span>
          {openMenu ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        {openMenu && (
          <Fragment>
            <div className="origin-top-right absolute right-0 mt-3 w-56 rounded-md shadow-lg bg-gray-100">
              <div className="py-1 cursor-pointer">
                <div
                  onClick={() => router.push("/user/dashboard")}
                  className="flex items-center justify-start px-4 py-2 text-md text-meltrip-secondary hover:bg-gray-200"
                >
                  <span className="ml-2">
                    <span>Dashboard</span>
                  </span>
                </div>
                <div
                  onClick={() => signOut()}
                  className="flex items-center justify-start px-4 py-2 text-md text-meltrip-secondary hover:bg-gray-200"
                >
                  <ArrowOut size={15} />
                  <span className="ml-2">
                    <span>Logout</span>
                  </span>
                </div>
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}
