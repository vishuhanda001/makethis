import {ElementRef,Renderer,HostListener,Directive} from '@angular/core';




@Directive({
    selector:'[onnavscroll]'
})

export class Navbarscroll{
    constructor(private el:ElementRef,private renderer:Renderer){}

@HostListener('window:scroll') onwindowscroll(event){
    console.log("sfvbsfb"+window.pageYOffset);
    if(window.pageYOffset > 1){
        // this.renderer.setElementStyle(this.el.nativeElement,'background-color','#FFFFFF');
        this.renderer.setElementStyle(this.el.nativeElement,'position','fixed');
        this.renderer.setElementStyle(this.el.nativeElement,'margin-left','0px');
        this.renderer.setElementStyle(this.el.nativeElement,'width','1530px');
        this.renderer.setElementStyle(this.el.nativeElement,'top','0px');
        this.renderer.setElementStyle(this.el.nativeElement,'z-index','10');
    }
    else{
        this.renderer.setElementStyle(this.el.nativeElement,'position','static');
        this.renderer.setElementStyle(this.el.nativeElement,'height','60px');
        this.renderer.setElementStyle(this.el.nativeElement,'transition','height 2s');
    }
}

}