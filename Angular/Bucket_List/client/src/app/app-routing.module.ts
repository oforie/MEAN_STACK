import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { ShowoneComponent } from './home/showone/showone.component'

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'home', component: HomeComponent, children:[
      { path: 'dashboard', component: DashboardComponent},
      { path: 'showone', component: ShowoneComponent},
      { path: 'showone/:id', component: ShowoneComponent}
      ]},
  { path: 'dashboard', component: DashboardComponent },
  { path: "", pathMatch: 'full', redirectTo: '/index' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
