import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeDashboardComponent } from './welcome-dashboard/welcome-dashboard.component';
import { AddQuizComponent } from './add-quiz/add-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    WelcomeDashboardComponent,
    AddQuizComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
