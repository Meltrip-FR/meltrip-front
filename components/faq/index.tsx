import React, { useState } from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { categories, faqWording } from "./data"
import faq from "@/components/assets/icons/faq.png"

const Accordions = ({ items }: any) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([])

  const handleClick = (index: any) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index))
    } else {
      setOpenIndexes([...openIndexes, index])
    }
  }

  return (
    <div className="w-full  mx-auto mt-[60px]">
      {items.map((item: any, index: number) => (
        <>
          <div key={index}>
            <div
              className="flex justify-between items-center py-4 cursor-pointer"
              onClick={() => handleClick(index)}
            >
              <h2
                className={`text-lg font-bold ${
                  openIndexes.includes(index) && "text-[#CE5729]"
                }`}
              >
                {item.title}
              </h2>

              {openIndexes.includes(index) ? (
                <AiOutlineMinus className="text-[#CE5729]" />
              ) : (
                <AiOutlinePlus />
              )}
            </div>
            {openIndexes.includes(index) && (
              <div className="p-4 bg-white text-xl flex items-center justify-center text-justify">
                {item.content}
              </div>
            )}
          </div>
          {index !== items.length - 1 && <hr className="border-3" />}
        </>
      ))}
    </div>
  )
}
const Faq = () => {
  const [activeFaq, setActiveFaq] = useState("services")

  return (
    <div className="flex flex-col justify-center md:m-[72px] m-[20px]">
      <div className="justify-center hidden md:flex ">
        <img className="w-[750px] h-[470px]" src={faq.src} alt="faq" />
      </div>

      <p className="text-xl flex items-center justify-center text-justify mt-[10vh] xl:px-[200px]">
        Bienvenue sur la FAQ de notre site web. Vous trouverez ci-dessous les
        réponses aux questions les plus fréquentes sur nos services. <br /> Si
        vous ne trouvez pas de réponse à votre question ou si vous avez besoin
        de conseils, pour plus d’informations, n’hésitez pas à nous contacter.
      </p>
      <div className="flex  justify-between mt-[100px] gap-5 ml-xl overflow-auto">
        {categories.map(({ title, label, active, inactive }) => (
          <div
            key={title}
            role="button"
            onClick={() => {
              setActiveFaq(title)
            }}
            className={`flex flex-col justify-center items-center p-3 border-2 border-${
              activeFaq === title ? "[#CE5729]" : "black"
            } h-[200px] w-[200px] min-w-[150px] min-h-[50px] mt-[20px] ${
              activeFaq === title && "bg-[#CE5729]"
            }`}
          >
            <div className="">
              <img
                className="w-full h-full"
                src={activeFaq === title ? active : inactive}
                alt={title}
              />
            </div>

            <label
              className={`mt-2 text-center text-${
                activeFaq === title ? "white" : "black"
              }`}
            >
              {label}
            </label>
          </div>
        ))}
      </div>
      <div className=" flex mt-[100px] md:px-20 flex-col">
        <h1 className="text-3xl font-bold">
          {categories.find((cat) => cat.title === activeFaq)?.label}
        </h1>
        <Accordions
          items={faqWording.filter((faqItem) => faqItem.category === activeFaq)}
        />
      </div>
    </div>
  )
}

export default Faq
