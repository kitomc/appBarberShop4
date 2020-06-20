import { Component, OnInit } from '@angular/core';

import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

import { SocialUser } from "angularx-social-login";
import { CUsuario } from 'src/app/CUsuario';
 
import { Observable, empty } from 'rxjs';
import { ColaService } from 'src/app/cola.service';
import { CCorte } from 'src/app/CCorte';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService , private colaServicio:ColaService) { }

  public user: SocialUser;
  public loggedIn: boolean;
  public loggedOut: boolean;
  public enTurno:boolean;

  mostrarBtn:boolean;
//Contador
private contador:number;
 
//observable
clientes$: Observable<CUsuario[]>;
clientes:CUsuario [];
Cortes$: Observable<CCorte[]>;
Cortes :CCorte[]=[];
cantidad$:Observable<any[]>;
cantidad:any[]=[];

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      this.loggedOut=true;
      this.contador=1;
      this.enTurno= false;

      if (this.user) {
        this.loggedOut=false;
        this.loggedIn=true;
        
      }
    });

    this.cantidad$ = this.colaServicio.CantidadEnCola$();
    this.cantidad$.subscribe( cant=> this.cantidad=cant)
    this.mostrarBtn=false;

    this.actualizarArrayClientes();

  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.loggedIn=true;
    this.loggedOut=false;
  }
 
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.loggedIn=true;
    this.loggedOut=false;
  } 
 
  signOut(): void {
    this.authService.signOut();
    this.loggedOut=true;
    this.loggedIn=false;
    this.colaServicio.limpiarCola();
    

  }
  public AgregarCola(){

   let turnoUltimo = this.colaServicio.ultimoNumeroEnCola() ;
  
    this.enTurno=true;
   //this.loggedIn=false;
    //let usuario = new CUsuario;
    let  usuario ={
     id: null,
     idSocialUser: null,
     nombre: null,
     telefono: null,
     turno: null,
     idCorte: null,
     idEstado: null,
    imagen: null
    }

    usuario.idSocialUser=this.user.id;
    usuario.nombre=this.user.firstName;
    usuario.telefono=this.colaServicio.getTelefono();
    usuario.turno= this.cantidad['turno'];
    usuario.idCorte=this.colaServicio.getCorteId();
    usuario.idEstado=1;
    usuario.imagen=this.user.photoUrl;
    //this.colaServicio.agregarCliente(usuario);
    console.dir(usuario);
    this.colaServicio.AgregarUsuarioCola(usuario);
  
    
   // this.actualizarArrayClientes();
    
  }
  
  setTelefono(e){
    this.colaServicio.setTelefono(e);
   console.dir(e);
    
    }
  
  MostrarBtnAgregar(e){
    e=true;
   return this.mostrarBtn=e;

  }

  actualizarArrayClientes(){

    this.clientes$ = this.colaServicio.getClientes$();
    this.clientes$.subscribe(clientes => this.clientes = clientes);


  }
    
 
}
