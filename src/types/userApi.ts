export interface ISaveToken {
  token: string,
}

export interface ISignIn {
  email: string,
  password: string,
}

export interface ISignUp {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  login: string;
}
