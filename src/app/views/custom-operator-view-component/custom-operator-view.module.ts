import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { NavigatorModule } from 'src/app/components/navigator-component/navigator.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routeCustomOperatorView } from './custom-operator-view.router';
import { CustomOperatorViewComponent } from './custom-operator-view.component';

@NgModule({
  declarations: [
    CustomOperatorViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([routeCustomOperatorView]),
    NavigatorModule
    ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomOperatorViewModule { }