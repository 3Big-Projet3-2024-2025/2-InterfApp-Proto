import { Routes } from '@angular/router';
import { CreateFormComponent } from './create-form/create-form.component';

export const routes: Routes = [
    { path: 'CreateForm', component: CreateFormComponent},
    { path: '', redirectTo: '/CreateForm', pathMatch: 'full'}
];
