import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { NavigatorModule } from 'src/app/components/navigator-component/navigator.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routeSomeDataView } from './some-data-view.router';
import { SomeDataViewComponent } from './some-data-view.component';
import { SectionContentModule } from 'src/app/section-content/section-content.module';
import { FooterModule } from 'src/app/footer/footer.module';

@NgModule({
  declarations: [
    SomeDataViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([routeSomeDataView]),
    NavigatorModule,
    SectionContentModule,
    FooterModule
    ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SomeDataViewModule { }