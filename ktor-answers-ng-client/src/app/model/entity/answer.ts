import {Post} from "./post";
import {PostType} from "../post-type";
import {PostComment} from "./post-comment";
import {User} from "./user";

export class Answer extends Post {
  public constructor(
    post_id: number,
    post_type: PostType,
    creation_date: Date,
    last_activity_date: Date,
    last_edit_date: Date,
    link: string,
    title: string,
    body: string,
    comments: Array<PostComment>,
    up_vote_count: number,
    down_vote_count: number,
    owner: User,
    public accepted: boolean,
    public question_id: number
  ) {
    super(
      post_id,
      post_type,
      creation_date,
      last_activity_date,
      last_edit_date,
      link,
      title,
      body,
      comments,
      up_vote_count,
      down_vote_count,
      owner
    );
  }
}
