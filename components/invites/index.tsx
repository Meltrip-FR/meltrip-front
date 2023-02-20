import { Fragment, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Amico from "../assets/icons/amico";
import LogoColor from "../assets/icons/logoColor";
import Footer from "../body/footer";

const Invites = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/member`,
      {
        email: email,
        groupId: router.query.id,
      }
    );
  };

  const getSeminar = useCallback(async () => {
    const seminar = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/seminar/${router.query.id}`
    );
    const member = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/member/${router.query.id}`
    );

    console.log(seminar.data.adultNumber <= member.data.length);
  }, [router.query.id]);

  useEffect(() => {
    getSeminar();
  }, [getSeminar]);

  return (
    <Fragment>
      <div className="mx-auto container">
        <div className="flex justify-center mb-10">
          <LogoColor size={100} />
        </div>
        <p className="font-bold text-center text-sm">
          Bienvenue à notre quiz de personnalité* ! Ce test est conçu pour vous
          aider à évaluer votre personnalité au travail. Il comprend une série
          de 10 questions à choix multiple et vous aurez la possibilité de voir
          vos résultats à la fin. C{"'"}est un moyen amusant et interactif d
          {"'"}apprendre de nouvelles choses. Alors, prêt.e à relever le défi ?
          Commençons !
        </p>
        <div className="flex justify-center mt-10">
          <Amico size={400} />
        </div>
        <p className="font-bold text-center text-sm mb-10">
          *À noter, ce test a été conçu à l’aide de psychologue de travail et se
          base sur des études de psychologie. Cependant, il n’a pas de portée
          scientifique. Les résultats sont donc indicatifs. Il est également
          important de noter que les résultats de ce quiz ne doivent pas être
          utilisés pour des décisions professionnelles importantes.
        </p>
        <div className="flex justify-center mb-10">
          <input
            className="shadow text-gray-700 border rounded px-2 leading-tight focus:outline-none focus:shadow-outline mr-5"
            type="email"
            placeholder="Votre adresse courriel"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <button className="bg-meltrip-primary text-white font-bold py-2 px-4 rounded">
            Commencer le quiz
          </button>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Invites;
