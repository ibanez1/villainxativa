import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouting } from './app.route';
import { AppComponent } from './app.component';
import { HomeViewModule } from './views/home-view-component/home-view.module';
import { WhyRxjsViewModule } from './views/why-rxjs-view-component/why-rxjs-view.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeViewModule,
    WhyRxjsViewModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
