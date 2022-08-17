export interface AuthSlice {
  login: boolean;
  user: {
    id?: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    zip: number;
    terms: boolean;
    newsletter: boolean;
    roles: string[];
    accessToken: string;
  };
}
