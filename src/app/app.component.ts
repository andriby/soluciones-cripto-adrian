import {Component, HostListener} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { LoginService } from './services/login/login.service';


/** @title Fixed sidenav */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class appComponent {
  constructor(private loginService: LoginService) { }

  usuarioLogueado(): boolean {
    return this.loginService.estaAutenticado();
  }
  
}
