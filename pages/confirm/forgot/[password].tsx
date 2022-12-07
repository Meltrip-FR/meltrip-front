import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const confirm = () => {
  const router = useRouter();

  const [id, setId] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [requestMessage, setRequestMessage] = useState<string>("");

  const loadData = async () => {
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
  };
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
  }, [router.query]);

  return (
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
  );
};

export default confirm;
