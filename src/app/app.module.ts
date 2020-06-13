import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { VideocenterComponent } from "./videocenter/videocenter.component";
import { VideolistComponent } from "./videolist/videolist.component";
import { VideodetailsComponent } from "./videodetails/videodetails.component";
import { HttpModule } from "@angular/http";
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideocenterComponent,
    VideolistComponent,
    VideodetailsComponent,
    SafePipe
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
