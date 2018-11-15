import { Injectable } from '@angular/core';
import { Address } from "../interfaces/address";
import { Http, Headers } from "@angular/http";
import { map } from "rxjs/operators";
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class AddressService {
  fireURL:string = "https://naturalgrown-53f79.firebaseio.com/addresses/"

  constructor(private http:Http) {}

 
}

