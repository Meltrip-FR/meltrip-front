import Partner from "@/components/user/partner";
import store from "@/redux/store";
import { useRouter } from "next/router";
import Layout from "pages";
import { useEffect } from "react";

const PartnerPage = () => {
  let { auth } = store.getState();
  const router = useRouter();

  useEffect(() => {
    if (auth.login === false) {
      router.push("/");
    }
  }, [auth.login]);

  return (
    <Layout>
      <Partner />
    </Layout>
  );
};

export default PartnerPage;
