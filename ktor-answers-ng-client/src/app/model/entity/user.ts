import {UserType} from "../user-type";

export class User {
  public constructor(
    public userId: number,
    public userType: UserType,
    public displayName: string,
    public creationDate: Date,
    public link: string,
    public location?: string,
    public aboutMe?: string
  ) {
  }
}
