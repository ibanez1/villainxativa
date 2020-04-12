import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionContentComponent } from './section-content.component';



@NgModule({
  declarations: [SectionContentComponent],
  imports: [
    CommonModule
  ],
  exports: [SectionContentComponent]
})
export class SectionContentModule { }
