import axios from "axios";

export const addMembers = async (data: any) => {
  const member: any = await axios
    .post(`${process.env.NEXT_PUBLIC_API_URL}/member`, data)
    .catch((error: TypeError) => {
      console.error(error);
    });
  return member.data;
};
