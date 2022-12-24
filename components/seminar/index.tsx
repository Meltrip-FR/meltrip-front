import { useState } from "react";

import FirstSignup from "@/components/seminar/FirstSignup";
import SecondSignup from "@/components/seminar/SecondSignup";
import ThreeSignup from "./ThreeSignup";
import axios from "axios";
import PresentSeminar from "./PresentSeminar";

const SignupPage = () => {
  const [nextPage, setNextPage] = useState(0);
  const [errorMessage, setErrorMessage] = useState("Error: ");
  const [formState, setFormState] = useState({
    participNumber: 0,
    knowDate: true,
    departurePeriod: "",
    approximateDuration: "",
    startDate: "",
    endDate: "",
    budgetPerPerson: 0,
    typeSeminar: "",
    destinationType: "",
    describeProject: "",
    sleepSuggest: "",
    accompaniedSuggest: "",
    civility: "",
    nameManager: "",
    emailManager: "",
    billingManager: true,
    emailFinancial: "",
    numberFinancial: "",
    siretCompany: "",
  });

  const onFormChange = (e: any) => {
    if (e.target) {
      setFormState({
        ...formState,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handSubmit = async () => {
    //Add Organization
    const addOrganizations = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/organization/`
    );

    // users
    const addUsers = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/signup`,
      {
        email: formState.emailManager,
        terms: true,
        newsletter: false,
        roles: ["user"],
      }
    );
    console.log({ addUsers });

    // seminars
    const addSeminar = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/seminar/`,
      {
        participNumber: formState.participNumber,
        knowDate: formState.knowDate,
        departurePeriod: formState.departurePeriod,
        approximateDuration: formState.approximateDuration,
        startDate: formState.startDate,
        endDate: formState.endDate,
        typeSeminar: formState.typeSeminar,
        destinationType: formState.destinationType,
        budgetPerPerson: formState.budgetPerPerson,
        sleepSuggest: formState.sleepSuggest,
        describeProject: formState.describeProject,
        accompaniedSuggest: formState.accompaniedSuggest,
        idOrganization: addOrganizations.data.idOrganization,
      }
    );

    console.log({ addSeminar });
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
            <PresentSeminar setNextPage={setNextPage} />
          ) : nextPage === 1 ? (
            <FirstSignup
              formState={formState}
              setFormState={setFormState}
              setNextPage={setNextPage}
            />
          ) : nextPage === 2 ? (
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
              setNextPage={setNextPage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
