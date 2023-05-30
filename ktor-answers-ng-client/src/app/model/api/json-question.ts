import {JsonPost} from "./json-post";
import {JsonAnswer} from "./json-answer";

export interface JsonQuestion extends JsonPost {
  isAnswered: boolean,
  acceptedAnswerId: number,
  answers: Array<JsonAnswer>
}
