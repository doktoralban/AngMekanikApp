import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BarChartComponent } from "./bar-chart/bar-chart.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "login", component: LoginComponent},
  {path: "home", component: HomeComponent},
  {path: "bar-chart", component: BarChartComponent},
  { path: "**",   component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
