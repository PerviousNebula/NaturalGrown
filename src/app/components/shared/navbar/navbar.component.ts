import { Component } from '@angular/core';
import { AuthfService } from "../../../services/authf.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  profile:any = {};

  constructor(public _authf:AuthfService) {
    this.profile = this._authf.user; 
    console.log(this.profile);
  }

  ingresar() {
    this._authf.login();
  }

  cerrar_sesion() {
    this._authf.logout();
  }
}
