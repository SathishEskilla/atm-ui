import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgOtpInputModule } from "ng-otp-input";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";

import { AppRoutingModule } from "./app-routing.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './common/header/header.component';
import { WithdrawalComponent } from './common/withdrawal/withdrawal.component';
import { SuccessComponent } from './common/success/success.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, NgOtpInputModule],
  declarations: [AppComponent, HomeComponent, LoginComponent, DashboardComponent, HeaderComponent, WithdrawalComponent, SuccessComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
