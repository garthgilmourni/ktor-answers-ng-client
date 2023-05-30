import {User} from "./user";

export class PostComment {
  public constructor(
    public commentId: number,
    public owner: User,
    public postId: number,
    public body: string
  ) {
  }
}
