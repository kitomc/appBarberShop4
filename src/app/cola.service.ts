import { Injectable } from '@angular/core';
import {  Subject } from 'rxjs';
import { CUsuario } from './CUsuario';
import { Observable } from 'rxjs';
import { CCorte } from './CCorte';
import { HttpClient } from '@angular/common/http';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ColaService {

constructor(private http: HttpClient) { }


//variables 
 url='http://localhost/barbershop_git/appBarberShop4/PHP/' //ubicacion de archivos PHP

//Arreglo de Usuario-Cola
clientes$ = new Subject<CUsuario[]>();
clientes: CUsuario []= [];
private cortes$= new Subject<CCorte[]>();
private cortes : CCorte []=[];
private idCorte;
private telefono;
 mostrar:boolean;

//agregar
agregarCliente(cliente: CUsuario) {
  this.clientes.push(cliente);
  this.clientes$.next(this.clientes);
  //this.refrescarColaCliente();
}


//listar 
getClientes$():Observable<any> {
  return this.http.get(`${this.url}DetalleClientesEnCola.php`);
}
getCortes$():Observable<any> {
  return this.http.get(`${this.url}ListaCortes.php`);
}
getUltimoTurno$():Observable<any> {
  return this.http.get(`${this.url}NumeroUltimoEnCola.php`);
}

CantidadEnCola$():Observable<any> {
  return  (this.http.get(`${this.url}NumeroUltimoEnCola.php`));
}
CantidadEnCola(){//tutimo numero en la cola

  let as = (this.http.get(`${this.url}NumeroUltimoEnCola.php`)); 
  return console.dir(as);
  
}


AgregarUsuarioCola(usuario){

 return  this.http.post(`${this.url}RegistrarClienteEnCola.php`, JSON.stringify(usuario)); 
  // Verificar si el registro existe
 // this.VerificarNuevoUsuario(usuario);

  // if (this.VerificarNuevoUsuario(usuario)) {
  //   //usuario nuevo
   //usuario.turno++
   //console.dir(usuario);
  // this.getClientes$();
   
  // }

  // //usuario existente
  // else{

  //   return this.http.post(`${this.url}ActualizarCliente.php`, JSON.stringify(usuario));    
  //   console.log("Cliente Actualizado");

  // }

}


VerificarNuevoUsuario(usuario:CUsuario){

  this.getClientes$();
  this.clientes$.subscribe(cli=>this.clientes = cli);
  let result = this.clientes.find(element=> usuario.idSocialUser)
if (result) {
  return true;
  console.log("Este usuario no es nuevo")
  
}
else {
  return false;
  console.log("Nuevo Usuario para registrar")
 
}

}


//actualizacion de la cola
ActualizacionDeCola(){
this.getClientes$();

this.clientes$.forEach(element => {
  element.keys[4]= element.keys[4]-1;
  this.http.post(`${this.url}ActualizarTurnos.php`, JSON.stringify(element.keys[4]));
});
}


ActualizarCliente(cliente: CUsuario){ //Param turno, IdEstado,IdCorte

  return this.http.post(`${this.url}ActualizarCliente.php`, JSON.stringify(cliente));    
}

limpiarCola(){
return this.clientes.length=0;
}

CorteElegido(numero:any){
 this.idCorte= numero;
}

getCorteId():number{
  return this.idCorte;
}

ultimoNumeroEnCola(){

  return  this.http.get(`${this.url}NumeroUltimoEnCola.php`);
}

setTelefono(valor){

this.telefono=valor;
 
}

getTelefono(){

return this.telefono;
 
}

refrescarColaCliente() : void {
  this.getClientes$();
  this.clientes$.subscribe(clientes => this.clientes = clientes);
}



}
