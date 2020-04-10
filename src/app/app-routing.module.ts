import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeViewComponent } from './views/home-view-component/home-view.component';
import { OperatorsViewComponent } from './views/operators-view-component/operators-view.component';
import { WhyRxjsViewComponent } from './views/why-rxjs-view-component/why-rxjs-view.component';
import { CustomOperatorViewComponent } from './views/custom-operator-view-component/custom-operator-view.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeViewComponent },
  { path: 'operators', component: OperatorsViewComponent },
  { path: 'why-rxjs', component: WhyRxjsViewComponent },
  { path: 'custom-operator', component: CustomOperatorViewComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
