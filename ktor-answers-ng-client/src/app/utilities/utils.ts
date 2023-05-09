import {Validators} from '@angular/forms';
import {JsonQuestion} from "../model/api/json-question";
import {Question} from "../model/entity/question";
import {JsonUser} from "../model/api/json-user";
import {User} from "../model/entity/user";
import {JsonComment} from "../model/api/json-comment";
import {PostComment} from "../model/entity/post-comment";
import {JsonAnswer} from "../model/api/json-answer";
import {Answer} from "../model/entity/answer";

export function createTextValidator() {
    return Validators.compose([
        Validators.required,
        Validators.pattern(new RegExp(/^[A-Za-z0-9,.\- ]+$/))]
    );
}

export function remapQuestion(json: JsonQuestion): Question {
    return new Question(
        json.post_id,
        json.post_type,
        new Date(json.creation_date),
        new Date(json.last_activity_date),
        new Date(json.last_edit_date),
        json.link,
        json.title,
        json.body,
        remapComments(json.comments),
        json.up_vote_count,
        json.down_vote_count,
        remapUser(json.owner),
        json.is_answered,
        json.accepted_answer_id,
        remapAnswers(json.answers)
    )
}

export function remapUser(json: JsonUser): User {
    return new User(
        json.user_id,
        json.user_type,
        json.display_name,
        new Date(json.creation_date),
        json.link,
        json.location,
        json.about_me
    )
}

export function remapComments(jsonArray: JsonComment[]): PostComment[] {
    return jsonArray.map(json => new PostComment(
        json.comment_id,
        remapUser(json.owner),
        json.post_id,
        json.body
    ));
}

export function remapAnswers(jsonArray: JsonAnswer[]): Answer[] {
    return jsonArray.map(json => new Answer(
        json.post_id,
        json.post_type,
        new Date(json.creation_date),
        new Date(json.last_activity_date),
        new Date(json.last_edit_date),
        json.link,
        json.title,
        json.body,
        remapComments(json.comments),
        json.up_vote_count,
        json.down_vote_count,
        remapUser(json.owner),
        json.accepted,
        json.question_id
    ));
}