import SeminarInfos from "@/components/user/seminar/infos/index";
import store from "@/redux/store";
import { useRouter } from "next/router";
import Layout from "pages";
import { useEffect } from "react";

const SeminarInfosPage = () => {
  let { auth } = store.getState();
  const router = useRouter();

  useEffect(() => {
    if (auth.login === false) {
      router.push("/");
    }
  }, [auth.login, router]);

  return (
    <Layout>
      <SeminarInfos />
    </Layout>
  );
};

export default SeminarInfosPage;
