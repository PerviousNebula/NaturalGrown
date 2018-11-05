import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { Orchard } from "../interfaces/orchard.interface";
import { map } from "rxjs/operators";
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class OrchardsService {
  fireURL:string = "https://naturalgrown-53f79.firebaseio.com/orchard.json";
  fireURL2:string = "https://naturalgrown-53f79.firebaseio.com/orchard/";

  constructor(private http:Http) { }

  newOrchard(orchard:Orchard) {
    let body = JSON.stringify(orchard);
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post(this.fireURL,body,{headers}).pipe(map(res=>{
      console.log(res.json());
      return res.json();
    }));
  }

  updateOrchard(orchard:Orchard, key$:string ) {
    let body = JSON.stringify(orchard);
    let headers = new Headers({
      'Content-Type':'application/json'
    });

    let url = `${this.fireURL2}/${key$}.json`;
  
    return this.http.put(url,body,{headers}).pipe(map(res=>{
      console.log(res.json());
      return res.json();
    }));
  }

  getOrchard(key$:string) {
    let url = `${this.fireURL2}/${key$}.json`;
    return this.http.get(url).pipe(map(res=>{
      return res.json();   
    }));
  }

  getOrchards() {
    return this.http.get(this.fireURL).pipe(map(res=>{
      return res.json();   
    }));
  }

  deleteOrchard(key$:string) {
    let url = `${this.fireURL2}/${key$}.json`;
    return this.http.delete(url).pipe(map(res => res.json()));
  }
}
