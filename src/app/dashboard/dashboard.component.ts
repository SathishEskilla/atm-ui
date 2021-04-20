import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DASHBOARD_MASTER_DATA } from "../common/global.constants";
import { SharedService } from "../common/services/shared.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit, OnDestroy {
  readonly DASHBOARD_INFO = DASHBOARD_MASTER_DATA;
  selectedOption: string;
  idleSecondsTimer: number;
  idleSecondsCounter: number;
  showModal: boolean;
  intervalCounter = 30;
  sessionCounter: number;
  constructor(private router: Router, private sharedService: SharedService) {}

  ngOnInit() {
    this.getUserIdleTime();
  }
  /**
   * @methodName loadDetailsPage
   * @param selectedOption: string
   * @returns none
   * @desc Used to show selected option component
   */
  loadDetailsPage(selectedOption: string): void {
    this.selectedOption = selectedOption;
  }

  /**
   * @methodName getUserIdleTime
   * @param none
   * @returns none
   * @desc Used to add document event listeners to get user idle time
   */
  getUserIdleTime():void {
    this.idleSecondsTimer = null;
    this.idleSecondsCounter = 0;
    // resetting idle time to '0' on any user interaction
    document.onclick = () => {
      this.idleSecondsCounter = 0;
    };
    document.onmousemove = () => {
      this.idleSecondsCounter = 0;
    };
    document.onkeypress = () => {
      this.idleSecondsCounter = 0;
    };
    this.idleSecondsTimer = window.setInterval(
      this.checkBrowserIdleTime.bind(this),
      1000
    );
  }

  /**
   * @methodName checkBrowserIdleTime
   * @param none
   * @returns none
   * @desc Used to check the user idle time after ever second
   */
  checkBrowserIdleTime(): void {
    this.idleSecondsTimer++;
    if (this.idleSecondsTimer === 30 && this.sharedService.atmPIN) {
      this.showModal = true;
      this.updateSessionCounter();
      clearInterval(this.idleSecondsTimer);
    }
  }

  /**
   * @methodName updateSessionCounter
   * @param none
   * @returns none
   * @desc Used to update session counter on modal
   */
  updateSessionCounter(): void {
    this.sessionCounter = window.setInterval(() => {
      this.intervalCounter--;
      if (this.intervalCounter <= 0) {
        clearInterval(this.sessionCounter);
        this.showModal = false;
        this.router.navigateByUrl("home");
      }
    }, 1000);
  }

  /**
   * @methodName closeModal
   * @param cancelTransaction: boolean
   * @returns none
   * @desc Used to close modal and clear app data
   */
  closeModal(cancelTransaction: boolean): void {
    this.showModal = false;
    this.idleSecondsTimer = 0;
    clearInterval(this.sessionCounter);
    if (cancelTransaction) {
      this.router.navigateByUrl("home");
    }
  }

  ngOnDestroy() {
    this.sharedService.atmPIN = null;
  }
}
