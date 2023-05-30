import {JsonPost} from "./json-post";

export interface JsonAnswer extends JsonPost {
  accepted: boolean,
  questionId: number
}
