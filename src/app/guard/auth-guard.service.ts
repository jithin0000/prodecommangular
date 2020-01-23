import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {



  constructor(private router: Router, private authService: AuthService) { }

  canActivate(childRoute: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {

    return this.checkUserAuthenticated()
  }
  checkUserAuthenticated(): boolean {
    if (localStorage.getItem('_token')) {
      return true;
    }

    this.router.navigate(['/auth'])
    return false
  }
}
