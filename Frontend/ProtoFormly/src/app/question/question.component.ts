import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators,  ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {
  formQuestion: FormGroup;
  questionTypes: string[] = ['Multiple choice', 'Open Question'];
  choices: string[] = ['Choice 1', 'Choice 2'];

  constructor(private formBuilder: FormBuilder){
    this.formQuestion = this.formBuilder.group({
      inputQuestion:['', Validators.required],
      inputTypeQuestion: ['', Validators.required],
      inputChoices: this.formBuilder.array(this.choices.map(choice => this.formBuilder.control(choice)))
    })
  }

  addChoice(): void {
    this.choices.push("Choice" + this.choices.length);
  }

  removeChoice(index: number): void {
    if (this.choices.length > 1) {
      this.choices.splice(index, 1);
    }
  }

  removeQuestion(): void {
    // Logic to remove the question (could emit an event to parent component)
    console.log('Question removed');
  }

  onTypeChange():void{

  }

  onSubmit():void{

  }
}
