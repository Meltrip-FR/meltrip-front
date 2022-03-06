import { fbApp } from "../config/index";

const DB_USERS = "users";
const firestore = fbApp().firestore();
const auth = fbApp().auth();

export const Signup = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => {
  const userData = {
    firstName,
    lastName,
    email,
  };

  const res: any = await auth.createUserWithEmailAndPassword(email, password);

  if (res && res.user) {
    await firestore
      .collection(DB_USERS)
      .add({ uid: res.user.uid, ...userData });
    return res.user.uid;
  } else {
    return false;
  }
};

export const addAnswer = async ({ uid, data }: any) => {
  const res: any = await firestore
    .collection(DB_USERS)
    .where("uid", "==", uid)
    .get();

  if (res.empty) {
    return false;
  } else {
    const doc = res.docs[0];
    await firestore
      .collection(DB_USERS)
      .doc(doc.id)
      .update({ questions: data });
    return true;
  }
};
