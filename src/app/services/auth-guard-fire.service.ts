import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate 
} from "@angular/router";
import { AuthfService } from "./authf.service";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardFireService implements CanActivate {

  constructor(private _authf:AuthfService, private router:Router) { }
    
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
      if(this._authf.user.uid) {
        console.log("OK!....");
        return true;
      } else {
        console.error("ACCESS DENIED!....");
        this.router.navigate(['/home']);
        return false;
      }

  }
}
