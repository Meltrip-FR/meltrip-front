import axios from "axios"

export const getQuoteById = async (id: any) => {
  const quote: any = await axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/quote/${id}`)
    .catch((error: TypeError) => {
      console.error(error)
    })

  return quote.data
}

export const updateQuotebyId = async (id: any, data: any) => {
  const quote: any = await axios
    .put(`${process.env.NEXT_PUBLIC_API_URL}/quote/${id}`, {
      ...data
    })
    .catch((error: TypeError) => {
      console.error(error)
    })

  return quote.data
}
