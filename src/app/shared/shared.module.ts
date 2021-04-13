import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeeTotalPipe } from './fee-total.pipe';

@NgModule({
  declarations: [FeeTotalPipe],
  imports: [
    CommonModule
  ],
  exports: [FeeTotalPipe]
})
export class SharedModule { }
