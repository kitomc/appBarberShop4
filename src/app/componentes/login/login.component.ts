import { Component, OnInit } from '@angular/core';

import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

import { SocialUser } from "angularx-social-login";
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  public user: SocialUser;
  public loggedIn: boolean;
  public loggedOut: boolean;
  public show : boolean;
  public hide : boolean;

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      this.loggedOut=true;

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

  }

  
}
