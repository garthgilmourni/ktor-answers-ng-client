import {UserType} from "./user-type";

export interface JsonUser {
  user_id: number,
  user_type: UserType,
  creation_date: string,
  display_name: string,
  link: string,
  location?: string,
  about_me?: string
}
