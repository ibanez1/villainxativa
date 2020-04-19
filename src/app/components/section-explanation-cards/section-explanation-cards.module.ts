import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionExplanationCardsComponent } from './section-explanation-cards.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SectionExplanationCardsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [SectionExplanationCardsComponent]
})
export class SectionExplanationCardsModule { }
