import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';

import 'rxjs' //brings in rxjs library w/ additional methods.

@Injectable()
export class UserService {

  constructor(private http: Http) { }

    login(user: User){
      return this.http.post('/login', user)
        .map(data => data.json())
        .toPromise()


    }

    get_all_users(){
      return this.http.get('/get_all_users')
        .map(data => data.json())
        .toPromise()
    }
}
