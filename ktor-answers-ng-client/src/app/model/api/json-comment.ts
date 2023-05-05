import {JsonUser} from "./json-user";

export interface JsonComment {
  comment_id: number,
  owner: JsonUser,
  post_id: number,
  body: string
}
