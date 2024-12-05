import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formRegister: FormGroup;

  errorMessage: string | null = null;

  constructor( private formBuilder: FormBuilder,private registerService: UserService ) {
    this.formRegister = this.formBuilder.group({
      inputUsername: ['', Validators.required],
      inputemail: ['', [Validators.required, Validators.email]],
      inputPassword: ['', [Validators.required, Validators.minLength(6)]],
      inputConfirmPassword: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.formRegister.valid && this.formRegister.value.inputPassword === this.formRegister.value.inputConfirmPassword) {
      const userData = {
        username: this.formRegister.value.inputUsername,
        email: this.formRegister.value.inputemail,
        password: this.formRegister.value.inputPassword,
        roles:"",
      };
      
      this.registerService.register(userData).subscribe(
        (response) => {
          //rediriger l'utilisateur ou afficher un message de succès
          console.log('Utilisateur inscrit avec succès!', response);
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
}