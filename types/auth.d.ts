export interface AuthSlice {
  isLoggingIn: boolean;
  user: {
    email: string;
    first: string;
    last: string;
    status: string;
    photoURL: string;
  };
}
