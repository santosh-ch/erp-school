import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmissionFormComponent } from './admission-form/admission-form.component';
import { FormsModule } from '@angular/forms';
import { FaqHighlighterDirective } from './faq-highlighter.directive';
import { SchoolFaqsComponent } from './school-faqs/school-faqs.component';



@NgModule({
  declarations: [AdmissionFormComponent, FaqHighlighterDirective, SchoolFaqsComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [AdmissionFormComponent, SchoolFaqsComponent]
})
export class AdmissionModule { }
