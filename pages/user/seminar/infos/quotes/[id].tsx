import QuotePDF from "@/components/user/seminar/infos/choicePDF";
import store from "@/redux/store";
import { useRouter } from "next/router";
import Layout from "pages";
import { useEffect } from "react";

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
