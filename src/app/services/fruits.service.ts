import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {

  private Fruits:Fruit[] = [
    {
      name: "Naranjas",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: "assets/oranges2.jpg"
    },
    {
      name: "Plátanos",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: "assets/bananas2.jpg"
    },
    {
      name: "Manzanas",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: "assets/apples.jpg"
    },
    {
      name: "Brócoli",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: "assets/broccoli2.jpg"
    },
    {
      name: "Aguacates",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: "assets/avocado.jpg"
    },
    {
      name: "Tomates",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: "assets/tomato.jpg"
    },
    {
      name: "Zanahorias",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: "assets/carrot.jpg"
    },
    {
      name: "Fresas",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: "assets/berries.jpg"
    }
  ];

  constructor() { 
    console.log("Ready for be used!!!");
  }

  getFruits():Fruit[] {
    return this.Fruits;
  }
}

export interface Fruit {
  name: string;
  desc: string;
  img: string;
}
