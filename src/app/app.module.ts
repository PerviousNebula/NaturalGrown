import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';


// Rutas
import {APP_ROUTING} from './app.routes';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ProtectedHomeComponent } from './components/protected-home/protected-home.component';
import { compileNgModuleFromRender2 } from '@angular/compiler/src/render3/r3_module_compiler';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ProtectedAddOrchardComponent } from './components/protected-add-orchard/protected-add-orchard.component';
import { AgmCoreModule } from '@agm/core';


// Servicios
import { AuthService } from "./services/auth.service";
import { AuthGuardService } from "./services/auth-guard.service";
import { FruitsService } from "./services/fruits.service";
import { OrchardsService } from "./services/orchards.service";
import { AuthfService } from "./services/authf.service";
import { AuthGuardFireService } from "./services/auth-guard-fire.service";

// Pipes
import { KeysPipe } from './pipes/keys.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BusquedaComponent,
    ProtectedHomeComponent,
    FooterComponent,
    AboutComponent,
    ProtectedAddOrchardComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAJwW7b17BUl4rrUwUN9OqR-GpEC-0P38o'
    }),
    AngularFirestoreModule, 
    AngularFireAuthModule, 
    APP_ROUTING
  ],
  providers: [
    AuthService,
    AuthfService,
    AuthGuardService,
    AuthGuardFireService,
    FruitsService,
    OrchardsService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
