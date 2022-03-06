import Hello from "@components/assets/icons/hello";
import Happy from "@components/assets/icons/happy";
import { Q11 } from "@components/assets/icons/questions/Q11";
import { Q12 } from "@components/assets/icons/questions/Q12";
import { Q21 } from "@components/assets/icons/questions/Q21";
import { Q22 } from "@components/assets/icons/questions/Q22";
import { Q31 } from "@components/assets/icons/questions/Q31";
import { Q32 } from "@components/assets/icons/questions/Q32";

export const questions = {
  //First Parcours
  1: {
    type: "mcqOption",
    order: "none",
    title: "Quel voyageur es-tu ?",
    content: "Selectionne la personalité qui te correspond le plus !",
    answers: [
      {
        content: "L’aventurier 🏕",
        smallTitle: "Appellez moi Indiana Jones !",
        describe:
          "Je suis flexible, gentil et passionné de voyages ! Je veux profiter à fond de la vie et kiffer chaque moment ! Voyager c’est la vie ! J’adore découvrir de nouveaux horizons, des paysages incroyables, des cultures et pays différents ! Ambiance locale et photos souvenirs au programme !",
        image: <Hello size={200} />,
        nextQuestion: 2,
      },
      {
        content: "Le couche tard ⏰",
        smallTitle: "J’aime m’amuser avec mes proches !",
        describe:
          "Je suis calme mais quand il faut décrocher je suis le premier à faire des soirées posés entre amis ou en famille ! Chanter, jouer, danser et boire sont de mises ! J’aime profiter mais je limite les excès pour profiter un maximum de la journée lors de mes vacances.",
        image: <Happy size={200} />,
        nextQuestion: 2,
      },
    ],
  },

  2: {
    type: "mcq",
    order: 1,
    content: "Tu souhaites partir",
    answers: [
      {
        content: "Seul(e)",
        image: <Q11 size={200} />,
        nextQuestion: 3,
      },
      {
        content: "À deux ou plus",
        image: <Q12 size={200} />,
        nextQuestion: 3,
      },
    ],
  },
  3: {
    type: "mcq",
    order: 2,
    content: "Durant ton voyage, tu préfères ?",
    answers: [
      {
        content: "Rester seul(e)",
        image: <Q21 size={200} />,
        nextQuestion: 4,
      },
      {
        content: "Rencontrer du monde",
        image: <Q22 size={200} />,
        nextQuestion: 4,
      },
    ],
  },
  4: {
    type: "mcq",
    order: 3,
    content: "As-tu une idée du lieu de ta prochaine destination ?",
    answers: [
      {
        content: "Oui",
        image: <Q31 size={200} />,
        nextQuestion: 5,
      },
      {
        content: "Non",
        image: <Q32 size={200} />,
        nextQuestion: 13,
      },
    ],
  },
  5: {
    type: "form",
    order: 4,
    content: "Indique le lieu où tu souhaites aller (ville, pays, etc.)",
    answers: [
      {
        content: "Pays",
        type: "text",
      },
      {
        content: "Ville",
        type: "text",
      },
      {
        content: "D'autre choses à nous partager",
        type: "textarea",
      },
    ],
    nextQuestion: 6,
  },
  6: {
    type: "listMcq",
    order: 5,
    content: "Combien de temps souhaites-tu partir ?",
    answers: [
      {
        content: "1 semaine",
      },
      {
        content: "1 mois",
      },
      {
        content: "2 mois",
      },
      {
        content: "3 mois et plus",
      },
    ],
    nextQuestion: 7,
  },
  7: {
    type: "form",
    order: 6,
    content: "Quel est ton budget ?",
    answers: [
      {
        content: "votre Budget",
        type: "number",
      },
    ],
    nextQuestion: 8,
  },
  8: {
    type: "form",
    order: 7,
    content: "À quelles dates souhaitez-vous partir",
    answers: [
      {
        content: "Date de départ",
        type: "date",
      },
    ],
    nextQuestion: 9,
  },
  9: {
    type: "listMcq",
    order: 8,
    content: "Parmi ces trois propositions que préférez-vous",
    answers: [
      {
        content: "Être au calme, près de la nature",
      },
      {
        content: "Être au coeur de l'action",
      },
      {
        content: "Un peu des deux",
      },
    ],
    nextQuestion: 10,
  },
  10: {
    type: "listMcq",
    order: 9,
    content: "Quel type d'activité souhaitez-vous faire",
    answers: [
      {
        content: "Des activités à sensations",
      },
      {
        content: "Des activités culturels",
      },
      {
        content: "Des activités insolites",
      },
      {
        content: "Des activités sportives",
      },
      {
        content: "Des activités détente",
      },
    ],
    nextQuestion: 11,
  },
  11: {
    type: "form",
    order: 10,
    content: "Avez-vous d'autres informations à nous transmettre",
    answers: [
      {
        content: "D'autre choses à nous partager",
        type: "textarea",
      },
    ],
    nextQuestion: 12,
  },
  12: {
    type: "final",
    order: 11,
    content: "",
  },

  //Seconds Parcours
  13: {
    type: "mcq",
    order: 4,
    content: "Souhaites-tu tester notre formule “voyage surprise”* ?",
    answers: [
      {
        content: "Oui",
        image: <Q31 size={200} />,
        nextQuestion: 14,
      },
      {
        content: "Non",
        image: <Q32 size={200} />,
        nextQuestion: 14,
      },
    ],
  },
  14: {
    type: "listMcq",
    order: 5,
    content: "Combien de temps souhaites-tu partir ?",
    answers: [
      {
        content: "1 semaine",
      },
      {
        content: "1 mois",
      },
      {
        content: "2 mois",
      },
      {
        content: "3 mois et plus",
      },
    ],
    nextQuestion: 15,
  },
  15: {
    type: "form",
    order: 6,
    content: "Quel est ton budget ?",
    answers: [
      {
        content: "votre Budget",
        type: "number",
      },
    ],
    nextQuestion: 8,
  },
  16: {
    type: "form",
    order: 7,
    content: "À quelles dates souhaites-tu partir",
    answers: [
      {
        content: "Date de départ",
        type: "date",
      },
    ],
    nextQuestion: 17,
  },
  17: {
    type: "listMcq",
    order: 8,
    content: "Parmi ces trois propositions que préférez-vous",
    answers: [
      {
        content: "Être au calme, près de la nature",
      },
      {
        content: "Être au coeur de l'action",
      },
      {
        content: "Un peu des deux",
      },
    ],
    nextQuestion: 18,
  },
  18: {
    type: "listMcq",
    order: 9,
    content: "Quel est l'importantce de la météo pour vous ",
    answers: [
      {
        content: "Très important, je pars en vacances pour avoir du soleil",
      },
      {
        content: "Important, même si un peu de pluie ne me dérange pas",
      },
      {
        content:
          "Pas du tout importannt, tant que j'ai pleins d'activités à faire",
      },
    ],
    nextQuestion: 19,
  },
  19: {
    type: "listMcq",
    order: 10,
    content: "Quel type d'activité souhaitez-vous faire",
    answers: [
      {
        content: "Des activités à sensations",
      },
      {
        content: "Des activités culturelles",
      },
      {
        content: "Des activités insolites",
      },
      {
        content: "Des activités sportives",
      },
      {
        content: "Des activités détente",
      },
    ],
    nextQuestion: 20,
  },
  20: {
    type: "final",
    order: 21,
    content: "",
  },
};
