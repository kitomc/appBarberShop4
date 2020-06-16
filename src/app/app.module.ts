import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { ColaComponent } from './componentes/cola/cola.component';
import { ColaUsuarioComponent } from './componentes/cola-usuario/cola-usuario.component';

import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
import { ColaService } from './cola.service';
import { FormsModule } from '@angular/forms';
 
let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("312465983373-t99k5hbddul1e0unho32i0gn1ma96gir.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("1169581540072333")
  }
]);
export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ColaComponent,
    ColaUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    FormsModule
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: provideConfig
  },
  ColaService

],
  bootstrap: [AppComponent]
})
export class AppModule { }
