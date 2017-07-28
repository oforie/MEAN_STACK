import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  switch = [true, true];
 

  changeSwitch(idx){
    this.switch[idx] = !this.switch[idx]
  }

}