import { Component, OnInit } from '@angular/core';
import { Frontenduser } from './../frontenduser';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user = new Frontenduser

  constructor(private _httpService:HttpService) {

   }

  ngOnInit() {
    this.user.name = prompt ('Enter your name to start game')
    console.log(this.user)
    this._httpService.login(this.user)
      .then(data => {
        console.log('database response', data)
        this._httpService.updateUser(data)
      })
      .catch(err => {
        console.log(err)
      })

  }

}
