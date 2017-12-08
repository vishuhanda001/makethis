import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
// import { setInterval } from 'timers';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
    skills = ["awesome,", "trendy,", "modern,", "clean,"]
    skill: string = "awesome,";
    skillindex = 0;
    setanimate:string;

  constructor(private eleref: ElementRef,private router:Router) {


  }


  ngOnInit() {
    var that = this;
    this.eleref.nativeElement.getElementsByClassName("skills")[0].style.animation = "type 3s steps(8), blink 0.5s infinite"
    setInterval(() => {
      that.shownextskill();
    }, 6000);
  }


  getme(){
    this.router.navigate(["/about"]);
  }
  shownextskill() {

    this.skillindex++;
    this.skill = this.skills[this.skillindex];

    if (this.skillindex == 0) {
      // this.eleref.nativeElement.getElementsByClassName("skills")[0].style.animation = "type 3s steps(8), blink 0.5s infinite"
    }
    else if (this.skillindex == 1) {
      // this.eleref.nativeElement.getElementsByClassName("skills")[0].style.animation = "type 3s steps(6), blink 0.5s infinite"
    }
    else if (this.skillindex == 2) {
      
      
      // this.eleref.nativeElement.getElementsByClassName("skills")[0].style.animation = "type 3s steps(6), blink 0.5s infinite"
    }
    else if (this.skillindex == 3) {
      
      
      // this.eleref.nativeElement.getElementsByClassName("skills")[0].animation = "type 3s steps(5), blink 0.5s infinite"
    }

    if (this.skillindex == 3) {
      this.skillindex = -1;
    }
  }

}
