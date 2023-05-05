import {PostType} from "../post-type";
import {User} from "./user";
import {PostComment} from "./post-comment";

export class Post {
  public constructor(
    public post_id: number,
    public post_type: PostType,
    public creation_date: Date,
    public last_activity_date: Date,
    public last_edit_date: Date,
    public link: string,
    public title: string,
    public body: string,
    public comments: Array<PostComment>,
    public up_vote_count: number,
    public down_vote_count: number,
    public owner: User
  ) {
  }
}
