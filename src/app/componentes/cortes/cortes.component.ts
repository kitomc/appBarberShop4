import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { ColaService } from 'src/app/cola.service';
import {  Observable } from 'rxjs';
import { CCorte } from 'src/app/CCorte';



@Component({
  selector: 'app-cortes',
  templateUrl: './cortes.component.html',
  styleUrls: ['./cortes.component.css']
})
export class CortesComponent implements OnInit {

  Cortes$: Observable<CCorte[]>;
  Cortes :CCorte[]=[];

  tele:string;
  @Output() telHijo=new EventEmitter();
  @Output() mostrar=new EventEmitter();

  ocultar:boolean;

 
 

  constructor(private colaServicio:ColaService) { }

  ngOnInit(): void {

    this.Cortes$ = this.colaServicio.getCortes$();
    this.Cortes$.subscribe(cortes => this.Cortes = cortes);
    this.ocultar=true;
  }

getCorte( ){
console.log();
}

trackByFn(index: number,item:any) : number{
return index;
}

imprimir(numero:any){
 this.colaServicio.CorteElegido(numero);
return console.log("corte numero " + this.colaServicio.getCorteId() + " elegido" );
}

establecerTelefono(){
  this.telHijo.emit (this.tele);
  this.mostrar.emit ();
  this.colaServicio.mostrar=true;
  this.ocultar=false;
}




}
