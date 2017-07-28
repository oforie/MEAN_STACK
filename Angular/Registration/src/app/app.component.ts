import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

users = []
check_password: string;
status = false;

user = {
  first_name:"",
  last_name:"",
  email:"",
  password:"",
  address:"",
  unit:"",
  city:"",
  lucky:"",
}


onSubmit(){
  this.status=true;
  console.log('submitting this thing')
  console.log(this.user)
  this.user = {
  first_name:"",
  last_name:"",
  email:"",
  password:"",
  address:"",
  unit:"",
  city:"",
  lucky:"",
}
  }
  


}
