import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SharedService } from "../services/shared.service";

@Component({
  selector: "app-withdrawal",
  templateUrl: "./withdrawal.component.html",
  styleUrls: ["./withdrawal.component.scss"]
})
export class WithdrawalComponent implements OnInit {
  enteredAmount:string;
  showSuccessScreen:boolean;
  constructor(private sharedService: SharedService, private router: Router) {}

  ngOnInit() {}

  /**
   * @methodName validateAmount
   * @param none
   * @returns none
   * @desc Used to validate the amount and show the success screen
   */
  validateAmount():void{
    if(this.enteredAmount){
        this.showSuccessScreen = true;
        setTimeout(()=>{
          this.sharedService.atmPIN = null;
          this.router.navigateByUrl('home');
          this.showSuccessScreen=false;
        },5000)
    }
  }

  /**
   * @methodName moveToLogin
   * @param none
   * @returns none
   * @desc Used to move to login screen
   */
  moveToLogin():void {
    this.sharedService.atmPIN = null;
    this.router.navigateByUrl('home');
  }
}
