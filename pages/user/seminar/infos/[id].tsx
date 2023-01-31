import { useEffect } from "react";
import { useRouter } from "next/router";
import store from "@/redux/store";
import Layout from "pages";
import SeminarInfos from "@/components/user/seminar/infos/index";

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
