import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  @Input() mypower;
  multiplier:number = 250;
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
