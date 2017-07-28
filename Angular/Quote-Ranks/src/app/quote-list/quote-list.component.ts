import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {

  constructor() { }
  @Input() quotes;
  @Input() newQuote;
 

  // outputs
  @Output() increase = new EventEmitter();
  @Output() decrease = new EventEmitter();

  voteUp(quoteId){
    this.increase.emit(quoteId);
  }

  voteDown(quoteId){
    this.decrease.emit(quoteId);
  }



  ngOnInit() {
  }

}
