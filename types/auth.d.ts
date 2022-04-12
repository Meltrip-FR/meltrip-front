export interface AuthSlice {
  isLoggingIn: boolean;
  user: {
    uid: string;
    email: string;
    first: string;
    last: string;
    status: string;
    photoURL: string;
  };
}
