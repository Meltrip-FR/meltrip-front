import axios from "axios"
import { useRouter } from "next/router"
import { useCallback, useEffect, useState } from "react"
import ReactPaginate from "react-paginate"

const BlogPage = () => {
  const router = useRouter()
  const [openTab, setOpenTab] = useState("/blog/articles")

  const [postsPerPage] = useState(6)
  const [offset, setOffset] = useState(0)
  const [posts, setAllPosts] = useState<any>([])
  const [pageCount, setPageCount] = useState(0)

  const getPostData = useCallback(
    async (data: any) => {
      return data.length === 0 ? (
        <div className="flex flex-col items-center justify-center">
          <h2 className="tracking-widest text-2xl title-font font-medium text-gray-400 mt-5">
            Data not Found
          </h2>
        </div>
      ) : (
        data.map((item: any) => (
          <div className="p-4 md:w-1/3" key={item.id}>
            <div className="h-full overflow-hidden">
              <img
                className=" w-full object-cover object-center"
                src={item?.pictureURL}
                alt="blog"
              />
              <div className="p-6">
                {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY
                </h2> */}
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  {item.title}
                </h1>
                <p className="leading-relaxed mb-3">{item.description}</p>
                <div className="flex items-center flex-wrap">
                  <div
                    className="text-meltrip-primary inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer hover:underline"
                    onClick={() => router.push(`/blog/article/${item.id}`)}
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
        ))
      )
    },
    [router]
  )

  const PostView = () => {
    return (
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap items-center justify-center -m-4">
            {posts}
          </div>
        </div>
        <ReactPaginate
          previousLabel={null}
          previousClassName="hidden"
          nextLabel={null}
          nextClassName="hidden"
          initialPage={0}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={
            "flex flex-row w-full items-center justify-center"
          }
          pageLabelBuilder={(page) => (
            <div className="bg-[#D9D9D9] p-5 ml-5 items-center rounded-full" />
          )}
        />
      </section>
    )
  }

  const getAllPosts = useCallback(
    async (url: string) => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}${url}`)
        const data = res.data
        const slice = data
          .filter((i: any) => i.status === true)
          .slice(offset - 1, offset - 1 + postsPerPage)
        // For displaying Data
        const postData = await getPostData(slice)
        // Using Hooks to set value
        setAllPosts(postData)
        setPageCount(Math.ceil(data.length / postsPerPage))
      } catch (error: any) {
        error?.response?.data?.message &&
          console.error(error.response.data.message)
      }
    },
    [getPostData, offset, postsPerPage]
  )

  const handlePageClick = (event: any) => {
    const selectedPage = event.selected
    setOffset(selectedPage + 1)
  }

  useEffect(() => {
    getAllPosts(openTab)
  }, [getAllPosts, openTab])

  return (
    <section className="text-gray-900 body-font">
      <div className="px-5 py-14 mx-auto ">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-meltrip-secondary text-center">
          Blog
        </h1>
        <div className="flex flex-row flex-wrap align-center justify-center w-full mt-10 pt-3 mb-0 pr-8">
          <button
            className={
              "px-5 py-3 text-xl " +
              (openTab === "/blog/articles" &&
                "border-meltrip-primary border-b-4 font-bold")
            }
            onClick={(e) => {
              e.preventDefault()
              setOpenTab("/blog/articles")
            }}
          >
            <p>Tous les articles</p>
          </button>
          <button
            className={
              "px-5 py-3 text-xl " +
              (openTab === "/blog/articles?tag=actualites" &&
                "border-meltrip-primary border-b-4 font-bold")
            }
            onClick={(e) => {
              e.preventDefault()
              setOpenTab("/blog/articles?tag=actualites")
            }}
          >
            <p>Actualités</p>
          </button>
          <button
            className={
              "px-5 py-3 text-xl " +
              (openTab === "/blog/articles?tag=temoignages" &&
                "border-meltrip-primary border-b-4 font-bold")
            }
            onClick={(e) => {
              e.preventDefault()
              setOpenTab("/blog/articles?tag=temoignages")
            }}
          >
            <p>Témoignages</p>
          </button>
        </div>
        <div className="relative flex flex-col w-full min-w-0 mb-6 break-words">
          <div className="flex-auto px-4 py-5">
            <div className="tab-content tab-space">
              <div
                className={openTab === "/blog/articles" ? "block" : "hidden"}
              >
                <PostView />
              </div>
              <div
                className={
                  openTab === "/blog/articles?tag=actualites"
                    ? "block"
                    : "hidden"
                }
              >
                <PostView />
              </div>
              <div
                className={
                  openTab === "/blog/articles?tag=temoignages"
                    ? "block"
                    : "hidden"
                }
              >
                <PostView />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogPage
