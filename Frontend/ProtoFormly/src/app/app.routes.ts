import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { QuestionComponent } from './question/question.component';

export const routes: Routes = [
    { path: 'question', component: QuestionComponent},
    { path: '', redirectTo: '/question', pathMatch: 'full'}
];
