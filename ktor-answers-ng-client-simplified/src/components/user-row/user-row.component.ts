import {Component, Input} from '@angular/core';
import {User} from "../../model/user";

@Component({
  selector: '[app-user-row]',
  templateUrl: './user-row.component.html',
  styleUrls: ['./user-row.component.css']
})
export class UserRowComponent {
  @Input() user: User | null = null;
}
