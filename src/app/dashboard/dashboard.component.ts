import { Output, Input, Component, OnInit, EventEmitter, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthGuardService } from '../guards/authguard.service';
import { YouTubeService } from '../apiservices/youtube.service';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterContentInit {

  data:string[]=[];
  pagetoken:string = "";
  lastquery:string = "";
  constructor(public youTubePlayer: YouTubeService, public router: ActivatedRoute, public authguard: AuthGuardService) {

    this.authguard.loginInfo.subscribe((data) => {
      console.log(data);
    })
}

  ngOnInit() {
    this.lastquery = "";
    this.youTubePlayer.search("").subscribe((data)=>{  
      if(data.nextPageToken){
        this.pagetoken = data.nextPageToken
      }
      for(var i=0;i<data.items.length;i++){
      
        this.data.push(data);
      }
      
    })
  }

  search(query:any){
    // console.log(query.value);
    this.lastquery= query.value; 
    this.youTubePlayer.search(query.value).subscribe((data)=>{

      if(data.nextPageToken){
        this.pagetoken = data.nextPageToken
      }
      this.data = [];

        for(var i=0;i<data.items.length;i++){
          this.data.push(data);
        }
    })
  }

  searchnext(){
    this.youTubePlayer.searchNext(this.pagetoken,this.lastquery).subscribe((data)=>{
      this.data = [];
      for(var i=0;i<data.items.length;i++){
        this.data.push(data);
      }
    });
  }


  ngAfterContentInit() {
    let doc = window.document;
    let playerApi = doc.createElement('script');
    playerApi.type = 'text/javascript';
    playerApi.src = 'http://www.youtube.com/iframe_api';
    doc.body.appendChild(playerApi);


    this.youTubePlayer.createPlayer();    
  }

  playvideobyId(id:string){
      this.youTubePlayer.playVideobyId(id);
  }

  playvideo(){
    this.youTubePlayer.playpausedvideo();
  }
  pausevideo(){
    this.youTubePlayer.pauseplayingvide();
  }

  stopvideo(){
    this.youTubePlayer.stopVideo();
  }




}


