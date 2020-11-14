import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WelcomeDashboardComponent } from "./welcome-dashboard/welcome-dashboard.component";
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path:'welcome',
    component:WelcomeDashboardComponent
  },
  {
    path:'quizz',
    component:QuizComponent
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
