import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterOutlet,
  ], // Pas besoin d'ajouter HttpClientModule ici
  providers: [
    provideHttpClient(), // Configure le client HTTP pour l'ensemble de l'application
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }