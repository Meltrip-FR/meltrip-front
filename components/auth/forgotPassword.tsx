import axios from "axios";
import { Fragment, useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("");
  const [requestMessage, setRequestMessage] = useState<string>("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/forgotpassword/${email}`
    );
    setRequestMessage(
      "Un email contenant les instructions pour créer un nouveau mot de passe vous a été envoyé."
    );
  };

  return (
    <div>
      <h1>Change password</h1>
      <Fragment>
        {requestMessage && <span>{requestMessage}</span>}
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </Fragment>
    </div>
  );
};

export default ForgotPassword;
