import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HomeViewComponent } from './home-view.component';
import { HeaderModule } from '../../components/header/header.module';
import { NavigatorModule } from 'src/app/components/navigator-component/navigator.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routeHomeView } from './home-view.router';

@NgModule({
  declarations: [
    HomeViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([routeHomeView]),
    HeaderModule,
    NavigatorModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeViewModule { }