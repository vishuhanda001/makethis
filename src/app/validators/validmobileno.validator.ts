import {FormControl,Validators} from '@angular/forms';


export function Validmobileno(control:FormControl){

    // let  val:string = control.value;

    if(control.value.toString().length>12 || control.value.toString().length<12){
      return {'mobilenoinvalid':true}
    }
    return null;
  

}