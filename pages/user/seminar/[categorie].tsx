import { useEffect } from "react";
import { useRouter } from "next/router";
import Success from "@/components/user/seminar/pages/success";
import Templates from "@/components/user/seminar/pages/templates";
import Waiting from "@/components/user/seminar/pages/waiting";
import store from "@/redux/store";
import Layout from "pages";

const SeminarCategoryPage = () => {
  let { auth } = store.getState();
  const router = useRouter();

  useEffect(() => {
    if (auth.login === false) {
      router.push("/");
    }
  }, [auth.login, router]);

  switch (router.query.categorie) {
    case "template":
      return (
        <Layout>
          <Templates />
        </Layout>
      );
    case "waiting":
      return (
        <Layout>
          <Waiting />
        </Layout>
      );
    case "success":
      return (
        <Layout>
          <Success />
        </Layout>
      );
  }
};

export default SeminarCategoryPage;
