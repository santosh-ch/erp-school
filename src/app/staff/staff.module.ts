import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarksEntryFormComponent } from './marks-entry-form/marks-entry-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MarksEntryFormComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [MarksEntryFormComponent]
})
export class StaffModule { }
