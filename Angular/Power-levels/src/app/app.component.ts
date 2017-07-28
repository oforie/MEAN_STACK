import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  power:number;
  // power input from user
  power_val:number;
  
  onSubmit(){ 
    console.log(this.power_val)
    this.power_val = this.power
  }
}
