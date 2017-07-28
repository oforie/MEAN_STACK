import { Component, OnInit } from '@angular/core';
import { UserService } from './../../user.service';
import { Router, ActivatedRoute } from "@angular/router";
import { User } from './../../user';
import { Task } from './../../task'

@Component({
  selector: 'app-showone',
  templateUrl: './showone.component.html',
  styleUrls: ['./showone.component.css']
})
export class ShowoneComponent implements OnInit {
current_user: User

  constructor(private _user_service: UserService, private router: Router, private _route: ActivatedRoute) {
    this._route.params.subscribe((param) => {
      console.log('showone user componenet loaded, url pass is', param.id)
    })
   }

  ngOnInit() {
    this._user_service.get_logged_in_user()
      .then(data => {
        if(data){
          this.current_user = data
        } else {
          this.router.navigate(["/login"])
        }
      })
      .catch(err => console.log(err))
  }

}
