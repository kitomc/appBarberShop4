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
import { FormsModule, FormGroup } from '@angular/forms';
import { AdminPanelComponent } from './componentes/admin/admin-panel/admin-panel.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AdminCortesComponent } from './componentes/admin/admin-cortes/admin-cortes.component';
import { AdminColaComponent } from './componentes/admin/admin-cola/admin-cola.component';
import { AdminIngresosComponent } from './componentes/admin/admin-ingresos/admin-ingresos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule} from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import {ReactiveFormsModule} from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon'









 
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
    ColaUsuarioComponent,
    AdminPanelComponent,
    AdminCortesComponent,
    AdminColaComponent,
    AdminIngresosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatIconModule

    
  ],
    providers: [{
    provide: AuthServiceConfig,
    useFactory: provideConfig,
    
    
    
  },
  ColaService
  

],
  bootstrap: [AppComponent]
})
export class AppModule { }
