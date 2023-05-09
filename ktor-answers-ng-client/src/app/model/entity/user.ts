import {UserType} from "../user-type";

export class User {
  public constructor(
    public user_id: number,
    public user_type: UserType,
    public display_name: string,
    public creation_date: Date,
    public link: string,
    public location?: string,
    public about_me?: string
  ) {
  }
}
