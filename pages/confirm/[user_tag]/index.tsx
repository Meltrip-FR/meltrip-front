import { useAppDispatch } from "@/redux/hooks";
import { login, logout } from "@/redux/slices/auth.slice";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const confirmEmail = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    setLoading(true);
    const userTag = router.query.user_tag;

    if (userTag) {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/user/${userTag}/tag`
      );
      if (data.confirmEmail === null) {
        await axios
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
  }, [router.query.user_tag]);

  return <h1>{loading && "Loading..."}</h1>;
};

export default confirmEmail;
