import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user-service/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  constructor(public userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.refresh()
  }
}
