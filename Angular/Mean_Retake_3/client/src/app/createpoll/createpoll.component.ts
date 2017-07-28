import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

import { User } from "./../user";
import { Poll } from "./../poll"
import { HttpService } from "./../http.service"

@Component({
  selector: 'app-createpoll',
  templateUrl: './createpoll.component.html',
  styleUrls: ['./createpoll.component.css']
})
export class CreatepollComponent implements OnInit {

  poll = new Poll

  constructor(private user_service: HttpService, private router:Router) { }

  ngOnInit() {
  }

  createpoll(poll){
    //catching poll inputs here
    console.log(this.poll)
      this.user_service.createpoll(this.poll)
      .then(data => {
        console.log('was a post created? from create poll component.ts', data)
        this.router.navigate(["/dashboard"])
      })
      .catch(err => {
        console.log('error while creating task', err)
      })
      this.poll = new Poll;

  }

}
