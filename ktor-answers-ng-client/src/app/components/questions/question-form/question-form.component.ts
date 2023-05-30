import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {createTextValidator} from "../../../utilities/utils";
import {Question} from "../../../model/entity/question";
import {User} from "../../../model/entity/user";
import {QuestionService} from "../../../services/question-service/question.service";

@Component({
    selector: 'app-question-form',
    templateUrl: './question-form.component.html',
    styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent {
    @Output() submitted = new EventEmitter<boolean>();

    constructor(private fb: FormBuilder, public questionService: QuestionService) {
    }

    questionForm = this.fb.group({
        id: [1001],
        title: ['Test Title', createTextValidator()],
        body: ['Test Body', createTextValidator()]
    });

    createNewQuestion() {
        let now = new Date();
        let user: User = {
            userId: 101,
            displayName: "Jane Smith",
            userType: "REGISTERED",
            creationDate: now,
            link: ""
        };
        let id = this.questionForm.controls.id.value ?? 0;
        let title = this.questionForm.controls.title.value ?? "";
        let body = this.questionForm.controls.body.value ?? "";

        let question: Question = {
            postId: 1112,
            postType: "QUESTION",
            creationDate: new Date(),
            lastActivityDate: new Date(),
            lastEditDate: new Date(),
            link: "",
            title: title,
            body: body,
            comments: [],
            upVoteCount: 0,
            downVoteCount: 0,
            owner: user,
            isAnswered: false,
            acceptedAnswerId: -1,
            answers: []
        }

        this.questionService
            .createQuestion(question)
            .subscribe(() => {
                this.questionService.refresh();
                this.submitted.emit(true);
            });
    }

    checkValid(control: FormControl) : string {
        if(control.errors) {
            return "is-invalid";
        }
        return 'is-valid';
    }
}
