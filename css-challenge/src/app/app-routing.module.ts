import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Day01CssComponent } from './../100-days-Css/day-01-css/day-01-css.component';
import { Day02CssComponent } from "./../100-days-Css/day-02-css/day-02-css.component";
import { Day03CssComponent } from "./../100-days-Css/day-03-css/day-03-css.component";
import { Day04CssComponent } from "./../100-days-Css/day-04-css/day-04-css.component";
import { Day05CssComponent } from "./../100-days-Css/day-05-css/day-05-css.component";
import { Day06CssComponent } from "./../100-days-Css/day-06-css/day-06-css.component";
import { Day07CssComponent } from "./../100-days-Css/day-07-css/day-07-css.component";
import { Day08CssComponent } from "./../100-days-Css/day-08-css/day-08-css.component";
import { Day09CssComponent } from "./../100-days-Css/day-09-css/day-09-css.component";
import { Day10CssComponent } from "./../100-days-Css/day-10-css/day-10-css.component";
import { Day11CssComponent } from "./../100-days-Css/day-11-css/day-11-css.component";
import { Day12CssComponent } from "./../100-days-Css/day-12-css/day-12-css.component";
import { Day13CssComponent } from "./../100-days-Css/day-13-css/day-13-css.component";

const routes: Routes = [
  { path: '', redirectTo: 'day-1', pathMatch: 'full' },
  { path: 'day-1', component: Day01CssComponent },
  { path: 'day-2', component: Day02CssComponent },
  { path: 'day-3', component: Day03CssComponent },
  { path: 'day-4', component: Day04CssComponent },
  { path: 'day-5', component: Day05CssComponent },
  { path: 'day-6', component: Day06CssComponent },
  { path: 'day-7', component: Day07CssComponent },
  { path: 'day-8', component: Day08CssComponent },
  { path: 'day-9', component: Day09CssComponent },
  { path: 'day-10', component: Day10CssComponent },
  { path: 'day-11', component: Day11CssComponent },
  { path: 'day-12', component: Day12CssComponent },
  { path: 'day-13', component: Day13CssComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
