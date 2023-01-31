import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "pages";
import store from "@/redux/store";
import Payments from "@/components/user/payment";

const PaymentPage = () => {
  let { auth } = store.getState();
  const router = useRouter();

  useEffect(() => {
    if (auth.login === false) {
      router.push("/");
    }
  }, [auth.login, router]);
  return (
    <Layout>
      <Payments />
    </Layout>
  );
};

export default PaymentPage;
