import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-united',
  templateUrl: './united.component.html',
  styleUrls: ['./united.component.css']
})
export class UnitedComponent implements OnInit {
  @Input() mypower;
   multiplier:number = 90;
  charge:number;
  message:any;
 
 chargeLevel(){
  this.charge = this.mypower * this.multiplier
  if (this.charge === 50000){
    this.message='The One'
  } else if (this.charge > 200000){
    this.message="SuperLative!"
  } else if (this.charge > 9000){
    this.message = "Over 9000"
  }
 }


  constructor() { }

  ngOnInit() {
  }

}
