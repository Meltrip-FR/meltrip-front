import { useState } from "react";

import FirstSignup from "@/components/auth/signup/seminar/FirstSignup";
import SecondSignup from "@/components/auth/signup/seminar/SecondSignup";
import ThreeSignup from "./ThreeSignup";
import axios from "axios";

const SignupPage = () => {
  const [nextPage, setNextPage] = useState(0);
  const [errorMessage, setErrorMessage] = useState("Error: ");
  const [formState, setFormState] = useState({
    adulteNumber: 0,
    adosNumber: 0,
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
  const config = {
    method: "get",
    url: `https://api.insee.fr/entreprises/sirene/V3/siret/${formState.siretCompany}`,
    headers: {
      Authorization: "Bearer 38ea5117-f6d0-3d8c-8736-68534a110535",
      Cookie:
        "INSEE=rd4o00000000000000000000ffff0ac34808o80; pdapimgateway=rd4o00000000000000000000ffff0ac348ado8280",
    },
  };

  const onFormChange = (e: any) => {
    if (e.target) {
      setFormState({
        ...formState,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handSubmit = async () => {
    console.log({ formState });
    await axios(config)
      .then(async (response: any) => {
        if (response.data.etablissement.siren) {
          //Add Organization
          const addOrganizations = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/organization/`,
            {}
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
              adultNumber: formState.adulteNumber,
              adosNumber: formState.adosNumber,
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
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
