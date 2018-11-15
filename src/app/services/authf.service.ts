import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthfService {
  public user:any = {};

  constructor(public afAuth: AngularFireAuth, private router:Router) {
    this.afAuth.authState.subscribe(user => {
      console.log("User state: ", user);
      if(!user)
        return;
      this.user.name = user.displayName;
      this.user.email = user.email;
      this.user.uid = user.uid;
      this.user.photo = user.photoURL;
      this.user.phone = user.phoneNumber;
    })
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.user = {};
    this.router.navigate(['/home']);
    this.afAuth.auth.signOut();
  }
}
