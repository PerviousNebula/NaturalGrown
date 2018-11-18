import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Orchard } from "../../interfaces/orchard.interface";
import { OrchardsService } from "../../services/orchards.service";
import { Router, ActivatedRoute } from "@angular/router";
import { FileItem } from 'src/app/models/file-item';
import { LoadImagesService } from 'src/app/services/load-images.service';
import { AuthfService } from "../../services/authf.service";

@Component({
  selector: 'app-protected-add-orchard',
  templateUrl: './protected-add-orchard.component.html',
  styles: ['./protected-add-orchard.component.css']
})
export class ProtectedAddOrchardComponent {
  /*variable para detectar si se esta haciendo el drop*/
  isOnItem:boolean = false;


  /*Obj con el que vamos a trabajar para hacer las inserciones*/
  orchard:Orchard = {
    fruit:"",
    price:0,
    dateHarv:new Date(),
    lat:0,
    lon:0, 
    orchardType:"",
    uid:""
  }
  
  /*Variables extras*/
  new:boolean = false;
  id:string;
  docs:FileItem[] = [];

  constructor(private _orchardService:OrchardsService,
              private router:Router,
              private route:ActivatedRoute,
              public _li:LoadImagesService,
              public _authf:AuthfService) {
    /*Se manda a llamar primeramente al GPS*/
    if(!(this.orchard.lat && this.orchard.lon)) {      
      this.setPosition();
    }

    /*Indexamos el uid del usuario que esta registrando el huerto*/
    this.orchard.uid = _authf.user.uid;
    console.log(this.orchard.uid);

    this.route.params.subscribe(parameters => {
      console.log("HOLA MUNDO",parameters);
      this.id = parameters['id'];
      if(this.id != "nuevo") {
        this._orchardService.getOrchard(this.id).subscribe(data => this.orchard = data);
      }
    });
  }

  /*Funcion para guardar el obj en la base de datos de Firebase*/
  guardar(forma:NgForm) {
    if(this.id == "nuevo") {
      //insertando
      this._orchardService.newOrchard(this.orchard).subscribe(data=>{
        this.router.navigate(['/protected-add-orchard',data.name])
      },
        error=>console.error(error));
    } else {
      //updating
      this._orchardService.updateOrchard(this.orchard, this.id).subscribe(data=>{
        console.log(data);
      },
        error=>console.error(error));
    } 
  }

  /*Si se detecta que se va a hacer una nueva insercion se navega hacia la nueva ruta y se limpia el form*/
  addNew(forma:NgForm) {
    this.router.navigate(['/protected-add-orchard','nuevo']);
    forma.reset(); 
  }

  /*Pide permisos para acceder a la ubicacion del usuario e inicializa las coordenadas del obj huerto*/
  setPosition() {
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
          position => {
              this.orchard.lat = position.coords.latitude;
              this.orchard.lon = position.coords.longitude;
          });
    }
  }

  /*Cacha el evento del mapa y actualiza las coordenadas del huerto a agregar*/
  setMarker(event) {
    this.orchard.lat = event.coords.lat;
    this.orchard.lon = event.coords.lng;
  }

  loadImages() {
    this._li.uploadImages(this.docs);
  }

  clearFiles() {
    this.docs = [];
  }

  testOnItem(event) {
    
  }
}
