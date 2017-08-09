import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { UserComponent }  from './users/user.component';
import { AboutComponent }  from './about/about.component';
import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule ,FormsModule, HttpModule,routing],
  declarations: [ AppComponent, UserComponent,AboutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
