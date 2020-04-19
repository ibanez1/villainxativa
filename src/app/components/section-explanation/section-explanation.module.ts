import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionExplanationComponent } from './section-explanation.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SectionExplanationComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
exports: [SectionExplanationComponent],

})
export class SectionExplanationModule { }
