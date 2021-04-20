import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthGuardService } from "./common/services/auth-guard.service";

const ROUTES: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  {
    path: "dashboard",
    canActivate: [AuthGuardService],
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
