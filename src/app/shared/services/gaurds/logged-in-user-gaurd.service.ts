import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoggedInUserGaurdService implements CanActivate {

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (state.url === '/home') {
      if (confirm("Welcome to ERP School. Do you want to proceed?")) {
        return true;
      }
      return false;
    }
    return true;
  }
}
