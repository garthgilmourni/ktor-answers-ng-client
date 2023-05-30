import {Post} from "./post";
import {PostType} from "../post-type";
import {PostComment} from "./post-comment";
import {User} from "./user";

export class Answer extends Post {
  public constructor(
    postId: number,
    postType: PostType,
    creationDate: Date,
    lastActivityDate: Date,
    lastEditDate: Date,
    link: string,
    title: string,
    body: string,
    comments: Array<PostComment>,
    upVoteCount: number,
    downVoteCount: number,
    owner: User,
    public accepted: boolean,
    public questionId: number
  ) {
    super(
      postId,
      postType,
      creationDate,
      lastActivityDate,
      lastEditDate,
      link,
      title,
      body,
      comments,
      upVoteCount,
      downVoteCount,
      owner
    );
  }
}
