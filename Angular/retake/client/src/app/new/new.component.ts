import { Component, OnInit, OnDestroy } from '@angular/core';
import { Frontendquestion } from './../frontendquestion'
import { Frontendanswer } from './../frontendanswer'
import { HttpService } from './../http.service'
import 'rxjs'
import { Subscription } from "rxjs";
import { Router } from '@angular/router'


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnDestroy {
  user = ''
  subscription: Subscription
  question = new Frontendquestion
  correct = new Frontendanswer
  fakeOne = new Frontendanswer
  fakeTwo = new Frontendanswer
  error_message: String

  constructor(private _httpService: HttpService, private _router:Router) {
    this.subscription = this._httpService.observedUser.subscribe(
      user => this.user = user,
      err => console.log(err),
      () => {}
    )
   }

  ngOnInit() {
  }

  new_question(){
    console.log('new question hit!, user ID', this.user)
    this.correct.tag = true
    this.question._creator= this.user
    this.fakeOne.tag = false;
    this.fakeTwo.tag = false;
    this.question.answers.push(this.correct, this.fakeOne, this.fakeTwo)
    this._httpService.create_question(this.question)
      .then(data => {
       console.log(data)
       this._router.navigate([''])
      })

      .catch(err => {
        console.log(err)
        this.error_message = err
      })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
