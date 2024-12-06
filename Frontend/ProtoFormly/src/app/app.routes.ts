import { Routes } from '@angular/router';
import { CreateFormComponent } from './create-form/create-form.component';
import { OpenFormComponent } from './open-form/open-form.component';
import { ReplyFormComponent } from './reply-form/reply-form.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guard/auth-guard.guard';
import { RoleGuard } from './guard/role-guard.guard';

export const routes: Routes = [
    { path: 'CreateForm', component: CreateFormComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'admin' }},
    { path: '', redirectTo: '/forms', pathMatch: 'full' },
    { path: 'forms', component: OpenFormComponent , canActivate: [AuthGuard, RoleGuard], data: { role: 'User' }},
    { path: 'form/:id', component:  ReplyFormComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'User' }},
    { path: 'register', component:  RegisterComponent},
    { path: 'login', component:  LoginComponent},
];
