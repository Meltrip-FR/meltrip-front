import { Fragment, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Footer from "../body/footer";
import Present from "./steps/present";
import First from "./steps/first";
import Second from "./steps/second";

const Invites = () => {
  const router = useRouter();
  const [formState, setFormState] = useState({
    email: "",
    firstname: "",
    lastname: "",
    empathique: 0,
    reveur: 0,
    rebelle: 0,
    perseverant: 0,
    perfectionniste: 0,
    travailaddict: 0,
    resultat: "",
    steps: 0,

    activeIndex: 0,
  });

  const getSeminar = useCallback(async () => {
    const seminar = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/seminar/${router.query.id}`
    );
    const member = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/group/member/${seminar.data.idGroup}`
    );

    if (seminar.data.adultNumber < member.data.length) {
      router.push(`/seminar/${router.query.id}`);
    }
  }, [router.query.id]);
  useEffect(() => {
    getSeminar();
  }, [getSeminar]);

  return (
    <Fragment>
      <div className="mx-auto container">
        {formState.steps === 0 ? (
          <Present setFormState={setFormState} formState={formState} />
        ) : formState.steps === 1 ? (
          <First setFormState={setFormState} formState={formState} />
        ) : (
          <Second setFormState={setFormState} formState={formState} />
        )}
      </div>
      <Footer />
    </Fragment>
  );
};

export default Invites;
