import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private estaLogueado = false;

  login(): void {
    this.estaLogueado = !this.estaLogueado;
    this.router.navigate(['/panel']);
  }

  logout(): void {
    this.estaLogueado = !this.estaLogueado;
    alert("seguro")
    this.router.navigate(['/login']);
  }

  estaAutenticado(): boolean {
    return this.estaLogueado;
  }

  constructor(private router: Router) { }
}
