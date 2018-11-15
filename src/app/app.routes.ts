import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { AboutComponent } from "./components/about/about.component";
import { ProtectedHomeComponent } from './components/protected-home/protected-home.component';
import { ProtectedAddOrchardComponent } from "./components/protected-add-orchard/protected-add-orchard.component";
import { AuthGuardFireService } from './services/auth-guard-fire.service';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'busqueda', component: BusquedaComponent },
    { path: 'about', component: AboutComponent },
    { 
        path: 'protected-home', 
        component: ProtectedHomeComponent,
        canActivate: [ AuthGuardFireService ]
    },
    { 
        path: 'protected-add-orchard/:id', 
        component: ProtectedAddOrchardComponent, 
        canActivate: [ AuthGuardFireService ]
    },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);