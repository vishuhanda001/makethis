import {Component, Injectable} from '@angular/core';
import { FirebaseAuthService } from '../apiservices/firebaseauth.service';
import { Router,CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import {demoaccounts} from '../demo-acc/demoaccounts';
import { EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthGuardService implements CanActivate{

    constructor(public router:Router,public authguard:FirebaseAuthService){}

    loggedIn:boolean = false;
    loginInfo = new BehaviorSubject<any>({email:"",name:"",loginstatus:this.loggedIn});
    currentLoginInfo = this.loginInfo.asObservable();

    login(email:any,password:any):any{
        for(var i=0;i<demoaccounts.length;i++){
            if(email == demoaccounts[i].email && password == demoaccounts[i].password){
                this.loggedIn = true;
                this.loginInfo.next({email:demoaccounts[i].email,name:demoaccounts[i].name,loginstatus:this.loggedIn});
                return {email:demoaccounts[i].email,name:demoaccounts[i].name,loginstatus:this.loggedIn};
            }
        }
        this.loggedIn = false;
        return {email:"",name:"",loginstatus:this.loggedIn};
    }

    logout(){
        this.loggedIn = false;
        this.loginInfo.next({email:"",name:"",loginstatus:this.loggedIn});
        this.router.navigate(["/"]);
    }



    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{

        if(this.loggedIn == true){
            return true;

        }
        else{
            this.router.navigate(["/"]);
            return false;

        }
    }


}