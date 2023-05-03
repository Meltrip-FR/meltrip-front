import axios from "axios"

export const getTemplateQuoteById = async (token: any, id: any) => {
  const quote: any = await axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/templatequote/${id}`, {
      headers: {
        "x-access-token": token
      }
    })
    .catch((error: TypeError) => {
      console.error(error)
    })

  return quote.data
}
