import { useAppDispatch } from "@/redux/hooks";
import { login, logout } from "@/redux/slices/auth.slice";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ConfirmEmailPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const userTag = router.query.usertag;

  const loadData = async () => {
    console.log("OK");
    setLoading(true);

    if (userTag) {
      console.log("USERTAG");
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/user/${userTag}/tag`
      );

      if (data.confirmEmail === null) {
        axios
          .put(`${process.env.NEXT_PUBLIC_API_URL}/user/confirm/${data.id}`, {
            confirmEmail: true,
          })
          .then(async (_res) => {
            delete data.createdAt;
            delete data.deletedAt;
            delete data.updatedAt;
            dispatch(
              login({
                login: true,
                user: { ...data, roles: ["user"] },
              })
            );
            setLoading(false);
            router.push("/user/dashboard");
          })
          .catch((error) => console.error(error.response.data.message));
      } else {
        dispatch(logout());
        setLoading(false);
        router.push("/");
      }
    }
  };

  useEffect(() => {
    loadData().catch((e) => console.error(e));
  }, [userTag]);

  return <h1>{loading && "Loading..."}</h1>;
};

export default ConfirmEmailPage;
