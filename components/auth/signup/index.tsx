import { useState } from "react";

import FirstSignup from "@/components/auth/signup/FirstSignup";

const SignupPage = () => {
  const [nextPage, setNextPage] = useState(false);
  const [formState, setFormState] = useState({
    adulteNumber: 0,
    adosNumber: 0,
    dateActive: true,
    startDate: "",
    endDate: "",
  });

  const onFormChange = (e: any) => {
    if (e.target) {
      setFormState({
        ...formState,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <div>
      <FirstSignup
        formState={formState}
        setFormState={setFormState}
        onFormChange={onFormChange}
      />
    </div>
  );
};

export default SignupPage;
