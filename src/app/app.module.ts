import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import {MomentModule} from 'angular2-moment';


import { AppComponent } from './app.component';
import { CurrentDayComponent } from './current-day/current-day.component';

import {AppService} from "./app.service";
import { HeaderComponent } from './header/header.component';
import { SelectTextDirective } from './util/selecttext.directive';
import { OtherDaysComponent } from './other-days/other-days.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentDayComponent,
    HeaderComponent,
    SelectTextDirective,
    OtherDaysComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MomentModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
