import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionBoxesComponent } from './section-boxes.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SectionBoxesComponent],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports: [SectionBoxesComponent]

})
export class SectionBoxesModule { }
