import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule


import { AppComponent } from './app.component';
import { SoundersComponent } from './sounders/sounders.component';
import { GalaxyComponent } from './galaxy/galaxy.component';
import { LiverpoolComponent } from './liverpool/liverpool.component';
import { UnitedComponent } from './united/united.component';
import { CityComponent } from './city/city.component';
import { ChelseaComponent } from './chelsea/chelsea.component';

@NgModule({
  declarations: [
    AppComponent,
    SoundersComponent,
    GalaxyComponent,
    LiverpoolComponent,
    UnitedComponent,
    CityComponent,
    ChelseaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
