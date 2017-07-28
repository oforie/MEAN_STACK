import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { UserService } from './../user.service';
import { User } from './../user';
import { Task } from './../task';
import 'rxjs'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  user = new User
  // name = this.user.name
  task = new Task

  constructor(private _httpService:UserService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(user: User){
    console.log('printing from the index component', this.user)
    this._httpService.login(this.user)
      .then(data => {
        console.log ('this data is being forwarded to router', data)
        this.router.navigate(["/home/dashboard"])
      })
      .catch(err => {
        console.log(err)
      })
      this.user = new User
      
  }

}
