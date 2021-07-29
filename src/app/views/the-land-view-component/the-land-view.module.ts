import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TheLandViewComponent } from './the-land-view.component';
import { HeaderModule } from '../../components/header/header.module';
import { NavigatorModule } from 'src/app/components/navigator-component/navigator.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routeTheLandView } from './the-land-view.router';
import { SectionExplanationModule } from 'src/app/components/section-explanation/section-explanation.module';
import { SectionExplanationCardsModule } from 'src/app/components/section-explanation-cards/section-explanation-cards.module';
import { FooterModule } from 'src/app/footer/footer.module';

@NgModule({
  declarations: [
    TheLandViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([routeTheLandView]),
    NavigatorModule,
    SectionExplanationModule,
    SectionExplanationCardsModule,
    FooterModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TheLandViewModule { }