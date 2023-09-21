import {Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';

/** @title Fixed sidenav */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],

})
export class appComponent {
  options = this._formBuilder.group({
    bottom: 0,
    fixed: true,
    top: 0,
  });

  isSidenavOpen: boolean = false;

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  constructor(private _formBuilder: FormBuilder) {}

}
