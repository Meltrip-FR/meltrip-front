import SeminarList from "@/components/user/seminar/index_old";
import store from "@/redux/store";
import { useRouter } from "next/router";
import Layout from "pages";
import { useEffect } from "react";

const SeminarListPage = () => {
  let { auth } = store.getState();
  const router = useRouter();

  useEffect(() => {
    if (auth.login === false) {
      router.push("/");
    }
  }, [auth.login, router]);

  return (
    <Layout>
      <SeminarList />
    </Layout>
  );
};

export default SeminarListPage;
