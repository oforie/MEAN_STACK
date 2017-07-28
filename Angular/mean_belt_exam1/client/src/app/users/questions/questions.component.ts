import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'

import { UserService } from './../user.service'; 
import { Question } from "../questions/question";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions: Array<Question> = [];
  new_question = new Question
  question_status= false;

constructor(private user_service: UserService, private router: Router) { }

  ngOnInit() {
  }

  @Output() addedQuestion = new EventEmitter();

  addQuestion(){
    console.log(this.new_question)
    this.questions.push(this.new_question)  //to be added to db later
    this.question_status = true
    this.addedQuestion.emit(this.question_status = true)
    this.router.navigate(["/"])
  }

  onClick(){
    this.router.navigate(["/"])

  }
}
