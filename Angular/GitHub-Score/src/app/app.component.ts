import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Github Score';
  username=null;
  score=null;
  userExists=null;
  promise;

  
  constructor(private _httpService: HttpService){}

  getScore(){
    this.promise = this._httpService.retrieveScore(this.username)
    if (this.promise){
    this.promise.then((user) => {
      if (user.id){
        this.userExists = true;
        this.score = user.public_repos + user.followers;
      } else {
        this.userExists = false;
        this.score = null;
      }
      this.username = null;
      console.log(this.username)
    })
    .catch((err) => {
      this.userExists = false;
    });
  } else {
    this.userExists = false;
  }
  }



}
