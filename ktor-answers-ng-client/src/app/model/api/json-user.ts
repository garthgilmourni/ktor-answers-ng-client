import {UserType} from "../user-type";

export interface JsonUser {
  userId: number,
  userType: UserType,
  creationDate: string,
  displayName: string,
  link: string,
  location?: string,
  aboutMe?: string
}
