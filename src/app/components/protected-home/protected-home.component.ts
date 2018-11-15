import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { AuthfService } from "../../services/authf.service";
import { OrchardsService } from "../../services/orchards.service";
import { Address } from "../../interfaces/address";
import { AddressService } from "../../services/address.service";

@Component({
  selector: 'app-protected-home',
  templateUrl: './protected-home.component.html',
  styles: []
})
export class ProtectedHomeComponent implements OnInit {
  profile:any = {};
  orchards:any[] = [];
  loading:boolean = true;
  addresses:any[] = [];
  
  address:Address = {
    street:"",
    suburb:"",
    zip:0,
    city:"",
    state:"",
    country:""
  }

  constructor(private auth:AuthService,
              private _authf:AuthfService,
              private _orchardService:OrchardsService,
              private _addressService:AddressService) {
              this.profile = this._authf.user; 
    this._orchardService.getOrchards().subscribe(data => {
      console.log(data);
      //this.loading = false;
      setTimeout(() => {
        this.loading = false;
        this.orchards = data;
      }, 3000);
    });       
  }

  ngOnInit() {
    /*if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
      console.log(this.profile);
    } else {
        this.auth.getProfile((err, profile) => {
        this.profile = profile;
        console.log(this.profile);
      });
    }*/
  }
  
  deleteOrchard(key$:string) {
    this._orchardService.deleteOrchard(key$).subscribe(res => {
      if(res) {
        console.error(res);
      } else {
        //todo bien
        delete this.orchards[key$];
      }
    })
  }

}
