import {PostType} from "../post-type";
import {JsonUser} from "./json-user";
import {JsonComment} from "./json-comment";

export interface JsonPost {
  postId: number,
  postType: PostType,
  creationDate: string,
  lastActivityDate: string,
  lastEditDate: string,
  link: string,
  title: string,
  body: string,
  comments: Array<JsonComment>,
  upVoteCount: number,
  downVoteCount: number,
  owner: JsonUser
}
