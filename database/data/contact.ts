import { fbApp } from "../config/index";

const DB_CONTACT = "contact";
const firestore = fbApp().firestore();

export const addContact = async (
  firstName: string,
  lastName: string,
  email: string,
  message: string
) => {
  const contactData = {
    firstName,
    lastName,
    email,
    message,
  };
  const res: any = await firestore.collection(DB_CONTACT).add(contactData);
  if (res.id) {
    return true;
  } else {
    return false;
  }
};
