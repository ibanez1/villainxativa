import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { NavigatorModule } from 'src/app/components/navigator-component/navigator.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routePhotosAndVideosView } from './photos-and-videos-view.router';
import { PhotosAndVideosViewComponent } from './photos-and-videos-view.component';
import { FooterModule } from 'src/app/footer/footer.module';

@NgModule({
  declarations: [
    PhotosAndVideosViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([routePhotosAndVideosView]),
    NavigatorModule,
    FooterModule
    ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PhotosAndVideosViewModule { }