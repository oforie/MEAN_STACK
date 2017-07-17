import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  today = new Date();
  lastSelected = null;

  getDatebyZone(timezone){
    this.today = new Date();
    if (timezone === 'PST'){
      this.today.setHours(this.today.getHours()+0)
    } else if (timezone === 'MDT'){
      this.today.setHours(this.today.getHours()+1)
    } else if (timezone === 'CST'){
      this.today.setHours(this.today.getHours()+2)
    } else if (timezone === 'EST'){
      this.today.setHours(this.today.getHours()+3)
    } else if (timezone === 'clear'){
      this.today = null;
    }
    this.lastSelected = timezone;
    }
  }


