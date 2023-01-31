import { useRouter } from "next/router";
import { useEffect } from "react";
import store from "@/redux/store";
import Layout from "pages";
import QuotePDF from "@/components/user/seminar/infos/choicePDF";

const QuotePDFPage = () => {
  let { auth } = store.getState();
  const router = useRouter();

  useEffect(() => {
    if (auth.login === false) {
      router.push("/");
    }
  }, [auth.login, router]);

  return (
    <Layout>
      <QuotePDF />
    </Layout>
  );
};

export default QuotePDFPage;
