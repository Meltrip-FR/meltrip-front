import axios from "axios";

export const getPayementBySeminarId = async (token: any, id: any) => {
  const getPayement: any = await axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/payement/${id}`, {
      headers: {
        "x-access-token": token,
      },
    })
    .catch((error: TypeError) => {
      console.error(error);
    });

  console.log({ token, id });

  return getPayement.data;
};

export const payementWithStripe = async (data: any) => {
  const stripe: any = await axios
    .post(`${process.env.NEXT_PUBLIC_API_URL}/payement`, data)
    .catch((error: TypeError) => {
      console.error(error);
    });
  return stripe.data;
};
