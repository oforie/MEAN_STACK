import { Injectable } from '@angular/core';
import { Http } from "@angular/http"
import 'rxjs'

import { User } from './user';
import { Poll } from './poll';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

   login(user: User){
    return this.http.post("/login", user)
            .map(data => data.json())
            .toPromise()
  }

  createpoll(poll: Poll){
    console.log('logging poll from http service', poll)
    return this.http.post('/createpoll', poll)
        .map(data => data.json())
         .toPromise()
  }

  getpolls(){
    return this.http.get("/all_polls")
            .map(data => data.json())
            .toPromise()
  }

  onepoll(poll_id){
    console.log('this is the poll id being sent out', poll_id)
    return this.http.get('/onepoll', poll_id)
      .map(data => data.json())
      .toPromise()
    
  }



}
