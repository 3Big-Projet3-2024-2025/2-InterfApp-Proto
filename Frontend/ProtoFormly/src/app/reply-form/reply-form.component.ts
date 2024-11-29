import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyFieldConfig, FormlyFormOptions, FormlyModule } from '@ngx-formly/core';
import { FormService } from '../service/form.service';

@Component({
  selector: 'app-reply-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule,HttpClientModule,FormlyBootstrapModule,FormlyModule],
  templateUrl: './reply-form.component.html',
  styleUrl: './reply-form.component.css'
})
export class ReplyFormComponent implements OnInit {
  title! : String;
  questions! : FormGroup[];
  formReply = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [];

  readonly mapType : Map<String,String> = new Map([
    ["Open Answer", "input"],
    ["Rating", "checkbox"],
    ["Multiple Choice", "select"],
  ]);

  constructor(private route: ActivatedRoute, private formService: FormService) {}

  ngOnInit(){
    const formId = this.route.snapshot.paramMap.get('id');
    if (formId) {
      this.formService.getFormById(formId).subscribe(
        (data) => {
          console.log(data);
          this.title = data.title;
          this.questions = data.questions;
          this.fields = this.transformFormGroupIntoFormlyField();
        },
        (error) => {
          console.error('Error loading form:', error);
        }
      );
    }
  }

  transformFormGroupIntoFormlyField() : FormlyFieldConfig[] {
    const formlyFields: FormlyFieldConfig[] = [];

    console.log(this.questions);
  
    this.questions.forEach((form: any, index: number) => {
      
      // Créer une configuration FormlyField pour chaque question
      const field: FormlyFieldConfig = {
        key: `question_${index}`,
        type: this.mapType.get(form.inputTypeQuestion) as string || "input",
        templateOptions: {
          label: form.inputQuestion ,
          required: form.required || false,
          options: (form.inputChoices || []).map((choice: string) => ({ value:choice , label:choice }) ), // Pour les types "select" ou "radio", etc.
        },
      };
  
      formlyFields.push(field);
    });
  
    return formlyFields;
  }



  submit(){

  }
}
