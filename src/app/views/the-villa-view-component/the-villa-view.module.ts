import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { NavigatorModule } from 'src/app/components/navigator-component/navigator.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routeTheVillaView } from './the-villa-view.router';
import { TheVillaViewComponent } from './the-villa-view.component';
import { SectionBoxesModule } from 'src/app/section-boxes/section-boxes.module';
import { FooterModule } from 'src/app/footer/footer.module';

@NgModule({
  declarations: [
    TheVillaViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([routeTheVillaView]),
    NavigatorModule,
    SectionBoxesModule,
    FooterModule
    ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TheVillaViewModule { }