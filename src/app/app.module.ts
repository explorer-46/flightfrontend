import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FlightComponent } from './flight/flight.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ViewflightsComponent } from './viewflights/viewflights.component';
import{HttpClientModule}from '@angular/common/http'


const link:Routes=[
  {path:"",component:FlightComponent},
  {path:"view",component:ViewflightsComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FlightComponent,
    ViewflightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(link)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
