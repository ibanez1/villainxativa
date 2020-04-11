import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "home",
    loadChildren: "./views/home-view-component/home-view.module#HomeViewModule",
  },

  {
    path: "operators",
    loadChildren:
      "./views/operators-view-component/operators-view.module#OperatorsViewModule",
  },

  {
    path: "why-rxjs",
    loadChildren:
      "./views/why-rxjs-view-component/why-rxjs-view.module#WhyRxjsViewModule",
  },

  {
    path: "custom-operator",
    loadChildren:
      "./views/custom-operator-view-component/custom-operator-view.module#CustomOperatorViewModule",
  },

  { path: "**", redirectTo: "/home", pathMatch: "full" },
];

export const route = routes;

export const AppRouting = RouterModule.forRoot(routes, {
  useHash: false,
  scrollPositionRestoration: 'enabled',
  enableTracing: false,
  onSameUrlNavigation: 'reload',
  anchorScrolling: 'enabled',
})

export class AppRoutingModule { }