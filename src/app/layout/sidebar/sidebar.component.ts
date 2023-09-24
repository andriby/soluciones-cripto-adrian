import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  options = this._formBuilder.group({
    bottom: 0,
    fixed: true,
    top: 0,
  });

  
    estaActivo = false;
  anchoMinimo = 768;


  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.actualizarClaseActiva();
  }

  constructor(private _formBuilder: FormBuilder) {

  }
  private actualizarClaseActiva(): void {
    this.estaActivo = window.innerWidth < this.anchoMinimo;
  }
  
 
  isSidenavOpen: boolean = false;

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  ngOnInit(): void {
  }

}
