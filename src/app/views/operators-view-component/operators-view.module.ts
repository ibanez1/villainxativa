import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { NavigatorModule } from 'src/app/components/navigator-component/navigator.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routeOperatorsView } from './operators-view.router';
import { OperatorsViewComponent } from './operators-view.component';

@NgModule({
  declarations: [
    OperatorsViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([routeOperatorsView]),
    NavigatorModule
    ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OperatorsViewModule { }