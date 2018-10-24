import { Component, OnInit } from '@angular/core';
import { FruitsService, Fruit } from "../../services/fruits.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fruits:Fruit[] = [];

  constructor(private _fruitService:FruitsService) {
    
  }

  ngOnInit() {
    this.fruits = this._fruitService.getFruits();
    console.log(this.fruits);
  }
}
