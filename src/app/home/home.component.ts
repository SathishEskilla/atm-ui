import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HOME_SCREEN_MASTER_DATA } from "../common/global.constants";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  readonly LEFT_SECTION_LIST = HOME_SCREEN_MASTER_DATA;
  greetingMessage: string;
  constructor(private router: Router) {}

  ngOnInit() {
    this.generateGreetingMessage();
  }

  /**
   * @methodName generateGreetingMessage
   * @param none
   * @returns none
   * @desc Used to generate the welcome greeting
   */
  generateGreetingMessage() {
    const hours = new Date().getHours();
    this.greetingMessage = hours < 12? "Good Morning" : hours <= 18 && hours >= 12
        ? "Good Afternoon": "Good Evening";
  }

  /**
   * @methodName moveToLogin
   * @param none
   * @returns none
   * @desc Used to naviagate to login screen
   */
  moveToLogin(): void {
    this.router.navigateByUrl("login");
  }
}
