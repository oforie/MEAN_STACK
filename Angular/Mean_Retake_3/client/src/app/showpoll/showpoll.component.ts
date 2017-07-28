import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { HttpService } from "./../http.service"

@Component({
  selector: 'app-showpoll',
  templateUrl: './showpoll.component.html',
  styleUrls: ['./showpoll.component.css']
})
export class ShowpollComponent implements OnInit {
one_poll:any
  constructor(private _route: ActivatedRoute, private subscriptions: Subscription, private user_service:HttpService) {
    this._route.params.subscribe((param) => {
      this.one_poll = param.id
      console.log('this is the poll id received through the param', param.id)
    })
   }

  ngOnInit() {
  }

  onepoll(){
    this.user_service.onepoll(this.one_poll)
      .then(data => this.one_poll = data)
      .catch(err => console.log(err))
  }


  };
