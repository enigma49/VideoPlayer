import { Component, OnInit } from "@angular/core";

@Component({
  selector: "video-details",
  templateUrl: "./videodetails.component.html",
  styleUrls: ["./videodetails.component.css"],
  inputs: ["video"]
})
export class VideodetailsComponent implements OnInit {
  private editTitle: boolean = false;
  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    this.editTitle = false;
  }

  onTitleClick() {
    this.editTitle = true;
  }
}
