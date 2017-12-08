import { ElementRef,Component, OnInit,ViewEncapsulation } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ValidEmail} from '../validators/emailexists.validator';
import {Validmobileno} from '../validators/validmobileno.validator';
import { OtpService } from '../apiservices/otp.service';
import { FirebaseAuthService } from '../apiservices/firebaseauth.service';
import {demoaccounts} from '../demo-acc/demoaccounts';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  user:FormGroup;
  createacc:boolean = true;
  invalidotp:boolean = false;
  
  constructor(public eleref:ElementRef,public router:Router,public otpService:OtpService,public firebaseauth:FirebaseAuthService) { 

    
  }

  ngOnInit() {
    this.user = new FormGroup({
      name:new FormControl('',[Validators.required,Validators.minLength(2)]),
      email:new FormControl('',[ValidEmail,Validators.required,Validators.minLength(2)]),
      password:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(12)]),
      mobno:new FormControl('91',[Validmobileno,Validators.required,Validmobileno.bind(this)]),
    })
  }
  
  
  signUpfacebook(fb:any){
    //check from db first that emaail should not exist    
    
    //to solve bug
    this.user.controls.name.setValue("demoval"); 
    this.user.controls.email.setValue("demoval");
    let that = this;
    this.firebaseauth.loginWithFacebook().then((credentials:any)=>{
      that.user.controls.name.setValue(credentials.user.displayName)
      that.user.controls.email.setValue(credentials.user.email) 
       that.eleref.nativeElement.getElementsByClassName("facebook")[0].disabled = true;
       that.eleref.nativeElement.getElementsByClassName("google")[0].disabled = true;
    }).then((data)=>{
      this.user.controls.name.disable();
      this.user.controls.email.disable();
    }).catch((error)=>{
        alert("enter correct credentials");
    })

    
  }

  signUpgoogle(){
//check from db first that emaail should not exist


    
    //to solve bug;
  this.user.controls.name.setValue("demoval"); 
  this.user.controls.email.setValue("demoval"); 
    this.firebaseauth.loginWithGoogle().then((credentials)=>{  
      this.user.controls.name.setValue(credentials.user.displayName) 
      this.user.controls.email.setValue(credentials.user.email);
      this.eleref.nativeElement.getElementsByClassName("google")[0].disabled = true;
      this.eleref.nativeElement.getElementsByClassName("facebook")[0].disabled = true;
    }).then((data)=>{
      this.user.controls.name.disable();
      this.user.controls.email.disable();
    }).catch((error)=>{
        alert("enter correct credentials");
    })



  }
  
  onSubmit(user:any){
    console.log(user);
    this.createacc = false;
    
    this.otpService.getOtp(this.user.controls.mobno.value)
                   .subscribe((data)=>{
                     console.log(data);

                     this.eleref.nativeElement.getElementsByClassName("facebook")[0].disabled = true;
                     this.eleref.nativeElement.getElementsByClassName("google")[0].disabled = true;

                   })





  }

  sendOtpAgain(){
    this.otpService.getOtp(this.user.controls.mobno.value)
    .subscribe((data)=>{
      console.log(data);
    })
  }


  continuecreateacc(otp:any){
      console.log(this.user);
      //validate otp by checking

      let otpsubmitted = this.otpService.otp;
      if(otp.value != otpsubmitted){
          this.invalidotp = true;
          return ;
      }

        demoaccounts.push({email:this.user.controls.email.value,password:this.user.controls.password.value,name:this.user.controls.name.value});



        // user successfully created
      this.router.navigate(["/login"]);    
      
  }

  //valiadtor added externally
  // validemail(control:FormControl){
  //   if(control.value=="vishuhanda001@gmail.com"){
  //     return {'emailalreadyexist':true}
  //   }
  //   return null;
  // }

  

}
