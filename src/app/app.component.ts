import { Component,ViewEncapsulation,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from './guards/authguard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
notLoggedIn:boolean = false;
welcomeText:string = "";
  data: Array<any> = [{
    text: 'SignUp'
}, {
    text: 'Login'
}]

constructor(private authservice:AuthGuardService,private router:Router,private eleref:ElementRef){

this.authservice.loginInfo.subscribe((data)=>{
  console.log(data);
  this.welcomeText = data.name;
  this.notLoggedIn = !data.loginstatus;
})

}

onLogout(){
  this.authservice.logout();
}


enterUser(dataitem:any){
  if(dataitem.text=="Login"){
      this.router.navigate(["/login"]);
    }
    else if(dataitem.text=="SignUp"){
      this.router.navigate(["/signUp"]);

  }
}



}
