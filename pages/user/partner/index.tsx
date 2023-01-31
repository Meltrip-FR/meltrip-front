import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "pages";
import store from "@/redux/store";
import Partner from "@/components/user/partner";

const PartnerPage = () => {
  let { auth } = store.getState();
  const router = useRouter();

  useEffect(() => {
    if (auth.login === false) {
      router.push("/");
    }
  }, [auth.login, router]);

  return (
    <Layout>
      <Partner />
    </Layout>
  );
};

export default PartnerPage;
