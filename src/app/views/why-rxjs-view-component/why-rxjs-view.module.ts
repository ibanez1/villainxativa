import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { WhyRxjsViewComponent } from './why-rxjs-view.component';
import { HeaderModule } from '../../components/header/header.module';
import { NavigatorModule } from 'src/app/components/navigator-component/navigator.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routeWhyRxjsView } from './why-rxjs-view.router';

@NgModule({
  declarations: [
    WhyRxjsViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([routeWhyRxjsView]),
    NavigatorModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WhyRxjsViewModule { }