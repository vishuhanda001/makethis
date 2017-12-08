import {Http,Response,Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/Rx';




@Injectable()
export class OtpService{


    baseurl:string = "http://api.msg91.com/api/sendotp.php"
    authkey = "186497ATvt9dC6pk5a22e31f";
    senderId = "vishuh";
    otp:string;
    
    constructor(public http:Http){}
    
    genRandomOtp(){
        
        var otp = Math.floor(1000 + Math.random() * 9000);
        // console.log(otp);
        return otp;
    }
    
    
    getOtp(mobileno:string){
        const headers = new Headers();

        // headers.append('Content-Type', 'text/html');
        // headers.append('Accept', 'application/json');
        // headers.append('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin,Origin, X-Requested-With, Content-Type, Accept, Authorization');
        // headers.append('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
        // headers.append('Access-Control-Allow-Origin', '*');
        // headers.append('Access-Control-Allow-Credentials', 'true');

     this.otp = this.genRandomOtp().toString();
    return this.http.get(this.baseurl+"?authkey="+this.authkey+"&mobile="+mobileno+"&message=Your otp is"+this.otp+"&sender="+this.senderId+"&otp="+this.otp,{headers:headers})
               .map((res:Response)=>{res.json()})
}


}