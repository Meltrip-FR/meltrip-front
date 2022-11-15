import { useState } from "react";

import FirstSignup from "@/components/auth/signup/FirstSignup";

const SignupPage = () => {
  const [nextPage, setNextPage] = useState(false);
  const [formState, setFormState] = useState({
    adulteNumber: 0,
    adosNumber: 0,
    knowDate: true,
    departurePeriod: "",
    approximateDuration: "",
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

  console.log(formState);

  return (
    <div className="w-full bg-gray-100">
      <FirstSignup
        formState={formState}
        setFormState={setFormState}
        nextPage={nextPage}
        setNextPage={setNextPage}
        onFormChange={onFormChange}
      />
    </div>
  );
};

export default SignupPage;
