import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { NavigatorComponent } from './navigator.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavigatorComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
exports: [NavigatorComponent],
schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavigatorModule { }