import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { WhyRxjsViewComponent } from './why-rxjs-view.component';
import { HeaderModule } from '../../components/header/header.module';
import { NavigatorModule } from 'src/app/components/navigator-component/navigator.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routeWhyRxjsView } from './why-rxjs-view.router';
import { SectionExplanationModule } from 'src/app/components/section-explanation/section-explanation.module';
import { SectionExplanationCardsModule } from 'src/app/components/section-explanation-cards/section-explanation-cards.module';

@NgModule({
  declarations: [
    WhyRxjsViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([routeWhyRxjsView]),
    NavigatorModule,
    SectionExplanationModule,
    SectionExplanationCardsModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WhyRxjsViewModule { }