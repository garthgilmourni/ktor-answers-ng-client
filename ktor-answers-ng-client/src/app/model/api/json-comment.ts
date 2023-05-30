import {JsonUser} from "./json-user";

export interface JsonComment {
  commentId: number,
  owner: JsonUser,
  postId: number,
  body: string
}
