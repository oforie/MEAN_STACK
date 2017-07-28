import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { QuestionsComponent } from './users/questions/questions.component';
import { GamesComponent } from './users/games/games.component';
import { NewplayComponent } from './users/newplay/newplay.component';

const routes: Routes = [
    { path: 'play', component: GamesComponent  },
    { path: 'addQuestion', component: QuestionsComponent },
    { path: 'newplay', component: NewplayComponent },
    { path: '', pathMatch: 'full', redirectTo: '/play' }
  //   path: '',
  //   children: []
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
