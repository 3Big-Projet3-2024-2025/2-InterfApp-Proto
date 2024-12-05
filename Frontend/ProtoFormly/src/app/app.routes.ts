import { Routes } from '@angular/router';
import { CreateFormComponent } from './create-form/create-form.component';
import { OpenFormComponent } from './open-form/open-form.component';
import { ReplyFormComponent } from './reply-form/reply-form.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    { path: 'CreateForm', component: CreateFormComponent},
    { path: '', redirectTo: '/forms', pathMatch: 'full' },
    { path: 'forms', component: OpenFormComponent },
    { path: 'form/:id', component:  ReplyFormComponent},
    { path: 'register', component:  RegisterComponent},
    { path: 'login', component:  LoginComponent},
];
