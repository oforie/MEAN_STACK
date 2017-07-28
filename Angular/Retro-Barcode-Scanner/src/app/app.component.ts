import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';

  colorArray = [];

  fillmyArray() {
    for (let i=0; i<5; i++){
      const genRand = (Math.floor(Math.random()*5))+1;
      console.log(genRand, 'randomly generated number')
 
      if (genRand== 0) {
        this.colorArray.push('#FFF8DC');
      } else if (genRand== 1) {
        this.colorArray.push('#A52A2A');
      } else if (genRand== 2) {
        this.colorArray.push('#DEB887');
      } else if (genRand== 3) {
        this.colorArray.push('#5F9EA0');
      } else if (genRand== 4) {
        this.colorArray.push('#7FFF00');
      }

    
    }
  }

  ngOnInit() {
    this.fillmyArray();
  }

}

