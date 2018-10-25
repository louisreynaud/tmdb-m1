export interface UserQuery {
  language?: string; // default "en-US"
}

export interface UserResponse {
  id?: number;
  userName?: string;
  password?: string;
  imageProfilURL?: string;
}
