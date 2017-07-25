import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { TestComponent} from './test/test.component';
import { NewComponent} from './new/new.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'lets_play',
    component: TestComponent
  },

  {
    path: 'new_question',
    component: NewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
