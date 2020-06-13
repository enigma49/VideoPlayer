import { Component, OnInit, EventEmitter } from "@angular/core";
import { Video } from "../video";
@Component({
  selector: "video-list",
  templateUrl: "./videolist.component.html",
  styleUrls: ["./videolist.component.css"],
  inputs: ["videos"],
  outputs: ["SelectVideo"]
})
export class VideolistComponent implements OnInit {
  public SelectVideo = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onSelect(vid: Video) {
    this.SelectVideo.emit(vid);
  }
}
