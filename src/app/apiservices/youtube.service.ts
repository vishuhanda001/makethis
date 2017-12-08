import { Injectable } from "@angular/core";
import { Http,Response } from "@angular/http";
import 'rxjs/Rx';

let _window: any = window;


@Injectable()
export class YouTubeService {

  done: any;
  yt_player: any;
  baseUrl: string = "https://www.googleapis.com/youtube/v3/search";
  youtube_api_key= "AIzaSyAsMiGn7Z09Yh1zYyJlmPf0ak8XwZ7lFJY";

  constructor(public  http:Http) { }


  createPlayer() {


    let interval = setInterval(() => {
      if ((typeof _window.YT !== 'undefined') && _window.YT && _window.YT.Player) {
        this.yt_player = new _window.YT.Player('player', {
          width: '300',
          height: '150',
          videoId: 'M7lc1UVf-VE',
          playerVars: {
            iv_load_policy: '3',
            rel: '0'
          },
          events: {
            onStateChange: (ev) => {
              this.onPlayerStateChange(ev);
            }
          }
        });
        clearInterval(interval);
      }
    }, 100);


  }

  search(query: string) {
    return this.http.get(this.baseUrl+"?q="+query+"&maxResults=15&type=video&part=snippet,id&key="+this.youtube_api_key+"&videoEmbeddable=true")
    .map((res:Response)=>{
      return res.json();
    }).retry(1)
  }

  searchNext(pageToken:string,lastquery:string){
    return this.http.get(this.baseUrl+"?q="+lastquery+"&pageToken=" + pageToken+"&maxResults=15&type=video&part=snippet,id&key="+this.youtube_api_key+"&videoEmbeddable=true")
    .map((res:Response)=>{
      return res.json();
    }).retry(1)
  }

  playVideobyId(id:string){
    this.yt_player.loadVideoById(id);
  }

  onPlayerReady(event) {
    event.target.playVideo();
  }

  onPlayerStateChange(event: any) {
    const state = event.data;


  }
  stopVideo() {
    this.yt_player.stopVideo();
  }

  playpausedvideo() {
    this.yt_player.playVideo();
  }
  pauseplayingvide() {
    this.yt_player.pauseVideo();
  }
  loadVideo(id: string) {
    this.yt_player.loadVideoById(id);
  }


}