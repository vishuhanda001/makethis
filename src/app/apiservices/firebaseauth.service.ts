import { Injectable } from "@angular/core";
// import {AngularFire} from "angularfire2";
import { AngularFireAuth ,AUTH_PROVIDERS, AngularFireAuthProvider} from "angularfire2/auth";
import * as firebase from 'firebase';

@Injectable()
export class FirebaseAuthService{


constructor(public af:AngularFireAuth){}

loginWithGoogle(){
   return this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
}

loginWithFacebook(){
   return this.af.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    }
    


}