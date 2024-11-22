import { Component, QueryList, ViewChildren } from '@angular/core';
import { QuestionComponent } from '../question/question.component';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-form',
  standalone: true,
  imports: [QuestionComponent, CommonModule],
  templateUrl: './create-form.component.html',
  styleUrl: './create-form.component.css'
})
export class CreateFormComponent {
  questions: number[] = [1]; // Liste des identifiants de questions
  questionForms: FormGroup[] = [];// Liste des FormGroups des questions

  @ViewChildren(QuestionComponent) questionComponents!: QueryList<QuestionComponent>;

  addQuestion(): void {
    const newId = this.questions.length + 1;
    this.questions.push(newId); // Ajoute une nouvelle question
  }

  removeQuestion(index: number): void {
    this.questions.splice(index, 1); // Supprime la question à l'index donné
  }

  requestForms(): void {
    this.questionComponents.toArray().forEach((questionComp) => {
      questionComp.emitFormGroup(); // Demande à chaque enfant de fournir son FormGroup
    });
  }

  saveForm(form: FormGroup): void {
    this.questionForms.push(form); // Ajoute le FormGroup de l'enfant à la liste
  }

  saveQuestions(): void {
    this.requestForms();
    console.log('Enregistrer les questions:', this.questions);
    // Ajouter une logique d'enregistrement ici (API, stockage local, etc.)
  }
}
