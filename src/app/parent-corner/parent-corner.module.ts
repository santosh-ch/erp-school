import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentRegistrationComponent } from './parent-registration/parent-registration.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ParentRegistrationComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [ParentRegistrationComponent]
})
export class ParentCornerModule { }
