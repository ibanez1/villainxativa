import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "home",
    loadChildren: "./views/home-view-component/home-view.module#HomeViewModule",
  },

  {
    path: "photos-and-videos",
    loadChildren:
      "./views/photos-and-videos-view-component/photos-and-videos-view.module#PhotosAndVideosViewModule",
  },

  {
    path: "the-land",
    loadChildren:
      "./views/the-land-view-component/the-land-view.module#TheLandViewModule",
  },
  {
  path: "the-villa",
  loadChildren:
    "./views/the-villa-view-component/the-villa-view.module#TheVillaViewModule",
  },
  {
    path: "some-data",
    loadChildren:
      "./views/some-data-view-component/some-data-view.module#SomeDataViewModule",
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