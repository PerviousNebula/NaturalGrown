import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Orchard } from "../../interfaces/orchard.interface";
import { OrchardsService } from "../../services/orchards.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-protected-add-orchard',
  templateUrl: './protected-add-orchard.component.html',
  styles: []
})
export class ProtectedAddOrchardComponent {

  orchard:Orchard = {
    fruit:"",
    price:0,
    dateHarv:new Date(),
    orchardType:""
  }

  new:boolean = false;
  id:string;

  constructor(private _orchardService:OrchardsService,
              private router:Router,
              private route:ActivatedRoute) { 
    this.route.params.subscribe(parameters => {
      console.log("HOLA MUNDO",parameters);
      this.id = parameters['id'];
      if(this.id != "nuevo") {
        this._orchardService.getOrchard(this.id).subscribe(data => this.orchard = data);
      }
    });
  }

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

  addNew(forma:NgForm) {
    this.router.navigate(['/protected-add-orchard','nuevo']);
    forma.reset(); 
  }
}
