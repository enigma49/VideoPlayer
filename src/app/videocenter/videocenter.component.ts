import { Component, OnInit } from "@angular/core";
import { Video } from "../video";
import { VideoService } from "../video.service";
@Component({
  selector: "app-videocenter",
  templateUrl: "./videocenter.component.html",
  styleUrls: ["./videocenter.component.css"],
  providers: [VideoService]
})
export class VideocenterComponent implements OnInit {
  videos: Array<Video>; // this means array of type video
  selectedVideo: Video;
  private hidenewVideo: boolean = true;
  constructor(private _videoService: VideoService) {}

  ngOnInit() {
    this._videoService
      .getVideos()
      .subscribe(resVideoData => (this.videos = resVideoData));
  }

  onSelect(video: any) {
    this.selectedVideo = video;
    this.hidenewVideo = true;
    console.log(this.selectedVideo);
  }

  newVideo() {
    this.hidenewVideo = false;
  }
}
