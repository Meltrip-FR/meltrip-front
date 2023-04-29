import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Eyes from "@/components/assets/icons/eyes";
import LockClose from "@/components/assets/icons/lockClose";
import BreadCrumbs from "@/components/utils/breadCrumbs";
import { useAppSelector } from "@/redux/hooks";
import { FormItem } from "@/components/utils/formItem";
import Accessibility from "@/components/user/organization";

const Organization = () => {
  const { auth } = useAppSelector((state) => state);
  const [isUpdateEmail, setIsUpdateEmail] = useState<boolean>(false);
  const [isUpdatePhone, setIsUpdatePhone] = useState<boolean>(false);

  const [formState, setFormState] = useState<any>();
  const [seminarList, setListSeminar] = useState<any>();
  const onFormChange = (e: any) => {
    if (e.target) {
      setFormState({
        ...formState,
        [e.target.name]: e.target.value,
      });
    }
  };

  const loadData = useCallback(async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/organization/${auth?.user?.idOrganization}`
      );
      setFormState(res.data);
    } catch (error: any) {
      error?.response?.data?.message &&
        console.error(error.response.data.message);
    }
  }, [auth?.user?.idOrganization]);

  useEffect(() => {
    loadData();
  }, [auth, loadData]);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-14 mx-auto">
        <div className="flex justify-between mb-4">
          <div className="flex items-center mb-3 mt-3">
            <BreadCrumbs url="/" name="home" active={false} />
            <BreadCrumbs url="/user/dashboard" name="Compte" active={true} />
            <BreadCrumbs url="/" name="Information entreprise" active={false} />
          </div>
        </div>
        <div className="flex flex-wrap w-full mb-5 text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Accessibility
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Organization;
