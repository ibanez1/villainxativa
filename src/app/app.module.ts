import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouting } from './app.route';
import { AppComponent } from './app.component';
import { HomeViewModule } from './views/home-view-component/home-view.module';
import { WhyRxjsViewModule } from './views/why-rxjs-view-component/why-rxjs-view.module';
import { WhatIsRxjsViewModule } from './views/what-is-rxjs-component/what-is-rxjs-view.module';
import { OperatorsViewModule } from './views/operators-view-component/operators-view.module';
import { CustomOperatorViewModule } from './views/custom-operator-view-component/custom-operator-view.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeViewModule,
    WhyRxjsViewModule,
    WhatIsRxjsViewModule,
    OperatorsViewModule,
    CustomOperatorViewModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
