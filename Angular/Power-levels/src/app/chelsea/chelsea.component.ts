import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chelsea',
  templateUrl: './chelsea.component.html',
  styleUrls: ['./chelsea.component.css']
})
export class ChelseaComponent implements OnInit {
  @Input() mypower;
  multiplier:number = 500;
  charge:number;
  message:any;
 
 chargeLevel(){
  this.charge = this.mypower * 500
  if (this.charge === 50000){
    this.message='The One'
  } else if (this.charge > 200000){
    this.message="SuperLative!"
  } else if (this.charge > 9000){
    this.message = "Over 9000"
  }
  return this.message;
 }
 


  constructor() { }

  ngOnInit() {
  }

}
