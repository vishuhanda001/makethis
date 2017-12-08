import {FormControl,Validators} from '@angular/forms';


export function ValidEmail(control:FormControl){

    if(control.value=="vishuhanda0011@gmail.com"){
      return {'emailalreadyexist':true}
    }
    return null;
  

}