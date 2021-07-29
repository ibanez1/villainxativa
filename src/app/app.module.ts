import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouting } from './app.route';
import { AppComponent } from './app.component';
import { HomeViewModule } from './views/home-view-component/home-view.module';
import { TheLandViewModule } from './views/the-land-view-component/the-land-view.module';
import { TheVillaViewModule } from './views/the-villa-view-component/the-villa-view.module';
import { PhotosAndVideosViewModule } from './views/photos-and-videos-view-component/photos-and-videos-view.module';
import { SomeDataViewModule } from './views/some-data-view-component/some-data-view.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeViewModule,
    TheLandViewModule,
    TheVillaViewModule,
    PhotosAndVideosViewModule,
    SomeDataViewModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
