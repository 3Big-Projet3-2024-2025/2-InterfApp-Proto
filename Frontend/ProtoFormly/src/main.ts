import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormlyModule } from '@ngx-formly/core';
import { DateInputComponent } from './app/date-input/date-input.component';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { importProvidersFrom } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

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
                component: DateInputComponent,
                wrappers: ['form-field'], // Utiliser un wrapper si nécessaire
              },
            ],
          })
         )
        ],
         
}).catch((err) => console.error(err));
