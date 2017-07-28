import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  status=false;
  question_status = false;
  constructor(private user_service: UserService, private router: Router) { }

  ngOnInit() {
  }

  changeQuestionStatus(eventData){
    console.log(eventData)
    this.question_status = true;
  }

}
