import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { QuestionComponent } from './question/question.component';
import { CreateFormComponent } from './create-form/create-form.component';

export const routes: Routes = [
    { path: 'CreateForm', component: CreateFormComponent},
    { path: '', redirectTo: '/CreateForm', pathMatch: 'full'}
];
