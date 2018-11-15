import { Component } from '@angular/core';
import { AuthfService } from "../../../services/authf.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public _authf:AuthfService) {}

  ingresar() {
    this._authf.login();
  }

  cerrar_sesion() {
    this._authf.logout();
  }
}
