import { useState } from "react";

import FirstSignup from "@/components/auth/signup/FirstSignup";
import SecondSignup from "@/components/auth/signup/SecondSignup";
import ThreeSignup from "./ThreeSignup";

const SignupPage = () => {
  const [nextPage, setNextPage] = useState(0);
  const [formState, setFormState] = useState({
    adulteNumber: 0,
    adosNumber: 0,
    knowDate: true,
    departurePeriod: "",
    approximateDuration: "",
    startDate: "",
    endDate: "",
    budgetPerPerson: 0,
    describeProject: "",
    accompaniedSuggest: "",
    civility: "",
    nameManager: "",
    billingManager: true,
    emailFinancial: "",
    numberFinancial: "",
  });

  const onFormChange = (e: any) => {
    if (e.target) {
      setFormState({
        ...formState,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handSubmit = () => {
    console.log({ formState });
  };

  return (
    <div className="w-full bg-gray-100">
      <div className="relative">
        <img
          className="object-none w-full h-64"
          src="https://www.naturepaysage.photo/wp-content/uploads/Nature-Paysage-portfolio-17-novembre-2019-0017-3.jpg"
          alt="picture"
        />
        <div className="absolute top-3 ml-[35%] mt-[5%] font-poppins">
          <h1 className="text-white text-5xl">CRÉONS VOTRE SÉMINAIRE</h1>
        </div>
      </div>
      <div className="mx-auto max-w-7xl w-[75%] sm:px-6 lg:px-8">
        <div className=" bg-white px-24 py-10">
          {nextPage === 0 ? (
            <FirstSignup
              formState={formState}
              setFormState={setFormState}
              setNextPage={setNextPage}
            />
          ) : nextPage === 1 ? (
            <SecondSignup
              formState={formState}
              onFormChange={onFormChange}
              setFormState={setFormState}
              setNextPage={setNextPage}
            />
          ) : (
            <ThreeSignup
              formState={formState}
              onFormChange={onFormChange}
              setFormState={setFormState}
              handSubmit={handSubmit}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
