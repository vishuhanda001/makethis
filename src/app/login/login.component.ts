import { Component, OnInit, } from '@angular/core';
import { Validators,FormBuilder,FormGroup,FormControl } from '@angular/forms';
import { AuthGuardService } from '../guards/authguard.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:FormGroup;

  constructor(public router:Router,public authservice:AuthGuardService) {
    
   }

  ngOnInit() {
    this.user = new FormGroup({
      email:new FormControl('',[Validators.required,Validators.minLength(2)]),
      password:new FormControl('',[Validators.required,Validators.minLength(4)])
  })



  }

  onSubmit(user:any){
    
    let credentials = this.authservice.login(user.controls.email.value,user.controls.password.value);
    if(credentials.loginstatus == true){
      
      this.router.navigate(["dashboard"]);
    }
    else{
        alert("wrong user id or password")
    }
    
  }


}
