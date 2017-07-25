import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class HttpService {

  observedUser = new BehaviorSubject(null);

  constructor(private _http:Http) {
   }

  updateUser(user){
    this.observedUser.next(user)
  }

  login(user){
    console.log('http login service')
    return this._http.post('/login', user).map(data => data.json()).toPromise()
  }

  create_question(question){
    console.log('http new question service hit!')
    return this._http.post('/new_question', question).map(data => data.json()).toPromise()
  
  }

  get_questions(){
    console.log('http get_Question service hit!')
    return this._http.get('/getQuestions').map(data => data.json()).toPromise()
  
  }

}
