export interface ISaveToken {
  token: string,
}

export interface ISignIn {
  email: string,
  password: string,
}

export interface IUserDataChange {
  firstName: string;
  lastName: string;
  login: string;
}

export interface IPasswordChange {
  oldPassword: string;
  newPassword: string;
}

export interface ISignUp {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  login: string;
}
