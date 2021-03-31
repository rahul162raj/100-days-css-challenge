import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Day01CssComponent } from './../100-days-Css/day-01-css/day-01-css.component';
import { Day02CssComponent } from "./../100-days-Css/day-02-css/day-02-css.component";
import { Day03CssComponent } from "./../100-days-Css/day-03-css/day-03-css.component";
import { Day04CssComponent } from "./../100-days-Css/day-04-css/day-04-css.component";
import { Day05CssComponent } from "./../100-days-Css/day-05-css/day-05-css.component";
import { Day06CssComponent } from "./../100-days-Css/day-06-css/day-06-css.component";
import { Day07CssComponent } from "./../100-days-Css/day-07-css/day-07-css.component";

const routes: Routes = [
  { path: '', redirectTo: 'day-1', pathMatch: 'full' },
  { path: 'day-1', component: Day01CssComponent },
  { path: 'day-2', component: Day02CssComponent },
  { path: 'day-3', component: Day03CssComponent },
  { path: 'day-4', component: Day04CssComponent },
  { path: 'day-5', component: Day05CssComponent },
  { path: 'day-6', component: Day06CssComponent },
  { path: 'day-7', component: Day07CssComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
