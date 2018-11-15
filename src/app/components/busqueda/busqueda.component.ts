import { Component, OnInit } from '@angular/core';
import { Marker } from "../../classes/marker.class";
import { OrchardsService } from "../../services/orchards.service";

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  fireURL2:string = "https://naturalgrown-53f79.firebaseio.com/orchard/";
  lat: 32.514946;
  lon: -117.038246;
  markers:Marker[] = [];

  constructor(private _orchardService:OrchardsService) {
    this.getOrchardsCoords();  
    //const newMarker = new Marker()
  }

  getOrchardsCoords() {
   this._orchardService.getOrchards().subscribe(res => {
    //console.log(res,"hola res");
    //console.log("longitud", res.length);
    this.markers = [];
    for(let i in res) {
      //console.log(res[i].lat, res[i].lon);
  
      console.log("hola",res[i].lon);
      
      this.markers.push(new Marker(1, res[i].fruit, res[i].orchardType, res[i].price , Number(res[i].lat),Number(res[i].lon)));
      // crear un obj tipo gmarker

      // asignar cada marker al obj map
    }
    console.log(this.markers);
   });
  }

  ngOnInit() {
  }

}
