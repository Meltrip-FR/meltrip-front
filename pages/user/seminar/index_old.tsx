import { useEffect } from "react";
import { useRouter } from "next/router";
import SeminarList from "@/components/user/seminar/index_new_old";
import store from "@/redux/store";
import Layout from "pages";

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
