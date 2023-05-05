import {PostType} from "../post-type";
import {JsonUser} from "./json-user";
import {JsonComment} from "./json-comment";

export interface JsonPost {
  post_id: number,
  post_type: PostType,
  creation_date: string,
  last_activity_date: string,
  last_edit_date: string,
  link: string,
  title: string,
  body: string,
  comments: Array<JsonComment>,
  up_vote_count: number,
  down_vote_count: number,
  owner: JsonUser
}
