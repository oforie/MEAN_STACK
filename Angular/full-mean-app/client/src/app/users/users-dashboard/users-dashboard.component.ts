import { Component, OnInit } from '@angular/core';
import { User } from './../user'
import { UserService } from './../user.service'

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.css']
})
export class UsersDashboardComponent implements OnInit {
  user_list: Array<User>

  constructor(private user_service: UserService) { }

  ngOnInit() {
    return this.user_service.get_all_users()
        .then(data => this.user_list = data)
        .catch(err => console.log(err))
  }

}
