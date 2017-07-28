import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs'

@Injectable()
export class UserService {

  constructor(private _http:Http) {}

  login(user){
    console.log(' user login service', user)
    return this._http.post('/login', user).map(data => data.json()).toPromise()
  }


   get_logged_in_user(){
    return this._http.get("/get_logged_in_user")
            .map(data => data.json())
            .toPromise()
  }

  get_all_users(){
    return this._http.get("/get_all_users")
            .map(data => data.json())
            .toPromise()
  }

  createTask(task){
    console.log(' user service for creating task', task)
    return this._http.post('/createTask', task).map(data => data.json()).toPromise()
  }
  
}
