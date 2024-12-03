import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormlyModule } from '@ngx-formly/core';
import { importProvidersFrom } from '@angular/core';
import { FormlyGenericTypeModuleComponent } from './app/formly-generic-type-module/formly-generic-type-module.component';


bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [...(appConfig.providers || []),
        provideHttpClient(withFetch()),
         provideAnimationsAsync(),
         importProvidersFrom(
          FormlyModule.forRoot({
            types: [
              {
                name: 'date',
                component: FormlyGenericTypeModuleComponent,
                wrappers: ['form-field'], 
                defaultOptions: { templateOptions: { type: 'date' } }
              },
              {
                name: 'datetime',
                component: FormlyGenericTypeModuleComponent,
                wrappers: ['form-field'], 
                defaultOptions: { templateOptions: { type: 'datetime' } }
              },
              {
                name: 'email',
                component: FormlyGenericTypeModuleComponent,
                wrappers: ['form-field'], 
                defaultOptions: { templateOptions: { type: 'email' } }
              },
              {
                name: 'number',
                component: FormlyGenericTypeModuleComponent,
                wrappers: ['form-field'], 
                defaultOptions: { templateOptions: { type: 'number' } }
              },
              {
                name: 'range',
                component: FormlyGenericTypeModuleComponent,
                wrappers: ['form-field'], 
                defaultOptions: { templateOptions: { type: 'range' } }
              },
              {
                name: 'month',
                component: FormlyGenericTypeModuleComponent,
                wrappers: ['form-field'], 
                defaultOptions: { templateOptions: { type: 'month' } }
              },
              {
                name: 'time',
                component: FormlyGenericTypeModuleComponent,
                wrappers: ['form-field'], 
                defaultOptions: { templateOptions: { type: 'time' } }
              },
              {
                name: 'tel',
                component: FormlyGenericTypeModuleComponent,
                wrappers: ['form-field'], 
                defaultOptions: { templateOptions: { type: 'tel' } }
              },
              {
                name: 'week',
                component: FormlyGenericTypeModuleComponent,
                wrappers: ['form-field'], 
                defaultOptions: { templateOptions: { type: 'week' } }
              },
              {
                name: 'color',
                component: FormlyGenericTypeModuleComponent,
                wrappers: ['form-field'], 
                defaultOptions: { templateOptions: { type: 'color' } }
              },   
            ],
          })
         )
        ],
         
}).catch((err) => console.error(err));
