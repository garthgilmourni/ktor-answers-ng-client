import {Component, Input} from '@angular/core';
import {PostComment} from "../../../model/entity/post-comment";

@Component({
  selector: 'app-comments-display',
  templateUrl: './comments-display.component.html',
  styleUrls: ['./comments-display.component.css']
})
export class CommentsDisplayComponent {
  @Input() comments: Array<PostComment> | null = null;
}
