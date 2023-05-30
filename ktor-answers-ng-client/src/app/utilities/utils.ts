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
        json.postId,
        json.postType,
        new Date(json.creationDate),
        new Date(json.lastActivityDate),
        new Date(json.lastEditDate),
        json.link,
        json.title,
        json.body,
        remapComments(json.comments),
        json.upVoteCount,
        json.downVoteCount,
        remapUser(json.owner),
        json.isAnswered,
        json.acceptedAnswerId,
        remapAnswers(json.answers)
    )
}

export function remapUser(json: JsonUser): User {
    return new User(
        json.userId,
        json.userType,
        json.displayName,
        new Date(json.creationDate),
        json.link,
        json.location,
        json.aboutMe
    )
}

export function remapComments(jsonArray: JsonComment[]): PostComment[] {
    return jsonArray.map(json => new PostComment(
        json.commentId,
        remapUser(json.owner),
        json.postId,
        json.body
    ));
}

export function remapAnswers(jsonArray: JsonAnswer[]): Answer[] {
    return jsonArray.map(json => new Answer(
        json.postId,
        json.postType,
        new Date(json.creationDate),
        new Date(json.lastActivityDate),
        new Date(json.lastEditDate),
        json.link,
        json.title,
        json.body,
        remapComments(json.comments),
        json.upVoteCount,
        json.downVoteCount,
        remapUser(json.owner),
        json.accepted,
        json.questionId
    ));
}