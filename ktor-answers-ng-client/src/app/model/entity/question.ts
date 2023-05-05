import {Post} from "./post";
import {PostType} from "../post-type";
import {PostComment} from "./post-comment";
import {User} from "./user";
import {Answer} from "./answer";

export class Question extends Post {
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
    public is_answered: boolean,
    public accepted_answer_id: number,
    public answers: Array<Answer>
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
