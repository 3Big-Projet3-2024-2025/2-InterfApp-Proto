import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['role'];

    if (this.userService.hasRole(expectedRole)) {
      return true;
    } else {
      console.warn('Access denied - User does not have required role');
      this.router.navigate(['/login']);
      return false;
    }
  }
}