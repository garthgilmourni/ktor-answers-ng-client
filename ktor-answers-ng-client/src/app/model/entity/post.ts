import {PostType} from "../post-type";
import {User} from "./user";
import {PostComment} from "./post-comment";

export class Post {
  public constructor(
    public postId: number,
    public postType: PostType,
    public creationDate: Date,
    public lastActivityDate: Date,
    public lastEditDate: Date,
    public link: string,
    public title: string,
    public body: string,
    public comments: Array<PostComment>,
    public upVoteCount: number,
    public downVoteCount: number,
    public owner: User
  ) {
  }
}
