import { useAppDispatch } from "@/redux/hooks";
import { login, logout } from "@/redux/slices/auth.slice";
import axios from "axios";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import Home from "pages";

const ConfirmEmailPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const userTag = router.query.usertag;

  const loadData = useCallback(async () => {
    setLoading(true);

    if (userTag) {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/user/${userTag}/tag`
      );

      if (data.confirmEmail !== null) {
        axios
          .put(`${process.env.NEXT_PUBLIC_API_URL}/user/confirm/${data.id}`, {
            confirmEmail: true,
          })
          .then(async (_res) => {
            delete data.createdAt;
            delete data.deletedAt;
            delete data.updatedAt;
            delete data.password;
            delete data.id;
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
  }, [dispatch, userTag]);

  useEffect(() => {
    loadData().catch((e) => console.error(e));
  }, [loadData, userTag]);

  return (
    <Home>
      <h1>Loading: {loading && "Loading..."}</h1>
    </Home>
  );
};

export default ConfirmEmailPage;
