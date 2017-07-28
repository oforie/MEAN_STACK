import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

import { User } from "./../user"
import { HttpService } from "./../http.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  new_user = new User

  constructor(private http_service: HttpService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    console.log(this.new_user)
    this.http_service.login(this.new_user)
      .then(() => {
        this.router.navigate(["/dashboard"])
        console.log('user sent to the dashboard')
      })
      .catch(err => console.log(err))

    this.new_user = new User
  }

}