import { Injectable } from '@angular/core';
import {  Subject } from 'rxjs';
import { CUsuario } from './CUsuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColaService {

constructor() { }

//Arreglo de Usuario-Cola
private clientes$ = new Subject<CUsuario[]>();
private clientes: CUsuario []= [];

agregarCliente(cliente: CUsuario) {
  this.clientes.push(cliente);
  this.clientes$.next(this.clientes);
}

getClientes$():Observable<CUsuario[]> {
  return this.clientes$.asObservable();
}

limpiarCola(){
return this.clientes.length=0;

}

}
