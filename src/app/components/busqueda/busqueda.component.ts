import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  lat:number = 32.5190937;
  lng:number = -116.9440198;

  constructor() { }

  ngOnInit() {
  }

}
