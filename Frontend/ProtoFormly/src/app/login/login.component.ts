import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formLogin: FormGroup;

  errorMessage: string | null = null;

  constructor( private formBuilder: FormBuilder,private loginService: UserService, private router : Router ) {
    this.formLogin = this.formBuilder.group({
      inputemail: ['', [Validators.required]],
      inputPassword: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.formLogin.valid) {
      const userData = {
        email: this.formLogin.value.inputemail,
        password: this.formLogin.value.inputPassword,
      };

      this.loginService.login(userData).subscribe(
        (response) => {
          this.loginService.saveJwt(response.token);
          // Vous pouvez rediriger l'utilisateur ou afficher un message de succès
          console.log('Utilisateur est connecté avec succès!', response);
        },
        (error) => {
          this.errorMessage = 'Une erreur est survenue, veuillez réessayer.';
          console.error(error);
        }
      );
    } else {
      this.errorMessage = 'Veuillez vérifier vos informations.';
    }
  }

  navigateRegister(): void {
    this.router.navigate([`/register`]);
  }
}

