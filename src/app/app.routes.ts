import {Route} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";

export const APP_ROUTES: Route[] = [
  {
    path: "",
    pathMatch: "full",
    component: HomeComponent,
  },
  {
    path: "home",
    redirectTo: ""
  },
  {
    path: "index",
    redirectTo: ""
  },
  {
    path: "projects",
    loadComponent: () => import("./pages/projects/projects.component").then(m => m.ProjectsComponent)
  },
  {
    path: "about",
    loadComponent: () => import("./pages/about/about.component").then(m => m.AboutComponent)
  }
]
