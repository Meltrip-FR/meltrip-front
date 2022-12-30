import PolygonG from "@/components/assets/icons/polygonG";
import PolygonD from "@/components/assets/icons/polygonD";
import BreadCrumbs from "@/components/utils/breadCrumbs";
import { getQuoteById } from "@/lib/quotes";
import { getTemplateQuoteById } from "@/lib/templateQuotes";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { updateQuotebyId } from "@/lib/quotes";
import { payementWithStripe } from "@/lib/payements";
import { getSeminarByQuoteId, getSeminarByUserId } from "@/lib/seminar";
import Seminar from "../index_old";

const ChoicePDF = () => {
  const router = useRouter();
  const { auth } = useAppSelector((state) => state);
  const [quoteList, setListQuote] = useState<any>();
  const [paginate, setPaginate] = useState<any>(0);

  const getQuote = useCallback(
    async (idQuote: string) => {
      const quote: any = await getQuoteById(idQuote);

      const TemplateQuote1: any = await getTemplateQuoteById(
        auth.user.accessToken,
        quote?.idTemplateQuote1
      );
      const TemplateQuote2: any = await getTemplateQuoteById(
        auth.user.accessToken,
        quote?.idTemplateQuote2
      );
      const TemplateQuote3: any = await getTemplateQuoteById(
        auth.user.accessToken,
        quote?.idTemplateQuote3
      );

      setListQuote({
        quote: quote,
        templateQuotes: {
          TemplateQuote1,
          TemplateQuote2,
          TemplateQuote3,
        },
      });
    },
    [auth.user.accessToken]
  );

  useEffect(() => {
    getQuote(router?.query?.id as string).catch((e) => console.error(e));
  }, [getQuote, router?.query?.id]);

  const handleSubmit = async () => {
    let idSelect = "";
    if (paginate === 0) {
      idSelect = quoteList?.templateQuotes?.TemplateQuote1?.id;
    } else if (paginate === 1) {
      idSelect = quoteList?.templateQuotes?.TemplateQuote2?.id;
    } else if (paginate === 2) {
      idSelect = quoteList?.templateQuotes?.TemplateQuote3?.id;
    }

    const seminar = await getSeminarByQuoteId(
      auth.user.accessToken,
      router?.query?.id
    );

    const updateQuote = await updateQuotebyId(router?.query?.id, {
      proposeSelect: idSelect,
    });

    if (updateQuote) {
      console.log("update");
      if (paginate === 0) {
        const payementStripe = await payementWithStripe({
          idSeminar: seminar.id,
          nameDevis: quoteList?.templateQuotes?.TemplateQuote1?.title,
          unitAmount: quoteList?.templateQuotes?.TemplateQuote1?.price,
        });
        if (payementStripe?.urlPayement) {
          router.push(payementStripe?.urlPayement);
        }
      } else if (paginate === 1) {
        const payementStripe = await payementWithStripe({
          idSeminar: seminar.id,
          nameDevis: quoteList?.templateQuotes?.TemplateQuote1?.title,
          unitAmount: quoteList?.templateQuotes?.TemplateQuote1?.price,
        });
        if (payementStripe?.urlPayement) {
          router.push(payementStripe?.urlPayement);
        }
      } else if (paginate === 2) {
        const payementStripe = await payementWithStripe({
          idSeminar: seminar.id,
          nameDevis: quoteList?.templateQuotes?.TemplateQuote1?.title,
          unitAmount: quoteList?.templateQuotes?.TemplateQuote1?.price,
        });
        if (payementStripe?.urlPayement) {
          router.push(payementStripe?.urlPayement);
        }
      }
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-14 mx-auto">
        <div className="flex justify-between mb-4">
          <div className="flex items-center mb-3 mt-3">
            <BreadCrumbs url="/" name="home" active={false} />
            <BreadCrumbs url="/user/dashboard" name="Compte" active={true} />
            <BreadCrumbs url="/user/seminar" name="Séminaires" active={true} />
            <BreadCrumbs
              url="/user/seminar/"
              name="Vos Séminaires"
              active={true}
            />
            <BreadCrumbs
              url="/user/seminar/infos/"
              name="Séminaire en cours de création"
              active={true}
            />{" "}
            <BreadCrumbs
              url="/user/seminar/infos/:id"
              name="Choisir mon séminaire"
              active={false}
            />
          </div>
        </div>
        <div className="w-full mb-5">
          {/* Vos devis */}
          <h1 className=" sm:text-3xl text-center text-2xl font-medium title-font mb-12 mt-12 text-gray-900 mr-5">
            {paginate === 0
              ? quoteList?.templateQuotes?.TemplateQuote1?.title
              : paginate === 1
              ? quoteList?.templateQuotes?.TemplateQuote2?.title
              : quoteList?.templateQuotes?.TemplateQuote3?.title}
          </h1>
          <div className="grid grid-cols-3 items-center">
            <div
              className="flex justify-center cursor-pointer"
              onClick={() => setPaginate(paginate !== 0 ? paginate - 1 : 0)}
            >
              <PolygonG color={paginate === 0 ? "#BFBFBF" : ""} size={50} />
            </div>
            <div>
              {paginate === 0 ? (
                <iframe
                  title={
                    quoteList?.quote?.idTemplateQuote1 ===
                      quoteList?.templateQuotes?.TemplateQuote1?.id &&
                    quoteList?.templateQuotes?.TemplateQuote1?.title
                  }
                  width="500"
                  height="680"
                  src={quoteList?.quote?.propose1}
                />
              ) : paginate === 1 ? (
                <iframe
                  title={
                    quoteList?.quote?.idTemplateQuote2 ===
                      quoteList?.templateQuotes?.TemplateQuote2?.id &&
                    quoteList?.templateQuotes?.TemplateQuote2?.title
                  }
                  width="500"
                  height="680"
                  src={quoteList?.quote?.propose2}
                />
              ) : (
                paginate === 2 && (
                  <iframe
                    title={
                      quoteList?.quote?.idTemplateQuote3 ===
                        quoteList?.templateQuotes?.TemplateQuote3?.id &&
                      quoteList?.templateQuotes?.TemplateQuote3?.title
                    }
                    width="500"
                    height="680"
                    src={quoteList?.quote?.propose3}
                  />
                )
              )}
            </div>
            <div
              className="flex justify-center"
              onClick={() => setPaginate(paginate < 2 ? paginate + 1 : 2)}
            >
              <PolygonD color={paginate === 2 ? "#BFBFBF" : ""} size={50} />
            </div>
          </div>

          <div className="flex mt-24 justify-center items-center">
            <div
              className={` ${
                paginate === 0 ? "bg-meltrip-primary" : "bg-[#D9D9D9]"
              } p-5 ml-5 items-center rounded-full`}
            />
            <div
              className={` ${
                paginate === 1 ? "bg-meltrip-primary" : "bg-[#D9D9D9]"
              } p-5 ml-5 items-center rounded-full`}
            />
            <div
              className={` ${
                paginate === 2 ? "bg-meltrip-primary" : "bg-[#D9D9D9]"
              } p-5 ml-5 items-center rounded-full`}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="p-5 rounded bg-meltrip-primary text-white  text-center mt-12 "
              onClick={() => handleSubmit()}
            >
              Je choisis ce séminaire
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChoicePDF;
