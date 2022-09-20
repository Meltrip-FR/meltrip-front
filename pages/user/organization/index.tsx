import Organization from "@/components/user/organization";
import store from "@/redux/store";
import { useRouter } from "next/router";
import Layout from "pages";
import { useEffect } from "react";

const OrganizationPage = () => {
  let { auth } = store.getState();
  const router = useRouter();

  useEffect(() => {
    if (auth.login === false) {
      router.push("/");
    }
  }, [auth.login]);

  return (
    <Layout>
      <Organization />
    </Layout>
  );
};

export default OrganizationPage;
