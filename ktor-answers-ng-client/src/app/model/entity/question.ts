import {Post} from "./post";
import {PostType} from "../post-type";
import {PostComment} from "./post-comment";
import {User} from "./user";
import {Answer} from "./answer";

export class Question extends Post {
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
    public isAnswered: boolean,
    public acceptedAnswerId: number,
    public answers: Array<Answer>
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
