import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldType, FormlyModule } from '@ngx-formly/core';

@Component({
  selector: 'app-date-input',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, FormlyModule],
  templateUrl: './date-input.component.html',
  styleUrl: './date-input.component.css'
})
export class DateInputComponent extends FieldType{
  get control(): FormControl {
    return this.formControl as FormControl;
  }
}
