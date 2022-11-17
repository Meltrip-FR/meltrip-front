export interface AuthSlice {
  login: boolean;
  user: {
    id?: string;
    username?: string;
    civility?: string;
    firstname?: string;
    lastname?: string;
    email: string;
    phone: string;
    terms: boolean;
    confirmEmail: boolean;
    newsletter: boolean;
    roles: string[];
    accessToken: string;
  };
}
