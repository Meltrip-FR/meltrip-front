import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
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
      <div className="bg-white shadow-md rounded-md p-4 mb-5 max-w-sm mx-auto">
        <h2 className="text-lg font-medium mb-4">Reset le mot de passe</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="new-password"
            >
              Nouveau mot de passe
            </label>
            <input
              className="border border-gray-300 rounded-md p-2 w-full"
              type="password"
              id="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-meltrip-primary hover:bg-meltrip-secondary text-white font-medium rounded-md px-4 py-2"
          >
            Nouveau mot de passe
          </button>
        </form>
      </div>
    </Home>
  );
};

export default ConfirmForgotPasswordPage;
