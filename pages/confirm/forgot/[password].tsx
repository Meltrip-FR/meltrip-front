import axios from "axios";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import Home from "pages";

const ConfirmForgotPasswordPage = () => {
  const router = useRouter();

  const [id, setId] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [requestMessage, setRequestMessage] = useState<string>("");

  const loadData = useCallback(async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/user/${router.query.usertag}/tag`
    );
    const data = await res.data;

    if (data.email) {
      await axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/signin`, {
          email: data.email,
          password: router.query.password,
        })
        .then((res) => {
          if (res.data.id) {
            setId(res.data.id);
            setEmail(res.data.email);
            return;
          }
        });
    }
  }, [router.query.password, router.query.usertag]);

  console.log("ok");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await axios
      .put(`${process.env.NEXT_PUBLIC_API_URL}/user/${id}`, {
        password,
      })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error) => setRequestMessage(error.response.data.message));
  };

  useEffect(() => {
    loadData().catch((e) => console.error(e));
  }, [loadData, router.query]);

  return (
    <Home>
      <div>
        <h1>Change password your password ({email})</h1>
        {requestMessage && <span>{requestMessage}</span>}
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </div>
    </Home>
  );
};

export default ConfirmForgotPasswordPage;
