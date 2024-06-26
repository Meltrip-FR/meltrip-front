import axios from "axios"

export const getOrganizationById = async (id: string): Promise<any> => {
  const organization: any = await axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/organization/${id}`)
    .catch((error: TypeError) => {
      console.error(error)
    })

  return organization.data
}

export const getOrganizationBySiret = async (id: string): Promise<any> => {
  const organization: any = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/organization/siret/${id}`
  )
  if (!organization?.data) {
    return false
  }
  return organization?.data
}

export const postOrganization = async (siret: string): Promise<any> => {
  const organization: any = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/organization/`,
    {
      siret: siret
    }
  )
  return organization.data
}
