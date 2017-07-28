import { Component, OnInit } from '@angular/core';
import { UserService } from './../../user.service';
import { Router } from "@angular/router";
import { User } from './../../user';
import { Task } from './../../task'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  _userService: any;
  current_user: User
 user_list: Array<User>
 task = new Task
 //catching the user selection
 taggeduser = new User

  constructor(private user_service:UserService, private router: Router) { }

  ngOnInit() {
    this.user_service.get_logged_in_user()
      .then(data => {
        if(data){
          this.current_user = data
        } else {
          this.router.navigate(["/login"])
        }
      })
      .catch(err => console.log(err))

    this.user_service.get_all_users()
      .then(data => this.user_list = data)
      .catch(err => console.log(err))
  }

  addTask(){
    this.user_service.createTask(this.task)
      .then(data => {
        console.log('was a task created?', data)
        this.router.navigate(["/home/dashboard"])
      })
      .catch(err => {
        console.log('error while creating task', err)
      })
      this.task = new Task;
  }
  onClick(){
    
  }

}


    

