import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Player } from './questions/player';
import 'rxjs'

@Injectable()
export class UserService {

  constructor(private http: Http) { }

    play(player: Player){
      return this.http.post('/play', player)
        .map(data => data.json())
        .toPromise()

}
    newplay(player: Player){
      return this.http.get('/newplay') 
        .map(data => data.json())
        .toPromise()


}
      }
