import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreatepollComponent } from './createpoll/createpoll.component';
import { ShowpollComponent } from './showpoll/showpoll.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/login'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'createpoll', component: CreatepollComponent},
  {path: 'showpoll/:poll_id', component: ShowpollComponent},
  {path: 'showpoll/delete/:poll_id', component: ShowpollComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
