import axios from "axios";

export const getMembersByGroupId = async (id: string) => {
  const group: any = await axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/group/member/${id}`)
    .catch((error: TypeError) => {
      console.error(error);
    });

  return group.data;
};

export const addMembers = async (data: any) => {
  const member: any = await axios
    .post(`${process.env.NEXT_PUBLIC_API_URL}/member`, data)
    .catch((error: TypeError) => {
      console.error(error);
    });
  return member.data;
};
