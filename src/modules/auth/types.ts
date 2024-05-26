export interface User {
  id: number;
  username: string;
  rememberMeToken: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthValues {
  username: string;
  password: string;
}
