import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from './../http.service'
import 'rxjs'
import { Subscription } from "rxjs";
import { Router } from '@angular/router'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  tests=[];
  user_response={
    1:"",
    2:"",
    3:""
  }
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    console.log('entering init on test component......')
    this._httpService.get_questions()
      .then(data => {
        console.log('questions from test component', data)
        this.tests = data
      })
      .catch(err => {
        console.log(err)
      })
  }

}
