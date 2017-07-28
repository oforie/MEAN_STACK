import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'

import { Player } from './../questions/player';
import { UserService } from './../user.service'; 

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  ngOnInit() {
  }

  status = false
  players: Array<Player>
  new_player = new Player
  // question_status = false;

constructor(private user_service: UserService, private router: Router) { }

 @Input() question_status;
  
   onClick(){
    this.status = true; //activates *ngFor statement on tempolate for player name
  }

  onSubmit(){
    console.log(this.new_player.name)
    this.user_service.newplay(this.new_player)
    //   .then(() => {
    //     // this.players.push(this.new_player)
    //     console.log(this.players)
    this.new_player = new Player
    this.router.navigate(["newplay"])
    //   })
    //   .catch(err => console.log(err))
    
  }

}
