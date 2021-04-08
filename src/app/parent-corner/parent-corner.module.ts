import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentRegistrationComponent } from './parent-registration/parent-registration.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ParentRegistrationComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ParentRegistrationComponent]
})
export class ParentCornerModule { }
