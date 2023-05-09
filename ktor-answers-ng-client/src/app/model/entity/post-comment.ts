import {User} from "./user";

export class PostComment {
  public constructor(
    public comment_id: number,
    public owner: User,
    public post_id: number,
    public body: string
  ) {
  }
}
