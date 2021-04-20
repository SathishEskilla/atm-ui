import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ATM_PIN_CONFIG } from "../common/global.constants";
import { SharedService } from "../common/services/shared.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  readonly ATM_PIN_COMP_CONFIG = ATM_PIN_CONFIG;

  constructor(private router: Router, private sharedService: SharedService) {}

  ngOnInit() {}

  /**
   * @methodName onOtpChange
   * @param pin: string
   * @returns none
   * @desc Used to naviagate to dashboard screen if pin length is 4
   */
  onOtpChange(pin: string): void {
    if (pin && pin.length === 4) {
      this.sharedService.atmPIN = pin;
      this.router.navigateByUrl("dashboard");
    }
  }
}
