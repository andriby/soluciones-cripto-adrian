import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel-principal.component.html',
  styleUrls: ['./panel-principal.component.css']
})
export class PanelPrincipalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listo: boolean = true;

  comprarActive: boolean = false

  comprar(){
    this.comprarActive = !this.comprarActive
  }
}
