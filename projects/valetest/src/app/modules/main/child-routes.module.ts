import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';

const childRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'look-and-feel',
    loadChildren: () => import("LookAndFeel/LookAndFeelModule").then((m) => m.LookAndFeelModule)
  },
  { path: "**", redirectTo: "/main", pathMatch: "full" },
]


@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class ChildRoutesModule { }
