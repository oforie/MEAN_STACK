import { Component } from '@angular/core';
import { Quote } from './quote'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  quote:Quote = new Quote(); //defining quote as a new instance of the Quote object
  quotes: Quote[] = [
  ]; //defining quotes as an array of quote objects
  index:number=0;
  
  newQuote(){
    console.log(this.quote);
    console.log(this.quotes);
    this.quote.id=this.index; //assigning an id to the quote object
    this.quotes.push(this.quote);// pushing the quote object into the quotes array
    this.quote = new Quote(); //clearing out the textbox
    this.index++;
  }


  upVote(id){
    for (let topic of this.quotes){
      if (topic.id == id){
          topic.votes++;
        return (topic.votes)
        }
    } 
  }

  downVote(id){
   for (let topic of this.quotes){
      if (topic.id == id){
          topic.votes--;
        return (topic.votes)
    } 
  }


}
}
