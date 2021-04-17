import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentRegistrationComponent } from './parent-registration/parent-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RegisterExtraCurricularsComponent } from './register-extra-curriculars/register-extra-curriculars.component';

@NgModule({
  declarations: [ParentRegistrationComponent, RegisterExtraCurricularsComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [ParentRegistrationComponent, RegisterExtraCurricularsComponent]
})
export class ParentCornerModule { }
