import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {BusquedaComponent} from './components/busqueda/busqueda.component';
import { AboutComponent } from "./components/about/about.component";
import { ProtectedHomeComponent } from './components/protected-home/protected-home.component';
import { AuthGuardService } from "./services/auth-guard.service";

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'busqueda', component: BusquedaComponent },
    { path: 'about', component: AboutComponent },
    { 
        path: 'protected-home', 
        component: ProtectedHomeComponent, 
        canActivate: [ AuthGuardService ]
    },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);