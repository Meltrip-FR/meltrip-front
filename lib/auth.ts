import axios from "axios"

export const signup = async (data: any) => {
  const user: any = await axios
    .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, data)
    .catch((error: TypeError) => {
      console.error(error.message)
      return error.message
    })

  return user.data
}

export const signin = async (email: string, password: string) => {
  const user: any = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/signin`,
    { email, password }
  )
  return user.data
}
