import { Component, OnInit } from '@angular/core';
import { Player } from './../questions/player';


@Component({
  selector: 'app-newplay',
  templateUrl: './newplay.component.html',
  styleUrls: ['./newplay.component.css']
})
export class NewplayComponent implements OnInit {
  player = Player
  
  constructor() { }

  ngOnInit() {
  }

}
