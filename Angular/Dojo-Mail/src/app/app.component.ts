import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  emails = [
    {email: 'eric@ofori.com', important: true, subject: 'coding Dojo', content: 'Trying to stay afloat in the course.'},
    {email: 'sam@agyei.com', important: true, subject: 'Soccer', content: 'SPU soccer is taking flight!'},
    {email: 'akosua@renner.com', important: false, subject: 'Complete', content: 'Done for the day'},
    {email: 'g@afia.com', important: false, subject: 'Iterinary', content: 'Forward over mom\'s iterinary'}
  ]

  myColor = 'red';
}
