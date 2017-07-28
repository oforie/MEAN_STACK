import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sounders',
  templateUrl: './sounders.component.html',
  styleUrls: ['./sounders.component.css']
})
export class SoundersComponent implements OnInit {

  @Input() mypower;
   multiplier:number = 1;
  charge:number;
  message:any;
  status:boolean = false;
 
 chargeLevel(){
  this.charge = this.mypower * this.multiplier
  if (this.charge === 50000){
    this.message='The One'
    this.status = true;
  } else if (this.charge > 200000){
    this.message="SuperLative!"
     this.status = true;   
  } else if (this.charge = 9000){
    this.message = "Over 9000"
    this.status = true;
  }
 }
  
  constructor() { }

  ngOnInit() {
  }

}
