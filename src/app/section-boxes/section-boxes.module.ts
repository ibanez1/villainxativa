import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionBoxesComponent } from './section-boxes.component';



@NgModule({
  declarations: [SectionBoxesComponent],
  imports: [
    CommonModule
  ],
  exports: [SectionBoxesComponent]

})
export class SectionBoxesModule { }
