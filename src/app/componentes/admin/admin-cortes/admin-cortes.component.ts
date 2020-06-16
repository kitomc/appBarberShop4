import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-cortes',
  templateUrl: './admin-cortes.component.html',
  styleUrls: ['./admin-cortes.component.css']
})
export class AdminCortesComponent implements OnInit {

  public editar:boolean;
  constructor() { }

  ngOnInit(): void {
    this.editar=false;

  }

}
