import { useEffect, useState } from "react";

import FirstSignup from "@/components/seminar/FirstSignup";
import SecondSignup from "@/components/seminar/SecondSignup";
import ThreeSignup from "./ThreeSignup";
import ThreePointOneSignup from "./ThreePointOneSignup";
import axios from "axios";
import PresentSeminar from "./PresentSeminar";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { login } from "@/redux/slices/auth.slice";

const SignupPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { auth } = useAppSelector((state) => state);

  const [pathname, setPathName] = useState<string>("");
  const [nextPage, setNextPage] = useState(0);
  const [errorMessage, setErrorMessage] = useState("Error: ");
  const [formState, setFormState] = useState({
    participNumber: 0,
    knowDate: true,
    departurePeriod: "",
    approximateDuration: "",
    startDate: "" || null,
    endDate: "" || null,
    budgetPerPerson: 0,
    typeSeminar: "",
    destinationType: "",
    describeProject: "",
    sleepSuggest: "",
    accompaniedSuggest: "",
    civility: "",
    nameManager: "",
    emailManager: "",
    password: "",
    billingManager: true,
    emailFinancial: "",
    numberFinancial: "",
    siretCompany: "",
    terms: false,
    newsletter: false,
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
    let addOrganizations: any;
    let addUsers: any;
    let loginRequestUser: any;

    if (pathname !== "/seminar/create") {
      //Add Organization
      addOrganizations = await axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/organization/`, {
          siret: formState.siretCompany,
        })
        .catch((_e) => {
          alert("Siret introuvable veillez le saisir de nouveau !");
        });
      // users
      addUsers = await axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, {
          email: formState.emailManager,
          username: formState.nameManager,
          civility: formState.civility,
          password: formState.password,
          terms: formState.terms,
          newsletter: formState.newsletter,
          idOrganization: addOrganizations?.data?.id,
          roles: ["user"],
        })
        .catch((_e) => {
          alert("Error lors de la création de votre compte");
        });
      //Login user
      loginRequestUser = await axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/signin`, {
          email: formState.emailManager,
          password: formState.password,
        })
        .then(({ data }) => {
          const user = data?.dataValues;
          console.log(user);
          const { payload }: any = dispatch(
            login({
              login: true,
              user: {
                id: user.id,
                username: user?.username,
                civility: user?.civility,
                email: user?.email,
                phone: user?.phone,
                terms: true,
                newsletter: user?.newsletter === 0 ? false : true,
                roles: user?.roles,
                accessToken: data?.accessToken,
                confirmEmail: user?.confirmEmail,
                idOrganization: user?.idOrganization,
              },
            })
          );
          if (payload.login) {
            console.log({ success: "Login" });
            return data;
          }
        })
        .catch((_e) => {
          alert("Error lors de la création séminaire");
        });
    }

    console.log({ loginRequestUser });

    const organization =
      pathname !== "/seminar/create" && addOrganizations.data;
    const loginToken =
      pathname !== "/seminar/create" && loginRequestUser.accessToken;
    const loginUser =
      pathname !== "/seminar/create" && loginRequestUser.dataValues;

    console.log({ loginToken });
    // seminars
    const addSeminar: any = await axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL}/seminar/`,
        {
          adultNumber: formState.participNumber,
          adosNumber: 0,
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
          idUser: loginUser?.id ? loginUser?.id : auth?.user?.id,
          idPayement: null,
          idQuote: null,
        },
        {
          headers: {
            "x-access-token": loginToken ? loginToken : auth.user.accessToken,
          },
        }
      )
      .catch((e) => console.error(e));

    console.log({
      idSeminar: addSeminar.data.id,
      idOrganization: organization.id
        ? organization.id
        : auth?.user?.idOrganization,
      email: loginUser?.email ? loginUser?.email : auth.user.email,
      present: false,
      resultTest: 0,
    });
    const createGroup: any = await axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/group/`, {
        idSeminar: addSeminar.data.id,
        idOrganization: organization.id
          ? organization.id
          : auth?.user?.idOrganization,
        email: loginUser?.email ? loginUser?.email : auth.user.email,
        present: false,
        resultTest: 0,
      })
      .catch((e) => console.error(e));

    console.log(addSeminar.data, createGroup);
    if (addSeminar.data && createGroup.data) {
      router.push("/user/seminar");
    }
  };

  useEffect(() => {
    setPathName(router.pathname);
  }, [router.pathname]);

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
          ) : nextPage === 3 ? (
            <ThreeSignup
              formState={formState}
              onFormChange={onFormChange}
              setFormState={setFormState}
              handSubmit={handSubmit}
              setNextPage={setNextPage}
            />
          ) : (
            <ThreePointOneSignup
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
