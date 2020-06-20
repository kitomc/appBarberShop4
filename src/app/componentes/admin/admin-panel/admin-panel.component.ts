import { Component, OnInit } from '@angular/core';

import {  Observable } from 'rxjs';
import { ColaService } from 'src/app/cola.service';






@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  active;
  cantidad$:Observable<any[]>;
  cantidad:any[]=[];
  constructor(private colaServicio :ColaService) {


  }
  ngOnInit(): void {
 
  this.cantidad$ = this.colaServicio.CantidadEnCola$();
  this.cantidad$.subscribe( cant=> this.cantidad=cant)



   }

  
  
 obtenerCantidad(){
  
  


   return this.cantidad['turno'];
   console.dir(this.cantidad.values)
 }


}
