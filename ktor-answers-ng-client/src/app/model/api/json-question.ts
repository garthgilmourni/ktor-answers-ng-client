import {JsonPost} from "./json-post";
import {JsonAnswer} from "./json-answer";

export interface JsonQuestion extends JsonPost {
  is_answered: boolean,
  accepted_answer_id: number,
  answers: Array<JsonAnswer>
}
