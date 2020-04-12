import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { NavigatorModule } from 'src/app/components/navigator-component/navigator.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routeCustomOperatorView } from './custom-operator-view.router';
import { CustomOperatorViewComponent } from './custom-operator-view.component';
import { SectionContentModule } from 'src/app/section-content/section-content.module';
import { FooterModule } from 'src/app/footer/footer.module';

@NgModule({
  declarations: [
    CustomOperatorViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([routeCustomOperatorView]),
    NavigatorModule,
    SectionContentModule,
    FooterModule
    ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomOperatorViewModule { }