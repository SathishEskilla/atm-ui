import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { SharedService } from "./shared.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  constructor(private sharedService: SharedService, private router:Router) {}
  canActivate(): boolean {
    if(!this.sharedService.atmPIN){
        this.router.navigateByUrl('home')
        return false;
    }
    return true;
  }
}
