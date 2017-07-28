import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

import { User } from "./../user";
import { Poll } from "./../poll"
import { HttpService } from "./../http.service"

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
poll_list: Array<Poll>
 user = new User
 input:string=''
  


  constructor(private user_service: HttpService, private route: Router) { }

  ngOnInit() {
      this.user_service.getpolls()
      .then(data => this.poll_list = data)
      .catch(err => console.log(err))

    }


  //search data do something with it later
  onSubmit(){
    console.log(this.input)
    this.input = '';



  
    
    
  }
}
