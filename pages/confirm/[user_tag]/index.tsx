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
      if (!data.confirmEmail) {
        await axios
          .put(`${process.env.NEXT_PUBLIC_API_URL}/user/${data.id}`, {
            confirmEmail: true,
          })
          .then(({ data }) => {
            dispatch(login({ login: true, ...data }));
            setLoading(false);
            router.push("/user/dashboard");
          })
          .catch((error) => console.error(error.response.data.message));
      } else {
        dispatch(logout());
        router.push("/");
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    loadData().catch((e) => console.error(e));
  }, [router.query]);

  return <h1>{loading && "Loading..."}</h1>;
};

export default confirmEmail;
