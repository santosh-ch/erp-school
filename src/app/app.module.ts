import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AdmissionModule} from './admission/admission.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdmissionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
