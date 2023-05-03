import axios from "axios"
import { useRouter } from "next/router"
import { useCallback, useEffect, useState } from "react"
import Facebook from "@/components/assets/icons/socials/facebook"
import Instagram from "@/components/assets/icons/socials/instagram"
import Twitter from "@/components/assets/icons/socials/twitter"
import BreadCrumbs from "@/components/utils/breadCrumbs"

const ArticlePage = () => {
  const router = useRouter()
  const [data, setData] = useState<any>()
  const [dataSuggest, setDataSuggest] = useState<any>()

  const getArticle = useCallback(async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/blog/article/${router.query.id}`
    )
    setData(res.data)
  }, [router.query.id])

  const getSuggest = useCallback(async () => {
    let return_arr = []
    const res: any = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/blog/articlesPaginate/?page=0&size=10`
    )
    const arr = res.data.dataList.filter(
      (i: any) => i.status !== true && router.query.id !== i.id
    )
    for (let i = 0; i < 3; i++) {
      var random_int = Math.round(Math.random() * (arr.length - 1))
      return_arr.push(arr[random_int])
      arr.splice(random_int, 1)
    }
    setDataSuggest(return_arr)
  }, [router.query.id])

  useEffect(() => {
    getArticle()
    getSuggest()
  }, [getArticle, getSuggest])

  return (
    <section className="text-gray-600 body-font">
      <div className="flex justify-between mb-4">
        <div className="flex items-center mb-3 mt-3">
          <BreadCrumbs url="/" name="home" active={true} />
          <BreadCrumbs url="/blog/" name="Blog" active={true} />
          <BreadCrumbs
            url={`/blog/${router.query.id}}`}
            name={data?.title}
            active={false}
          />
        </div>
      </div>
      <div className="flex flex-wrap flex-col mb-5 items-center justify-center w-[100%]">
        <h1 className="sm:text-3xl text-2xl title-font mb-2 text-gray-900 font-bold text-center w-full mt-12">
          {data?.title}
        </h1>
        {data?.pictureURL && (
          <img
            src={data?.pictureURL}
            alt="picture"
            className=" object-cover w-[70%] h-[60vh] mt-12"
          />
        )}
        <p className="font-light text-center  w-[70%] mt-5">
          {data?.description}
        </p>
      </div>
      {/* Article */}
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-6 mt-16 mx-[30vh]">
          <div className="sticky top-0">
            <div className="flex flex-col items-start justify-start">
              <button className="py-2 font-semibold text-[#645757] inline-flex items-center space-x-2 rounded">
                <Instagram size={50} />
                <span>Instagram</span>
              </button>
              <hr className="border-meltrip-primary border w-[20vh]" />
              <button className="py-2 font-semibold text-[#645757] inline-flex items-center space-x-2 rounded">
                <Facebook size={50} />
                <span>Facebook</span>
              </button>
              <hr className="border-meltrip-primary border w-[20vh]" />
              <button className="py-2 font-semibold text-[#645757] inline-flex items-center space-x-2 rounded">
                <Twitter size={50} />
                <span>Twitter</span>
              </button>
            </div>
          </div>
          <div className="col-span-5">
            <p dangerouslySetInnerHTML={{ __html: data?.text }} />
          </div>
        </div>
      </div>
      {/* Suggest */}
      <div className="flex justify-center items-center">
        <div className="flex flex-wrap mb-5 items-center justify-center">
          <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 text-center w-full mt-12 mb-12">
            Lire d’autres actualités Meltrip
          </h1>
          {dataSuggest?.map((item: any) => (
            <div className="p-4 md:w-1/3" key={item?.id}>
              <div className="h-full overflow-hidden">
                <img
                  className="w-full object-cover object-center"
                  src={item?.pictureURL}
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="text-xl title-font font-medium text-black mb-1">
                    {item?.title}
                  </h2>

                  <p className="leading-relaxed mb-3">{item?.description}</p>
                  <div className="flex items-center flex-wrap">
                    <div
                      className="text-meltrip-primary inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer hover:underline"
                      onClick={() => router.push(`/blog/article/${item?.id}`)}
                    >
                      En savoir plus
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ArticlePage
