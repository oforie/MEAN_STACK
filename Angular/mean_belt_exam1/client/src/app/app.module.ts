import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';

import { UserService } from './users/user.service';
import { QuestionsComponent } from './users/questions/questions.component';
import { GamesComponent } from './users/games/games.component';
import { NewplayComponent } from './users/newplay/newplay.component'

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    QuestionsComponent,
    GamesComponent,
    NewplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
