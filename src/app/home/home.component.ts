import { Component, OnInit, EventEmitter } from "@angular/core";
import { VideoService } from "../video.service";
import { Video } from "../video";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  videos: Array<Video>; // this means array of type video
  selectedVideo: Video;
  public SelectVideo = new EventEmitter();
  constructor(private _videoService: VideoService) {}

  ngOnInit() {
    this._videoService
      .getVideos()
      .subscribe(resVideoData => (this.videos = resVideoData));
  }

  onSelect(vid: Video) {
    this.SelectVideo.emit(vid);
  }
}
