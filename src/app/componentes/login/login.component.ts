import { Component, OnInit } from '@angular/core';

import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

import { SocialUser } from "angularx-social-login";
import { CUsuario } from 'src/app/CUsuario';
 
import { Observable, empty } from 'rxjs';
import { ColaService } from 'src/app/cola.service';


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


//Contador
private contador:number;
 
//observable
clientes$: Observable<CUsuario[]>;

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
    this.enTurno=true;
   // this.loggedIn=false;
    let usuario = new CUsuario;
    usuario.nombre=this.user.firstName;
    usuario.imagen=this.user.photoUrl;
    usuario.turno=this.ContadorTurno();
    this.colaServicio.agregarCliente(usuario)
    console.log(usuario);
    return usuario;
    
  }
  ContadorTurno(){

    return this.contador++;
   
     }

 
}
